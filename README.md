# Cybergenix Security Website

A modern website for Cybergenix Security built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Responsive design
- Modern UI components

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── about/        # About page
│   │   ├── services/     # Services page
│   │   ├── teams/        # Teams page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── TopHero.tsx
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
│   ├── fonts/          # Font files
│   └── images/         # Image assets
└── styles/             # Global styles
```

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
