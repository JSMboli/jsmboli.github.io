# Website update — 6 November 2026

## Release approach

**Additive update to the supplied repository clone.** No existing public page, image, research resource, ontology or publication entry has been removed. The full archive contains the original deployable file set and these changes. It excludes Git history and macOS metadata so that it can be merged safely into the existing GitHub checkout.

## Updated pages

- `index.html` — additional cumulative supervision and mentoring metrics; applied AI portfolio teaser cards; November 2026 bootcamp update; expanded applied-research introduction.
- `projects.html` — four new stage-labelled, high-level applied AI portfolio cards (Skills, V.E.C.T.O.R., PATH, TradeDocComplianceBench). Existing funded and historical research project cards remain intact.
- `teaching.html` — 8+ research students, 80+ MSc projects, 7+ industrial project supervisions, reciprocal academic–industry mentoring and November bootcamp.
- `ResearchBlog.html` — November 2026 bootcamp highlight.
- `talks.html` — November 2026 engagement highlight.
- `research.html` — a short note on contemporary applied research prototypes.
- `sources.html` — provenance for self-reported supervision/project-stage data.
- `assets/css/site.css` — responsive component styles for the new sections.
- `README.md` / `REVIEW_AND_SOURCES.md` — updated editorial and deployment documentation.
- `.nojekyll` — ensures Pages serves the directory without Jekyll processing.

## Stage labels

| Project | Public description | Stage claimed |
|---|---|---|
| EvaeXtra Skills | Team-based innovation, collaboration and bootcamp coordination | Owner-reported live in production |
| V.E.C.T.O.R. | Evidence-based agentic AI verification and evaluation | Owner-reported testing phase |
| PATH | Candidate-consented, evidence-reviewed agentic career support | Internal prototype |
| TradeDocComplianceBench | Synthetic trade-document consistency and AI-verification research | Research prototype; no formal compliance claim |

## Privacy and editorial controls

- No private project source code, internal dashboards/screenshots, user data, keys, environment configuration, benchmark datasets or unreleased evaluation reports are included.
- The three unpublished projects have no public repository/source download link.
- The existing website and its embedded PDF profile remain unchanged except the HTML/CSS/documentation files above.
- Research and supervision totals were supplied by the site owner; the 88/47 November programme figures were reported by the organiser.

## Validation

- HTML parsed successfully for all site pages.
- Local links resolved; all existing HTML link targets and new cross-links verified.
- No duplicate IDs in any page; single H1 per page.
- JSON-LD structured-profile scripts parsed as JSON.
- JavaScript syntax passed Node `--check`.
- CSS parsed without syntax errors.
- Browser validation was attempted but blocked by the environment on local HTTP, file and data URLs. **Manual mobile/desktop browser checks are still required before deployment**.

## Deployment

Extract the changed-files ZIP into the root of your existing `JSMboli/jsmboli.github.io` checkout, then review `git diff` and commit the changes. Do not delete files already in the repository. The full deployable ZIP is available separately if you want a complete current website snapshot. Test using `python3 -m http.server 8000` and review at `http://localhost:8000/` before committing to the live branch.
