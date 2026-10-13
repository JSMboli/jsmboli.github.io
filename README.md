# Dr Julius Sechang Mboli — Academic Website (October 2026)

A modern, multi-page, static personal research and professional website for deployment on GitHub Pages at **https://jsmboli.github.io/**.

## Deploy the complete website

1. **Back up your existing repository** before replacing or merging files. The included `legacy/` folder preserves copies of the six original HTML pages.
2. Extract `Julius_Mboli_GitHub_Pages_2026_Enhanced.zip`. Its contents are already at the website-root level (`index.html`, `assets/`, `publications.html`, etc.).
3. Copy/extract **the contents of the ZIP**, not a surrounding folder, into the root of the `JSMboli/jsmboli.github.io` repository. Replace the old root HTML pages and add the new pages and `assets/` directory.
4. Commit and push to the publishing branch (normally `main`). In **Settings → Pages**, verify GitHub Pages is publishing from that branch and its `/ (root)` directory, if that is your existing configuration.
5. Allow GitHub Pages to rebuild. Open `https://jsmboli.github.io/` and check both desktop and mobile layouts. Hard-refresh the browser if the old CSS is cached.
6. The site also works when served locally with `python3 -m http.server 8000` from the extracted folder; visit `http://localhost:8000/`.

**Important:** I have prepared the files; I have **not** modified your live GitHub repository, DNS or GitHub Pages settings. You need to upload/commit the files yourself (or authorise a connected GitHub workflow).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | New home, profile, featured work and recent research |
| `research.html` | Six research themes and process |
| `publications.html` | Searchable / filterable publications and accurate status labels |
| `projects.html` | Current collaborations and earlier projects |
| `teaching.html` | Postgraduate modules, bootcamp and executive training |
| `talks.html` | Keynotes, industry talks and public engagement |
| `awards.html` | SFHEA, FHEA and leadership |
| `ResearchBlog.html` | Research news and announcements (preserved URL) |
| `resources.html` | Open resources and course portals |
| `sources.html` | Evidence register and attribution |
| `404.html` | Friendly error page |

## Main technical improvements

- Pure HTML5, CSS3 and vanilla JavaScript; **no runtime package installation, build step, jQuery, Bootstrap, CDN, API key or paid service**.
- Responsive, accessible mobile navigation, accessible search/filter widgets, keyboard focus styles and reduced-motion support.
- Light/dark theme with local-only preference, descriptive page titles, canonical URLs, Open Graph metadata and JSON-LD Person schema.
- `sitemap.xml`, `robots.txt`, `.nojekyll` and a minimal web manifest.
- Real `mailto:` contact action; the old template's PHP `contact_form/contact_form.php` dependency was not compatible with static GitHub Pages and has been retired from the new pages.
- No analytics trackers, contact form data collection, third-party fonts or external JavaScript. The site does not need a cookie-consent banner for its own operation; reassess this if you add analytics, embeds or marketing cookies.
- The old main photo and existing files remain locally available. The `legacy/` directory retains archival versions of the original pages.
- A newly created one-page **2026 academic/professional profile PDF** is available in `assets/Julius_Sechang_Mboli_Academic_Profile_2026.pdf` and linked on the website. It is explicitly a short profile, **not a comprehensive CV**.

## Editorial standards

- Published papers are linked to the publisher/DOI where available; preprints are not described as peer-reviewed publications.
- The 2026 PMLR moral-decoupling paper is **published**; the Hull Worktribe status `In Progress` is an administrative state and must not override the published proceedings record.
- The digital-twins chapter has a publisher DOI; waste-classification arXiv text remains clearly labelled a preprint.
- Original Worktribe conference records that may represent the same presentation are not double-counted as distinct journal outputs.
- Disputed or not independently confirmed professional details are not embellished. All statements should be reviewed by Dr Mboli before public deployment.
- `Julius_Mboli_CV.pdf` in the original archive is **historical/outdated** and deliberately not linked; the new one-page profile is the current public download.

## Maintenance

- All content is ordinary HTML, so you can edit it directly in VS Code without Node or a static-site generator.
- Styling: `assets/css/site.css`.
- Navigation, theme switcher and publication filters: `assets/js/site.js`.
- Add new publications by copying an `<article class="publication" ...>` record on `publications.html`, keeping its `data-kind` and `data-search` attributes consistent. Add only source-verified bibliography information.
- Add new dated news in `ResearchBlog.html` and featured links on `index.html` when appropriate.
- Update `sitemap.xml` if you add or rename pages.
- Do not publish private datasets, user details, internal teaching/student records, secrets, tokens or the repository's `.git/` directory.

See `REVIEW_AND_SOURCES.md` for source checks and the audit of the original archive.
