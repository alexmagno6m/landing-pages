# Copilot Instructions for AI Coding Agents

## Project Overview
This is a Next.js 13+ app using the `/src/app` directory structure, bootstrapped with `create-next-app`. The project is designed for modern landing pages and uses TypeScript, PostCSS, and Vercel deployment.

## Key Architecture
- **App Directory**: All routing and page components are under `src/app/`. Each subfolder (e.g., `contact/`) is a route.
- **Global Styles**: `src/app/globals.css` contains global CSS, loaded via the root layout.
- **Layouts**: `src/app/layout.tsx` is the root layout for all pages.
- **Public Assets**: SVGs and images are stored in `public/` and referenced via `/` paths in components.
- **TypeScript**: All code is written in TypeScript. Use type annotations and interfaces for props and data.

## Developer Workflows
- **Start Dev Server**: Use `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
- **Hot Reloading**: Editing files in `src/app/` triggers automatic reloads.
- **Build for Production**: Use `npm run build`.
- **Vercel Deployment**: Project is optimized for Vercel. No custom server code is present.

## Patterns & Conventions
- **Pages**: Each route is a folder with a `page.tsx` file. Example: `src/app/contact/page.tsx`.
- **Layouts**: Use `layout.tsx` for shared UI across routes.
- **Global CSS**: Only import global styles in `layout.tsx`.
- **SVG Usage**: Import SVGs from `public/` using `<img src="/file.svg" />` or Next.js `<Image>`.
- **Font Optimization**: Uses `next/font` for loading Geist font.
- **No API Routes**: No backend API routes are present; all logic is client-side.

## External Dependencies
- **Next.js**: Core framework for routing, SSR, and static generation.
- **PostCSS**: For CSS processing (see `postcss.config.mjs`).
- **TypeScript**: Strict typing enforced (see `tsconfig.json`).

## Example: Adding a New Page
1. Create a folder under `src/app/` (e.g., `about/`).
2. Add `page.tsx` for the route component.
3. (Optional) Add `layout.tsx` for route-specific layout.
4. Reference assets from `public/` as needed.

## References
- See `README.md` for basic setup and deployment.
- See `src/app/layout.tsx` for global layout and style patterns.
- See `public/` for asset management.

---
For questions or unclear conventions, ask for clarification or review the referenced files above.
