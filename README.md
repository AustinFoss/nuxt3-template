# Nuxt 3 + Pinia + Tailwind

This is my minimal template of a Nuxt 3 project with Pinia and Tailwind CSS already integrated with pages, components, and layouts already in use. All nuxt directories have been moved into the `src` directory, isolating them from the rest of the config files.

Mainly as I reminder for myself so I don't have to keep looking it up in the documentation.

---

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
