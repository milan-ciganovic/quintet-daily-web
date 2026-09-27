# Quintet Daily — website

The public marketing site: a landing page and Privacy / Terms / Support
pages, built from the mockups in `Quintet Daily screens (2).pdf`.

## Stack

Static HTML + CSS, powered by Vue 3 for the header, footer, and the
answer-grid widget. No build step, no `npm install`, no `node_modules` —
Vue is loaded straight from a CDN as a global script, the same way you'd
add jQuery. This matters here specifically: this machine has no Node.js
installed, so anything requiring a build (Vite, Nuxt, webpack) couldn't
even be compiled or previewed locally.

**Why the content isn't all in Vue.** Only the site chrome (header/nav,
footer) and small repeated widgets (the answer-grid squares) are Vue
components. The headline, body copy, "How it works" text, and every word
of the Privacy/Terms/Support pages are plain HTML, not rendered by
JavaScript. That's deliberate: this is a marketing and legal site, so the
words are the product. Search engines and link-preview bots (Slack,
iMessage, Twitter) that don't run JavaScript need to see that text
immediately in the page source, and a visitor with JavaScript blocked or
slow to load should still be able to read it. The header/footer nav is a
smaller loss if JS is unavailable — the same links are always reachable
from the footer.

If you'd rather have the whole page be a single Vue app (simpler mental
model, at the cost of the above), that's a valid call too — just say so.

The look matches the app: same ink/surface colors and the Archivo typeface
as `packages/quizzly_design_system` in the main `quizzly` repo. If those
tokens change there, update `assets/css/style.css` to match.

## Structure

```
index.html      Landing page (hero, how it works, share preview)
privacy.html    Privacy Policy
terms.html      Terms of Service
support.html    Support / FAQ
assets/
  css/style.css
  js/components.js       Vue components: SiteHeader, SiteFooter, AnswerGrid
  img/quintet-mark.svg    the logo mark, for the header
  img/favicon.svg
robots.txt
```

Vue itself is pinned to an exact version via CDN in each page's
`<script>` tag (currently 3.5.43) — bump that version deliberately, not
by accident, since an unpinned `@3` URL can change under you.

## Before this goes live

`privacy.html`, `terms.html` and `support.html` all have bracketed
placeholders (`[DATE]`, `[YOUR SUPPORT EMAIL]`, and similar) copied
verbatim from the mockups. Search for `[` and fill every one in — a legal
page that ships with placeholders is worse than not having one. Terms and
Privacy should get an actual legal review, not just a text pass; this repo
gives you the structure, not the legal opinion.

The footer's copyright line (in `assets/js/components.js`, `SiteFooter`)
reads "© 2026 Quintet Daily" — the mockups used a
"[Your company name]" placeholder there instead, in case your legal
entity's name differs from the product name. Edit that component if so.

The landing page's "Get it on Google Play" button (`#get-the-app`) has no
target yet — point it at the real Play Store listing once one exists.

## Running it locally

There's still no build. Because the components are plain (non-module)
scripts rather than ES modules, you can just double-click `index.html`
and it works, or serve the folder so it behaves identically to
production:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

Any static host works — the whole site is these files as-is.

**GitHub Pages** (no config file needed): push this repo to GitHub, then
in the repo's Settings → Pages, set the source to the `main` branch, root
folder.

**Netlify / Vercel / Cloudflare Pages**: connect the repo; leave the build
command empty and the publish/output directory as `.` (repo root).
