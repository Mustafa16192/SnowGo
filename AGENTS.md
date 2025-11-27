# Repository Guidelines

## Project Structure & Module Organization
- `src/main.tsx` mounts React; `src/App.tsx` wires the router; `src/utils/routes.tsx` centralizes route definitions.
- Screen components live in `src/components` with names matching routes; shared primitives and Radix-based UI wrappers are in `src/components/ui`, with image helpers in `src/components/figma`.
- Global styles come from `src/index.css` (Tailwind v4 build) with optional overrides in `src/styles/globals.css`. Attribution notes sit in `src/Attributions.md`.

## Build, Test, and Development Commands
- `npm install` (Node 18+ recommended) to fetch dependencies.
- `npm run dev` starts the Vite dev server (default http://localhost:5173) for interactive UI review.
- `npm run build` produces the production bundle in `dist/` for deployment or static previews.

## Coding Style & Naming Conventions
- TypeScript + React functional components; use PascalCase file/component names for screens and camelCase for helpers (e.g., `ResidentHome.tsx`, `ImageWithFallback.tsx`).
- Favor hooks/composition over prop drilling; reuse primitives from `src/components/ui` instead of reimplementing patterns.
- Tailwind utility classes stay in `className`; group them layout → spacing → color → state for readability. Avoid arbitrary values unless they trace to the design spec.
- Maintain two-space indentation, single quotes, and trailing commas consistent with existing files.

## Testing Guidelines
- No automated suite yet; after changes, run `npm run dev` and click through the primary flows (splash → onboarding, resident request, volunteer accept/complete) to confirm navigation and visuals.
- When adding logic, prefer lightweight Vitest + React Testing Library smoke tests under `src/__tests__/` that cover branching and routing; keep fixtures minimal.

## Commit & Pull Request Guidelines
- Use Conventional Commit-style prefixes (`feat:`, `fix:`, `chore:`) with meaningful scopes (`feat: resident-map gesture`); one focused concern per commit.
- PRs should call out the flows touched, list impacted routes (e.g., `/resident/request-help`), and link related issues/designs. Attach before/after screenshots or a short GIF for UI changes.
- Keep PRs small and self-contained; note any manual verification steps performed.

## Routing & Screen Additions
- To add a screen: create `src/components/NewScreen.tsx`, import and register it in `src/utils/routes.tsx`, and expose navigation via `Link`/buttons in the relevant parent (e.g., `AppLayout`, `BottomNav`).
- Mirror existing empty/loading/error patterns (`ResidentHomeEmpty`, `LoadingState`, `ErrorState`) to keep UX consistent.
