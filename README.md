# AMP AI Champions Hub

Dashboard MVP for AMP's AI Fluency ideathon. The app presents six industry-specific AI Fluency Blueprints for Construction, Architecture, Banking, Childcare, Education, and Military.

## What the MVP Shows

- Industry-by-industry AI knowledge gap summaries
- Priority age or career-stage groups for intervention
- AI Champion readiness models
- Peer-led programme pilots
- Practical AI use cases and ethics boundaries
- Behaviour-change measurement beyond attendance
- AMP admin overview metrics

All data is synthetic seed data stored in `lib/blueprints.ts`.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Recharts
- Lucide icons

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
```

## Vercel Production Deployment

If Vercel CLI is installed and the project is linked:

```bash
vercel --prod
```

If Vercel is not configured:

```bash
npm i -g vercel
vercel login
vercel link
vercel --prod
```

## Demo Narrative

AMP opens the dashboard, sees six industry blueprints, selects an industry such as Banking or Childcare, reviews the largest AI fluency gap and priority age group, identifies what an AI Champion should look like, launches a peer-led pilot model, and reviews behaviour-change metrics that show practical adoption rather than attendance alone.
