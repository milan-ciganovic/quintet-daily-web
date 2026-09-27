# Quintet Daily — website

The public marketing site: a landing page and Privacy / Terms / Support
pages, built from the mockups in `Quintet Daily screens (2).pdf`.

## Stack

A real Vue 3 project, scaffolded with `pnpm create vue@latest` (Vite +
Vue Router), no TypeScript, no state management library, no test runner —
none of those pull their weight for a four-page marketing site.

It's a client-rendered single-page app: one `index.html` shell, and
Vue Router swaps the page content in the browser. `/privacy`, `/terms`
and `/support` are real, linkable URLs — see "SPA routing on a static
host" below for what that requires from wherever you deploy it.

The look matches the app: same ink/surface colors and the Archivo
typeface as `packages/quizzly_design_system` in the main `quizzly` repo.
If those tokens change there, update `src/assets/base.css` to match.

## Structure

```
src/
  App.vue               SiteHeader + <RouterView/> + SiteFooter
  main.js
  router/index.js        routes, per-page <title>, scroll-to-hash/top
  assets/base.css         all styling — global, not scoped per component
  components/
    SiteHeader.vue        nav + mobile menu toggle
    SiteFooter.vue
    QuintetMark.vue        the logo mark
    AnswerGrid.vue          the 5-square result widget (used twice on Home)
    LegalLayout.vue         TOC sidebar + article wrapper, shared by
                            Privacy and Terms
  views/
    HomeView.vue
    PrivacyView.vue
    TermsView.vue
    SupportView.vue
public/
  favicon.svg
  robots.txt
  _redirects              Netlify SPA fallback (see below)
vercel.json               Vercel SPA fallback (see below)
```

## A real limitation worth knowing about: no server rendering

There's no SSG/SSR step here (no `vite-ssg`, no prerendering) — that
would be a legitimate next step, but it's more infrastructure than this
ask called for. The practical effect: content only exists in the page
**after** JavaScript runs.

- A visitor with JavaScript disabled, or a crawler that doesn't execute
  it, sees an empty shell.
- Link-preview bots (Slack, iMessage, Twitter) only ever read the
  static `<title>`/`<meta>` tags in `index.html` — they don't run the
  Vue app, so every route shares the same social-preview title and
  description, not a per-page one. (The browser tab title *does*
  update per route — that's set in `router/index.js` — but that's a
  client-side-only effect, invisible to those bots.)
- Google specifically does render JavaScript for indexing, so this
  isn't invisible to search — but non-Google crawlers and share
  previews are the real cost.

If that turns out to matter (it matters more for Privacy/Terms than for
the homepage), the fix is adding static-site generation later — worth a
separate pass, not a silent addition here.

## SPA routing on a static host

Because navigation is client-side, a host needs to serve `index.html`
for *any* path (`/privacy`, `/terms`, ...), not just `/`, or a direct
link or page refresh on those routes 404s. This repo already has the
config for the common hosts:

- **Netlify**: `public/_redirects` → copied into `dist/` by Vite,
  already does this.
- **Vercel**: `vercel.json` rewrites everything to `/index.html`.
- **GitHub Pages**: has no rewrite mechanism, so the build's `postbuild`
  script (`package.json`) copies `dist/index.html` to `dist/404.html` —
  Pages serves that on any unknown path, and the SPA takes it from
  there. Already wired up; nothing extra to configure.

## Before this goes live

`PrivacyView.vue`, `TermsView.vue` and `SupportView.vue` all have
bracketed placeholders (`[DATE]`, `[YOUR SUPPORT EMAIL]`, and similar)
copied verbatim from the mockups. Search for `[` and fill every one in —
a legal page that ships with placeholders is worse than not having one.
Terms and Privacy should get an actual legal review, not just a text
pass; this repo gives you the structure, not the legal opinion.

`SiteFooter.vue`'s copyright line reads "© 2026 Quintet Daily" — the
mockups used a "[Your company name]" placeholder there instead, in case
your legal entity's name differs from the product name. Edit that
component if so.

The landing page's "Get it on Google Play" button (`#get-the-app`) has
no target yet — point it at the real Play Store listing once one
exists.

## Running it locally

```sh
pnpm install
pnpm dev
```

## Building

```sh
pnpm build      # writes dist/ (runs the 404.html copy automatically)
pnpm preview    # serve dist/ locally to sanity-check the production build
```

## Deploying

Deploy the contents of `dist/` after running `pnpm build` — not the
repo's source files directly, unlike a plain static site.

**Netlify / Vercel**: connect the repo. Build command `pnpm build`,
publish/output directory `dist`. Both platforms' SPA config is already
in this repo (see above).

**GitHub Pages**: push this repo, run `pnpm build` (locally, or via a
GitHub Actions workflow — not set up here), and publish the `dist/`
folder's contents to the `gh-pages` branch or via Pages' "deploy from a
branch/folder" setting.
