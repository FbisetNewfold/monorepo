# @repo/web

Vite + React starter in the [monorepo](../../README.md).

## Prerequisites

- Node.js 20+ (see [`.nvmrc`](../../.nvmrc))

## Install

From the monorepo root, use the [workspace install](../../README.md#install) or install this app only:

```bash
npm install --no-workspaces --prefix apps/web
```

From this directory:

```bash
npm install --no-workspaces
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Dev server at http://localhost:5173/ |
| `npm run build` | Typecheck and production build to `dist/` |
| `npm run typecheck` | TypeScript project references check |
| `npm run preview` | Serve the production build locally |

From the monorepo root:

```bash
npm start -w @repo/web
npm run build -w @repo/web
```

## License

MIT — see [LICENSE](./LICENSE).
