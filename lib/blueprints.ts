import type { IndustryBlueprint } from "./types";

export const blueprints: IndustryBlueprint[] = [
  {
    slug: "construction",
    industry: "Construction",
    icon: "hard-hat",
    summary:
      "AI fluency gap sits with site supervisors and project coordinators who translate plans into daily safety, manpower, and progress decisions.",
    gapDiagnosis:
      "Many teams know AI can summarise documents, but struggle to use it safely for site reporting, risk briefings, claims documentation, and multilingual worker communication.",
    targetAgeGroup: "Mid-career site supervisors and project coordinators, ages 35-49",
    targetReasoning:
      "This group manages daily execution and worker communication, but often has less protected time for digital upskilling than office-based managers.",
    riskOfBeingLeftBehind:
      "AI adoption may remain concentrated in head-office planning while site leaders continue manual reporting, fragmented safety notes, and slow issue escalation.",
    practicalUseCases: [
      "Summarise daily site reports into management updates",
      "Turn safety incidents into toolbox briefing drafts",
      "Translate safety reminders into plain-language worker notes",
      "Compare progress photos against planned milestones",
      "Draft RFIs, variation notes, and claims evidence summaries",
    ],
    ethicsAndPrivacy: [
      "Do not upload worker NRICs, medical records, or incident-identifying images into public tools",
      "AI-generated safety advice must be reviewed by a qualified supervisor",
      "Photo analysis should respect worker consent and site policy",
      "Maintain clear accountability for engineering and safety decisions",
    ],
    champion: {
      title: "Site AI Safety and Productivity Champion",
      summary:
        "A trusted supervisor who can show peers how AI reduces admin load without weakening safety accountability.",
      readinessScore: 78,
      traits: ["Practical", "trusted by site teams", "safety-first", "bilingual or multilingual"],
      skills: ["Prompting for reports", "privacy filtering", "checklist creation", "peer facilitation"],
      influenceSignals: ["Runs toolbox briefings", "coordinates subcontractors", "already improves reporting routines"],
      scoring: {
        practicalSkill: 74,
        confidence: 68,
        ethicalJudgement: 86,
        peerLeadership: 82,
        workplaceInfluence: 84,
        facilitationReadiness: 76,
      },
    },
    pilot: {
      name: "AI Toolbox Briefing Sprint",
      duration: "3 weeks",
      format: "Worksite lunch-and-learn plus WhatsApp follow-up",
      cohort: "12 supervisors from 3 worksites",
      peerLedModel:
        "One Champion runs a 45-minute weekly practice circle using anonymised site scenarios and AMP-provided prompt cards.",
      modules: ["Safe AI basics", "Daily report acceleration", "Toolbox briefing design", "Evidence logging"],
      starterChallenge:
        "Convert a messy daily site note into a safety-aware progress update and toolbox briefing.",
      scalePath: ["Pilot 3 sites", "Train 6 Champions", "Create Malay/Tamil prompt cards", "Partner with contractors"],
    },
    measurement: [
      { label: "Baseline fluency", value: 42, target: 70, description: "Understands AI limits and safe use" },
      { label: "Practical task completion", value: 64, target: 85, description: "Can produce reviewed site updates" },
      { label: "Confidence shift", value: 31, target: 55, description: "Feels able to use AI weekly" },
      { label: "Peer teaching", value: 22, target: 45, description: "Shares a prompt or briefing method" },
    ],
    behaviourEvidence: [
      {
        metric: "Reviewed AI-assisted report",
        evidence: "Before/after daily report sample with confidential details removed",
        collectionPoint: "Week 2",
      },
      {
        metric: "Toolbox briefing adoption",
        evidence: "Supervisor logs one briefing drafted with AI and reviewed manually",
        collectionPoint: "Week 3",
      },
    ],
    dashboardStats: {
      assessed: 52,
      championCandidates: 8,
      sessionsPlanned: 4,
      behaviourEvidenceLogged: 19,
      scalingReadiness: 72,
    },
  },
  {
    slug: "architecture",
    industry: "Architecture",
    icon: "drafting-compass",
    summary:
      "The gap is strongest among senior associates who lead design reviews and client narratives but have not integrated AI into practice workflows.",
    gapDiagnosis:
      "Architects are aware of generative visuals, but many lack fluency in using AI for precedent research, design rationale, authority submissions, accessibility checks, and client communication.",
    targetAgeGroup: "Senior associates and project architects, ages 32-45",
    targetReasoning:
      "They own project delivery and mentor juniors, yet often sit between AI-curious graduates and partners who focus on risk and client accountability.",
    riskOfBeingLeftBehind:
      "Firms may gain isolated AI experiments without changing core workflows, leaving project leaders unable to guide responsible use or quality standards.",
    practicalUseCases: [
      "Summarise planning constraints and design briefs",
      "Generate client presentation narratives from design intent",
      "Create accessibility and sustainability review checklists",
      "Draft authority submission cover notes",
      "Organise precedent research with source verification",
    ],
    ethicsAndPrivacy: [
      "Protect client-confidential project briefs and unreleased design material",
      "Do not represent AI concepts as buildable without professional review",
      "Track sources for precedent and code references",
      "Respect authorship, copyright, and firm design ownership",
    ],
    champion: {
      title: "Responsible Design Workflow Champion",
      summary:
        "A project architect who can turn AI from visual novelty into reviewed, source-aware design support.",
      readinessScore: 81,
      traits: ["design-literate", "quality-focused", "client-aware", "mentor-minded"],
      skills: ["Research prompts", "design critique prompts", "source checking", "workflow documentation"],
      influenceSignals: ["Leads design reviews", "mentors juniors", "prepares client decks"],
      scoring: {
        practicalSkill: 79,
        confidence: 74,
        ethicalJudgement: 88,
        peerLeadership: 80,
        workplaceInfluence: 82,
        facilitationReadiness: 78,
      },
    },
    pilot: {
      name: "AI Design Review Studio",
      duration: "4 weeks",
      format: "Studio critique circle",
      cohort: "10 project architects across small and mid-sized firms",
      peerLedModel:
        "Champions host design workflow clinics where peers test AI on non-confidential briefs and document firm-safe practices.",
      modules: ["AI for design research", "Client narrative drafting", "Ethics and authorship", "Quality review loops"],
      starterChallenge:
        "Create a client-ready design rationale from a synthetic project brief, with source and risk notes.",
      scalePath: ["Pilot 2 firms", "Publish workflow cards", "Invite Muslim architect network", "Create firm policy template"],
    },
    measurement: [
      { label: "Baseline fluency", value: 48, target: 75, description: "Understands AI use beyond images" },
      { label: "Practical task completion", value: 69, target: 88, description: "Produces reviewed design narrative" },
      { label: "Ethical AI understanding", value: 58, target: 85, description: "Flags confidentiality and authorship risks" },
      { label: "Workflow adoption", value: 26, target: 50, description: "Uses AI in one reviewed delivery workflow" },
    ],
    behaviourEvidence: [
      {
        metric: "Reviewed design narrative",
        evidence: "Synthetic brief, AI-assisted output, human review notes",
        collectionPoint: "Week 2",
      },
      {
        metric: "Firm-safe workflow",
        evidence: "One documented workflow with data boundaries",
        collectionPoint: "Week 4",
      },
    ],
    dashboardStats: {
      assessed: 39,
      championCandidates: 7,
      sessionsPlanned: 3,
      behaviourEvidenceLogged: 16,
      scalingReadiness: 76,
    },
  },
  {
    slug: "banking",
    industry: "Banking",
    icon: "landmark",
    summary:
      "AI fluency gap is critical among mid-career relationship managers and operations leads who face strict compliance but growing automation pressure.",
    gapDiagnosis:
      "Banking professionals often know AI is powerful, but are uncertain about safe prompting, customer data boundaries, hallucination risks, and approved internal use cases.",
    targetAgeGroup: "Mid-career relationship managers and operations leads, ages 35-50",
    targetReasoning:
      "They influence customer workflows and operational quality, but must navigate heavy regulation and may avoid AI entirely due to compliance fear.",
    riskOfBeingLeftBehind:
      "AI capability may concentrate in central innovation teams while frontline and operations staff miss productivity gains or misuse unsanctioned tools.",
    practicalUseCases: [
      "Draft non-sensitive customer meeting preparation notes",
      "Summarise policy updates into team briefings",
      "Generate process improvement ideas for internal workflows",
      "Create customer education FAQs from approved materials",
      "Analyse anonymised complaint themes",
    ],
    ethicsAndPrivacy: [
      "Never upload customer personal, financial, or account data into unapproved tools",
      "AI outputs must not be treated as financial advice",
      "Use approved knowledge bases for product and compliance references",
      "Maintain auditability and human accountability",
    ],
    champion: {
      title: "Compliance-Safe AI Adoption Champion",
      summary:
        "A respected banking professional who helps peers use AI within strict data and advisory boundaries.",
      readinessScore: 84,
      traits: ["compliance-aware", "calm under policy constraints", "peer coach", "customer-sensitive"],
      skills: ["Data anonymisation", "approved-use prompting", "output verification", "risk escalation"],
      influenceSignals: ["Briefs teams", "handles process pain points", "trusted by compliance partners"],
      scoring: {
        practicalSkill: 77,
        confidence: 70,
        ethicalJudgement: 94,
        peerLeadership: 81,
        workplaceInfluence: 86,
        facilitationReadiness: 78,
      },
    },
    pilot: {
      name: "Safe AI for Banking Workflows",
      duration: "3 weeks",
      format: "Closed workplace cohort",
      cohort: "15 relationship and operations professionals",
      peerLedModel:
        "Champions run scenario labs using synthetic customer cases and a red/amber/green AI use checklist.",
      modules: ["AI risk boundaries", "Prompting with anonymised data", "Policy summarisation", "Human review routines"],
      starterChallenge:
        "Use only synthetic data to prepare a customer education FAQ and mark compliance review points.",
      scalePath: ["Pilot with one department", "Add compliance review", "Train department Champions", "Template internal policy playbooks"],
    },
    measurement: [
      { label: "Baseline fluency", value: 45, target: 72, description: "Knows approved AI boundaries" },
      { label: "Ethical AI understanding", value: 62, target: 92, description: "Handles privacy and advice constraints" },
      { label: "Practical task completion", value: 59, target: 82, description: "Completes safe synthetic workflow" },
      { label: "Behaviour evidence", value: 18, target: 45, description: "Logs approved AI usage pattern" },
    ],
    behaviourEvidence: [
      {
        metric: "Safe prompt audit",
        evidence: "Prompt and output showing no customer data exposure",
        collectionPoint: "Week 1",
      },
      {
        metric: "Approved workflow use",
        evidence: "Manager-verified use of AI for internal briefing or process summary",
        collectionPoint: "Week 3",
      },
    ],
    dashboardStats: {
      assessed: 61,
      championCandidates: 9,
      sessionsPlanned: 5,
      behaviourEvidenceLogged: 23,
      scalingReadiness: 80,
    },
  },
  {
    slug: "childcare",
    industry: "Childcare",
    icon: "baby",
    summary:
      "The largest practical gap sits with experienced childcare educators who carry documentation and parent communication load but have limited AI confidence.",
    gapDiagnosis:
      "Childcare professionals need AI support for observation notes, lesson planning, parent updates, and admin tasks, but must protect children's privacy and development context.",
    targetAgeGroup: "Experienced educators and centre supervisors, ages 38-55",
    targetReasoning:
      "They hold deep care expertise and influence centre routines, but may have lower exposure to digital productivity tools and high concern about child data misuse.",
    riskOfBeingLeftBehind:
      "AI may be adopted by younger staff for isolated tasks while senior educators who shape practice standards remain cautious and unsupported.",
    practicalUseCases: [
      "Draft parent update templates from anonymised classroom themes",
      "Turn curriculum goals into activity ideas",
      "Summarise non-sensitive meeting notes",
      "Create multilingual reminders for parents",
      "Generate reflective questions for educator development",
    ],
    ethicsAndPrivacy: [
      "Do not enter child names, photos, health details, or family circumstances into public tools",
      "AI must not replace professional judgement about child development",
      "Parent communication should be reviewed for tone and accuracy",
      "Respect cultural and family sensitivities",
    ],
    champion: {
      title: "Child-Safe AI Practice Champion",
      summary:
        "An experienced educator who models privacy-safe AI use while preserving care quality and parent trust.",
      readinessScore: 75,
      traits: ["empathetic", "privacy-conscious", "trusted by parents", "patient peer coach"],
      skills: ["Anonymised prompting", "lesson ideation", "parent communication review", "reflective facilitation"],
      influenceSignals: ["Mentors educators", "coordinates centre routines", "handles parent communication"],
      scoring: {
        practicalSkill: 68,
        confidence: 61,
        ethicalJudgement: 91,
        peerLeadership: 83,
        workplaceInfluence: 79,
        facilitationReadiness: 72,
      },
    },
    pilot: {
      name: "AI for Child-Safe Admin Relief",
      duration: "4 weeks",
      format: "Centre-based practice circle",
      cohort: "10 educators and supervisors",
      peerLedModel:
        "Champions host small after-hours circles using fictional classroom scenarios and a child-data safety checklist.",
      modules: ["AI basics for care settings", "Child data boundaries", "Parent communication templates", "Lesson planning support"],
      starterChallenge:
        "Create a parent update from an anonymised fictional classroom theme and review it for privacy and tone.",
      scalePath: ["Pilot 2 centres", "Train centre supervisors", "Create privacy-safe prompt bank", "Share templates through AMP network"],
    },
    measurement: [
      { label: "Baseline fluency", value: 36, target: 68, description: "Understands safe AI use in care settings" },
      { label: "Confidence shift", value: 28, target: 58, description: "Feels safe trying AI for admin support" },
      { label: "Ethical AI understanding", value: 64, target: 92, description: "Protects child and family information" },
      { label: "Practical task completion", value: 52, target: 80, description: "Produces reviewed parent note template" },
    ],
    behaviourEvidence: [
      {
        metric: "Privacy-safe parent template",
        evidence: "Template with no child identifiers and supervisor review",
        collectionPoint: "Week 2",
      },
      {
        metric: "Admin time relief",
        evidence: "Educator self-report of one repeated admin task improved",
        collectionPoint: "Week 4",
      },
    ],
    dashboardStats: {
      assessed: 47,
      championCandidates: 6,
      sessionsPlanned: 4,
      behaviourEvidenceLogged: 17,
      scalingReadiness: 70,
    },
  },
  {
    slug: "education",
    industry: "Education",
    icon: "graduation-cap",
    summary:
      "The gap is strongest among mid-career teachers and lecturers who must redesign learning and assessment while managing integrity concerns.",
    gapDiagnosis:
      "Educators are exposed to AI through student use, but many lack practical frameworks for lesson design, feedback, assessment integrity, and responsible student guidance.",
    targetAgeGroup: "Mid-career educators and programme leads, ages 34-50",
    targetReasoning:
      "They carry curriculum responsibilities and student guidance, yet may not have formal AI pedagogy training or time to experiment safely.",
    riskOfBeingLeftBehind:
      "Students may advance faster than teaching practice, creating integrity anxiety instead of productive AI-supported learning.",
    practicalUseCases: [
      "Create differentiated lesson materials",
      "Draft rubric-aligned feedback comments",
      "Design AI-aware assignments",
      "Generate scenario-based classroom discussions",
      "Summarise student feedback themes without personal identifiers",
    ],
    ethicsAndPrivacy: [
      "Do not upload identifiable student records or grades into public tools",
      "Teach students to disclose AI assistance where required",
      "Check AI outputs for bias and inaccurate content",
      "Balance productivity with teacher-student relationship quality",
    ],
    champion: {
      title: "AI Pedagogy and Integrity Champion",
      summary:
        "An educator who helps peers move from AI anxiety to responsible classroom and curriculum practice.",
      readinessScore: 86,
      traits: ["student-centred", "assessment-literate", "reflective", "peer mentor"],
      skills: ["AI-aware assessment design", "feedback prompting", "bias checks", "workshop facilitation"],
      influenceSignals: ["Leads modules", "supports colleagues", "experiments with teaching practice"],
      scoring: {
        practicalSkill: 84,
        confidence: 78,
        ethicalJudgement: 90,
        peerLeadership: 87,
        workplaceInfluence: 83,
        facilitationReadiness: 84,
      },
    },
    pilot: {
      name: "AI-Ready Educator Circle",
      duration: "4 weeks",
      format: "Peer lesson lab",
      cohort: "14 educators across schools, madrasahs, and adult learning spaces",
      peerLedModel:
        "Champions facilitate lesson redesign labs where peers adapt one real lesson or assessment using privacy-safe examples.",
      modules: ["AI basics for educators", "Assessment integrity", "Feedback support", "Student AI literacy"],
      starterChallenge:
        "Redesign one assignment so students can use AI transparently while still demonstrating learning.",
      scalePath: ["Pilot across 3 learning spaces", "Train subject Champions", "Publish lesson templates", "Run termly educator circles"],
    },
    measurement: [
      { label: "Baseline fluency", value: 51, target: 78, description: "Understands AI in learning contexts" },
      { label: "Practical task completion", value: 73, target: 90, description: "Creates AI-aware lesson or assessment" },
      { label: "Confidence shift", value: 38, target: 65, description: "Feels able to guide students" },
      { label: "Peer teaching", value: 30, target: 60, description: "Shares one AI-ready teaching practice" },
    ],
    behaviourEvidence: [
      {
        metric: "AI-aware assignment",
        evidence: "Revised assignment brief and reflection on assessment integrity",
        collectionPoint: "Week 3",
      },
      {
        metric: "Peer sharing",
        evidence: "Educator shares template or runs a 20-minute department clinic",
        collectionPoint: "Week 4",
      },
    ],
    dashboardStats: {
      assessed: 68,
      championCandidates: 12,
      sessionsPlanned: 6,
      behaviourEvidenceLogged: 31,
      scalingReadiness: 84,
    },
  },
  {
    slug: "military",
    industry: "Military",
    icon: "shield",
    summary:
      "The practical gap sits with junior and mid-level commanders who can improve training and admin workflows but operate under strict security and hierarchy.",
    gapDiagnosis:
      "Military professionals may see AI as strategic technology, but lack safe hands-on fluency for training preparation, after-action learning, logistics admin, and knowledge management.",
    targetAgeGroup: "Junior to mid-level commanders and staff officers, ages 28-42",
    targetReasoning:
      "They translate doctrine into operations and training, but must be trained on strict information boundaries before experimenting with AI.",
    riskOfBeingLeftBehind:
      "AI use may become either prohibited by caution or fragmented through unsafe unofficial use, instead of guided operational productivity.",
    practicalUseCases: [
      "Draft non-sensitive training plans from approved templates",
      "Summarise after-action review themes using sanitised notes",
      "Create logistics checklist variations",
      "Generate scenario injects for training exercises",
      "Convert SOPs into quick-reference learning aids",
    ],
    ethicsAndPrivacy: [
      "Do not enter classified, operational, personnel, or security-sensitive information into public tools",
      "AI-generated operational content must be reviewed by authorised personnel",
      "Maintain chain-of-command accountability",
      "Avoid over-reliance in high-stakes decision contexts",
    ],
    champion: {
      title: "Secure AI Training and Staffwork Champion",
      summary:
        "A disciplined peer leader who demonstrates AI productivity only within approved, sanitised, non-sensitive workflows.",
      readinessScore: 79,
      traits: ["security-minded", "disciplined", "clear communicator", "process-oriented"],
      skills: ["Sanitised prompting", "SOP summarisation", "scenario generation", "risk review"],
      influenceSignals: ["Runs training prep", "coordinates staffwork", "trusted within unit routines"],
      scoring: {
        practicalSkill: 72,
        confidence: 66,
        ethicalJudgement: 95,
        peerLeadership: 79,
        workplaceInfluence: 81,
        facilitationReadiness: 73,
      },
    },
    pilot: {
      name: "Secure AI Staffwork Lab",
      duration: "3 weeks",
      format: "Closed cohort with sanitised scenarios",
      cohort: "12 commanders and staff officers",
      peerLedModel:
        "Champions lead controlled practice sessions using fictional training scenarios and a strict information classification checklist.",
      modules: ["AI boundaries in secure environments", "Sanitised staffwork", "Training scenario support", "After-action learning"],
      starterChallenge:
        "Create a training scenario inject from a fictional brief and identify what information must never be entered into AI tools.",
      scalePath: ["Pilot in one safe cohort", "Review with security lead", "Train unit Champions", "Build approved prompt library"],
    },
    measurement: [
      { label: "Baseline fluency", value: 44, target: 72, description: "Understands AI and security boundaries" },
      { label: "Ethical AI understanding", value: 70, target: 95, description: "Protects sensitive information" },
      { label: "Practical task completion", value: 57, target: 82, description: "Completes sanitised staffwork task" },
      { label: "Behaviour evidence", value: 16, target: 40, description: "Uses approved non-sensitive workflow" },
    ],
    behaviourEvidence: [
      {
        metric: "Classification-safe prompt",
        evidence: "Prompt review confirming no restricted information",
        collectionPoint: "Week 1",
      },
      {
        metric: "Training support use",
        evidence: "Reviewed fictional scenario or checklist generated with AI support",
        collectionPoint: "Week 3",
      },
    ],
    dashboardStats: {
      assessed: 34,
      championCandidates: 5,
      sessionsPlanned: 2,
      behaviourEvidenceLogged: 11,
      scalingReadiness: 68,
    },
  },
];

export function getBlueprint(slug: string) {
  return blueprints.find((blueprint) => blueprint.slug === slug);
}

export const overviewStats = {
  totalAssessed: blueprints.reduce((sum, item) => sum + item.dashboardStats.assessed, 0),
  championsIdentified: blueprints.reduce((sum, item) => sum + item.dashboardStats.championCandidates, 0),
  sessionsPlanned: blueprints.reduce((sum, item) => sum + item.dashboardStats.sessionsPlanned, 0),
  behaviourEvidenceLogged: blueprints.reduce(
    (sum, item) => sum + item.dashboardStats.behaviourEvidenceLogged,
    0,
  ),
  averageScalingReadiness: Math.round(
    blueprints.reduce((sum, item) => sum + item.dashboardStats.scalingReadiness, 0) /
      blueprints.length,
  ),
};

export const fluencyDimensions = [
  "Baseline fluency",
  "Practical task completion",
  "Confidence shift",
  "Ethical AI understanding",
  "Peer teaching",
  "Behaviour evidence",
];
