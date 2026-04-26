import Link from "next/link";
import type { Person, Relationship } from "../../../platform/admin/data-capture/types";
import {
  asText,
  buildImmediateFamilyRelations,
  buildRelationshipSummary,
  formatDate,
  getBiography,
  getProfileEvents,
  getProfileMemories,
  getPersonalData,
  getRelationLabel,
} from "../helpers";
import styles from "../workspace.module.css";

type PersonSpotlightProps = {
  person: Person | null;
  people: Person[];
  relationships: Relationship[];
  compact?: boolean;
};

export function PersonSpotlight({ person, people, relationships, compact = false }: PersonSpotlightProps) {
  if (!person) {
    return (
      <section className={compact ? styles.sideCard : styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Person Profile</h2>
          <p>Select a member to view their grouped profile.</p>
        </div>
      </section>
    );
  }

  const personal = getPersonalData(person);
  const related = buildRelationshipSummary(relationships, person.id);
  const immediate = buildImmediateFamilyRelations(people, relationships, person.id, person.gender);
  const memories = getProfileMemories(person);
  const events = getProfileEvents(person, relationships);

  const renderRelationRow = (label: string, items: Array<{ id: string; fullName: string; linkable: boolean }>) => {
    if (!items.length) {
      return null;
    }

    return (
      <div className={styles.personRelationRow}>
        <strong>{label}:</strong>
        <div className={styles.personRelationNames}>
          {items.map((item, index) => (
            <span key={item.id}>
              {item.linkable ? (
                <Link className={styles.inlineLink} href={`/family-space/members/${item.id}`}>
                  {item.fullName}
                </Link>
              ) : (
                item.fullName
              )}
              {index < items.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </div>
    );
  };

  if (compact) {
    return (
      <section className={styles.sideCard}>
        <div className={styles.cardTitleRow}>
          <h2 className={styles.sideCardTitle}>Selected Member</h2>
          <Link className={styles.sideLink} href={`/family-space/members/${person.id}`}>
            Open
          </Link>
        </div>
        <div className={styles.profileCompactHeader}>
          <div className={styles.profileCompactAvatar}>
            {person.photoUrl ? <img src={person.photoUrl} alt={person.fullName} className={styles.profileAvatarImage} /> : person.fullName.slice(0, 1).toUpperCase()}
          </div>
          <div>
            <strong>{person.fullName}</strong>
            <span>{getRelationLabel(person)}</span>
          </div>
        </div>
        <div className={styles.personRelationRows}>
          {renderRelationRow(immediate.spouseLabel, immediate.spouses)}
          {renderRelationRow("Father", immediate.fathers)}
          {renderRelationRow("Mother", immediate.mothers)}
          {renderRelationRow("Brother", immediate.brothers)}
          {renderRelationRow("Sister", immediate.sisters)}
          {renderRelationRow("Son", immediate.sons)}
          {renderRelationRow("Daughter", immediate.daughters)}
        </div>
        <div className={styles.profileCompactList}>
          <span>Date of birth: {formatDate(person.dateOfBirth)}</span>
          <span>Current city: {asText(personal.currentCity)}</span>
          <span>Address: {asText(personal.address)}</span>
          <span>Mobile: {asText(personal.mobileNumber)}</span>
          <span>Occupation: {person.occupation || "Not added"}</span>
          <span>Status: {person.isDeceased ? "Deceased" : "Living"}</span>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2>{person.fullName}</h2>
        <p>{getRelationLabel(person)}</p>
      </div>
      <div className={styles.storyBlock}>
        <h3>Relationship Context</h3>
        <div className={styles.relationshipList}>
          {related.length ? (
            related.map((relationship) => (
              <span key={relationship.id} className={styles.relationshipChip}>
                {relationship.personOne.fullName} {relationship.relationshipType.replaceAll("_", " ")} {relationship.personTwo.fullName}
              </span>
            ))
          ) : (
            <p>No relationships captured for this member yet.</p>
          )}
        </div>
      </div>
      <div className={styles.personRelationRows}>
        {renderRelationRow(immediate.spouseLabel, immediate.spouses)}
        {renderRelationRow("Father", immediate.fathers)}
        {renderRelationRow("Mother", immediate.mothers)}
        {renderRelationRow("Brother", immediate.brothers)}
        {renderRelationRow("Sister", immediate.sisters)}
        {renderRelationRow("Son", immediate.sons)}
        {renderRelationRow("Daughter", immediate.daughters)}
      </div>
      <div className={styles.profileActions}>
        <Link className={styles.inlineLink} href={`/family-space/members/${person.id}`}>
          Open full profile
        </Link>
      </div>
      <div className={styles.profileGrid}>
        <div className={styles.profileBlock}>
          <h3>Personal</h3>
          <span>Gender: {person.gender || "Not added"}</span>
          <span>Date of birth: {formatDate(person.dateOfBirth)}</span>
          <span>Status: {person.isDeceased ? "Deceased" : "Living"}</span>
          <span>Current city: {asText(personal.currentCity)}</span>
          <span>Address: {asText(personal.address)}</span>
          <span>Mobile: {asText(personal.mobileNumber)}</span>
          <span>Email: {asText(personal.email)}</span>
          <span>Marital status: {asText(personal.maritalStatus)}</span>
        </div>
        <div className={styles.profileBlock}>
          <h3>Family Identity</h3>
          <span>Village: {person.nativeVillage || "Not added"}</span>
          <span>Gotra: {person.gotra || "Not added"}</span>
          <span>Kuldevta: {person.kuldevta || "Not added"}</span>
          <span>Community: {person.community || "Not added"}</span>
        </div>
        <div className={styles.profileBlock}>
          <h3>Education & Work</h3>
          <span>Education: {person.education || "Not added"}</span>
          <span>Occupation: {person.occupation || "Not added"}</span>
          <span>Languages: {asText(personal.languages)}</span>
        </div>
      </div>
      <div className={styles.storyBlock}>
        <h3>Story</h3>
        <p>{getBiography(person)}</p>
      </div>
      <div className={styles.memoryEventGrid}>
        <div className={styles.storyBlock}>
          <h3>Memories</h3>
          <div className={styles.memoryList}>
            {memories.length ? (
              memories.map((memory) => (
                <article key={memory.id} className={styles.memoryCard}>
                  <span className={styles.memoryMeta}>{memory.label}</span>
                  <strong>{memory.title}</strong>
                  <p>{memory.detail}</p>
                </article>
              ))
            ) : (
              <p>No memories have been added for this member yet.</p>
            )}
          </div>
        </div>
        <div className={styles.storyBlock}>
          <h3>Events</h3>
          <div className={styles.eventList}>
            {events.length ? (
              events.map((event) => (
                <article key={event.id} className={styles.eventItem}>
                  <span className={styles.eventWhen}>{event.when}</span>
                  <strong>{event.title}</strong>
                  <p>{event.detail}</p>
                </article>
              ))
            ) : (
              <p>No events have been recorded for this member yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
