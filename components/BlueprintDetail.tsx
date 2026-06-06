import Link from "next/link";
import { ArrowLeft, CheckCircle2, ClipboardList, Route, Scale } from "lucide-react";
import { championScoreRows, readinessLabel } from "@/lib/scoring";
import type { IndustryBlueprint } from "@/lib/types";
import { IconBadge } from "./IconBadge";
import { ProgressBar } from "./ProgressBar";

type BlueprintDetailProps = {
  blueprint: IndustryBlueprint;
};

export function BlueprintDetail({ blueprint }: BlueprintDetailProps) {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="focus-ring inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-slate hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Dashboard
      </Link>

      <section className="mt-4 rounded-md border border-line bg-white p-5 shadow-panel sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex gap-4">
            <IconBadge name={blueprint.icon} label={blueprint.industry} tone="saffron" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-mint">
                Industry Blueprint
              </p>
              <h1 className="mt-1 text-3xl font-semibold text-ink sm:text-4xl">
                {blueprint.industry}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate">{blueprint.summary}</p>
            </div>
          </div>
          <div className="rounded-md border border-line bg-paper p-4 lg:w-80">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate">
              Priority intervention group
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">{blueprint.targetAgeGroup}</p>
            <p className="mt-2 text-sm leading-6 text-slate">{blueprint.targetReasoning}</p>
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <h2 className="text-lg font-semibold text-ink">Knowledge gap diagnosis</h2>
          <p className="mt-3 text-sm leading-6 text-slate">{blueprint.gapDiagnosis}</p>
          <div className="mt-5 rounded-md bg-paper p-4">
            <p className="text-sm font-semibold text-ink">Risk of being left behind</p>
            <p className="mt-2 text-sm leading-6 text-slate">{blueprint.riskOfBeingLeftBehind}</p>
          </div>
        </section>

        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <h2 className="text-lg font-semibold text-ink">Champion profile</h2>
          <p className="mt-2 text-sm leading-6 text-slate">{blueprint.champion.summary}</p>
          <div className="mt-4 flex items-center justify-between rounded-md bg-ink px-4 py-3 text-white">
            <span className="text-sm font-semibold">{readinessLabel(blueprint.champion.readinessScore)}</span>
            <span className="text-2xl font-semibold">{blueprint.champion.readinessScore}</span>
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-mint" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-ink">Practical workflows</h2>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
            {blueprint.practicalUseCases.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-clay" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-ink">Ethics and privacy</h2>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
            {blueprint.ethicsAndPrivacy.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <div className="flex items-center gap-2">
            <Route className="h-5 w-5 text-sky" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-ink">90-Day Programme</h2>
          </div>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-ink">{blueprint.pilot.name}</dt>
              <dd className="mt-1 leading-6 text-slate">{blueprint.pilot.duration} · {blueprint.pilot.format}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Cohort</dt>
              <dd className="mt-1 leading-6 text-slate">{blueprint.pilot.cohort}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Practical challenge</dt>
              <dd className="mt-1 leading-6 text-slate">{blueprint.pilot.starterChallenge}</dd>
            </div>
          </dl>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <h2 className="text-lg font-semibold text-ink">Champion Discovery scoring</h2>
          <div className="mt-4 space-y-4">
            {championScoreRows(blueprint.champion).map(([label, value]) => (
              <ProgressBar key={label} label={label} value={value} />
            ))}
          </div>
        </section>

        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <h2 className="text-lg font-semibold text-ink">Fluency and behaviour measurement</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {blueprint.measurement.map((metric) => (
              <div key={metric.label} className="rounded-md border border-line bg-paper p-4">
                <ProgressBar label={metric.label} value={metric.value} target={metric.target} />
                <p className="mt-3 text-sm leading-6 text-slate">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <h2 className="text-lg font-semibold text-ink">Peer-led 90-day model</h2>
          <p className="mt-3 text-sm leading-6 text-slate">{blueprint.pilot.peerLedModel}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {blueprint.pilot.modules.map((module) => (
              <span key={module} className="rounded-md bg-mint/10 px-3 py-2 text-sm font-medium text-mint">
                {module}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-line bg-white p-5 shadow-panel">
          <h2 className="text-lg font-semibold text-ink">Programme scale path</h2>
          <ol className="mt-4 space-y-3 text-sm leading-6 text-slate">
            {blueprint.pilot.scalePath.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-saffron/15 text-xs font-semibold text-saffron">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="mt-6 rounded-md border border-line bg-white p-5 shadow-panel">
        <h2 className="text-lg font-semibold text-ink">90-day programme roadmap</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {blueprint.pilot.activationDayAgenda.map((item) => (
            <div key={item} className="rounded-md border border-line bg-paper p-4">
              <p className="text-sm leading-6 text-slate">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-md bg-mint/10 p-4">
          <p className="text-sm font-semibold text-mint">Behaviour Change Tracking</p>
          <p className="mt-2 text-sm leading-6 text-slate">{blueprint.pilot.followUpMeasurement}</p>
        </div>
      </section>

      <section className="mt-6 rounded-md border border-line bg-white p-5 shadow-panel">
        <h2 className="text-lg font-semibold text-ink">Behaviour Change Tracking</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {blueprint.behaviourEvidence.map((evidence) => (
            <div key={evidence.metric} className="rounded-md border border-line p-4">
              <p className="font-semibold text-ink">{evidence.metric}</p>
              <p className="mt-2 text-sm leading-6 text-slate">{evidence.evidence}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate">
                Collection: {evidence.collectionPoint}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
