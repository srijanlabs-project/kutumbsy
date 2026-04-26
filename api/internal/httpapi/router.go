package httpapi

import (
    "errors"
    "net/http"

    "github.com/gin-gonic/gin"
    "github.com/jackc/pgx/v5"

    "kutumbsy/api/internal/config"
    "kutumbsy/api/internal/database"
    "kutumbsy/api/internal/family"
)

func NewRouter(cfg config.Config, db *database.DB) *gin.Engine {
    router := gin.Default()
    familyService := family.NewService(db.Pool)

    router.GET("/health", func(c *gin.Context) {
        dbStatus := "disabled"
        if db != nil && db.Pool != nil {
            dbStatus = "connected"
        }

        c.JSON(http.StatusOK, gin.H{
            "status":   "ok",
            "service":  "kutumbsy-api",
            "env":      cfg.AppEnv,
            "database": dbStatus,
        })
    })

    v1 := router.Group("/api/v1")
    {
        v1.GET("/meta", func(c *gin.Context) {
            c.JSON(http.StatusOK, gin.H{
                "name":        "Kutumbsy API",
                "description": "Backend foundation for family graph, profiles, invites, and memory vault.",
                "otpProvider": cfg.OTPProvider,
                "storage":     cfg.StorageType,
            })
        })

        v1.GET("/families", func(c *gin.Context) {
            families, err := familyService.ListFamilies(c.Request.Context())
            if err != nil {
                c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to list families"})
                return
            }

            c.JSON(http.StatusOK, gin.H{"data": families})
        })

        v1.POST("/families", func(c *gin.Context) {
            var input family.CreateFamilyInput
            if err := c.ShouldBindJSON(&input); err != nil {
                c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
                return
            }

            created, err := familyService.CreateFamily(c.Request.Context(), input)
            if err != nil {
                c.JSON(statusForError(err), gin.H{"error": err.Error()})
                return
            }

            c.JSON(http.StatusCreated, gin.H{"data": created})
        })

        v1.GET("/families/:id/people", func(c *gin.Context) {
            people, err := familyService.ListPeople(c.Request.Context(), c.Param("id"))
            if err != nil {
                c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to list people"})
                return
            }

            c.JSON(http.StatusOK, gin.H{"data": people})
        })

        v1.POST("/families/:id/people", func(c *gin.Context) {
            var input family.CreatePersonInput
            if err := c.ShouldBindJSON(&input); err != nil {
                c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
                return
            }

            created, err := familyService.CreatePerson(c.Request.Context(), c.Param("id"), input)
            if err != nil {
                c.JSON(statusForError(err), gin.H{"error": err.Error()})
                return
            }

            c.JSON(http.StatusCreated, gin.H{"data": created})
        })
    }

    return router
}

func statusForError(err error) int {
    switch {
    case errors.Is(err, pgx.ErrNoRows):
        return http.StatusNotFound
    case err != nil:
        switch err.Error() {
        case "name is required", "slug could not be generated", "fullName is required", "metadata must be valid JSON":
            return http.StatusBadRequest
        default:
            return http.StatusInternalServerError
        }
    default:
        return http.StatusInternalServerError
    }
}