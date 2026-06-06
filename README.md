# AMP AI Champions Hub

Dashboard MVP for AMP's 1-day AI Fluency ideathon. The app presents six industry-specific AI Fluency Blueprints for Construction, Architecture, Banking, Childcare, Education, and Military.

## What the MVP Shows

- Industry-by-industry AI knowledge gap summaries
- Priority age or career-stage groups for intervention
- AI Champion readiness models
- 1-day peer-led ideathon pilots
- Practical AI use cases and ethics boundaries
- Post-event behaviour-change measurement beyond attendance
- AMP admin overview metrics

All data is synthetic seed data stored in `lib/blueprints.ts`.

## Programme Timeline

The programme is a 1-day AI Fluency ideathon designed to identify, train, and activate AI Champions. The dashboard also shows how AMP tracks behaviour change after the event.

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

AMP runs a 1-day AI Fluency ideathon. The dashboard shows which industries and age groups need support most, what AI Champions look like in each sector, how the 1-day activation programme runs, and how AMP tracks behaviour change after the event.
