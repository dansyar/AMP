import { Activity, ClipboardCheck, Download, Network, UsersRound } from "lucide-react";
import { BlueprintCard } from "@/components/BlueprintCard";
import { IndustryComparison } from "@/components/IndustryComparison";
import { MetricCard } from "@/components/MetricCard";
import { blueprints, overviewStats } from "@/lib/blueprints";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <section className="rounded-md border border-line bg-white p-5 shadow-panel sm:p-6">
        <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate">
              Presented with
            </span>
            <img
              className="h-7 w-auto"
              src="https://news.cognizant.com/images/COG-Logo.svg"
              alt="Cognizant"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-mint">
              AMP AI Fluency Ideathon
            </p>
            <h1 className="mt-2 max-w-4xl text-3xl font-semibold text-ink sm:text-4xl">
              1-Day Ideathon blueprints for finding and activating AI Champions
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate">
              A Vercel-ready dashboard MVP for mapping AI fluency gaps, targeting the
              right professional groups, running a 1-day activation programme, and
              tracking behaviour change after the event.
            </p>
            <a
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white"
              href="https://raw.githubusercontent.com/dansyar/AMP/main/amp-codex-prompts.txt"
              download="amp-codex-prompts.txt"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download prompt archive
            </a>
          </div>
          <div className="grid min-w-64 grid-cols-2 gap-3 text-sm">
            <div className="rounded-md bg-paper p-3">
              <p className="font-semibold text-ink">6</p>
              <p className="text-slate">Industry blueprints</p>
            </div>
            <div className="rounded-md bg-paper p-3">
              <p className="font-semibold text-ink">{overviewStats.averageScalingReadiness}%</p>
              <p className="text-slate">Activation readiness</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Assessed"
          value={overviewStats.totalAssessed}
          caption="Synthetic professionals across the six target industries."
        />
        <MetricCard
          label="Champions"
          value={overviewStats.championsIdentified}
          caption="Potential peer leaders identified by readiness signals."
        />
        <MetricCard
          label="Activation Day"
          value={overviewStats.sessionsPlanned}
          caption="1-day ideathon sessions planned for the activation cohort."
        />
        <MetricCard
          label="Evidence"
          value={overviewStats.behaviourEvidenceLogged}
          caption="Post-event behaviour change logs beyond attendance counts."
        />
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <IndustryComparison blueprints={blueprints} />

        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <h2 className="text-lg font-semibold text-ink">Measurement model</h2>
          <p className="mt-2 text-sm leading-6 text-slate">
            The MVP separates attendance from real fluency. AMP can show baseline
            understanding before the ideathon, practical completion on Activation Day,
            confidence shift, ethical judgement, workplace use, peer teaching, and
            post-event evidence.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["Baseline", "Pre-event fluency and confidence"],
              ["Practice", "One Activation Day AI task completed"],
              ["Ethics", "Privacy and accountability judgement"],
              ["Behaviour", "Post-event use at work or in community"],
              ["Teaching", "Peer session or shared workflow"],
              ["Scale", "Champion readiness by industry"],
            ].map(([title, description]) => (
              <div key={title} className="rounded-md border border-line bg-paper p-3">
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-1 text-sm leading-5 text-slate">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="mt-6">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-ink">Industry AI Fluency Blueprints</h2>
            <p className="text-sm text-slate">
              Each blueprint has a target age/career group, Champion model, 1-day ideathon, and post-event measurement plan.
            </p>
          </div>
          <div className="flex gap-2 text-xs font-semibold uppercase tracking-wide text-slate">
            <span className="inline-flex items-center gap-1">
              <Activity className="h-4 w-4 text-mint" aria-hidden="true" />
              Gap map
            </span>
            <span className="inline-flex items-center gap-1">
              <UsersRound className="h-4 w-4 text-saffron" aria-hidden="true" />
              Champion
            </span>
            <span className="inline-flex items-center gap-1">
              <ClipboardCheck className="h-4 w-4 text-sky" aria-hidden="true" />
              Evidence
            </span>
            <span className="inline-flex items-center gap-1">
              <Network className="h-4 w-4 text-clay" aria-hidden="true" />
              Scale
            </span>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blueprints.map((blueprint) => (
            <BlueprintCard key={blueprint.slug} blueprint={blueprint} />
          ))}
        </div>
      </section>
    </main>
  );
}
