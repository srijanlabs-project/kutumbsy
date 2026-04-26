import Link from "next/link";
import type { Person } from "../../../platform/admin/data-capture/types";
import { formatDate, getRelationLabel } from "../helpers";
import styles from "../workspace.module.css";

type MemberDirectoryProps = {
  people: Person[];
  selectedPersonId: string;
  onSelectPerson: (personId: string) => void;
  canManageData?: boolean;
};

const getAgeLabel = (dateOfBirth: string | null) => {
  if (!dateOfBirth) {
    return "Age not added";
  }

  const birthDate = new Date(dateOfBirth);
  if (Number.isNaN(birthDate.getTime())) {
    return "Age not added";
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return `Age ${Math.max(age, 0)}`;
};

const getPrimaryTag = (person: Person, isSelected: boolean) => {
  if (isSelected) {
    return "Selected";
  }

  const relation = getRelationLabel(person).toLowerCase();
  if (relation.includes("self") || relation.includes("root")) {
    return "Head";
  }

  if (relation.includes("family member")) {
    return "Admin";
  }

  return getRelationLabel(person);
};

export function MemberDirectory({ people, selectedPersonId, onSelectPerson, canManageData = false }: MemberDirectoryProps) {
  return (
    <section className={`${styles.scard} ${styles.memberDirectoryCard}`}>
      <div className={`${styles.scardHeader} ${styles.memberDirectoryHeader}`}>
        <h2 className={styles.memberDirectoryTitle}>
          <span className={styles.memberDirectoryTitleIcon} aria-hidden="true">
            {"\u{1F46A}"}
          </span>
          Member Directory
        </h2>

        <div className={styles.memberDirectoryActions}>
          <p className={styles.memberDirectoryMeta}>{people.length} members · Browse and open a profile in one click</p>
          {canManageData ? (
            <Link href="/family-space/data-capture" className={styles.memberDirectoryAddButton}>
              + Add Member
            </Link>
          ) : null}
        </div>
      </div>

      <div className={styles.memberDirectoryGrid}>
        {people.map((person) => {
          const isSelected = selectedPersonId === person.id;
          const primaryTag = getPrimaryTag(person, isSelected);

          return (
            <div key={person.id} className={`${styles.memberDirectoryItem} ${isSelected ? styles.memberDirectoryItemActive : ""}`}>
              <div className={styles.memberAvatar}>{person.fullName.slice(0, 1).toUpperCase()}</div>
              <button type="button" className={styles.cardButton} onClick={() => onSelectPerson(person.id)}>
                <strong>{person.fullName}</strong>
                <span>{"\u{1F464}"} {getRelationLabel(person)}</span>
                <span>{"\u{1F382}"} {formatDate(person.dateOfBirth)} · {getAgeLabel(person.dateOfBirth)}</span>
              </button>
              <div className={styles.memberDirectoryTags}>
                <span className={styles.memberDirectoryTagPrimary}>{primaryTag}</span>
                <span className={styles.memberDirectoryTagNeutral}>{person.isDeceased ? "Deceased" : "Living"}</span>
              </div>
              <Link className={styles.memberDirectoryOpenLink} href={`/family-space/members/${person.id}`}>
                Open profile {"\u2192"}
              </Link>
            </div>
          );
        })}

        {canManageData ? (
          <Link href="/family-space/data-capture" className={styles.memberDirectoryAddCard}>
            <span className={styles.memberDirectoryAddCardIcon}>+</span>
            <strong>Add a family member</strong>
            <span>Grow the family tree</span>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
