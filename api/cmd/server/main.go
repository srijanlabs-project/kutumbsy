package main

import (
    "context"
    "log"
    "path/filepath"

    "kutumbsy/api/internal/config"
    "kutumbsy/api/internal/database"
    "kutumbsy/api/internal/httpapi"
)

func main() {
    cfg := config.Load()
    ctx := context.Background()

    db, err := database.Connect(ctx, cfg.PostgresDSN)
    if err != nil {
        log.Fatalf("database connection failed: %v", err)
    }
    defer db.Close()

    migrationsDir := filepath.Join("migrations")
    if err := db.RunMigrations(ctx, migrationsDir); err != nil {
        log.Fatalf("database migrations failed: %v", err)
    }

    router := httpapi.NewRouter(cfg, db)

    log.Printf("kutumbsy api starting on %s in %s mode", cfg.Address(), cfg.AppEnv)
    if err := router.Run(cfg.Address()); err != nil {
        log.Fatalf("server failed: %v", err)
    }
}