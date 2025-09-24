# Replit.md

## Overview

Anchor Paints is a professional static website showcasing premium antifouling paint products for marine vessels. The website features a modern, responsive design with a maritime color scheme (red, blue, white) and comprehensive sections including product features, application guides, benefits comparisons, and gallery showcases. Built as a React-based static site optimized for performance and professional presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React architecture with functional components and hooks:
- **Component Structure**: Modular component design with dedicated sections (Hero, Features, About, Application Guide, Benefits, Gallery, Products, Resources)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Styling**: Tailwind CSS with custom theme configuration and shadcn/ui component library
- **Typography**: Google Fonts integration (Montserrat for headings, Open Sans for body text)

### Backend Architecture
The application includes a minimal Express.js backend setup:
- **Server Framework**: Express.js with TypeScript support
- **Development Mode**: Vite dev server integration for hot module replacement
- **Production Build**: Static file serving with Express fallback server
- **Database Layer**: Drizzle ORM configured for PostgreSQL (though primarily static content)

### Build System
- **Build Tool**: Vite with React plugin and custom theme integration
- **TypeScript**: Full TypeScript support with strict configuration
- **Asset Management**: Optimized asset bundling and static file generation
- **Production Deployment**: Builds to static files suitable for hosting on any static hosting service

### Design System
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Theme**: Professional variant with primary blue (#3b4f75) and red accent colors
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Accessibility**: ARIA compliant components and semantic HTML structure

### Content Management
- **Static Content**: All content is component-based with no CMS dependency
- **Image Optimization**: Uses external CDN (Unsplash) for placeholder images
- **SEO**: Semantic HTML structure with proper meta tags and heading hierarchy

## External Dependencies

### Core Dependencies
- **React 18+**: Frontend framework with modern hooks API
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Express.js**: Backend server framework

### UI and Styling
- **@radix-ui/***: Accessible UI primitives for complex components
- **shadcn/ui**: Pre-built component library built on Radix
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Utility for conditional CSS classes
- **lucide-react**: Icon library

### Development and Build
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **wouter**: Lightweight routing library
- **drizzle-orm**: TypeScript ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL client

### Database
- **PostgreSQL**: Configured via Drizzle with Neon serverless driver
- **Database URL**: Environment variable based configuration

### Hosting and Deployment
- **Static Hosting Ready**: Builds to standard static files
- **Production Server**: Simple Express server for non-static deployments
- **Environment Variables**: DATABASE_URL, NODE_ENV, PORT configuration