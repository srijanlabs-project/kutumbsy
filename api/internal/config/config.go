package config

import (
    "fmt"
    "os"
)

type Config struct {
    AppEnv      string
    Port        string
    PostgresDSN string
    JWTSecret   string
    OTPProvider string
    StorageType string
}

func Load() Config {
    cfg := Config{
        AppEnv:      getEnv("APP_ENV", "development"),
        Port:        getEnv("API_PORT", "8080"),
        PostgresDSN: getEnv("POSTGRES_DSN", "postgres://postgres:postgres@localhost:5432/kutumbsy?sslmode=disable"),
        JWTSecret:   getEnv("JWT_SECRET", "change-me"),
        OTPProvider: getEnv("OTP_PROVIDER", "mock"),
        StorageType: getEnv("STORAGE_PROVIDER", "local"),
    }

    return cfg
}

func (c Config) Address() string {
    return fmt.Sprintf(":%s", c.Port)
}

func getEnv(key, fallback string) string {
    value := os.Getenv(key)
    if value == "" {
        return fallback
    }

    return value
}