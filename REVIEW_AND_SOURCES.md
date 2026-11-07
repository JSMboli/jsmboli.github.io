# Website review, verification notes and change log

**Review date:** 13 October 2026  
**Original source:** user-provided `jsmboli.zip`, six HTML pages and corresponding CSS/JS/assets.

## 1. Original repository review

| Dimension | Found | Action taken |
| --- | --- | --- |
| Architecture | Static multi-page HTML site, legacy Leven/resume theme with Bootstrap + jQuery plugins | Preserved GitHub Pages compatibility; rebuilt presentation in dependency-free HTML/CSS/JS |
| Navigation | Six HTML pages, older menu/navigation implementation | Consistent navigation across all new pages, mobile menu with `aria-expanded` and Escape behaviour |
| About page | Career history, teaching and honours but older profile language and generic template metadata | New research-and-leadership-focused home and page-specific SEO |
| Publications | Older selected journal and conference list | Updated, searchable list with publisher/preprint/presentation status labels |
| Research | Original `projects.html` and `ResearchBlog.html` included legacy collaborations | Added current research; preserved historical work, including OECD Future of Skills, urban-planning horizon scanning, UNICEF HTR analytics |
| Academic profile | Old CV PDF from earlier template | Retained old file for legacy reference but removed public navigation to it; added fresh one-page downloadable profile |
| Contact | Legacy JavaScript attempted to POST to missing `contact_form/contact_form.php` | Replaced with public institutional email link; no false contact-submit promise |
| Static assets | Original research media, PDFs, ontology files, CSS/fonts/scripts | Preserved in full distribution; newly designed pages only require `assets/`, favicon and content files |
| Backups | Archive contained `.bak` pages and Git repository metadata | Preserved snapshots under `legacy/`; excluded `.git` history, caches, old `.bak` files from final distribution |
| Privacy | Third-party script dependencies and potentially broken external assets | New core site works without external runtime resources; local theme preference only |

## 2. Major verified new additions

- **2026 published UK AI Conference paper:** Onuchukwu Joseph Chimezie and Julius Sechang Mboli, *Separating the Art from the Algorithm...* Proceedings of Machine Learning Research 348, pp. 31–41 (2026): https://proceedings.mlr.press/v348/chimezie26a.html
- **2025 digital twins chapter:** *The role of digital twins in realising circular economy in the era of Industry 4.0 and Industry 5.0*. The Digital Twin Handbook, DOI https://doi.org/10.1049/PBPC071E_ch9 .
- **2025 business LLM journal paper:** *Are Large Language Models Ready for Business Integration?* DOI https://doi.org/10.5171/2025.121190 .
- **2022 circular-economy decision support article:** Wiley https://doi.org/10.1002/spe.2825 . First published online in 2020, volume issue in 2022.
- **2026 waste classification arXiv preprint:** https://arxiv.org/abs/2601.22418 (not represented as a peer-reviewed journal article).
- **2026 digital trade physical-assurance preprint:** https://www.preprints.org/manuscript/202606.2054 (not peer reviewed).
- **PROGRESS Co-Investigator role:** Teesside University Research Portal https://research.tees.ac.uk/en/projects/physical-assurance-for-digital-trade-systems-progress/ .
- **Energentic team membership:** https://www.energentic.ai/ and DAIM social post on Innovate UK ICURe pathway.
- **Agentic AI Bootcamp portal:** https://jsmboli.github.io/agentic-ai-bootcamp/ .
- **Public-sector AI course:** https://jsmboli.github.io/ai-for-public-service/ .
- **SFHEA 2026, FHEA 2024:** awards information supplied by Dr Mboli and Hull Worktribe profile.
- **Cross-disciplinary medical image analysis 2026:** https://hull-repository.worktribe.com/output/5685834 .

## 3. Hull Worktribe outputs reconciliation

| User-supplied Worktribe ID | Description | Treatment in refreshed site |
| --- | --- | --- |
| 5894221 | Moral decoupling in generative AI discourse | Definitive published PMLR proceedings record takes precedence over Worktribe administrative `In Progress` status |
| 5893335 | Automated morphological platelet analysis | Presentation/repository entry. Related 2026 poster record; **not double-counted as a separate research work** |
| 5898440 | Two-stage explainable waste CNN | Conference presentation; entry states `In Review` / `Unpublished`; **not described as an accepted journal article** |
| 5898352 | Digital-twins circular economy chapter | DOI-backed published book chapter |
| 5898335 | AI-enabled waste classification contribution | Conference contribution, distinguished from 2026 arXiv preprint |
| 5046544 | Business LLM integration paper | Journal has a definitive 2025 published article and DOI despite older Worktribe `Submitted` record |

## 4. Evidence boundaries and items to check before going live

- Some information (module responsibilities, programme leadership, mentoring outcomes, Q-impact outreach) is supported by the materials and statements supplied directly by Dr Mboli, rather than an independently hosted organisational record.
- The PMLR and publisher statuses were independently verified via publisher pages. Administrative `In Progress` labels in Worktribe are **not** necessarily publication-status statements.
- The older `Julius_Mboli_CV.pdf` is retained solely to prevent loss of archival material. It may still be directly accessible if uploaded in the repo; remove it from production if it contains outdated or personal details.
- The legacy archive contains other old images/PDFs. Review whether redistribution is appropriate before public deployment, particularly if any content is not yours to host.
- The downloadable one-page academic profile is newly summarised and should be personally checked for exact institutional responsibilities and qualifications.
- External websites are outside the site's control and can change their URLs or access policies. Review links periodically.

## 5. Checks performed

- Static audit: 11 new HTML pages (including `404.html`), each with one `<h1>` and consistent page titles.
- Local internal link, image, CSS and JavaScript path check: **no missing paths** at build time.
- JavaScript syntax validated with `node --check`.
- Mobile breakpoints, focus indicators, explicit image alternative text, reduced motion, basic semantic HTML and no-script fallback incorporated into styles/markup.
- PDF academic profile: created, rendered and visually inspected; one A4 page.
- **Browser visual regression was not completed**: Chromium navigation was blocked by the execution environment for both `file://` and localhost. Check actual desktop/mobile appearance in your browser after extracting or publishing. No contrary test success is claimed.

## 6. Deployment

The ZIP has its `index.html` at the root of the archive. Copy all contents into the publishing repository root and commit. The live GitHub repository has not been modified by this workflow.
