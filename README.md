# monorepo

pnpm workspaces + [Turborepo](https://turbo.build/) monorepo.

## Prerequisites

- Node.js 20+ (see [`.nvmrc`](.nvmrc))
- [Corepack](https://nodejs.org/api/corepack.html) enabled for pinned pnpm:

```bash
corepack enable
```

## Install

```bash
pnpm install
```

## Commands

From the repo root:

| Command | Description |
| --- | --- |
| `pnpm dev` | Start dev servers for all apps |
| `pnpm build` | Production build for all packages |
| `pnpm typecheck` | TypeScript check across the workspace |

Run a single app:

```bash
pnpm --filter @repo/web dev
pnpm --filter @repo/coffee-app dev
```

## Layout

- `apps/web` — Vite + React starter (dev port 5173)
- `apps/coffee-app` — Vite + React starter (dev port 5174)
- `packages/typescript-config` — shared TypeScript base config
