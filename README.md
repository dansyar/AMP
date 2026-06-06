# AMP AI Champions Hub

Dashboard MVP for AMP's 1-day AI Fluency ideathon. The app presents six industry-specific AI Fluency Blueprints for Construction, Architecture, Banking, Childcare, Education, and Military, plus a 90-day preparation roadmap for launching the event.

## What the MVP Shows

- Industry-by-industry AI knowledge gap summaries
- Priority age or career-stage groups for intervention
- AI Champion readiness models
- 1-day peer-led ideathon pilots
- Practical AI use cases and ethics boundaries
- Post-event behaviour-change measurement beyond attendance
- AMP admin overview metrics
- 90-day launch preparation roadmap

All data is synthetic seed data stored in `lib/blueprints.ts`.

## Programme Timeline

The programme itself is a 1-day AI Fluency ideathon designed to identify, train, and activate AI Champions. The 90-day timeline is the preparation runway to design, validate, recruit, dry-run, and launch that 1-day event.

## 90-Day Launch Roadmap

- Days 1-15: research, stakeholder validation, and industry blueprint refinement
- Days 16-30: curriculum design, Champion rubric, and measurement framework
- Days 31-45: partner outreach, facilitator recruitment, and content creation
- Days 46-60: platform/dashboard setup, seed data, and pilot logistics
- Days 61-75: participant recruitment, facilitator training, and dry runs
- Days 76-90: final launch prep, communications, demo readiness, and programme launch

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

AMP can launch a 1-day AI Fluency ideathon within 90 days. The dashboard shows which industries and age groups need support most, what AI Champions look like in each sector, how the 1-day activation programme runs, and how AMP tracks behaviour change after the event.
