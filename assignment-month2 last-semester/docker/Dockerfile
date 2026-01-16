# -------- Builder stage --------
FROM golang:1.25.1-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git ca-certificates

# Copy Go module files first (better caching)
COPY go.mod go.sum ./
RUN go mod download

# Copy application source
COPY . .

# Build the binary
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o muchtodo ./cmd/api

# -------- Runtime stage --------
FROM gcr.io/distroless/base-debian12

WORKDIR /app

COPY --from=builder /app/muchtodo /app/muchtodo

EXPOSE 8080

USER nonroot:nonroot

CMD ["/app/muchtodo"]

