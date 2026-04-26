package family

import (
    "context"
    "encoding/json"
    "errors"
    "fmt"
    "regexp"
    "strings"
    "time"

    "github.com/jackc/pgx/v5"
    "github.com/jackc/pgx/v5/pgxpool"
)

type Service struct {
    pool *pgxpool.Pool
}

type Family struct {
    ID             string    `json:"id"`
    Name           string    `json:"name"`
    Slug           string    `json:"slug"`
    Description    string    `json:"description,omitempty"`
    NativePlace    string    `json:"nativePlace,omitempty"`
    CreatedByPhone string    `json:"createdByPhone,omitempty"`
    CreatedAt      time.Time `json:"createdAt"`
    UpdatedAt      time.Time `json:"updatedAt"`
}

type Person struct {
    ID            string          `json:"id"`
    FamilyID      string          `json:"familyId"`
    FullName      string          `json:"fullName"`
    Gender        string          `json:"gender,omitempty"`
    DateOfBirth   *string         `json:"dateOfBirth,omitempty"`
    IsDeceased    bool            `json:"isDeceased"`
    PhotoURL      string          `json:"photoUrl,omitempty"`
    NativeVillage string          `json:"nativeVillage,omitempty"`
    Gotra         string          `json:"gotra,omitempty"`
    Kuldevta      string          `json:"kuldevta,omitempty"`
    Community     string          `json:"community,omitempty"`
    Education     string          `json:"education,omitempty"`
    Occupation    string          `json:"occupation,omitempty"`
    Notes         string          `json:"notes,omitempty"`
    Metadata      json.RawMessage `json:"metadata"`
    CreatedAt     time.Time       `json:"createdAt"`
    UpdatedAt     time.Time       `json:"updatedAt"`
}

type CreateFamilyInput struct {
    Name           string `json:"name"`
    Slug           string `json:"slug"`
    Description    string `json:"description"`
    NativePlace    string `json:"nativePlace"`
    CreatedByPhone string `json:"createdByPhone"`
}

type CreatePersonInput struct {
    FullName      string          `json:"fullName"`
    Gender        string          `json:"gender"`
    DateOfBirth   *string         `json:"dateOfBirth"`
    IsDeceased    bool            `json:"isDeceased"`
    PhotoURL      string          `json:"photoUrl"`
    NativeVillage string          `json:"nativeVillage"`
    Gotra         string          `json:"gotra"`
    Kuldevta      string          `json:"kuldevta"`
    Community     string          `json:"community"`
    Education     string          `json:"education"`
    Occupation    string          `json:"occupation"`
    Notes         string          `json:"notes"`
    Metadata      json.RawMessage `json:"metadata"`
}

var slugCleaner = regexp.MustCompile(`[^a-z0-9]+`)

func NewService(pool *pgxpool.Pool) *Service {
    return &Service{pool: pool}
}

func (s *Service) ListFamilies(ctx context.Context) ([]Family, error) {
    rows, err := s.pool.Query(ctx, `
        SELECT id::text, name, slug, COALESCE(description, ''), COALESCE(native_place, ''), COALESCE(created_by_phone, ''), created_at, updated_at
        FROM families
        ORDER BY created_at DESC
    `)
    if err != nil {
        return nil, fmt.Errorf("list families: %w", err)
    }
    defer rows.Close()

    var families []Family
    for rows.Next() {
        var family Family
        if err := rows.Scan(&family.ID, &family.Name, &family.Slug, &family.Description, &family.NativePlace, &family.CreatedByPhone, &family.CreatedAt, &family.UpdatedAt); err != nil {
            return nil, fmt.Errorf("scan family: %w", err)
        }
        families = append(families, family)
    }

    if err := rows.Err(); err != nil {
        return nil, fmt.Errorf("iterate families: %w", err)
    }

    return families, nil
}

func (s *Service) CreateFamily(ctx context.Context, input CreateFamilyInput) (*Family, error) {
    name := strings.TrimSpace(input.Name)
    if name == "" {
        return nil, errors.New("name is required")
    }

    slug := normalizeSlug(input.Slug)
    if slug == "" {
        slug = normalizeSlug(name)
    }
    if slug == "" {
        return nil, errors.New("slug could not be generated")
    }

    family := &Family{}
    err := s.pool.QueryRow(ctx, `
        INSERT INTO families (name, slug, description, native_place, created_by_phone)
        VALUES ($1, $2, NULLIF($3, ''), NULLIF($4, ''), NULLIF($5, ''))
        RETURNING id::text, name, slug, COALESCE(description, ''), COALESCE(native_place, ''), COALESCE(created_by_phone, ''), created_at, updated_at
    `, name, slug, strings.TrimSpace(input.Description), strings.TrimSpace(input.NativePlace), strings.TrimSpace(input.CreatedByPhone)).Scan(
        &family.ID,
        &family.Name,
        &family.Slug,
        &family.Description,
        &family.NativePlace,
        &family.CreatedByPhone,
        &family.CreatedAt,
        &family.UpdatedAt,
    )
    if err != nil {
        return nil, fmt.Errorf("create family: %w", err)
    }

    return family, nil
}

