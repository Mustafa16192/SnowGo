# SnowGo Mobile App UI

## Project Overview
SnowGo Mobile App UI is a React-based mobile application prototype designed to facilitate community-based snow removal. It connects "Residents" who need snow removal assistance with "Volunteers" willing to help.

The project is built using **Vite**, **React**, **TypeScript**, and utilizes **Radix UI** primitives (likely via shadcn/ui) for its component library, along with **Tailwind CSS** for styling.

### Key Features
*   **Dual User Roles:** Distinct flows for Residents and Volunteers.
*   **Onboarding:** Step-by-step onboarding screens for both roles.
*   **Request Management:** Creation, tracking, acceptance, and completion of snow removal tasks.
*   **Gamification:** Community points system for volunteers.
*   **Map Integration:** Visualizing requests and tasks.

## Architecture & Technologies

*   **Framework:** React (v18.3.1)
*   **Build Tool:** Vite (v6.3.5)
*   **Language:** TypeScript
*   **Routing:** React Router (v6) - Defined in `src/utils/routes.tsx`
*   **Styling:** Tailwind CSS (inferred from usage of `clsx`, `tailwind-merge`), `class-variance-authority`.
*   **UI Components:** Radix UI primitives (Accordion, Dialog, Popover, etc.) found in `src/components/ui`.
*   **Icons:** Lucide React.

## Building and Running

### Prerequisites
*   Node.js (v20+ recommended)
*   npm

### Commands
*   **Install Dependencies:**
    ```bash
    npm install
    ```
*   **Start Development Server:**
    ```bash
    npm run dev
    ```
*   **Build for Production:**
    ```bash
    npm run build
    ```

## Development Conventions

### Directory Structure
*   `src/components/`: Contains all application components.
    *   `src/components/ui/`: Reusable UI components (buttons, inputs, cards, etc.), following shadcn/ui patterns.
    *   Feature-specific components (e.g., `ResidentHome.tsx`, `Login.tsx`) reside directly in `src/components/` or specific subdirectories if refactored.
*   `src/utils/routes.tsx`: Centralized routing configuration using `createBrowserRouter`.
*   `src/guidelines/`: Contains project-specific guidelines.

### Component Design
*   **Mobile-First:** The UI is explicitly designed for mobile contexts.
*   **Composition:** Heavy use of composed Radix UI components for accessibility and standardized styling.
