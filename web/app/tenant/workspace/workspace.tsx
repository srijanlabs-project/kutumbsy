"use client";

import { useMemo } from "react";
import styles from "./workspace.module.css";
import { MemberDirectory } from "./sections/MemberDirectory";
import { PersonSpotlight } from "./sections/PersonSpotlight";
import { FamilyTree } from "./sections/FamilyTree";
import { WorkspaceEmptyState } from "./sections/WorkspaceEmptyState";
import { FamilyWorkspaceShell } from "./sections/FamilyWorkspaceShell";
import { useTenantWorkspaceData } from "./useTenantWorkspaceData";

export function TenantWorkspace() {
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

  const selectedFamily = families.find((family) => family.id === activeWorkspaceId) ?? null;
  const selectedPerson = people.find((person) => person.id === selectedPersonId) ?? people[0] ?? null;

  const memberCount = people.length;
  const relationshipCount = relationships.length;

  const activeMembership = useMemo(
    () => session?.memberships.find((membership) => membership.familyId === activeWorkspaceId) ?? null,
    [session, activeWorkspaceId],
  );

  if (loading) {
    return (
      <WorkspaceEmptyState
        title="Loading Family Space"
        message="We are gathering your family members, relationships, and active Family Space context."
        isLoading
      />
    );
  }

  if (!session || !selectedFamily) {
    return (
      <WorkspaceEmptyState
        title="No Family Space Created"
        message={message || "Create your first Family Space to start building your family tree and member directory."}
        primaryLabel="Create Family Space"
        primaryHref="/create-family"
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
      pageTitle={selectedFamily.name}
      pageSubtitle="Connect every branch of your family, preserve memory, and build the tree together."
      activeView="home"
      canManageData={activeMembership?.role === "admin" || activeMembership?.role === "editor"}
      onSwitchFamily={(familyId) => {
        void fetch("/api/auth/active-workspace", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ familyId }),
        }).then(() => window.location.assign("/family-space"));
      }}
      topMessage={message || undefined}
      rightRail={<PersonSpotlight person={selectedPerson} people={people} relationships={relationships} compact />}
    >
      <div className={styles.feedStack}>
        <section className={styles.scard}>
          <div className={`${styles.notice} ${message ? styles.noticeWarn : ""}`}>
            <span className={styles.noticeIcon}>⚠</span>
            <span>{message ? "Unable to load full Family Space details. Some sections may be incomplete - try refreshing." : "Family space is synced and ready."}</span>
            <button type="button" className={styles.noticeRetry} onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        </section>

        <section className={styles.scard}>
          <div className={styles.composePrompt}>
            <div className={styles.composeAvatar}>{session.user.fullName.slice(0, 1).toUpperCase()}</div>
            <div>
              <strong>What&apos;s happening in the family?</strong>
              <span>Capture photos, life events, celebrations, or tree updates as your family story grows.</span>
            </div>
          </div>
          <div className={styles.composeActions}>
            <button type="button" className={styles.composeActionButton}>📷 Photo / Memory</button>
            <button type="button" className={styles.composeActionButton}>🎯 Life Event</button>
            <button type="button" className={styles.composeActionButton}>🎉 Celebration</button>
            <button type="button" className={styles.composeActionButton}>🌳 Add to Tree</button>
          </div>
        </section>

        <MemberDirectory
          people={people}
          selectedPersonId={selectedPerson?.id ?? ""}
          onSelectPerson={setSelectedPersonId}
          canManageData={activeMembership?.role === "admin" || activeMembership?.role === "editor"}
        />
        <FamilyTree
          people={people}
          relationships={relationships}
          selectedPersonId={selectedPerson?.id ?? ""}
          onSelectPerson={setSelectedPersonId}
          memberCount={memberCount}
          relationshipCount={relationshipCount}
        />
      </div>
    </FamilyWorkspaceShell>
  );
}
