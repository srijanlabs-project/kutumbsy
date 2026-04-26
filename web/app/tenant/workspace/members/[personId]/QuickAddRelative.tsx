"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import type { Person, Relationship } from "../../../../platform/admin/data-capture/types";
import { buildRelationshipTree, getGenerationLabel } from "../../helpers";
import styles from "../../workspace.module.css";

type QuickAddRelativeProps = {
  familyId: string;
  anchorPerson: Person;
  relationships: Relationship[];
  canEdit: boolean;
  onCreated: (personId: string) => Promise<void>;
};

type RelativeFormState = {
  fullName: string;
  gender: string;
  relationType: "spouse" | "child";
  dateOfBirth: string;
  notes: string;
};

const emptyForm: RelativeFormState = {
  fullName: "",
  gender: "",
  relationType: "spouse",
  dateOfBirth: "",
  notes: "",
};

const shiftGeneration = (generation: string, delta: number) => {
  const match = generation.match(/(\d+)/);
  if (!match) {
    return generation || "";
  }

  const next = Math.max(1, Number(match[1]) + delta);
  return generation.replace(match[1], String(next));
};

const buildGenerationForRelative = (anchorPerson: Person, relationType: RelativeFormState["relationType"]) => {
  const currentGeneration = getGenerationLabel(anchorPerson);
  switch (relationType) {
    case "child":
      return shiftGeneration(currentGeneration, 1);
    default:
      return currentGeneration;
  }
};

const buildRelationshipPayload = (anchorPersonId: string, newPersonId: string, relationType: RelativeFormState["relationType"]) => {
  switch (relationType) {
    case "child":
      return {
        person1Id: anchorPersonId,
        person2Id: newPersonId,
        relationshipType: "parent_of",
      };
    case "spouse":
      return {
        person1Id: anchorPersonId,
        person2Id: newPersonId,
        relationshipType: "spouse_of",
      };
  }
};

const relationCopy: Record<
  RelativeFormState["relationType"],
  { label: string; description: string; groupLabel: string }
> = {
  spouse: {
    label: "Spouse",
    description: "Link a current partner directly from this profile.",
    groupLabel: "Spouses",
  },
  child: {
    label: "Child",
    description: "Add a direct child linked to this member.",
    groupLabel: "Children",
  },
};

