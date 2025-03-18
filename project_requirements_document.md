# Project Requirements Document (PRD)

## 1. Project Overview

This project is a Telegram Mini App called "TONゲーム" designed to bring an engaging gaming experience to Web3 users, gamers, and active community members on Telegram. The app leverages the TCIM Open Network’s Regular Web App SDK, integrates with Web3 features like wallet connections and cryptocurrency elements, and embeds an interactive Unity WebGL rhythm game. By combining quests, in-app rewards, and store purchases, TONゲーム creates a unique environment where users engage with challenges, earn points, and purchase in-game items—all within a mobile-first interface.

The main purpose of this project is to boost user engagement through interactive quests, daily login rewards, and real-time score tracking while ensuring robust security and compliance standards. Built using Next.js and Supabase, with seamless Telegram OAuth and JWT-based authentication, the system is designed for rapid expansion and future integration of features like a music management system. Success will be measured by high user retention, smooth in-app transactions, responsive performance, and reliable administrative oversight through a dedicated management dashboard.

## 2. In-Scope vs. Out-of-Scope

**In-Scope:**

*   Development of a Telegram Mini App interface optimized for mobile devices.
*   Core user features including quest participation, daily login rewards, game initiation via Unity WebGL, and point-based transactions in a virtual store.
*   A robust admin dashboard accessible via the /admin path that handles quest management, store item management, user progress tracking, ranking management, and a basic analytics dashboard.
*   Back-end API endpoints for quests, daily login, ranking, store interactions, Telegram bot commands, and user management.
*   Security enhancements through lock mechanisms, Supabase Row Level Security (RLS), and data encryption.
*   Telegram OAuth, Supabase Auth, and JWT for secure authentication.
*   Integration with external services such as Cloudflare for security, OpenAI API for enhanced bot responses, and potential payment gateways like Stripe or crypto solutions.
*   A review and moderation process for quests and store items that goes through pending review, published, or rejected statuses.

**Out-of-Scope:**

*   Advanced music management system including full friendly UI/DB integration for music assets (planned for phase 2+).
*   Extensive cross-platform desktop optimization; primary focus is mobile-first given the Telegram Mini App nature.
*   Overly complex gamification tiers beyond the provided quest system and basic scoring mechanics.
*   Custom integrations with services that are not already mentioned (e.g., additional OAuth providers).
*   Non-critical analytics beyond user counts, active sessions, quest achievements, and store purchase histories in the MVP.

## 3. User Flow

When a user launches the TONゲーム app via Telegram, they are greeted with a clean authentication screen that uses Telegram OAuth. Upon a successful login, the user lands on the home screen which displays a dynamic quest list along with daily login bonuses. The navigation menu—featuring Home, Ranking, Play, Store, and Settings—is straightforward and optimized for mobile use, ensuring that users can easily find their way around. This initial entry experience is designed to be welcoming and immediately informative, with clear paths to engage with challenges and rewards.

After exploring available quests and taking advantage of daily login rewards, the user may navigate to the Play section where they see a centrally located play button reminiscent of YouTube’s interface. Clicking this button leads them to a music selection screen, and once a soundtrack is selected, the game launches within an embedded Unity WebGL interface. Post-gameplay, users have their scores saved to the backend, with real-time updates affecting their ranking and allowing secure point deductions for gameplay. The journey culminates in seamless transitions between playing the game, checking leaderboards, and engaging in transactions at the in-app store.

## 4. Core Features

*   **User Authentication & Security**\
    • Telegram OAuth, Supabase Auth, and JWT for secure login\
    • Lock mechanism and Supabase RLS for data protection
*   **Quest Management**\
    • Display a list of quests (join Telegram groups, wallet connection, Twitter actions, etc.)\
    • Daily login bonus system with rewards for frequent visits\
    • Admin moderation with statuses (Draft, Pending Review, Published, Rejected)
*   **Gameplay Integration**\
    • Unity WebGL-based interactive rhythm game\
    • Seamless transition from game selection to gameplay\
    • Save game session data (score, progress, points deducted)
*   **Ranking and Progress Tracking**\
    • Real-time ranking updates based on quest point accumulation\
    • User progress and performance display integrated via API endpoints
*   **In-App Store Functionality**\
    • Purchase of in-game items using earned points\
    • Items include bonuses like quest reward multipliers and score improvement enhancements\
    • Admin control for adding/editing/deleting store items
*   **Admin Dashboard (/admin)**\
    • Full management of quests, store items, user progress, and ranking settings\
    • Data analytics dashboard for monitoring user engagement and purchase statistics\
    • Telegram bot management for automated notifications and dynamic messaging
