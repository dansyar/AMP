import type { AIChampionProfile, IndustryBlueprint } from "./types";

export function readinessLabel(score: number) {
  if (score >= 85) return "Ready to activate";
  if (score >= 75) return "Pilot-ready with coaching";
  if (score >= 60) return "Emerging candidate";
  return "Foundation pathway first";
}

export function averageMetricValue(blueprint: IndustryBlueprint) {
  return Math.round(
    blueprint.measurement.reduce((sum, metric) => sum + metric.value, 0) /
      blueprint.measurement.length,
  );
}

export function championScoreRows(champion: AIChampionProfile) {
  return [
    ["Practical AI skill", champion.scoring.practicalSkill],
    ["Confidence", champion.scoring.confidence],
    ["Ethical judgement", champion.scoring.ethicalJudgement],
    ["Peer leadership", champion.scoring.peerLeadership],
    ["Workplace/community influence", champion.scoring.workplaceInfluence],
    ["Grassroots facilitation", champion.scoring.facilitationReadiness],
  ] as const;
}
