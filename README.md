# nicolascoleman.me

Nicolas Coleman's engineering portfolio. Built with [Astro](https://astro.build) as a static site: fast, no server to maintain, and free to host.

## Run it locally

```sh
npm install      # first time only
npm run dev      # → http://localhost:4321 (reloads as you edit)
```

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Local dev server with live reload                   |
| `npm run build`   | Builds the production site into `dist/`             |
| `npm run preview` | Serves the `dist/` build locally                    |
| `npm run check`   | Type-checks the project and validates content files |

## Where everything lives

| What                                                  | Where                                       |
| ----------------------------------------------------- | ------------------------------------------- |
| Name, hero text, about, experience, skills, contact   | `src/content/site.yaml`                     |
| Projects, one file each, ordered by `order`           | `src/content/projects/*.md`                 |
| Project photos                                        | `src/assets/projects/<project>/`            |
| Logos, portrait, reel poster                          | `src/assets/logos/`, `src/assets/site/`     |
| Showreel video and résumé PDF                         | `public/media/`, `public/resume.pdf`        |
| Colors, fonts, spacing                                | Tokens at the top of `src/styles/global.css` |

The fields each file accepts are defined in `src/content.config.ts`. If a field is missing or has the wrong type, the build stops and names the file and field.

## Editing the words and photos yourself

1. In VS Code, choose **Terminal → New Terminal** and run `npm run dev`. Open the address it prints (usually http://localhost:4321). The page refreshes every time you save a file.
2. Change the text in `src/content/site.yaml` (hero, about, experience, contact) or in a project's file in `src/content/projects/`. In a project file, the settings sit between the two `---` lines and the write-up paragraphs go below them.
3. Save. If something is wrong, the terminal names the file and the line.

A few rules keep these files working:

- Keep the spaces at the start of each line. They set the structure.
- The `- ` at the start of a list line is structure, not punctuation. Leave it in.
- If your text has a colon followed by a space (like `My part: test equipment`), wrap the whole text in double quotes.
- To add a photo, put it in the project's folder under `src/assets/projects/` and point to it with a path like `../../assets/projects/sky-chess/photo.jpg`.

**Adding a project (until the editor exists):** copy an existing file in `src/content/projects/`, edit the fields, and put its photos in a matching folder under `src/assets/projects/`. Set `page: false` to show a card without a detail page. For a team project, list what you did yourself under `contributions` (shown as "My part"), and use `sectionsTitle` (for example `How it works`) to rename the "The build" heading.

## Media guidelines

- **Photos:** JPEG or PNG, ideally no larger than ~2400 px on the long edge. The build generates responsive AVIF/WebP versions automatically.
- **Showreel:** MP4 (H.264) without an audio track, under ~10 MB. Desktop uses `public/media/reel-1080.mp4`; phones use `reel-720.mp4`.
- **Videos on project pages:** add a YouTube ID under `videos:`. The player loads only when someone presses play. Optional: `start` (seconds into the video) and `poster` (a custom thumbnail image).

## Deploying

The site is hosted on **GitHub Pages** from the `nicolasseann/website2026` repository. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it, usually within two minutes. Progress shows in the repository's **Actions** tab.

How it's set up:

- **GitHub:** Settings → Pages → Source is **GitHub Actions**, and the custom domain is `www.nicolascoleman.me` with **Enforce HTTPS** on. `public/CNAME` names the same domain.
- **Domain:** registered at GoDaddy, with its DNS managed in Cloudflare (free plan). All records are set to **DNS only** (gray cloud), because GitHub can't issue the HTTPS certificate through Cloudflare's proxy.

| Type  | Name  | Value                    |
| ----- | ----- | ------------------------ |
| A     | `@`   | `185.199.108.153`        |
| A     | `@`   | `185.199.109.153`        |
| A     | `@`   | `185.199.110.153`        |
| A     | `@`   | `185.199.111.153`        |
| CNAME | `www` | `nicolasseann.github.io` |

GitHub redirects the bare domain to `www` automatically. Free GitHub accounts can only publish Pages from public repositories, so keep this one public.

## Notes

- Fonts (Archivo and IBM Plex Mono) are downloaded at build time and served from this site, so visitors never request them from Google.
- Motion respects `prefers-reduced-motion`. The reel also stays paused for visitors with Data Saver on, and pauses whenever it scrolls off screen.
