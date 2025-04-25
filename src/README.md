# Source Directory

## Purpose
This directory contains the main application code and business logic for the Stride client application. It houses all React components, styles, assets, and application logic.

## Contents
- `App.tsx` - Main application component
- `App.css` - Styles for the main application component
- `main.tsx` - Application entry point that renders the App component
- `index.css` - Global styles for the application
- `vite-env.d.ts` - TypeScript declarations for Vite
- `assets/` - Static assets like images, icons, and SVGs

## Code Organization
The application follows a standard React + TypeScript + Vite structure. As the application grows, consider organizing code into the following directories:

- `components/` - Reusable UI components
- `hooks/` - Custom React hooks
- `services/` - API services and data fetching logic
- `utils/` - Utility functions and helpers
- `types/` - TypeScript type definitions
- `contexts/` - React context providers
- `store/` - State management (Redux, Zustand, etc.)

## Guidelines for Changes
1. Follow the established naming conventions:
   - Components: `PascalCase.tsx`
   - Custom Hooks: `useCamelCase.ts`
   - Context Providers: `PascalCaseContext.tsx`
   - Utility Functions: `camelCase.ts`

2. Keep components focused and single-purpose
3. Extract reusable logic into custom hooks
4. Use TypeScript for type safety
5. Co-locate tests with their respective components
6. Follow the React + Vite best practices

## Testing
- Use Vitest for unit and component testing
- Co-locate test files with the components they test
- Follow the testing commands in the project documentation
