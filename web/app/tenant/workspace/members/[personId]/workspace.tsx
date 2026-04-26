"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Person, Relationship } from "../../../../platform/admin/data-capture/types";
import {
  buildImmediateFamilyRelations,
  buildRelationshipSummary,
  formatDate,
  getPersonalData,
  getProfileEvents,
} from "../../helpers";
import { FamilyTree } from "../../sections/FamilyTree";
import { WorkspaceEmptyState } from "../../sections/WorkspaceEmptyState";
import { useTenantWorkspaceData } from "../../useTenantWorkspaceData";
import styles from "./workspace.module.css";

type MemberProfileWorkspaceProps = {
  personId: string;
};

type TabKey = "overview" | "family" | "tree" | "timeline";

type ConnectionItem = {
  id: string;
  person: Person;
  relation: string;
  badge: string;
  badgeType: "spouse" | "child" | "family";
};

const initials = (fullName: string) =>
  fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const getUpcomingBirthdays = (people: Person[]) => {
  const today = new Date();
  return people
    .filter((person) => person.dateOfBirth)
    .map((person) => {
      const birth = new Date(person.dateOfBirth as string);
      const next = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
      if (next < today) {
        next.setFullYear(today.getFullYear() + 1);
      }
      const days = Math.ceil((next.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return { person, days };
    })
    .sort((a, b) => a.days - b.days)
    .slice(0, 4);
};

const findPersonById = (people: Person[], personId: string) => people.find((person) => person.id === personId) ?? null;

const buildLineage = (selectedPerson: Person, people: Person[], relationships: Relationship[]) => {
  const chain: Person[] = [selectedPerson];
  let current = selectedPerson;
  const visited = new Set<string>([selectedPerson.id]);

  for (let depth = 0; depth < 3; depth += 1) {
    const parentRel = relationships.find(
      (relationship) => relationship.relationshipType === "parent_of" && relationship.personTwo.id === current.id,
    );
    if (!parentRel) {
      break;
    }
    const parent = findPersonById(people, parentRel.personOne.id);
    if (!parent || visited.has(parent.id)) {
      break;
    }
    chain.unshift(parent);
    visited.add(parent.id);
    current = parent;
  }

  return chain;
};

const birthdayLabel = (days: number) => {
  if (days <= 0) {
    return "Today";
  }
  if (days === 1) {
    return "Tomorrow";
  }
  return `${days} days`;
};

const lineageLabel = (depthFromSelected: number) => {
  if (depthFromSelected <= 0) {
    return "Selected";
  }
  if (depthFromSelected === 1) {
    return "Parent";
  }
  if (depthFromSelected === 2) {
    return "Grandparent";
  }
  return "Elder";
};

const relationshipCountFor = (relationships: Relationship[], personId: string) =>
  relationships.filter((relationship) => relationship.personOne.id === personId || relationship.personTwo.id === personId).length;

export function MemberProfileWorkspace({ personId }: MemberProfileWorkspaceProps) {
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
  } = useTenantWorkspaceData(personId);

  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const selectedFamily = families.find((family) => family.id === activeWorkspaceId) ?? null;
  const selectedPerson = people.find((person) => person.id === selectedPersonId) ?? null;
  const peopleById = useMemo(() => new Map(people.map((person) => [person.id, person])), [people]);

  const immediate = useMemo(
    () =>
      selectedPerson
        ? buildImmediateFamilyRelations(people, relationships, selectedPerson.id, selectedPerson.gender)
        : null,
    [people, relationships, selectedPerson],
  );

  const familyConnections = useMemo<ConnectionItem[]>(() => {
    if (!selectedPerson || !immediate) {
      return [];
    }

    const all = [
      ...immediate.spouses.map((item) => ({ id: item.id, relation: immediate.spouseLabel, badge: immediate.spouseLabel, badgeType: "spouse" as const })),
      ...immediate.fathers.map((item) => ({ id: item.id, relation: "Father", badge: "Parent", badgeType: "family" as const })),
      ...immediate.mothers.map((item) => ({ id: item.id, relation: "Mother", badge: "Parent", badgeType: "family" as const })),
      ...immediate.brothers.map((item) => ({ id: item.id, relation: "Brother", badge: "Sibling", badgeType: "family" as const })),
      ...immediate.sisters.map((item) => ({ id: item.id, relation: "Sister", badge: "Sibling", badgeType: "family" as const })),
      ...immediate.sons.map((item) => ({ id: item.id, relation: "Son", badge: "Child", badgeType: "child" as const })),
      ...immediate.daughters.map((item) => ({ id: item.id, relation: "Daughter", badge: "Child", badgeType: "child" as const })),
    ];

    const connections: ConnectionItem[] = [];
    for (const item of all) {
      const person = peopleById.get(item.id);
      if (!person) {
        continue;
      }
      connections.push({ ...item, person });
    }

    return connections.sort((a, b) => a.person.fullName.localeCompare(b.person.fullName));
  }, [selectedPerson, immediate, peopleById]);

  const related = useMemo(
    () => (selectedPerson ? buildRelationshipSummary(relationships, selectedPerson.id) : []),
    [relationships, selectedPerson],
  );
  const events = useMemo(
    () => (selectedPerson ? getProfileEvents(selectedPerson, relationships).slice(0, 10) : []),
    [selectedPerson, relationships],
  );
  const lineage = useMemo(
    () => (selectedPerson ? buildLineage(selectedPerson, people, relationships) : []),
    [selectedPerson, people, relationships],
  );
  const upcomingBirthdays = useMemo(() => getUpcomingBirthdays(people), [people]);
  const personal = selectedPerson ? getPersonalData(selectedPerson) : {};

  if (loading) {
    return (
      <WorkspaceEmptyState
        title="Loading member profile"
        message="We are gathering the family member record and their relationship context."
        isLoading
      />
    );
  }

  if (!session || !selectedFamily || !selectedPerson || !immediate) {
    return (
      <WorkspaceEmptyState
        title="Member profile not ready"
        message={message || "This family member could not be loaded in the active workspace."}
      />
    );
  }

  return (
    <div className={styles.page}>
      <nav className={styles.topnav}>
        <div className={styles.navBrand}>
          <img src="/logo_1kutumb.png" alt="Kutumbsy" className={styles.navBrandLogo} />
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/family-space">Family Home</Link></li>
          <li><Link href="/family-space" className={styles.activeLink}>Family Space</Link></li>
          <li><Link href="/family-space/requests">Requests</Link></li>
          <li><Link href="/family-space/data-capture">Add Member</Link></li>
        </ul>
        <div className={styles.navAvatar}>{initials(session.user.fullName) || "U"}</div>
      </nav>

      <div className={styles.appLayout}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContext}>
            <div className={styles.sidebarContextLabel}>Current Context</div>
            <div className={styles.sidebarContextFamily}>{selectedFamily.name}</div>
            <div className={styles.sidebarContextUser}>{session.user.fullName}</div>
          </div>
          <div className={styles.sidebarNavLabel}>Navigate</div>
          <Link className={styles.sidebarNavItem} href="/family-space">Family Home</Link>
          <Link className={styles.sidebarNavItem} href="/family-space">Family Space Home</Link>
          <Link className={`${styles.sidebarNavItem} ${styles.activeSidebarItem}`} href={`/family-space/members/${selectedPerson.id}`}>
            Member Profile
          </Link>
          <Link className={styles.sidebarNavItem} href="/family-space/data-capture">Data Capture</Link>
          <Link className={styles.sidebarNavItem} href="/family-space/requests">Join Requests</Link>
        </aside>

        <main className={styles.main}>
          <div className={styles.lineageBanner}>
            {lineage.map((person, index) => (
              <div key={person.id} className={styles.lineageStep}>
                <button
                  type="button"
                  className={`${styles.lineageNode} ${person.id === selectedPerson.id ? styles.currentLineageNode : ""}`}
                  onClick={() => setSelectedPersonId(person.id)}
                >
                  <div className={styles.lineageAvatar}>{initials(person.fullName)}</div>
                  <div>
                    <div className={styles.lineageName}>{person.fullName}</div>
                    <span className={styles.lineageRel}>{lineageLabel(lineage.length - 1 - index)}</span>
                  </div>
                </button>
                {index < lineage.length - 1 ? <span className={styles.lineageArrow}>&gt;</span> : null}
              </div>
            ))}
          </div>

          <section className={styles.profileHeader}>
            <div className={styles.profilePhoto}>
              {selectedPerson.photoUrl ? (
                <img src={selectedPerson.photoUrl} alt={selectedPerson.fullName} className={styles.profilePhotoImage} />
              ) : (
                initials(selectedPerson.fullName)
              )}
              <span className={styles.profilePhotoBadge}>✓</span>
            </div>

            <div className={styles.profileIdentity}>
              <h1 className={styles.profileName}>{selectedPerson.fullName}</h1>
              <div className={styles.profileMeta}>
                <span className={`${styles.metaChip} ${styles.chipForest}`}>{selectedPerson.gender || "Unspecified"}</span>
                <span className={`${styles.metaChip} ${styles.chipGold}`}>{selectedPerson.isDeceased ? "Deceased" : "Living"}</span>
              </div>
              <div className={styles.profileQuickFacts}>
                <span className={styles.quickFact}>DOB: {formatDate(selectedPerson.dateOfBirth)}</span>
                <span className={styles.quickFact}>City: {typeof personal.currentCity === "string" && personal.currentCity ? personal.currentCity : "Not added"}</span>
                <span className={styles.quickFact}>Origin: {selectedPerson.nativeVillage || "Not added"}</span>
                <span className={styles.quickFact}>
                  Linked: {relationshipCountFor(relationships, selectedPerson.id)} relationship{relationshipCountFor(relationships, selectedPerson.id) === 1 ? "" : "s"}
                </span>
              </div>
            </div>

            <div className={styles.profileActions}>
              <Link className={`${styles.btn} ${styles.btnPrimary}`} href="/family-space/data-capture">Edit Profile</Link>
              <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => setActiveTab("tree")}>Open in Tree</button>
            </div>
          </section>

          <div className={styles.tabBar}>
            <button type="button" className={`${styles.tab} ${activeTab === "overview" ? styles.activeTab : ""}`} onClick={() => setActiveTab("overview")}>Overview</button>
            <button type="button" className={`${styles.tab} ${activeTab === "family" ? styles.activeTab : ""}`} onClick={() => setActiveTab("family")}>
              Family <span className={styles.tabCount}>{familyConnections.length}</span>
            </button>
            <button type="button" className={`${styles.tab} ${activeTab === "tree" ? styles.activeTab : ""}`} onClick={() => setActiveTab("tree")}>Relationship Tree</button>
            <button type="button" className={`${styles.tab} ${activeTab === "timeline" ? styles.activeTab : ""}`} onClick={() => setActiveTab("timeline")}>Timeline</button>
          </div>

          <div className={styles.contentBody}>
            {activeTab === "overview" ? (
              <>
                <section className={styles.sectionCard}>
                  <div className={styles.sectionCardHeader}>
                    <h2 className={styles.sectionCardTitle}>Personal Information</h2>
                  </div>
                  <div className={styles.sectionCardBody}>
                    <div className={styles.infoGrid}>
                      <div><div className={styles.infoItemLabel}>Full Name</div><div className={styles.infoItemValue}>{selectedPerson.fullName}</div></div>
                      <div><div className={styles.infoItemLabel}>Date of Birth</div><div className={styles.infoItemValue}>{formatDate(selectedPerson.dateOfBirth)}</div></div>
                      <div><div className={styles.infoItemLabel}>Gender</div><div className={styles.infoItemValue}>{selectedPerson.gender || "Not added"}</div></div>
                      <div><div className={styles.infoItemLabel}>Current City</div><div className={`${styles.infoItemValue} ${styles.highlightValue}`}>{typeof personal.currentCity === "string" && personal.currentCity ? personal.currentCity : "Not added"}</div></div>
                      <div><div className={styles.infoItemLabel}>Occupation</div><div className={styles.infoItemValue}>{selectedPerson.occupation || "Not added"}</div></div>
                      <div><div className={styles.infoItemLabel}>Mobile</div><div className={styles.infoItemValue}>{typeof personal.mobileNumber === "string" && personal.mobileNumber ? personal.mobileNumber : "Not added"}</div></div>
                      <div><div className={styles.infoItemLabel}>Address</div><div className={styles.infoItemValue}>{typeof personal.address === "string" && personal.address ? personal.address : "Not added"}</div></div>
                    </div>
                  </div>
                </section>

                <section className={styles.sectionCard}>
                  <div className={styles.sectionCardHeader}>
                    <h2 className={styles.sectionCardTitle}>Family Connections</h2>
                  </div>
                  <div className={styles.sectionCardBody}>
                    <div className={styles.connectionsList}>
                      {familyConnections.length ? (
                        familyConnections.map((connection) => {
                          const city = typeof getPersonalData(connection.person).currentCity === "string"
                            ? (getPersonalData(connection.person).currentCity as string)
                            : "";
                          return (
                            <button key={connection.id} type="button" className={styles.connectionRow} onClick={() => setSelectedPersonId(connection.id)}>
                              <div className={styles.connAvatar}>{initials(connection.person.fullName)}</div>
                              <div className={styles.connInfo}>
                                <div className={styles.connName}>{connection.person.fullName}</div>
                                <div className={styles.connDetail}>{connection.relation}{city ? ` · ${city}` : ""} · {connection.person.isDeceased ? "Deceased" : "Living"}</div>
                              </div>
                              <span className={`${styles.connRelBadge} ${connection.badgeType === "spouse" ? styles.badgeSpouse : connection.badgeType === "child" ? styles.badgeChild : styles.badgeFamily}`}>{connection.badge}</span>
                              <span className={styles.connArrow}>&gt;</span>
                            </button>
                          );
                        })
                      ) : (
                        <p className={styles.emptyText}>No mapped family connections yet.</p>
                      )}
                    </div>
                  </div>
                </section>
              </>
            ) : null}

            {activeTab === "family" ? (
              <section className={styles.sectionCard}>
                <div className={styles.sectionCardHeader}>
                  <h2 className={styles.sectionCardTitle}>All Family Members</h2>
                </div>
                <div className={styles.sectionCardBody}>
                  <div className={styles.connectionsList}>
                    {familyConnections.length ? familyConnections.map((connection) => (
                      <button key={connection.id} type="button" className={styles.connectionRow} onClick={() => setSelectedPersonId(connection.id)}>
                        <div className={styles.connAvatar}>{initials(connection.person.fullName)}</div>
                        <div className={styles.connInfo}>
                          <div className={styles.connName}>{connection.person.fullName}</div>
                          <div className={styles.connDetail}>{connection.relation} · {connection.person.occupation || "Family member"}</div>
                        </div>
                        <span className={`${styles.connRelBadge} ${connection.badgeType === "spouse" ? styles.badgeSpouse : connection.badgeType === "child" ? styles.badgeChild : styles.badgeFamily}`}>{connection.badge}</span>
                        <span className={styles.connArrow}>&gt;</span>
                      </button>
                    )) : <p className={styles.emptyText}>No mapped family members yet.</p>}
                  </div>
                </div>
              </section>
            ) : null}

            {activeTab === "tree" ? (
              <section className={styles.sectionCard}>
                <div className={styles.sectionCardHeader}>
                  <h2 className={styles.sectionCardTitle}>Relationship Tree</h2>
                  <span className={styles.sectionMeta}>{people.length} members · {relationships.length} relationships</span>
                </div>
                <div className={styles.sectionCardBody}>
                  <FamilyTree
                    people={people}
                    relationships={relationships}
                    selectedPersonId={selectedPerson.id}
                    onSelectPerson={setSelectedPersonId}
                    memberCount={people.length}
                    relationshipCount={relationships.length}
                  />
                </div>
              </section>
            ) : null}

            {activeTab === "timeline" ? (
              <section className={styles.sectionCard}>
                <div className={styles.sectionCardHeader}>
                  <h2 className={styles.sectionCardTitle}>Life Timeline</h2>
                </div>
                <div className={styles.sectionCardBody}>
                  <div className={styles.timeline}>
                    {events.length ? events.map((event) => (
                      <div key={event.id} className={styles.timelineItem}>
                        <div className={styles.timelineWhen}>{event.when}</div>
                        <div className={styles.timelineTitle}>{event.title}</div>
                        <div className={styles.timelineDetail}>{event.detail}</div>
                      </div>
                    )) : <p className={styles.emptyText}>No timeline events captured yet.</p>}
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </main>

        <aside className={styles.rightPanel}>
          <section className={styles.rpanelSection}>
            <div className={styles.rpanelHeading}>Family Snapshot</div>
            <div className={styles.snapshotGrid}>
              <div className={styles.snapshotCell}><div className={styles.snapshotNum}>{people.length}</div><div className={styles.snapshotLabel}>Members</div></div>
              <div className={styles.snapshotCell}><div className={styles.snapshotNum}>{selectedFamily.nativePlace ? 1 : 0}</div><div className={styles.snapshotLabel}>Origins</div></div>
              <div className={styles.snapshotCell}><div className={styles.snapshotNum}>{session.memberships.length}</div><div className={styles.snapshotLabel}>Roles</div></div>
              <div className={styles.snapshotCell}><div className={styles.snapshotNum}>{upcomingBirthdays.length}</div><div className={styles.snapshotLabel}>Upcoming</div></div>
            </div>
          </section>

          <section className={styles.rpanelSection}>
            <div className={styles.rpanelHeading}>Your Family</div>
            <div className={styles.familyCard}>
              <div className={styles.familyCardBadge}>{initials(selectedFamily.name).slice(0, 1)}</div>
              <div>
                <div className={styles.familyCardName}>{selectedFamily.name}</div>
                <div className={styles.familyCardLoc}>{selectedFamily.nativePlace || "Family Space"} · {people.length} members</div>
              </div>
            </div>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnGhost} ${styles.fullWidthBtn}`}
              onClick={() => {
                const fallbackFamilyId = families.find((family) => family.id !== selectedFamily.id)?.id;
                if (!fallbackFamilyId) {
                  return;
                }
                void fetch("/api/auth/active-workspace", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ familyId: fallbackFamilyId }),
                }).then(() => window.location.assign("/family-space"));
              }}
            >
              Switch Family
            </button>
          </section>

          <section className={styles.rpanelSection}>
            <div className={styles.rpanelHeading}>Upcoming Events</div>
            <div className={styles.eventList}>
              {upcomingBirthdays.length ? upcomingBirthdays.map((entry) => (
                <div key={entry.person.id} className={styles.eventRow}>
                  <div className={styles.eventDays}>
                    <div className={styles.eventDaysNum}>{entry.days}</div>
                    <div className={styles.eventDaysLabel}>days</div>
                  </div>
                  <div className={styles.eventInfo}>
                    <div className={styles.eventName}>{entry.person.fullName}</div>
                    <div className={styles.eventDetail}>Birthday · {birthdayLabel(entry.days)}</div>
                  </div>
                </div>
              )) : <p className={styles.emptyText}>No upcoming birthdays.</p>}
            </div>
          </section>

          <section className={styles.rpanelSection}>
            <div className={styles.rpanelHeading}>Selected Member</div>
            <div className={styles.selectedCard}>
              <div className={styles.selectedHead}>
                <div className={styles.selectedAvatar}>{initials(selectedPerson.fullName)}</div>
                <div>
                  <div className={styles.selectedName}>{selectedPerson.fullName}</div>
                </div>
              </div>
              <div className={styles.selectedDetails}>
                {immediate.spouses[0] ? <div><span>Spouse: </span><strong>{immediate.spouses[0].fullName}</strong></div> : null}
                {immediate.sons[0] ? <div><span>Son: </span><strong>{immediate.sons[0].fullName}</strong></div> : null}
                {immediate.daughters[0] ? <div><span>Daughter: </span><strong>{immediate.daughters[0].fullName}</strong></div> : null}
                <div className={styles.selectedBlock}>
                  <div>Date of birth: {formatDate(selectedPerson.dateOfBirth)}</div>
                  <div>Current city: {typeof personal.currentCity === "string" && personal.currentCity ? personal.currentCity : "Not added"}</div>
                  <div>Occupation: {selectedPerson.occupation || "Not added"}</div>
                  <div>Status: {selectedPerson.isDeceased ? "Deceased" : "Living"}</div>
                </div>
              </div>
              <div className={styles.selectedTags}>
                {related.slice(0, 3).map((relationship) => (
                  <span key={relationship.id} className={`${styles.metaChip} ${styles.chipForest}`}>
                    {relationship.relationshipType === "spouse_of" ? "Spouse of" : "Parent/Child"}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
