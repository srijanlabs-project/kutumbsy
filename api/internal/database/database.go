package database

import (
    "context"
    "errors"
    "fmt"
    "os"
    "path/filepath"
    "sort"
    "strings"
    "time"

    "github.com/jackc/pgx/v5/pgxpool"
)

type DB struct {
    Pool *pgxpool.Pool
}

func Connect(ctx context.Context, dsn string) (*DB, error) {
    cfg, err := pgxpool.ParseConfig(dsn)
    if err != nil {
        return nil, fmt.Errorf("parse postgres dsn: %w", err)
    }

    cfg.MaxConns = 10
    cfg.MinConns = 1
    cfg.MaxConnIdleTime = 5 * time.Minute

    pool, err := pgxpool.NewWithConfig(ctx, cfg)
    if err != nil {
        return nil, fmt.Errorf("connect postgres: %w", err)
    }

    pingCtx, cancel := context.WithTimeout(ctx, 5*time.Second)
    defer cancel()

    if err := pool.Ping(pingCtx); err != nil {
        pool.Close()
        return nil, fmt.Errorf("ping postgres: %w", err)
    }

    return &DB{Pool: pool}, nil
}

func (db *DB) Close() {
    if db != nil && db.Pool != nil {
        db.Pool.Close()
    }
}

func (db *DB) RunMigrations(ctx context.Context, migrationsDir string) error {
    if db == nil || db.Pool == nil {
        return errors.New("database pool is nil")
    }

    if _, err := db.Pool.Exec(ctx, `
        CREATE TABLE IF NOT EXISTS schema_migrations (
            version TEXT PRIMARY KEY,
            applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `); err != nil {
        return fmt.Errorf("ensure schema_migrations: %w", err)
    }

    entries, err := os.ReadDir(migrationsDir)
    if err != nil {
        return fmt.Errorf("read migrations dir: %w", err)
    }

    versions := make([]string, 0, len(entries))
    for _, entry := range entries {
        if entry.IsDir() || !strings.HasSuffix(entry.Name(), ".sql") {
            continue
        }
        versions = append(versions, entry.Name())
    }
    sort.Strings(versions)

    for _, version := range versions {
        var exists bool
        if err := db.Pool.QueryRow(ctx, `SELECT EXISTS (SELECT 1 FROM schema_migrations WHERE version = $1)`, version).Scan(&exists); err != nil {
            return fmt.Errorf("check migration %s: %w", version, err)
        }
        if exists {
            continue
        }

        sqlBytes, err := os.ReadFile(filepath.Join(migrationsDir, version))
        if err != nil {
            return fmt.Errorf("read migration %s: %w", version, err)
        }

        tx, err := db.Pool.Begin(ctx)
        if err != nil {
            return fmt.Errorf("begin migration %s: %w", version, err)
        }

        if _, err := tx.Exec(ctx, string(sqlBytes)); err != nil {
            _ = tx.Rollback(ctx)
            return fmt.Errorf("apply migration %s: %w", version, err)
        }

        if _, err := tx.Exec(ctx, `INSERT INTO schema_migrations (version) VALUES ($1)`, version); err != nil {
            _ = tx.Rollback(ctx)
            return fmt.Errorf("record migration %s: %w", version, err)
        }

        if err := tx.Commit(ctx); err != nil {
            return fmt.Errorf("commit migration %s: %w", version, err)
        }
    }

    return nil
}