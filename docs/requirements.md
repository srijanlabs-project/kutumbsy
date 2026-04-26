# Kutumbsy Product Requirements

## Product Goal

Build a digital family legacy platform that helps Indian families preserve relationships, memories, identity, and intergenerational history.

## MVP Objectives

1. Allow a family admin to create a family space.
2. Allow users to add people and define relationships.
3. Show an interactive family tree.
4. Store rich member profiles and essential family metadata.
5. Support invitations and role-based collaboration.
6. Export a basic shareable family summary.

## Core Modules

1. Family onboarding and setup
2. Family graph engine
3. Person profile and identity layer
4. Tree visualization
5. Invite and collaboration
6. Privacy and access control
7. Media and memory vault
8. Search and relationship discovery
9. Timeline and milestone engine
10. Admin analytics and operational tools

## Functional Requirements

### Accounts and Access

- OTP-first authentication
- Family-level roles: admin, editor, viewer
- Invite via shareable link
- Basic audit trail for important changes

### Family Domain

- Create a family
- Add a person
- Edit profile metadata
- Define parent, child, spouse, and extended relationships
- Prevent obvious duplicate records where possible
- List families for onboarding and app navigation
- List people inside a family for profile and tree rendering

### Experience

- Mobile-first onboarding
- Elder-friendly readable UI
- Hindi and future regional language readiness
- Empty states that guide completion of the tree

### Platform Foundations

- PostgreSQL as system of record
- Object storage abstraction for media
- REST API with versioned routes
- Environment-based configuration
- Startup migrations for local development

## Initial Data Model

### families

- `id`
- `name`
- `slug`
- `description`
- `native_place`
- `created_by_phone`
- `created_at`
- `updated_at`

### people

- `id`
- `family_id`
- `full_name`
- `gender`
- `date_of_birth`
- `is_deceased`
- `photo_url`
- `native_village`
- `gotra`
- `kuldevta`
- `community`
- `education`
- `occupation`
- `notes`
- `metadata`
- `created_at`
- `updated_at`

### relationships

- `id`
- `family_id`
- `person_1_id`
- `person_2_id`
- `relationship_type`
- `created_at`

## Current API Surface

- `GET /api/v1/families`
- `POST /api/v1/families`
- `GET /api/v1/families/:id/people`
- `POST /api/v1/families/:id/people`

## Initial Non-Functional Requirements

- Privacy by default
- Secure handling of living-person data
- Configurable deployment across local, Railway, and AWS
- Clear separation of frontend and backend responsibilities

## Delivery Milestones

1. Project setup and developer onboarding
2. Database and migrations
3. Auth and family creation
4. People and relationships APIs
5. Tree UI and profile views
6. Invites, privacy controls, and export basics