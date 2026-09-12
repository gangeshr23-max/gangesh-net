# gangesh.net — Gangesh Vivekanandan

Production website for Gangesh Vivekanandan, Manufacturing Transformation Consultant.

## Stack
- Next.js 16.3.3
- React 19.2
- TypeScript
- Tailwind CSS 4.3

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Validation
```bash
npm run typecheck
npm run build
```

## Content still required before launch
1. Approved professional portrait of Gangesh Vivekanandan.
2. Optional domain mailbox after it has actually been configured.
3. A production contact-form provider or server-side mail service if you do not want the current mailto-based fallback.
4. Verified case studies once client information/results are approved for public use.
5. Initial 2–3 insight articles before surfacing Insights prominently on the homepage.

## Deploy to GitHub
```bash
git init
git add .
git commit -m "Initial gangesh.net website"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

## Deploy to Vercel
1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository.
3. Vercel will detect Next.js automatically.
4. Use the default build command `next build` and deploy.
5. In **Project Settings → Domains**, add `gangesh.net` and `www.gangesh.net`.
6. Follow Vercel's displayed DNS instructions at your domain registrar.
7. Make `gangesh.net` the primary domain and configure `www.gangesh.net` to redirect to it.
8. Vercel provisions HTTPS automatically after DNS verification.

## Contact form
The current contact form is deliberately dependency-free and uses a `mailto:` submission to `gangeshr23@gmail.com`. Before launch, you can replace it with Resend, Formspree, HubSpot, or another approved endpoint. Do not hard-code API secrets into client code.

## SEO
- Canonical production domain: https://gangesh.net
- Sitemap: /sitemap.xml
- Robots: /robots.txt
- Person structured data is included in the root layout.

## Brand rule
`gangesh.net` is the domain, not a company name. The brand is **Gangesh Vivekanandan — Manufacturing Transformation Consultant**.
