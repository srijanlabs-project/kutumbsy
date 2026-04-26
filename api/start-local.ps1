$env:POSTGRES_DSN = "postgres://postgres:NewStrongPassword123!@localhost:5432/kutumbsy?sslmode=disable"
$env:API_PORT = "8080"
Set-Location "D:\Kutumbsy\api"
go run ./cmd/server