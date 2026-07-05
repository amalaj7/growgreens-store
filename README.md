# 🌿 Grow Greens Store Website

An elegant, modern, and highly responsive web application built with **React**, **Express**, **Vite**, **Tailwind CSS**, and **TypeScript**. This platform serves as the digital front for Grow Greens, India's leading microgreens farm founded by Ajay Gopinath, showcasing premium organic superfoods, home-growing workshops, global export setup consultations, and local weekly subscription models.

---

## 🚀 Tech Stack

### Frontend (Client)
- **Framework**: React 18 & TypeScript
- **Styling**: Tailwind CSS & Framer Motion (for premium micro-animations)
- **Routing**: [Wouter](https://github.com/molecula-fs/wouter) (a lightweight routing alternative to React Router)
- **State & Data Fetching**: TanStack React Query (v5)
- **Form Management**: React Hook Form & Zod Resolver
- **UI Components**: Radix UI (accessible, unstyled primitives styled with Tailwind CSS)
- **Icons**: Lucide React & React Icons

### Backend (Server)
- **Runtime**: Node.js & Express (v5)
- **Tooling**: `tsx` (TypeScript Execute) for dev hot-reloads, `esbuild` for production bundling
- **ORM / Database (Configured)**: Drizzle ORM + Drizzle Kit (ready for PostgreSQL)
- **Session/Auth (Configured)**: Passport.js (Local Strategy), express-session

---

## 📂 Codebase Architecture

The project follows a monorepo-like layout containing client, server, and shared code:

```text
├── client/                      # Front-end React Application
│   ├── public/                  # Static assets (images, icons)
│   └── src/
│       ├── App.tsx              # Application Root & Providers Setup
│       ├── main.tsx             # React DOM Mounting Entrypoint
│       ├── index.css            # Tailwind Imports & Global Custom Styles
│       ├── components/          # Reusable React UI Components
│       │   ├── ui/              # Radix UI primitives wrapper (Buttons, Dialogs, etc.)
│       │   ├── Navbar.tsx       # Core Navigation Bar
│       │   ├── Footer.tsx       # Brand Footer & Global Enquiries Info
│       │   └── PageHeader.tsx   # Reusable Hero Header for subpages
│       ├── context/
│       │   └── RegionContext.tsx# Timezone detection & Dynamic currency formatting
│       ├── hooks/               # Custom hooks (fetching products, contact mutator)
│       ├── lib/                 # Shared client utilities (React Query config)
│       └── pages/               # Page Components (Home, Story, Products, etc.)
├── server/                      # Back-end Express Application
│   ├── index.ts                 # Express Server Entrypoint
│   ├── routes.ts                # API Route Registry
│   ├── storage.ts               # In-Memory & Extensible Storage Layer
│   ├── static.ts                # Static asset production server
│   └── vite.ts                  # Vite development middleware loader
├── shared/                      # Universally shared files between Client & Server
│   ├── routes.ts                # Shared API Endpoint path schemas
│   └── schema.ts                # Zod schemas & TypeScript type interfaces
├── script/
│   └── build.ts                 # Esbuild & Vite compilation script
├── package.json                 # Project dependencies & scripts
├── tailwind.config.ts           # Tailwind Styling system configuration
└── tsconfig.json                # Project TypeScript configuration
```

---

## ✨ Key Platform Features

### 1. Multi-Channel Contact & Lead Intake
The Contact page [Contact.tsx](file:///z:/Personal/GITHUB/growgreens-store/client/src/pages/Contact.tsx) provides a dual approach for handling customer inquiries:
- **Google Forms Integration**: Submits user inputs directly to a central Google Forms sheet for automated lead management without CORS issues using `fetch` with `no-cors` mode.
- **Backend API Integration**: Backend endpoint compatibility is built-in using the `useContactSubmit` hook ([use-contact.ts](file:///z:/Personal/GITHUB/growgreens-store/client/src/hooks/use-contact.ts)), validating fields against the universal Zod schema [schema.ts](file:///z:/Personal/GITHUB/growgreens-store/shared/schema.ts).

### 2. SEO Optimization & Schema Markup
Every view integrates the [SEO.tsx](file:///z:/Personal/GITHUB/growgreens-store/client/src/components/SEO.tsx) component.
- **Dynamic Headers**: Optimizes tags like `<title>`, `<meta name="description">`, and keywords for search crawlers.
- **JSON-LD Schema Markup**: Injects structured organization and course schemas to ensure Rich Snippet representations on search engine results pages.

### 3. Bundled Production Compilations
To optimize cold start times and decrease syscall count during deployment, the project uses [build.ts](file:///z:/Personal/GITHUB/growgreens-store/script/build.ts):
- Compiles the React client using **Vite** and writes static assets to `dist/public`.
- Bundles the Express server files using **Esbuild** into a single compressed CommonJS file at `dist/index.cjs`.

---

## 🔗 Shared Schema & API Endpoints

The endpoints and schemas are defined in [schema.ts](file:///z:/Personal/GITHUB/growgreens-store/shared/schema.ts) and shared via path maps in [routes.ts](file:///z:/Personal/GITHUB/growgreens-store/shared/routes.ts).

### 1. Products API
- **Endpoint**: `GET /api/products`
  - **Description**: Returns all seeded products, classes, and subscriptions.
- **Endpoint**: `GET /api/products/:id`
  - **Description**: Retrieves a single product detail.
- **Schema**:
  ```typescript
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
  }
  ```

### 2. Contacts API
- **Endpoint**: `POST /api/contact`
  - **Description**: Submits contact/consulting request to database storage.
  - **Validation**: Enforced via Zod `insertContactRequestSchema`.

---

## 🛠️ Getting Started & Run Commands

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (Node Package Manager)

### Installation
1. Clone the repository and navigate into the workspace.
2. Install package dependencies:
   ```bash
   npm install
   ```

### Running Locally (Development)
Launch the development server. This fires up the Express API on port `5000` and configures Vite to hot-reload the front-end code:
```bash
npm run dev
```

### Production Build & Deploy
To build the server and front-end bundle for production:
```bash
npm run build
```
Once the build is complete, you can start the compiled production server locally:
```bash
npm run start
```

### Type Checking
To run the TypeScript compiler check across all modules:
```bash
npm run check
```
