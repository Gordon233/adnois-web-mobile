# Adnois Web & Mobile Monorepo

A monorepo containing web, mobile, and API applications using Turborepo for efficient build system management.

## Project Structure

```
├── packages/
│   ├── api/        # Backend API service
│   ├── web/        # Web application
│   ├── mobile/     # Mobile application
│   └── shared/     # Shared utilities and components
```

## Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm
- Docker & Docker Compose (for development environment)

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the development environment:
```bash
docker-compose -f docker-compose.dev.yml up
```

## Development

### Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications
- `pnpm test` - Run tests across all packages
- `pnpm lint` - Run linting across all packages

### Package Structure

- **api**: Backend service
- **web**: Web application frontend
- **mobile**: Mobile application
- **shared**: Common utilities and components shared across packages
