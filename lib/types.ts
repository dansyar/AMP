export type IndustrySlug =
  | "construction"
  | "architecture"
  | "banking"
  | "childcare"
  | "education"
  | "military";

export type FluencyMetric = {
  label: string;
  value: number;
  target: number;
  description: string;
};

export type AIChampionProfile = {
  title: string;
  summary: string;
  readinessScore: number;
  traits: string[];
  skills: string[];
  influenceSignals: string[];
  scoring: {
    practicalSkill: number;
    confidence: number;
    ethicalJudgement: number;
    peerLeadership: number;
    workplaceInfluence: number;
    facilitationReadiness: number;
  };
};

export type ProgrammePilot = {
  name: string;
  duration: string;
  format: string;
  cohort: string;
  peerLedModel: string;
  modules: string[];
  starterChallenge: string;
  scalePath: string[];
};

export type BehaviourChangeEvidence = {
  metric: string;
  evidence: string;
  collectionPoint: string;
};

export type IndustryBlueprint = {
  slug: IndustrySlug;
  industry: string;
  icon: string;
  summary: string;
  gapDiagnosis: string;
  targetAgeGroup: string;
  targetReasoning: string;
  riskOfBeingLeftBehind: string;
  practicalUseCases: string[];
  ethicsAndPrivacy: string[];
  champion: AIChampionProfile;
  pilot: ProgrammePilot;
  measurement: FluencyMetric[];
  behaviourEvidence: BehaviourChangeEvidence[];
  dashboardStats: {
    assessed: number;
    championCandidates: number;
    sessionsPlanned: number;
    behaviourEvidenceLogged: number;
    scalingReadiness: number;
  };
};
