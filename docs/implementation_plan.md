# Implementation plan

## Phase 1: Environment Setup

1.  Check if Node.js v20.2.1 is installed; if not, install Node.js v20.2.1. (Tech Stack: Tools)
2.  Install Next.js 14 (specifically using version 14 as per Next.js guidelines) to scaffold the frontend project. (Tech Stack: Frontend)
3.  Initialize a Git repository for the TONゲーム project in your workspace (using GitHub as version control). (Project Overview)
4.  Create the main project directory structure with separate folders: `/frontend` for client code and `/backend` for API and integrations. (Project Overview)
5.  Set up accounts and access for Supabase and Clerk, ensuring you have the necessary credentials and configuration details. (Tech Stack: Backend)
6.  **Validation**: Run `node -v` and `npx next --version` in your terminal to verify Node.js and Next.js versions.

## Phase 2: Frontend Development

1.  Create a new Next.js project with the App Router and Typescript in the `/frontend` directory. (Tech Stack: Frontend)

2.  Install Tailwind CSS and generate the `tailwind.config.js` file; configure it with custom colors using the following values:

    *   User UI: Main - #3B1E66, Background - #100C19, Text - #FFFFFF, Buttons/Active - #3A1F65, Accent - #E67E22
    *   Admin UI: Background - #181225, Text - #FFFFFF, Data Accent - #3B1E66, Buttons/Active - #3A1F65, Warning - #E74C3C (Branding: Colors)

3.  Install Shadcn UI components to enhance UI consistency. (Tech Stack: Frontend)

4.  In your Next.js project, update the global document by creating or modifying `/frontend/app/_document.tsx` to include the Good Times font using the link: `<link rel="stylesheet" href="https://use.typekit.net/akn4ocf.css">`. (Branding: Font)

5.  Build the user UI layout component in `/frontend/app/layout.tsx` using the specified user color scheme. (Branding: User UI Colors)

6.  Build the admin panel layout in `/frontend/app/admin/layout.tsx` applying the admin color scheme. (Branding: Admin UI Colors)

7.  Create pages for core functionalities:

    *   Quests page at `/frontend/app/quests/page.tsx`
    *   Daily Login page at `/frontend/app/daily-login/page.tsx`
    *   Ranking page at `/frontend/app/ranking/page.tsx`
    *   Store page at `/frontend/app/store/page.tsx`
    *   Embedded Unity Game page at `/frontend/app/game/page.tsx` (Project Overview: Core Functionality)

8.  Integrate Telegram OAuth login on the main login page (located at `/frontend/app/login/page.tsx`) to support authentication for Web3 users. (Integrations: Telegram OAuth)

9.  **Validation**: Run `npm run dev` from the `/frontend` directory and use browser developer tools to ensure the pages render correctly and are responsive on mobile devices.

## Phase 3: Backend Development

1.  In the same Next.js project, create API route folders under `/frontend/app/api` to host backend endpoints. (Tech Stack: Backend)
2.  Create the quests API endpoint by adding a file at `/frontend/app/api/quests/route.ts` that handles GET and POST requests with Supabase queries. (API Endpoints: /api/quests)
3.  Create the daily login API endpoint at `/frontend/app/api/daily-login/route.ts` to manage daily bonus rewards. (API Endpoints: /api/daily-login)
4.  Create the ranking API endpoint at `/frontend/app/api/ranking/route.ts` to calculate and serve user rankings. (API Endpoints: /api/ranking)
5.  Create the store API endpoint at `/frontend/app/api/store/route.ts` to manage store item purchases and point deductions. (API Endpoints: /api/store)
6.  Create the users API endpoint at `/frontend/app/api/users/route.ts` for user management functionalities. (API Endpoints: /api/users)
7.  Create the bot API endpoint at `/frontend/app/api/bot/route.ts` to handle Telegram bot notifications and dynamic message variables. (API Endpoints: /api/bot)
8.  Integrate Supabase in the backend: install the Supabase SDK, add necessary environment variables, and configure database queries with Row Level Security (RLS). (Tech Stack: Supabase; Data & Security: RLS)
9.  Integrate Clerk Auth into the API endpoints by installing the Clerk SDK and adding authentication middleware to secure user data. (Tech Stack: Clerk Auth)
10. Implement JWT verification on sensitive API endpoints to enhance data security. (Tech Stack: JWT)
11. **Validation**: Use Postman or curl commands to test each endpoint (e.g., `curl -X GET http://localhost:3000/api/quests`) ensuring proper JSON responses and secure access.

## Phase 4: Integration

1.  In the frontend, create service functions in `/frontend/src/services/api.ts` to centrally manage calls to each backend API endpoint. (Project Overview: Integration)
2.  Connect the frontend components (quests, daily login, ranking, store) to their respective API endpoints using the fetch API or axios. (App Flow: Core Functionality)
3.  Implement integration for the embedded Unity WebGL game by updating `/frontend/app/game/page.tsx` to include the Unity canvas and setup a mechanism to deduct points before game start. (Project Overview: Embedded Unity WebGL)
4.  Link Telegram OAuth login outcomes with backend processing by ensuring that authenticated user data is passed to `/api/bot` for notification triggers. (Integrations: Telegram OAuth, Bot)
5.  **Validation**: Open the browser with developer tools active, perform actions on the UI, and monitor network requests to verify correct API interactions and data flows.

## Phase 5: Deployment

1.  Set up the deployment configuration for the Next.js application (ensuring compatibility with Next.js 14) and deploy to a platform like Vercel. (Deployment: Next.js 14 note)
2.  Configure an AWS S3 bucket in `us-east-1` (or use Supabase Storage) to host and serve the Unity WebGL asset files. (Integrations: AWS S3)
3.  Configure environment variables on the deployment platform for Supabase, Clerk, and any other required service credentials. (Data & Security: Environment Configuration)
4.  Establish a CI/CD pipeline using GitHub Actions to run automated tests and deploy code on commit. (Tools: GitHub)
5.  **Validation**: Run end-to-end tests using a tool like Cypress to simulate key user flows (quests, game play, admin operations) and verify the production build operates correctly.
