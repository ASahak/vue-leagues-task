# Sports Leagues Finder SPA

A modern, responsive Single Page Application built as a technical assessment.

## 🛠 Tech Stack
- **Vue 3 (Composition API)** with **TypeScript** for type safety.
- **Vuestic UI**: Used for the component library (Cards, Inputs, Modals).
- **Pinia**: State management for user filters and search queries.
- **TanStack Query (Vue Query)**: Advanced server-state management handling automatic **caching** and loading states.
- **Vite**: Ultra-fast development server and build tool.

## 🏗 Architecture Decisions
1. **Component-Based Decomposition**: The app is split into small, single-responsibility components (`LeagueCard`, `BadgeModal`, `LeagueFilters`) to improve testability and readability.
2. **Server-Side Caching**: Using TanStack Query, we implement the requirement for caching badge responses. Once a badge is fetched for a specific `leagueId`, it is stored in memory and served instantly for subsequent clicks.
3. **Derived State Management**: Filtering is handled via a `computed` property within a Pinia store. This ensures the UI is always in sync with the search/filter inputs without redundant state variables.
4. **Responsive Layout**: Utilizing Vuestic’s flex grid system to ensure seamless transitions between mobile (1-column), tablet (2-column), and desktop (3-column) views.

## 🚀 Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`
## Project Setup

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
