# Personal Portfolio Website

## Overview

This is a personal portfolio website built with a modern tech stack featuring a React frontend and Express backend. The project follows a minimalist design philosophy inspired by Replit's UI aesthetic, emphasizing clean typography, generous whitespace, and content-first layouts. The portfolio showcases professional experience, projects, publications, and blog posts through a multi-page navigation structure.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Client-side routing implemented with Wouter for lightweight navigation
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**UI Component System**
- Shadcn/ui components built on Radix UI primitives for accessible, unstyled base components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes with CSS variables
- Typography system using Inter font (Google Fonts) with defined hierarchy (H1-H3, body, small text)
- Consistent spacing using Tailwind units (4, 6, 8, 12, 16)

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Local component state using React hooks
- Custom hooks for responsive behavior (`useIsMobile`) and UI interactions (`useToast`)

**Design System**
- Replit-inspired minimalist aesthetic with extreme simplicity and functional design
- Layout system: max-width containers (5xl), consistent padding (py-16 md:py-24)
- Component variants using class-variance-authority for consistent styling patterns
- Custom CSS variables for colors, shadows, and theme-specific values

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the API server
- Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)
- Custom request logging middleware tracking path, duration, and JSON responses
- Static file serving for production builds

**Development vs Production**
- Development: Vite dev server integrated as Express middleware with HMR support
- Production: Pre-built static files served from `dist/public`
- Template injection for development with cache-busting using nanoid

**Storage Layer**
- In-memory storage implementation (`MemStorage`) for development/demo purposes
- Storage interface (`IStorage`) defining CRUD operations for future database integration
- Currently supports basic user management (getUser, getUserByUsername, createUser)

### Data Models

**Database Schema (Prepared for PostgreSQL)**
- Drizzle ORM configured for PostgreSQL with schema-first approach
- Users table with UUID primary keys, username, and password fields
- Zod schema validation using drizzle-zod for type-safe data insertion
- Migration support through Drizzle Kit

**Content Data Structure**
- Portfolio data centralized in `client/src/data/portfolio.ts`
- Sections include: personal info, social links, bio, experience, projects, publications, blog posts
- Bento box image grid with configurable sizes (large, wide, small)
- Markdown-style link parsing for rich text content

### External Dependencies

**Third-Party UI Libraries**
- Radix UI: Complete suite of accessible component primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- Lucide React: Icon library for consistent iconography
- React Icons: Additional icon sets (e.g., Google Scholar icon)
- Embla Carousel: Carousel/slider functionality
- CMDK: Command palette component
- date-fns: Date formatting and manipulation

**Development Tools**
- Replit-specific plugins for development experience:
  - `@replit/vite-plugin-runtime-error-modal`: Runtime error overlay
  - `@replit/vite-plugin-cartographer`: Code navigation
  - `@replit/vite-plugin-dev-banner`: Development environment indicator

**Database & ORM**
- Drizzle ORM: TypeScript ORM with type-safe queries
- @neondatabase/serverless: PostgreSQL driver for Neon serverless databases
- connect-pg-simple: PostgreSQL session store (prepared for future use)

**Form Handling**
- React Hook Form: Form state management
- @hookform/resolvers: Validation resolver integration
- Zod: Schema validation for forms and data

**Styling & UI Utilities**
- Tailwind CSS with PostCSS for processing
- class-variance-authority: Type-safe variant management
- clsx & tailwind-merge: Conditional class name composition
- Autoprefixer: CSS vendor prefix automation

**Build & Development**
- TypeScript: Static type checking across the stack
- ESBuild: Fast JavaScript bundler for production server code
- tsx: TypeScript execution for development
- Vite: Frontend build tool with plugin ecosystem