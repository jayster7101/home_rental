# House rental listing
React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide React.

## Start
Use Node 22.12+ or 24. Run `npm ci`, then `npm run dev`.

## Docker
With Docker Desktop installed and running, run from this folder:

```sh
docker compose up --build
```

Open http://localhost:8080. This builds image `house-rental:local` with Node 24, then serves the compiled site with Nginx. Run the command again after edits to rebuild the site. Stop with Ctrl+C, then remove containers with `docker compose down`.

For live editing instead:

```sh
docker compose -f compose.dev.yaml up --build
```

Open http://localhost:5173. Source files and photos are mounted from your computer and updates refresh automatically. Rebuild after changing dependencies. Stop and remove with `docker compose -f compose.dev.yaml down`.

To build and run the production image without Compose:

```sh
docker build -t house-rental:local .
docker run --rm -p 127.0.0.1:8080:80 house-rental:local
```

Vercel continues to use the existing Vite configuration; Docker is for running locally or on a container host.

## Customize
Edit `src/data/property.ts` for all listing text, facts, terms, and contact details. Place photos in `public/photos/` and update their `src` values (e.g. `/photos/exterior.jpg`) and alt text. Empty photo sources show placeholders. Adding email or phone enables the corresponding contact link. No form backend is connected.
Update title and description in `index.html`. Remove `noindex,nofollow` when the real listing is ready for search engines.

## Vercel
Push this folder to a new GitHub repository and import it into Vercel. `vercel.json` configures Vite, build command `npm run build`, and output directory `dist`. Or run `npx vercel` from an authenticated CLI. This scaffold has not been deployed to a Vercel account.

## Build
`npm run build` checks TypeScript and creates the static site in `dist`. Run `npm run preview` to inspect it.

Gallery supports click, previous/next, arrow keys, and Escape, with native dialog focus handling. Layout adapts to mobile screens and respects reduced motion.

## Included photos
All 20 uploaded photos are included with descriptive room labels, alt text, and room filters. See `PHOTO_INDEX.md` for original filenames and room labels. Photos are included as supplied, without retouching. Rental price, address, dimensions, and room counts remain unset until confirmed.

Photo assets now retain their original uploaded filenames. To upgrade a photo, replace its file in `public/photos/` with a higher-resolution copy using the same filename, or change its `src` in `src/data/property.ts`.
# home_rental
