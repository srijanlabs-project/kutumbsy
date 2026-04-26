# Kutumbsy Architecture

This document defines the platform (global) layer and tenant (family workspace) layer for Kutumbsy.

## Platform Layer (Global)

These modules operate across all tenants and are managed by the Kutumbsy platform team.

1. Tenant Management  
Create, activate, suspend tenants.
2. Subscription & Plans  
Plan definitions, trial setup, upgrade/downgrade.
3. Lead Management  
Demo requests, onboarding pipeline, contact tracking.
4. RBAC Management (Platform-Level)  
Define global roles/permissions templates.
5. User Guide & FAQs (Platform copy)  
Manage platform-facing help content.
6. System Settings  
Global defaults, onboarding templates.

## Tenant Layer (Family Workspace)

Each family is a tenant. All data is isolated inside the tenant workspace.

1. Family Profile  
Family identity, native place, branch map, key admin contacts.
2. Family Graph  
People, relationships, branches, lineage view.
3. People Profiles (Exhaustive, Grouped)  
Personal, family/relationships, professional, education, hobbies/interests, health (consent-based), life events, stories/voice, media/documents, beliefs/culture (optional), location/migration history, contact/handles (private), privacy/consent.
4. Memory Vault  
Photos, audio, documents, timelines, stories.
5. Invitations & Collaboration  
Invite links, role assignment, branch-level collaboration.
6. RBAC (Tenant-Level)  
Admin, editor, viewer roles with branch-scoped access.
7. Events & Reminders  
Birthdays, anniversaries, death anniversaries, reunions.
8. Messaging & Circles (Phase 2)  
Private family chat, branch groups, announcements.
9. Matchmaking / Community (Optional Future Module)  
Consent-based discovery, separate privacy and governance.

## Notes

- Platform RBAC defines role templates, tenant RBAC applies them within a family.
- Messaging and matchmaking are intentionally separated from core family legacy data.