export function QuickAddRelative({ familyId, anchorPerson, relationships, canEdit, onCreated }: QuickAddRelativeProps) {
  const [form, setForm] = useState<RelativeFormState>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [createdPersonId, setCreatedPersonId] = useState<string | null>(null);

  const relationLabel = useMemo(() => {
    return relationCopy[form.relationType].label;
  }, [form.relationType]);

  const relationDescription = relationCopy[form.relationType].description;
  const relationshipGroups = useMemo(() => buildRelationshipTree(relationships, anchorPerson.id), [relationships, anchorPerson.id]);
  const existingRelated = useMemo(
    () => relationshipGroups.find((group) => group.label === relationCopy[form.relationType].groupLabel)?.items ?? [],
    [relationshipGroups, form.relationType],
  );
  const duplicateName = useMemo(() => {
    const normalizedName = form.fullName.trim().toLowerCase();
    if (!normalizedName) {
      return null;
    }

    return existingRelated.find((person) => person.fullName.trim().toLowerCase() === normalizedName) ?? null;
  }, [existingRelated, form.fullName]);

  if (!canEdit) {
    return null;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    setCreatedPersonId(null);

    try {
      const memberPayload = {
        fullName: form.fullName.trim(),
        gender: form.gender || undefined,
        dateOfBirth: form.dateOfBirth || undefined,
        notes: form.notes || undefined,
        metadata: {
          familyContext: {
            relationToAnchor: relationLabel,
            generationLevel: buildGenerationForRelative(anchorPerson, form.relationType),
          },
        },
      };

      const personResponse = await fetch(`/api/families/${familyId}/people`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(memberPayload),
      });

      const personPayload = (await personResponse.json()) as { data?: { id: string }; error?: string };
      if (!personResponse.ok || !personPayload.data?.id) {
        throw new Error(personPayload.error ?? "Unable to create the new family member.");
      }

      const relationshipResponse = await fetch(`/api/families/${familyId}/relationships`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildRelationshipPayload(anchorPerson.id, personPayload.data.id, form.relationType)),
      });

      const relationshipPayload = (await relationshipResponse.json()) as { error?: string };
      if (!relationshipResponse.ok) {
        throw new Error(relationshipPayload.error ?? "Unable to create the relationship.");
      }

      await onCreated(personPayload.data.id);
      setForm(emptyForm);
      setCreatedPersonId(personPayload.data.id);
      setMessage(`${relationLabel} added successfully and linked to ${anchorPerson.fullName}.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to add this relative right now.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2>Quick Add Relative</h2>
        <p>Create a connected family member directly from this profile with the relationship pre-linked.</p>
      </div>
      <div className={styles.quickAddChooser}>
        {(Object.keys(relationCopy) as RelativeFormState["relationType"][]).map((relationType) => (
          <button
            key={relationType}
            type="button"
            className={`${styles.quickAddChoice} ${form.relationType === relationType ? styles.quickAddChoiceActive : ""}`}
            onClick={() => {
              setForm((current) => ({ ...current, relationType }));
              setMessage("");
              setCreatedPersonId(null);
            }}
          >
            <strong>{relationCopy[relationType].label}</strong>
            <span>{relationCopy[relationType].description}</span>
          </button>
        ))}
      </div>
      <div className={styles.quickAddContext}>
        <div>
          <strong>
            Add {relationLabel.toLowerCase()} for {anchorPerson.fullName}
          </strong>
          <span>{relationDescription}</span>
        </div>
      </div>
      {existingRelated.length ? (
        <div className={styles.quickAddExisting}>
          <strong>Already linked {relationLabel.toLowerCase()}{existingRelated.length > 1 ? "s" : ""}</strong>
          <div className={styles.quickAddExistingList}>
            {existingRelated.map((person) => (
              <span key={person.id} className={styles.relationshipChip}>
                {person.fullName}
              </span>
            ))}
          </div>
        </div>
      ) : null}
      <form className={styles.formStack} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <label className={styles.fieldBlock}>
            <span>Relative type</span>
            <select
              value={form.relationType}
              onChange={(event) =>
                setForm((current) => ({ ...current, relationType: event.target.value as RelativeFormState["relationType"] }))
              }
            >
              <option value="spouse">Spouse</option>
              <option value="child">Child</option>
            </select>
          </label>
          <label className={styles.fieldBlock}>
            <span>Full name</span>
            <input
              value={form.fullName}
              onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
              placeholder={`New ${relationLabel.toLowerCase()} name`}
              required
            />
          </label>
          <label className={styles.fieldBlock}>
            <span>Gender</span>
            <select value={form.gender} onChange={(event) => setForm((current) => ({ ...current, gender: event.target.value }))}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className={styles.fieldBlock}>
            <span>Date of birth</span>
            <input
              type="date"
              value={form.dateOfBirth}
              onChange={(event) => setForm((current) => ({ ...current, dateOfBirth: event.target.value }))}
            />
          </label>
        </div>
        <label className={styles.fieldBlock}>
          <span>Notes</span>
          <textarea
            value={form.notes}
            onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
            placeholder="Optional context for this relative"
            rows={3}
          />
        </label>
        <button type="submit" className={styles.linkButton} disabled={submitting}>
          {submitting ? "Adding..." : `Add ${relationLabel}`}
        </button>
        {duplicateName ? (
          <p className={styles.inlineWarning}>
            A {relationLabel.toLowerCase()} named {duplicateName.fullName} is already linked here. Double-check before adding a duplicate record.
          </p>
        ) : null}
        {message ? <p className={styles.inlineMessage}>{message}</p> : null}
        {createdPersonId ? (
          <div className={styles.quickAddSuccessActions}>
            <Link className={styles.inlineLink} href={`/family-space/members/${createdPersonId}`}>
              Open new profile
            </Link>
            <button
              type="button"
              className={styles.inlineButton}
              onClick={() => {
                setMessage("");
                setCreatedPersonId(null);
              }}
            >
              Add another
            </button>
          </div>
        ) : null}
      </form>
    </section>
  );
}
