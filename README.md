# Persistent Sales — coming-soon stub

Standalone Next.js app that serves `sales.persistentmomentum.com` as a
"coming soon" page until the real product launches.

## Stack
- Next.js 15 (App Router) + React 19 + Tailwind v4
- Same visual system as `recruiter.persistentmomentum.com` and
  `persistentmomentum.com` (light theme, Open Sans, navy primary).

## Local dev
```bash
npm install
npm run dev    # → http://localhost:3000
```

## Deploy
- Vercel project (one-time setup): import this repo, framework auto-detected.
- DNS (Cloudflare): CNAME `sales` → `cname.vercel-dns.com`.
- Bind domain in Vercel project settings.

## What's here vs not
- Static single page with the PM "P" mark, "Persistent Sales — coming soon"
  headline, a 2-line description, and a `mailto:` link.
- **No email capture form, no Resend integration, no DB.** Adding either
  is a follow-up when the product gets closer to launch.

## Replacing this with the real site
When Persistent Sales becomes a real product, this stub gets replaced by
the full app (likely cloned from `persistent-recruiter` and adapted).
Until then, this stub is what `sales.persistentmomentum.com` serves.