func (s *Service) ListPeople(ctx context.Context, familyID string) ([]Person, error) {
    rows, err := s.pool.Query(ctx, `
        SELECT id::text, family_id::text, full_name, COALESCE(gender, ''),
               TO_CHAR(date_of_birth, 'YYYY-MM-DD'), is_deceased, COALESCE(photo_url, ''),
               COALESCE(native_village, ''), COALESCE(gotra, ''), COALESCE(kuldevta, ''),
               COALESCE(community, ''), COALESCE(education, ''), COALESCE(occupation, ''),
               COALESCE(notes, ''), metadata, created_at, updated_at
        FROM people
        WHERE family_id = $1::uuid
        ORDER BY created_at DESC
    `, familyID)
    if err != nil {
        return nil, fmt.Errorf("list people: %w", err)
    }
    defer rows.Close()

    var people []Person
    for rows.Next() {
        var person Person
        var dob string
        if err := rows.Scan(
            &person.ID,
            &person.FamilyID,
            &person.FullName,
            &person.Gender,
            &dob,
            &person.IsDeceased,
            &person.PhotoURL,
            &person.NativeVillage,
            &person.Gotra,
            &person.Kuldevta,
            &person.Community,
            &person.Education,
            &person.Occupation,
            &person.Notes,
            &person.Metadata,
            &person.CreatedAt,
            &person.UpdatedAt,
        ); err != nil {
            return nil, fmt.Errorf("scan person: %w", err)
        }
        if dob != "" {
            person.DateOfBirth = &dob
        }
        people = append(people, person)
    }

    if err := rows.Err(); err != nil {
        return nil, fmt.Errorf("iterate people: %w", err)
    }

    return people, nil
}

func (s *Service) CreatePerson(ctx context.Context, familyID string, input CreatePersonInput) (*Person, error) {
    if strings.TrimSpace(input.FullName) == "" {
        return nil, errors.New("fullName is required")
    }

    if input.Metadata == nil || len(input.Metadata) == 0 {
        input.Metadata = json.RawMessage(`{}`)
    }
    if !json.Valid(input.Metadata) {
        return nil, errors.New("metadata must be valid JSON")
    }

    var familyExists bool
    if err := s.pool.QueryRow(ctx, `SELECT EXISTS(SELECT 1 FROM families WHERE id = $1::uuid)`, familyID).Scan(&familyExists); err != nil {
        return nil, fmt.Errorf("check family: %w", err)
    }
    if !familyExists {
        return nil, pgx.ErrNoRows
    }

    person := &Person{}
    var dob *string
    if input.DateOfBirth != nil {
        trimmed := strings.TrimSpace(*input.DateOfBirth)
        if trimmed != "" {
            dob = &trimmed
        }
    }

    err := s.pool.QueryRow(ctx, `
        INSERT INTO people (
            family_id, full_name, gender, date_of_birth, is_deceased, photo_url,
            native_village, gotra, kuldevta, community, education, occupation, notes, metadata
        )
        VALUES (
            $1::uuid, $2, NULLIF($3, ''), $4::date, $5, NULLIF($6, ''),
            NULLIF($7, ''), NULLIF($8, ''), NULLIF($9, ''), NULLIF($10, ''), NULLIF($11, ''), NULLIF($12, ''), NULLIF($13, ''), $14::jsonb
        )
        RETURNING id::text, family_id::text, full_name, COALESCE(gender, ''),
                  TO_CHAR(date_of_birth, 'YYYY-MM-DD'), is_deceased, COALESCE(photo_url, ''),
                  COALESCE(native_village, ''), COALESCE(gotra, ''), COALESCE(kuldevta, ''),
                  COALESCE(community, ''), COALESCE(education, ''), COALESCE(occupation, ''),
                  COALESCE(notes, ''), metadata, created_at, updated_at
    `,
        familyID,
        strings.TrimSpace(input.FullName),
        strings.TrimSpace(input.Gender),
        dob,
        input.IsDeceased,
        strings.TrimSpace(input.PhotoURL),
        strings.TrimSpace(input.NativeVillage),
        strings.TrimSpace(input.Gotra),
        strings.TrimSpace(input.Kuldevta),
        strings.TrimSpace(input.Community),
        strings.TrimSpace(input.Education),
        strings.TrimSpace(input.Occupation),
        strings.TrimSpace(input.Notes),
        input.Metadata,
    ).Scan(
        &person.ID,
        &person.FamilyID,
        &person.FullName,
        &person.Gender,
        &dob,
        &person.IsDeceased,
        &person.PhotoURL,
        &person.NativeVillage,
        &person.Gotra,
        &person.Kuldevta,
        &person.Community,
        &person.Education,
        &person.Occupation,
        &person.Notes,
        &person.Metadata,
        &person.CreatedAt,
        &person.UpdatedAt,
    )
    if err != nil {
        return nil, fmt.Errorf("create person: %w", err)
    }

    person.DateOfBirth = dob
    return person, nil
}

func normalizeSlug(value string) string {
    normalized := strings.ToLower(strings.TrimSpace(value))
    normalized = slugCleaner.ReplaceAllString(normalized, "-")
    normalized = strings.Trim(normalized, "-")
    return normalized
}