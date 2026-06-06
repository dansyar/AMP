import Link from "next/link";
import { ArrowRight, UsersRound } from "lucide-react";
import { averageMetricValue, readinessLabel } from "@/lib/scoring";
import type { IndustryBlueprint } from "@/lib/types";
import { IconBadge } from "./IconBadge";
import { ProgressBar } from "./ProgressBar";

type BlueprintCardProps = {
  blueprint: IndustryBlueprint;
};

export function BlueprintCard({ blueprint }: BlueprintCardProps) {
  const averageFluency = averageMetricValue(blueprint);

  return (
    <article className="flex h-full flex-col rounded-md border border-line bg-white p-5 shadow-panel">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <IconBadge name={blueprint.icon} label={blueprint.industry} />
          <div>
            <h2 className="text-lg font-semibold text-ink">{blueprint.industry}</h2>
            <p className="text-sm text-slate">{blueprint.targetAgeGroup}</p>
          </div>
        </div>
        <div className="rounded-md bg-paper px-3 py-2 text-right">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">Champion</p>
          <p className="text-sm font-semibold text-ink">{blueprint.champion.readinessScore}</p>
        </div>
      </div>

      <p className="mt-4 min-h-24 text-sm leading-6 text-slate">{blueprint.summary}</p>

      <div className="mt-4 space-y-3">
        <ProgressBar label="Average fluency baseline" value={averageFluency} />
        <ProgressBar label="Scaling readiness" value={blueprint.dashboardStats.scalingReadiness} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate">
        <span className="inline-flex items-center gap-1 rounded-md bg-paper px-2 py-1">
          <UsersRound className="h-3.5 w-3.5" aria-hidden="true" />
          {blueprint.dashboardStats.assessed} assessed
        </span>
        <span className="rounded-md bg-paper px-2 py-1">
          {readinessLabel(blueprint.champion.readinessScore)}
        </span>
      </div>

      <Link
        className="focus-ring mt-5 inline-flex items-center justify-between rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white"
        href={`/blueprints/${blueprint.slug}`}
      >
        Open blueprint
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
