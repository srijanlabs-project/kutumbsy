"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { PostLoginShell } from "../../../../components/PostLoginShell";
import type { Family, Person, SessionData } from "../../../platform/admin/data-capture/types";
import styles from "../workspace.module.css";

type FamilyWorkspaceShellProps = {
  session: SessionData;
  families: Family[];
  activeWorkspaceId: string;
  selectedFamily: Family;
  people: Person[];
  selectedPerson: Person | null;
  pageTitle: string;
  pageSubtitle: string;
  activeView: "home" | "tree" | "profile" | "requests";
  canManageData: boolean;
  onSwitchFamily: (familyId: string) => void;
  children: ReactNode;
  rightRail?: ReactNode;
  topMessage?: string;
};

function getUpcomingBirthdays(people: Person[]): Array<{ id: string; fullName: string; label: string }> {
  const today = new Date();

  return people
    .filter((person) => person.dateOfBirth)
    .map((person) => {
      const date = new Date(person.dateOfBirth as string);
      const nextBirthday = new Date(today.getFullYear(), date.getMonth(), date.getDate());

      if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
      }

      const diffDays = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      const label =
        diffDays <= 0
          ? "Today"
          : diffDays === 1
            ? "Tomorrow"
            : `In ${diffDays} days`;

      return {
        id: person.id,
        fullName: person.fullName,
        daysAway: diffDays,
        label,
      };
    })
    .sort((left, right) => left.daysAway - right.daysAway)
    .slice(0, 4)
    .map(({ id, fullName, label }) => ({ id, fullName, label }));
}

function getDaysAwayLabel(label: string): string {
  if (label === "Today") {
    return "0";
  }
  if (label === "Tomorrow") {
    return "1";
  }
  const match = label.match(/(\d+)/);
  return match ? match[1] : "-";
}

export function FamilyWorkspaceShell({
  session,
  families,
  activeWorkspaceId,
  selectedFamily,
  people,
  selectedPerson,
  pageTitle,
  pageSubtitle,
  activeView,
  canManageData,
  onSwitchFamily,
  children,
  rightRail,
  topMessage,
}: FamilyWorkspaceShellProps) {
  const [upcomingBirthdays, setUpcomingBirthdays] = useState<Array<{ id: string; fullName: string; label: string }>>([]);
  const activeNav = activeView === "requests" ? "requests" : "family-space";

  useEffect(() => {
    setUpcomingBirthdays(getUpcomingBirthdays(people));
  }, [people]);

  return (
    <PostLoginShell
      title={pageTitle}
      subtitle={pageSubtitle}
      activeNav={activeNav}
      currentFamily={selectedFamily.name}
      currentFamilyCode={selectedFamily.familyCode}
      currentUser={session.user.fullName}
      rightRail={
        <>
          <section className={styles.sideCard}>
            <div className={styles.cardTitleRow}>
              <h2 className={styles.sideCardTitle}>Family Snapshot</h2>
              <span className={styles.sideLabelLink}>Details</span>
            </div>
            <div className={styles.snapshotGrid}>
              <div>
                <strong>{people.length}</strong>
                <span>Members</span>
              </div>
              <div>
                <strong>{selectedFamily.nativePlace ? 1 : 0}</strong>
                <span>Origins</span>
              </div>
              <div>
                <strong>{session.memberships.length}</strong>
                <span>Roles</span>
              </div>
              <div>
                <strong>{upcomingBirthdays.length}</strong>
                <span>Upcoming</span>
              </div>
            </div>
          </section>

          <section className={styles.sideCard}>
            <div className={styles.cardTitleRow}>
              <h2 className={styles.sideCardTitle}>Your Families</h2>
            </div>
            <div className={styles.familyList}>
              {families.map((family) => (
                <button
                  key={family.id}
                  type="button"
                  className={`${styles.familySwitcher} ${family.id === activeWorkspaceId ? styles.familySwitcherActive : ""}`}
                  onClick={() => onSwitchFamily(family.id)}
                >
                  <span className={styles.familyBadge}>{family.name.slice(0, 1).toUpperCase()}</span>
                  <span>
                    <strong>{family.name}</strong>
                    <small>{family.nativePlace || "Family Space"} - {people.length} members</small>
                  </span>
                </button>
              ))}
            </div>
            <button type="button" className={styles.secondaryButton} onClick={() => onSwitchFamily(activeWorkspaceId)}>
              Switch Family
            </button>
          </section>

          <section className={styles.sideCard}>
            <div className={styles.cardTitleRow}>
              <h2 className={styles.sideCardTitle}>Upcoming Events</h2>
              <span className={styles.sideLabelLink}>All →</span>
            </div>
            <div className={styles.eventRailList}>
              {upcomingBirthdays.length ? (
                upcomingBirthdays.map((person) => (
                  <div key={person.id} className={styles.eventRailItem}>
                    <div className={styles.eventDays}>
                      <strong>{getDaysAwayLabel(person.label)}</strong>
                      <span>days</span>
                    </div>
                    <div>
                      <strong>{person.fullName}</strong>
                      <span>Birthday</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className={styles.emptyRailText}>No birthdays are available yet.</p>
              )}
            </div>
          </section>

          <section className={styles.sideCard}>
            <div className={styles.cardTitleRow}>
              <h2 className={styles.sideCardTitle}>Quick Actions</h2>
            </div>
            <div className={styles.quickActionList}>
              <Link href="/family-space" className={styles.quickAction}>
                <span className={styles.quickActionIcon}>🌳</span>
                <span>
                  <strong>Open Tree View</strong>
                  <small>Full screen family tree</small>
                </span>
              </Link>
              <Link href="/family-space/data-capture" className={styles.quickAction}>
                <span className={styles.quickActionIcon}>➕</span>
                <span>
                  <strong>Add Member</strong>
                  <small>Expand your family</small>
                </span>
              </Link>
              <Link href="/family-space/requests" className={styles.quickAction}>
                <span className={styles.quickActionIcon}>📋</span>
                <span>
                  <strong>Family Requests</strong>
                  <small>Pending invites and joins</small>
                </span>
              </Link>
            </div>
          </section>

          {rightRail}
        </>
      }
    >
      <section className={styles.heroCard}>
        <div className={styles.heroContent}>
          <p className={styles.heroOverline}>Family Space</p>
          <p className={styles.heroSubtitle}>Focused workspace for your active family context.</p>
          <div className={styles.heroStats}>
            <span>{selectedFamily.nativePlace || "Native place not added"}</span>
            <span>{people.length} members</span>
            <span>{session.memberships.length} memberships</span>
            {selectedPerson ? <span>Selected: {selectedPerson.fullName}</span> : null}
          </div>
        </div>
        <div className={styles.heroActions}>
          <Link href="/join-family" className={styles.heroGhostButton}>
            ⇄ Switch Family
          </Link>
          {canManageData ? (
            <Link href="/family-space/data-capture" className={styles.heroPrimaryButton}>
              ⚙ Manage Family Data
            </Link>
          ) : null}
        </div>
      </section>

      {children}
    </PostLoginShell>
  );
}
