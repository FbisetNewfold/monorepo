import './App.css'

export default function App() {
  return (
    <main className="app">
      <h1>Hello from monorepo</h1>
      <p>
        This app lives in <code>apps/web</code> inside a pnpm + Turborepo workspace.
      </p>
      <p>
        <a href="https://turbo.build/repo/docs" target="_blank" rel="noreferrer">
          Turborepo docs
        </a>
        {' · '}
        <a href="https://pnpm.io/workspaces" target="_blank" rel="noreferrer">
          pnpm workspaces
        </a>
      </p>
    </main>
  )
}
