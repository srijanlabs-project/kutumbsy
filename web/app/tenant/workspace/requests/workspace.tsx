"use client";

import { useEffect, useMemo, useState } from "react";
import { LoadingState } from "../../../../components/LoadingState";
import { FamilyWorkspaceShell } from "../sections/FamilyWorkspaceShell";
import { PersonSpotlight } from "../sections/PersonSpotlight";
import { WorkspaceEmptyState } from "../sections/WorkspaceEmptyState";
import { useTenantWorkspaceData } from "../useTenantWorkspaceData";
import type { JoinRequest } from "../../../platform/admin/data-capture/types";
import styles from "../workspace.module.css";

const REQUEST_DATE_FORMATTER = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

type ReviewState = {
  role: "admin" | "editor" | "contributor" | "viewer";
  personId: string;
  mappingMode: "same_person" | "relation";
  relationType: "spouse" | "child" | "parent";
  primaryContactSource: "requester" | "approved";
  mergeConfirmed: boolean;
};

export function FamilyRequestsWorkspace() {
  const {
    session,
    activeWorkspaceId,
    families,
    people,
    relationships,
    selectedPersonId,
    setSelectedPersonId,
    loading,
    message,
  } = useTenantWorkspaceData();

  const [joinRequests, setJoinRequests] = useState<JoinRequest[]>([]);
  const [requestsLoading, setRequestsLoading] = useState(false);
  const [requestsMessage, setRequestsMessage] = useState("");
  const [submittingRequestId, setSubmittingRequestId] = useState<string | null>(null);
  const [undoingMergeAuditLogId, setUndoingMergeAuditLogId] = useState<string | null>(null);
  const [reviewState, setReviewState] = useState<Record<string, ReviewState>>({});

  const formatRequestDate = (value: string): string => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return REQUEST_DATE_FORMATTER.format(date);
  };

  const selectedFamily = families.find((family) => family.id === activeWorkspaceId) ?? null;
  const selectedPerson = people.find((person) => person.id === selectedPersonId) ?? people[0] ?? null;
  const activeMembership = useMemo(
    () => session?.memberships.find((membership) => membership.familyId === activeWorkspaceId) ?? null,
    [session, activeWorkspaceId],
  );
  const isAdmin = activeMembership?.role === "admin";

  const loadJoinRequests = async () => {
    if (!selectedFamily || !isAdmin) {
      setJoinRequests([]);
      return;
    }

    setRequestsLoading(true);
    setRequestsMessage("");

    try {
      const response = await fetch(`/api/families/${selectedFamily.id}/join-requests`, { cache: "no-store" });
      const payload = (await response.json()) as { data?: JoinRequest[]; error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to load Family Requests.");
      }

      const rows = payload.data ?? [];
      setJoinRequests(rows);
      setReviewState((current) => {
        const next = { ...current };
        for (const request of rows) {
          const existing = next[request.id];
          next[request.id] = {
            role: existing?.role ?? request.requestedRole,
            personId: request.targetPerson?.id ?? existing?.personId ?? people[0]?.id ?? "",
            mappingMode: existing?.mappingMode ?? "relation",
            relationType: existing?.relationType ?? "child",
            primaryContactSource: existing?.primaryContactSource ?? "requester",
            mergeConfirmed: existing?.mergeConfirmed ?? false,
          };
        }
        return next;
      });
    } catch (error) {
      setRequestsMessage(error instanceof Error ? error.message : "Unable to load Family Requests.");
    } finally {
      setRequestsLoading(false);
    }
  };

  useEffect(() => {
    void loadJoinRequests();
  }, [selectedFamily?.id, isAdmin, people]);

  const reviewRequest = async (requestId: string, decision: "approved" | "rejected") => {
    if (!selectedFamily) {
      return;
    }

    setSubmittingRequestId(requestId);
    setRequestsMessage("");

    try {
      const state = reviewState[requestId];
      if (decision === "approved" && !state?.personId) {
        setRequestsMessage("Select a family member profile before approving this request.");
        return;
      }
      if (decision === "approved" && !state?.mappingMode) {
        setRequestsMessage("Choose mapping mode before approving this request.");
        return;
      }
      if (decision === "approved" && state?.mappingMode === "same_person" && !state.mergeConfirmed) {
        setRequestsMessage("Please confirm merge warning before approving.");
        return;
      }

      const response = await fetch(`/api/families/${selectedFamily.id}/join-requests/${requestId}/review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          decision,
          role: state?.role,
          personId: state?.personId || undefined,
          mappingMode: state?.mappingMode || undefined,
          relationType: state?.mappingMode === "relation" ? state?.relationType : undefined,
          primaryContactSource: state?.mappingMode === "same_person" ? state?.primaryContactSource : undefined,
        }),
      });

      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? `Unable to ${decision === "approved" ? "approve" : "reject"} this request.`);
      }

      setRequestsMessage(decision === "approved" ? "Request approved." : "Request rejected.");
      await loadJoinRequests();
    } catch (error) {
      setRequestsMessage(error instanceof Error ? error.message : "Unable to update this request.");
    } finally {
      setSubmittingRequestId(null);
    }
  };

  const undoMerge = async (mergeAuditLogId: string) => {
    if (!selectedFamily) {
      return;
    }

    setUndoingMergeAuditLogId(mergeAuditLogId);
    setRequestsMessage("");

    try {
      const response = await fetch(`/api/families/${selectedFamily.id}/person-merges/${mergeAuditLogId}/undo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to undo merge.");
      }

      setRequestsMessage("Merge has been undone successfully.");
      await loadJoinRequests();
    } catch (error) {
      setRequestsMessage(error instanceof Error ? error.message : "Unable to undo merge.");
    } finally {
      setUndoingMergeAuditLogId(null);
    }
  };

  if (loading) {
    return (
      <WorkspaceEmptyState
        title="Loading Family Requests"
        message="We are gathering your Family Space context and incoming requests."
        isLoading
      />
    );
  }

  if (!session || !selectedFamily) {
    return (
      <WorkspaceEmptyState
        title="No Family Space Selected"
        message={message || "Select a Family Space first to review join requests and collaboration activity."}
        primaryLabel="Open Family Space"
        primaryHref="/family-space"
      />
    );
  }

  return (
    <FamilyWorkspaceShell
      session={session}
      families={families}
      activeWorkspaceId={activeWorkspaceId}
      selectedFamily={selectedFamily}
      people={people}
      selectedPerson={selectedPerson}
      pageTitle="Family Requests"
      pageSubtitle="Review incoming join requests, decide roles, and grow this Family Space with the right boundaries."
      activeView="requests"
      canManageData={activeMembership?.role === "admin" || activeMembership?.role === "editor"}
      onSwitchFamily={(familyId) => {
        void fetch("/api/auth/active-workspace", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ familyId }),
        }).then(() => window.location.assign("/family-space/requests"));
      }}
      topMessage={requestsMessage || message || undefined}
      rightRail={<PersonSpotlight person={selectedPerson} people={people} relationships={relationships} compact />}
    >
      <div className={styles.feedStack}>
        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2>Incoming Requests</h2>
            <p>
              {isAdmin
                ? "Approve or reject access requests for this Family Space. You can assign a final role and optionally connect the user to an existing member record."
                : "Family Requests are reviewed by Family Space admins. You can still join other families from the public join flow."}
            </p>
          </div>

          {!isAdmin ? (
            <div className={styles.treeEmpty}>
              You currently have the <strong>{activeMembership?.role ?? "viewer"}</strong> role in this Family Space. Only admins can review incoming access requests.
            </div>
          ) : requestsLoading ? (
            <div className={styles.treeEmpty}>
              <LoadingState compact title="Loading Family Requests..." />
            </div>
          ) : joinRequests.length ? (
            <div className={styles.requestList}>
              {joinRequests.map((request) => {
                const state = reviewState[request.id] ?? {
                  role: request.requestedRole,
                  personId: "",
                  mappingMode: "relation",
                  relationType: "child",
                  primaryContactSource: "requester",
                  mergeConfirmed: false,
                };
                const mappedPerson = people.find((person) => person.id === state.personId);
                const mappedMetadata = mappedPerson && typeof mappedPerson.metadata === "object" ? (mappedPerson.metadata as Record<string, unknown>) : {};
                const mappedPersonal = mappedMetadata.personal && typeof mappedMetadata.personal === "object"
                  ? (mappedMetadata.personal as Record<string, unknown>)
                  : {};
                const mappedContactMobile = typeof mappedPersonal.mobileNumber === "string" ? mappedPersonal.mobileNumber : "";
                const requesterMobile = request.requestingUser.mobileNumber;
                const numbersDiffer = Boolean(mappedContactMobile) && mappedContactMobile !== requesterMobile;
                return (
                  <article key={request.id} className={styles.requestCard}>
                    <div className={styles.requestHeader}>
                      <div>
                        <strong>{request.requestingUser.fullName}</strong>
                        <span>{request.requestingUser.mobileNumber}</span>
                      </div>
                      <span className={`${styles.requestStatus} ${styles[`requestStatus${request.status[0].toUpperCase()}${request.status.slice(1)}`]}`}>
                        {request.status}
                      </span>
                    </div>
                    <p className={styles.requestMeta}>
                      Requested role: <strong>{request.requestedRole}</strong> - Created {formatRequestDate(request.createdAt)}
                    </p>
                    {request.message ? <p className={styles.requestMessage}>{request.message}</p> : null}

                    {request.status === "pending" ? (
                      <>
                        <div className={styles.requestControls}>
                          <label className={styles.field}>
                            <span>Final role</span>
                            <select
                              value={state.role}
                              onChange={(event) =>
                                setReviewState((current) => ({
                                  ...current,
                                  [request.id]: {
                                    ...state,
                                    role: event.target.value as ReviewState["role"],
                                  },
                                }))
                              }
                            >
                              <option value="viewer">Viewer</option>
                              <option value="contributor">Contributor</option>
                              <option value="editor">Editor</option>
                              <option value="admin">Admin</option>
                            </select>
                          </label>
                          <label className={styles.field}>
                            <span>Map to member profile</span>
                            <select
                              value={state.personId}
                              onChange={(event) =>
                                setReviewState((current) => ({
                                  ...current,
                                  [request.id]: {
                                    ...state,
                                    personId: event.target.value,
                                  },
                                }))
                              }
                            >
                              <option value="">Select member profile</option>
                              {people.map((person) => (
                                <option key={person.id} value={person.id}>
                                  {person.fullName}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label className={styles.field}>
                            <span>Mapping mode</span>
                            <select
                              value={state.mappingMode}
                              onChange={(event) =>
                                setReviewState((current) => ({
                                  ...current,
                                  [request.id]: {
                                    ...state,
                                    mappingMode: event.target.value as ReviewState["mappingMode"],
                                  },
                                }))
                              }
                            >
                              <option value="relation">Relation</option>
                              <option value="same_person">Same Person (Merge)</option>
                            </select>
                          </label>
                          {state.mappingMode === "relation" ? (
                            <label className={styles.field}>
                              <span>Relationship</span>
                              <select
                                value={state.relationType}
                                onChange={(event) =>
                                  setReviewState((current) => ({
                                    ...current,
                                    [request.id]: {
                                      ...state,
                                      relationType: event.target.value as ReviewState["relationType"],
                                    },
                                  }))
                                }
                              >
                                <option value="spouse">Spouse</option>
                                <option value="child">Child</option>
                                <option value="parent">Parent</option>
                              </select>
                            </label>
                          ) : null}
                          {state.mappingMode === "same_person" && numbersDiffer ? (
                            <label className={styles.field}>
                              <span>Primary contact number</span>
                              <select
                                value={state.primaryContactSource}
                                onChange={(event) =>
                                  setReviewState((current) => ({
                                    ...current,
                                    [request.id]: {
                                      ...state,
                                      primaryContactSource: event.target.value as ReviewState["primaryContactSource"],
                                    },
                                  }))
                                }
                              >
                                <option value="requester">Requester ({requesterMobile})</option>
                                <option value="approved">Approved profile ({mappedContactMobile})</option>
                              </select>
                            </label>
                          ) : null}
                        </div>
                        {state.mappingMode === "same_person" ? (
                          <label className={styles.field}>
                            <span>Merge warning</span>
                            <div>
                              <p className={styles.requestMessage}>
                                Duplicate warning: this will merge requester profile into selected profile. Merge history is saved and can be undone.
                              </p>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={state.mergeConfirmed}
                                  onChange={(event) =>
                                    setReviewState((current) => ({
                                      ...current,
                                      [request.id]: {
                                        ...state,
                                        mergeConfirmed: event.target.checked,
                                      },
                                    }))
                                  }
                                />{" "}
                                I understand and want to merge these profiles
                              </label>
                            </div>
                          </label>
                        ) : null}

                        <div className={styles.requestActions}>
                          <button
                            type="button"
                            className={styles.primaryButton}
                            disabled={submittingRequestId === request.id || !state.personId || (state.mappingMode === "same_person" && !state.mergeConfirmed)}
                            onClick={() => void reviewRequest(request.id, "approved")}
                          >
                            {submittingRequestId === request.id ? "Updating..." : "Approve"}
                          </button>
                          <button
                            type="button"
                            className={styles.secondaryButton}
                            disabled={submittingRequestId === request.id}
                            onClick={() => void reviewRequest(request.id, "rejected")}
                          >
                            Reject
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className={styles.reviewOutcome}>
                        <span>Reviewed {request.reviewedAt ? formatRequestDate(request.reviewedAt) : "recently"}</span>
                        {request.targetPerson ? <span>Linked member: {request.targetPerson.fullName}</span> : null}
                        {request.status === "approved" && request.mergeAuditLogId ? (
                          <button
                            type="button"
                            className={styles.secondaryButton}
                            disabled={undoingMergeAuditLogId === request.mergeAuditLogId}
                            onClick={() => void undoMerge(request.mergeAuditLogId as string)}
                          >
                            {undoingMergeAuditLogId === request.mergeAuditLogId ? "Undoing..." : "Undo Merge"}
                          </button>
                        ) : null}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <div className={styles.treeEmpty}>No incoming join requests yet for this Family Space.</div>
          )}
        </section>
      </div>
    </FamilyWorkspaceShell>
  );
}
