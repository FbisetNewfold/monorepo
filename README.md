# monorepo

npm workspaces + [Turborepo](https://turbo.build/) monorepo. Each app also keeps its own `package-lock.json` for standalone installs (deploy, CI, or working inside one app only).

## Prerequisites

- Node.js 20+ (see [`.nvmrc`](.nvmrc))

## Install

**Full monorepo (Turbo, hoisted deps, root lockfile):**

```bash
npm install
```

**Per-app lockfiles** (independent `apps/<name>/package-lock.json`):

```bash
npm run install:apps
```

Or for one app:

```bash
npm install --no-workspaces --prefix apps/web
npm install --no-workspaces --prefix apps/coffee-app
```

Use `--no-workspaces` so npm does not use the root workspace lockfile and writes a lockfile in that app directory.

## Commands

From the repo root:

| Command | Description |
| --- | --- |
| `npm start` | Start dev servers for all apps |
| `npm run build` | Production build for all packages |
| `npm run typecheck` | TypeScript check across the workspace |
| `npm run install:apps` | Refresh lockfiles in every app |

Run a single app (from root, uses workspace):

```bash
npm start -w @repo/web
npm start -w @repo/coffee-app
```

From an app directory (uses that app’s lockfile after `install:apps`):

```bash
cd apps/web && npm start
```

## Layout

- [`apps/web`](apps/web/README.md) — Vite + React starter (dev port 5173)
- [`apps/coffee-app`](apps/coffee-app/README.md) — Vite + React starter (dev port 5174)
- `packages/typescript-config` — shared TypeScript base config

## Lockfiles

| File | Purpose |
| --- | --- |
| [`package-lock.json`](package-lock.json) | Root workspace install (`npm install`) |
| `apps/web/package-lock.json` | Standalone install for web |
| `apps/coffee-app/package-lock.json` | Standalone install for coffee-app |

Shared config is referenced as `file:../../packages/typescript-config` in each app so standalone installs resolve without the npm registry.
