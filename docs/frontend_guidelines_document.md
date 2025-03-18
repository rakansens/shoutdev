# Frontend Guideline Document

This document details the frontend architecture, design principles, and the overall technologies used in the TONゲーム (TON Game) Telegram Mini App. It is intended to provide a clear overview of our frontend setup, ensuring both technical and non-technical team members can understand it.

## 1. Frontend Architecture

Our frontend is built on Next.js, leveraging the App Router for efficient page navigation and routing. The use of Next.js means we benefit from server-side rendering where needed and client-side capabilities for dynamic interactions.

Key components include:

- **Framework and Libraries:**
  - Next.js with a focus on the App Router paradigm
  - Typescript for strict code typing and easier maintenance
  - Tailwind CSS for utility-first styling
  - Shadcn UI components for a modern, consistent UI
  - Clerk Auth integration for user authentication, alongside Telegram OAuth, Supabase Auth, and JWT mechanisms

These choices are geared to ensure scalability, maintainability, and high performance. The architecture supports modular development where each feature, such as quests, rankings, and game integration, can be scaled independently. Using Next.js helps with faster page loads, and its built-in tools for code splitting and lazy loading ensure a smooth user experience even as the app grows.

## 2. Design Principles

The design of TONゲーム is guided by the following principles:

- **Usability:** Clear and accessible interfaces to ensure that users, regardless of their technical know-how, can interact with the app effectively.
- **Accessibility:** Focus on making the app accessible to a wide audience, including support for screen readers, keyboard navigability, and color contrast adherence.
- **Responsiveness:** The app is built to work seamlessly across various devices, ensuring that gamers and community members enjoy the experience on desktops, tablets, and mobile phones.

We apply these principles by simplifying the user journey, ensuring clear call-to-action buttons, and providing responsive layouts that adjust to different screen sizes. The design is influenced by a modern, flat aesthetic with a touch of material principles for intuitive interactions.

## 3. Styling and Theming

### Styling Approach

The project uses Tailwind CSS to maintain a consistent design and speed up styling with utility-first classes. This framework enables rapid prototyping and ensures that components follow a unified look.

### CSS Methodologies

While Tailwind CSS is our primary styling framework, we ensure that the components adhere to modern CSS methodologies. For naming conventions and organization, we maintain a structure that reflects the Block, Element, Modifier (BEM) principles when custom CSS is required.

### Pre-Processors & Frameworks

Tailwind CSS serves as both our styling framework and a processor for many design needs, reducing the need for additional pre-processors.

### Theming

To ensure a consistent look-and-feel across both user and admin interfaces, we utilize a set of defined colors and fonts:

- **User UI Colors:**
  - Main Color: #3B1E66 (Deep Violet)
  - Background Color: #100C19 (Black Purple)
  - Text Color: #FFFFFF (White)
  - Button Color: #3A1F65 (Rich Violet)
  - Accent Color: #E67E22 (Orange)

- **Admin UI Colors:**
  - Background Color: #181225 (Dark Purple)
  - Text Color: #FFFFFF (White)
  - Data Accent: #3B1E66 (Deep Violet)
  - Button Color: #3A1F65 (Rich Violet)
  - Warning: #E74C3C (Red)

- **Style:** The overall aesthetic can be described as modern with a flat design approach, incorporating elements of material design to provide familiarity and ease-of-use.

- **Fonts:** We use the 'Good Times' font, including it via a stylesheet link from Typekit to ensure consistent typography across the application.

## 4. Component Structure

Our frontend is structured around reusable, modular components. The key points include:

- **Organization:** Components are organized in a logically structured folder system aligned with their functionalities (e.g., authentication, quests, ranking, game view).
- **Reusability:** Each component is designed to be reused across different pages, which reduces redundancy and aids in maintainability.
- **Encapsulation:** By encapsulating behaviors and styles within components, we ensure that modifications in one area do not have unintended side-effects on others.

Using a component-based architecture in Next.js, potentially further supported by React’s state and props system, promotes cleaner code and easier debugging.

## 5. State Management

State management is critical to ensuring a smooth and interactive user experience:

- **Approach:** We manage state locally within components when possible and globally using built-in Context API solutions for sharing state.
- **Libraries & Patterns:** In areas that need extensive state management or cross-component data flow, we lean on patterns provided by Next.js and React, and can integrate with additional libraries if required in future iterations.
- **Use Cases:** State management is particularly relevant to features such as authentication states (handled via Clerk), game session data for Unity WebGL interactions, quest progress, and ranking updates. This holistic management ensures that every part of the application reflects the most up-to-date data without unnecessary re-renders.

## 6. Routing and Navigation

Routing within TONゲーム is handled using Next.js’s App Router:

- **Navigation Structure:** The application divides areas such as the main game interface, user profile sections, and the dedicated admin dashboard (accessible at `/admin`).
- **Library:** Next.js’s built-in routing and page system simplifies navigation, providing both static and dynamic routes where needed.
- **User Journey:** Users can easily move between different parts of the app, such as switching between the gaming interface, quest listings, store, and ranking pages, ensuring a smooth flow and clear visual hierarchy.

## 7. Performance Optimization

Performance has been a key aspect in the design and implementation process. Our strategies include:

- **Lazy Loading:** Components and assets are lazy-loaded to improve initial load times, especially for heavily interactive or media-rich sections like the Unity WebGL game.
- **Code Splitting:** Taking advantage of Next.js’s support for code splitting ensures that users only load the JavaScript necessary for the page they are viewing.
- **Asset Optimization:** Images, fonts, and other media are optimized using both Next.js tools and third-party services to ensure quick loading and minimal bandwidth usage.

These optimizations ensure the app is both fast and responsive, contributing to an overall better user experience.

## 8. Testing and Quality Assurance

Ensuring the reliability and robustness of our frontend code is paramount. Our testing strategies include:

- **Unit Tests:** Using libraries like Jest, we validate individual components and functions to ensure they behave correctly in isolation.
- **Integration Tests:** React Testing Library helps test component interactions, ensuring that components work together as expected.
- **End-to-End Tests:** For full user journey testing, tools such as Cypress are used to simulate real-world usage scenarios.
- **CI/CD Pipeline:** Automated testing is integrated into our CI/CD pipelines to catch issues early and ensure consistent quality as new code is pushed.

These measures help maintain high quality and reliability across all parts of the frontend codebase.

## 9. Conclusion and Overall Frontend Summary

The TONゲーム frontend is built around a flexible, scalable architecture using Next.js, enhanced by modern technologies such as Tailwind CSS and Shadcn UI. Our design principles prioritize usability, accessibility, and responsiveness. A modular component-based approach combined with robust state management, thoughtful routing, and optimization strategies paves the way for a high-performance application.

Key unique aspects include:

- Seamless integration of Web3 features within a Telegram Mini App environment
- A dedicated admin interface for comprehensive content and user management
- A strong focus on both user and admin experiences through specifically tailored UI color palettes and theming strategies

This guideline document sets the foundation for developing and maintaining a frontend that not only meets the technical requirements but also delivers an engaging and intuitive experience for our diverse user base.

By following these guidelines, every team member—from developers to designers—will have a clear roadmap for contributing to the TONゲーム project.