*   **Telegram Bot Features**\
    • Automated message notifications for new quests, ranking updates, daily login rewards, game scores, and store purchases\
    • Dynamic insertion of variables such as {username}, {points}, {rank}, {score}, and {item_name}
*   **External Integrations & Future Features**\
    • Integration with Cloudflare, OpenAI, Stripe/Crypto payment gateways\
    • Planned future phase: advanced music management system integration

## 5. Tech Stack & Tools

*   **Frontend:**\
    • Next.js with App Router for a streamlined single-page application experience\
    • Tailwind CSS for styling following modern mobile-first practices\
    • Typescript for robust type-checking and cleaner code\
    • Shadcn UI for pre-built, customizable UI components\
    • Clerk Auth for additional authentication features if needed\
    • Integration of Good Times font via and a defined color scheme
*   **Backend:**\
    • Next.js for API endpoints and server-side functionality\
    • Supabase for database management and authentication\
    • RESTful API endpoints for quests, daily logins, rankings, store operations, Telegram bot management, and user administration
*   **Game Integration:**\
    • Unity WebGL for embedding the interactive game experience
*   **Additional Tools & Integrations:**\
    • Windsurf: An IDE with integrated AI coding capabilities for a smoother development experience\
    • Claude 3.7 Sonnet: For advanced AI reasoning and assistance in code generation\
    • External services like Cloudflare (security), OpenAI (enhancing bot responses), Stripe or crypto payment gateways (if monetization is required), and Google Analytics/PostHog for data insights

## 6. Non-Functional Requirements

*   **Performance:**\
    • The mini app should load quickly (ideally within 2-3 seconds) on mobile devices\
    • API responses to be under 300ms where possible for a responsive user experience\
    • Smooth transitions between views with minimal latency in gameplay initiation
*   **Security:**\
    • Use of HTTPS and secure API endpoints\
    • Data encryption via Supabase for sensitive information (wallet IDs, transaction histories)\
    • Implementation of lock mechanisms and robust access controls with Supabase RLS
*   **Compliance:**\
    • GDPR compliance with capabilities to process user data deletion requests\
    • Strict adherence to data retention and privacy policies
*   **Usability:**\
    • Mobile-first optimized design with clear navigation and large touch-friendly elements\
    • Consistent theming across the Telegram Mini App and admin dashboard\
    • Clear, user-friendly error messaging and support for in-app troubleshooting

## 7. Constraints & Assumptions

*   Development is optimized for mobile devices given that the app functions as a Telegram Mini App.
*   The project relies on the availability and performance of Supabase, Telegram OAuth, and external services (Cloudflare, OpenAI API).
*   The security measures proposed assume that the Supabase platform’s in-built capabilities (like RLS and encryption) perform as expected.
*   Design and user paths are based on the assumption that users are both Web3-savvy and familiar with common gaming interfaces.
*   Future integration phases (like the advanced music management system) will follow after the successful deployment of the MVP.
*   There is an underlying assumption of having adequate server resources and API rate limits managed through Cloudflare for security and performance.

## 8. Known Issues & Potential Pitfalls

*   **API Rate Limits:**\
    • There is a potential risk of API rate limits if too many requests are made to external services like Telegram or Supabase.\
    • Mitigation: Introduce caching strategies and exponential back-off mechanisms in API request handling.
*   **Unity WebGL Integration:**\
    • Embedding Unity can pose challenges around load times and mobile optimization.\
    • Mitigation: Optimize asset loading, compress game assets, and test thoroughly on target mobile devices.
*   **Real-Time Updates & Data Sync:**\
    • Ensuring that game scores, ranking updates, and store transactions sync in real time can be complex.\
    • Mitigation: Utilize robust API design, consider WebSockets for real-time communication, and implement rigorous testing.
*   **Security Vulnerabilities:**\
    • Potential for unauthorized data access if lock mechanisms or RLS are not configured correctly.\
    • Mitigation: Regular security audits, comprehensive testing of authentication flows, and continuous monitoring.
*   **Admin Moderation Delays:**\
    • The approval process for content (quests/store items) may introduce delays affecting user experience.\
    • Mitigation: Implement clear UI indicators for pending content and consider automated reviews where appropriate.

This document provides a crystal clear reference for all further technical documents needed to develop the TONゲーム Telegram Mini App. Every section has been detailed with practical, everyday english ensuring that no ambiguity remains regarding feature functionality, system architecture, or technical dependencies.
