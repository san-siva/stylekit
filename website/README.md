# StyleKit Documentation Website

This is the documentation website for [@san-siva/stylekit](https://www.npmjs.com/package/@san-siva/stylekit).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the documentation.

## Building for Production

To create a static export:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static files will be generated in the `out/` directory.

## Deployment

This website is configured to use Next.js static export (`output: 'export'`), which means it can be deployed to any static hosting service like:

- GitHub Pages
- Vercel
- Netlify
- Firebase Hosting
- AWS S3
- Cloudflare Pages

Simply upload the contents of the `out/` directory after building.
