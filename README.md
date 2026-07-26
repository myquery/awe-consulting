# AbrahamArcade Next.js Landing Page

TypeScript Next.js landing page for AbrahamArcade Wholeness Enterprise LLC, themed from the supplied `awe-logo.png` asset.

## Local Preview

Install dependencies, then run the Next.js development server.

```bash
pnpm install
pnpm run dev
```

Then visit `http://localhost:3000`.

For a production check:

```bash
pnpm run typecheck
pnpm run build
```

## File Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  accessibility/page.tsx
  privacy/page.tsx
  terms/page.tsx
components/
  ContactForm.tsx
  Footer.tsx
  Header.tsx
  LegalPage.tsx
public/
  assets/img/logo.jpeg
  assets/img/awe-logo.png
  assets/img/favicon.svg
next.config.ts
package.json
pnpm-lock.yaml
tsconfig.json
```

## Content Placeholders

Replace these placeholders before launch:

- Canonical and Open Graph URLs currently use `https://www.example.com/`.
- Email and phone currently use placeholder contact details.
- Outcome metrics are labeled as placeholders until measured evidence is available.
- Legal pages are placeholders and should be reviewed by qualified counsel.

## Logo Replacement

The provided `awe-logo.png` was trimmed for web display and exported as `public/assets/img/logo.jpeg`. To replace it, add the new source logo, preserve its proportions, and update `public/assets/img/logo.jpeg`. Keep meaningful alt text wherever the logo appears.

## Contact Form Integration

The contact form is a typed client component in `components/ContactForm.tsx`. It currently prevents real submission and displays a clear validation message. Before publishing, replace the form `action` with a secure backend or form service endpoint, update the submit button label if needed, and remove or adjust the placeholder submit behavior.

Common static form options include Netlify Forms, Formspree, Basin or a custom API endpoint.

## Deployment

This site can be deployed to Vercel, Netlify or any host that supports Next.js.

- Vercel: import the repository and keep the detected Next.js defaults.
- Netlify: use `pnpm run build` as the build command and the Next.js runtime/plugin defaults.
- Static export: add `output: "export"` to `next.config.ts` only if you need fully static hosting and have confirmed every route and feature is compatible.
