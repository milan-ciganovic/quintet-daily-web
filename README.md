# Quintet Daily — website

The public marketing site: a landing page and Privacy / Terms / Support
pages, built from the mockups in `Quintet Daily screens (2).pdf`.

## Stack

Plain HTML + CSS. No build step, no framework, no `node_modules`. Chosen
because it needs nothing installed to run or deploy, and this site is four
pages with no dynamic data — a build step would add tooling without adding
anything real.

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
  img/quintet-mark.svg   the logo mark, for the header
  img/favicon.svg
robots.txt
```

## Before this goes live

`privacy.html`, `terms.html` and `support.html` all have bracketed
placeholders (`[DATE]`, `[YOUR SUPPORT EMAIL]`, and similar) copied
verbatim from the mockups. Search for `[` and fill every one in — a legal
page that ships with placeholders is worse than not having one. Terms and
Privacy should get an actual legal review, not just a text pass; this repo
gives you the structure, not the legal opinion.

The landing page's "Get it on Google Play" button (`#get-the-app`) has no
target yet — point it at the real Play Store listing once one exists.

## Running it locally

There's no build. Open `index.html` directly in a browser, or serve the
folder so relative links behave exactly as they will in production:

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
