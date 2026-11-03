# monorepo

npm workspaces + [Turborepo](https://turbo.build/) monorepo.

## Prerequisites

- Node.js 20+ (see [`.nvmrc`](.nvmrc))

## Install

```bash
npm install
```

## Commands

From the repo root:

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev servers for all apps |
| `npm run build` | Production build for all packages |
| `npm run typecheck` | TypeScript check across the workspace |

Run a single app:

```bash
npm run dev -w @repo/web
npm run dev -w @repo/coffee-app
```

## Layout

- `apps/web` — Vite + React starter (dev port 5173)
- `apps/coffee-app` — Vite + React starter (dev port 5174)
- `packages/typescript-config` — shared TypeScript base config
