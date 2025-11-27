
# SnowGo Mobile App UI

An interactive React + Vite build of the SnowGo mobile experience: residents can request snow-clearing help, volunteers can accept tasks, and both flows are previewable end-to-end. The design comes from the SnowGo Figma file (https://www.figma.com/design/foedNWc7c459hQ8ym8lLVx/SnowGo-Mobile-App-UI) and is reproduced here with navigable screens.

## What’s inside
- **Framework**: React 18 + TypeScript, Vite bundler.
- **UI**: Tailwind v4 utilities, Radix UI wrappers (`src/components/ui`), Lucide icons.
- **Routing**: `react-router` with routes defined in `src/utils/routes.tsx`.
- **Components**: Screens in `src/components` mirror the app flows (splash, onboarding, resident, volunteer, confirmations).

## Quick start
1) Install dependencies: `npm install`
2) Run dev server: `npm run dev` (default at http://localhost:5173)
3) Build for production: `npm run build` (outputs to `dist/`)

## Navigating the flows
- Launch screens: start at `/` (AppLayout) or `/splash` then `/role-selection`.
- Resident journey: `/resident/home` → request help → confirmations → request details.
- Volunteer journey: `/volunteer/home` → browse requests → accept/complete tasks → points.
- Shared: profile, support, loading/error states.

## Contributing
- Keep components in `src/components`, routes in `src/utils/routes.tsx`, and shared primitives in `src/components/ui`.
- Use two-space indent, single quotes, and Tailwind classes in `className`. Favor reusing existing UI primitives before adding new ones.
- If you add logic-heavy pieces, consider lightweight tests (Vitest) under `src/__tests__/`.
