# monorepo

npm workspaces + [Turborepo](https://turbo.build/) monorepo with JavaScript, Python, and PHP apps.

## Prerequisites

- Node.js 20+ (see [`.nvmrc`](.nvmrc))
- Python 3.11+ for Django
- PHP 8.2+ and Composer for Laravel

## Install

**Node / Turbo (repo root):**

```bash
npm install
```

**JavaScript apps (optional per-app lockfiles):**

```bash
npm run install:apps
```

**Django:** see [`apps/django/README.md`](apps/django/README.md)

**Laravel:** see [`apps/laravel/README.md`](apps/laravel/README.md)

## Commands

From the repo root:

| Command | Description |
| --- | --- |
| `npm start` | Start dev servers for all packages that define `start` |
| `npm run build` | Run `build` across the workspace |
| `npm run typecheck` | TypeScript checks (JS apps) |

Examples:

```bash
npm start -w @repo/web
npm start -w @repo/django
npm start -w @repo/laravel
```

## Layout

| App | Stack | Dev URL |
| --- | --- | --- |
| [`apps/web`](apps/web/README.md) | Vite + React | http://localhost:5173/ |
| [`apps/coffee-app`](apps/coffee-app/README.md) | Vite + React | http://localhost:5174/ |
| [`apps/react-app`](apps/react-app/README.md) | Vite + React + Express | http://localhost:5173/ (client) |
| [`apps/django`](apps/django/README.md) | Django | http://127.0.0.1:8000/ |
| [`apps/laravel`](apps/laravel/README.md) | Laravel | http://127.0.0.1:8001/ |
| [`packages/typescript-config`](packages/typescript-config/) | Shared TS config for JS apps | — |
