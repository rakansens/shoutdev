# .windsurfrules

## Project Overview

*   **Type:** Telegram Mini App
*   **Description:** A rhythm game inside Telegram that allows users to complete quests, earn rewards, purchase items, compete on leaderboards, and engage with a Unity WebGL game.
*   **Primary Goal:** To boost user engagement through interactive quests, daily login rewards, and real-time score tracking.

## Project Structure

### Framework-Specific Routing

*   **Directory Rules:**

    *   Next.js 14 (App Router): Uses the `app/[route]/page.tsx` conventions. This ensures that all routes are organized in nested folders under the `app` directory, facilitating server action usage and dynamic routing.
    *   Example 1: "Next.js 14 (App Router)" → `app/[route]/page.tsx` conventions.
    *   Example 2: "Next.js (Pages Router)" → Not applicable in this project.
    *   Example 3: "React Router 6" → Not applicable in this project.

### Core Directories

*   **Versioned Structure:**

    *   app/api: Next.js 14 API routes with Route Handlers for endpoints like /quests, /daily-login, /ranking, /store, /users, and /bot.
    *   app/admin: Directory dedicated to the Admin Panel implementing quest, store, and user management functionalities.

### Key Files

*   **Stack-Versioned Patterns:**

    *   app/dashboard/layout.tsx: Implements Next.js 14 root layouts for authenticated user views.
    *   app/admin/layout.tsx: Provides a layout for admin-specific pages, ensuring a clear separation between user and admin UIs.

## Tech Stack Rules

*   **Version Enforcement:**

    *   next@14: App Router is required; usage of `pages/` is prohibited. All routing must leverage the `app/` directory with nested file conventions.
    *   Tailwind CSS, TypeScript, and Shadcn UI must adhere to modern responsive design practices, especially for a mobile-first experience.

## PRD Compliance

*   **Non-Negotiable:**

    *   "To boost user engagement through interactive quests, daily login rewards, and real-time score tracking." This mandates an architecture that supports real-time interactions, secure API endpoints, and seamless integration with blockchain and WebGL components.

## App Flow Integration

*   **Stack-Aligned Flow:**

    *   Next.js 14 Auth Flow → `app/auth/login/page.tsx` uses server actions to handle secure authentication flows, integrating Clerk Auth and Telegram OAuth mechanisms.
