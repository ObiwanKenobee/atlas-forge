// Static intelligence corpus for the ATLAS RESILIENCE OS demo surface.
// East Africa beachhead. All figures are illustrative model outputs.

export type Domain =
  | "Energy"
  | "Water"
  | "Food"
  | "Housing"
  | "Economic"
  | "Digital"
  | "Environmental"
  | "Social"
  | "Institutional";

export const domains: Domain[] = [
  "Energy",
  "Water",
  "Food",
  "Housing",
  "Economic",
  "Digital",
  "Environmental",
  "Social",
  "Institutional",
];

export type Region = {
  id: string;
  name: string;
  country: string;
  /** normalized 0-100 map position */
  x: number;
  y: number;
  resilience: number;
  pressure: "critical" | "elevated" | "watch" | "stable";
  population: string;
  headline: string;
  scores: Record<Domain, number>;
};

export const regions: Region[] = [
  {
    id: "nairobi-metro",
    name: "Nairobi Metro",
    country: "Kenya",
    x: 54,
    y: 58,
    resilience: 61,
    pressure: "elevated",
    population: "5.6M",
    headline: "Grid firmness degrading under 11% YoY demand growth",
    scores: {
      Energy: 54,
      Water: 47,
      Food: 63,
      Housing: 41,
      Economic: 72,
      Digital: 81,
      Environmental: 52,
      Social: 66,
      Institutional: 68,
    },
  },
  {
    id: "turkana",
    name: "Turkana Basin",
    country: "Kenya",
    x: 44,
    y: 30,
    resilience: 34,
    pressure: "critical",
    population: "1.1M",
    headline: "Third consecutive failed rains; borehole yield down 28%",
    scores: {
      Energy: 22,
      Water: 19,
      Food: 26,
      Housing: 31,
      Economic: 28,
      Digital: 37,
      Environmental: 33,
      Social: 58,
      Institutional: 44,
    },
  },
  {
    id: "arusha",
    name: "Arusha Corridor",
    country: "Tanzania",
    x: 51,
    y: 72,
    resilience: 58,
    pressure: "watch",
    population: "2.3M",
    headline: "Horticulture output rising, 31% post-harvest loss at cold gap",
    scores: {
      Energy: 49,
      Water: 61,
      Food: 44,
      Housing: 55,
      Economic: 64,
      Digital: 57,
      Environmental: 66,
      Social: 71,
      Institutional: 59,
    },
  },
  {
    id: "kampala",
    name: "Kampala–Wakiso",
    country: "Uganda",
    x: 33,
    y: 55,
    resilience: 55,
    pressure: "elevated",
    population: "4.1M",
    headline: "Informal settlement expansion outpacing sanitation capacity",
    scores: {
      Energy: 51,
      Water: 44,
      Food: 58,
      Housing: 38,
      Economic: 61,
      Digital: 63,
      Environmental: 47,
      Social: 69,
      Institutional: 57,
    },
  },
  {
    id: "kigali",
    name: "Kigali Province",
    country: "Rwanda",
    x: 26,
    y: 66,
    resilience: 72,
    pressure: "stable",
    population: "1.7M",
    headline: "Strong institutional layer; industrial land underutilized",
    scores: {
      Energy: 68,
      Water: 71,
      Food: 66,
      Housing: 63,
      Economic: 70,
      Digital: 76,
      Environmental: 74,
      Social: 79,
      Institutional: 86,
    },
  },
  {
    id: "mombasa",
    name: "Mombasa Port Belt",
    country: "Kenya",
    x: 71,
    y: 78,
    resilience: 49,
    pressure: "elevated",
    population: "1.4M",
    headline: "Saline intrusion + logistics congestion compounding",
    scores: {
      Energy: 56,
      Water: 33,
      Food: 51,
      Housing: 45,
      Economic: 62,
      Digital: 60,
      Environmental: 38,
      Social: 55,
      Institutional: 52,
    },
  },
  {
    id: "hargeisa",
    name: "Hargeisa Plateau",
    country: "Somaliland",
    x: 82,
    y: 22,
    resilience: 38,
    pressure: "critical",
    population: "1.2M",
    headline: "Diesel dependency at 84% of generation cost base",
    scores: {
      Energy: 26,
      Water: 24,
      Food: 34,
      Housing: 36,
      Economic: 39,
      Digital: 41,
      Environmental: 35,
      Social: 60,
      Institutional: 42,
    },
  },
  {
    id: "jinja",
    name: "Jinja Industrial",
    country: "Uganda",
    x: 39,
    y: 48,
    resilience: 64,
    pressure: "watch",
    population: "0.4M",
    headline: "Surplus hydro + idle factory shells: latent capacity detected",
    scores: {
      Energy: 79,
      Water: 68,
      Food: 57,
      Housing: 52,
      Economic: 58,
      Digital: 54,
      Environmental: 63,
      Social: 66,
      Institutional: 61,
    },
  },
];

export type Signal = {
  id: string;
  source: string;
  time: string;
  text: string;
  severity: "critical" | "elevated" | "watch" | "info";
};

export const signals: Signal[] = [
  {
    id: "s1",
    source: "SAT · Sentinel-2",
    time: "04:12",
    text: "NDVI decline 14% across Turkana rangeland vs 5-yr baseline",
    severity: "critical",
  },
  {
    id: "s2",
    source: "GRID · KPLC feed",
    time: "04:26",
    text: "Nairobi East feeder reliability index down to 0.91 (7-day)",
    severity: "elevated",
  },
  {
    id: "s3",
    source: "MARKET · EAGC",
    time: "05:01",
    text: "Maize spot +6.8% w/w in Northern corridor markets",
    severity: "elevated",
  },
  {
    id: "s4",
    source: "IOT · Atlas fleet",
    time: "05:14",
    text: "Cold-unit ARK-114 compressor cycling anomaly, RUL 41 days",
    severity: "watch",
  },
  {
    id: "s5",
    source: "COMMUNITY · Wakiso ward 7",
    time: "05:22",
    text: "12 residents report standpipe outage >72h; signal clustered",
    severity: "elevated",
  },
  {
    id: "s6",
    source: "CAPITAL · DFI tracker",
    time: "05:33",
    text: "New $180M blended facility open for distributed energy, EA region",
    severity: "info",
  },
  {
    id: "s7",
    source: "CLIMATE · ICPAC",
    time: "05:40",
    text: "OND rainfall forecast 20-35% below normal, confidence 0.72",
    severity: "critical",
  },
];

export type Opportunity = {
  id: string;
  title: string;
  region: string;
  hypothesis: string;
  score: number;
  capex: string;
  irr: string;
  resilienceLift: number;
  payback: string;
  stage: "Hypothesis" | "Validated" | "Configured" | "Financing";
  drivers: { label: string; value: number }[];
  evidence: string[];
};

export const opportunities: Opportunity[] = [
  {
    id: "opp-cold-north",
    title: "Distributed cold storage + solar microgrid network",
    region: "Northern Kenya corridor",
    hypothesis:
      "Rising population, unreliable power, class-A solar resource and growing horticultural output converge into an unserved cold chain of ~38,000 t/yr.",
    score: 91,
    capex: "$14.2M",
    irr: "19.4%",
    resilienceLift: 12,
    payback: "5.1 yrs",
    stage: "Configured",
    drivers: [
      { label: "Unmet demand", value: 94 },
      { label: "Resource availability", value: 96 },
      { label: "Technical feasibility", value: 88 },
      { label: "Capital intensity", value: 62 },
      { label: "Scalability", value: 90 },
      { label: "Social benefit", value: 84 },
    ],
    evidence: [
      "Post-harvest loss survey 2025 · 31% at aggregation points",
      "Solar GHI 6.1 kWh/m²/day · Global Solar Atlas",
      "Grid SAIDI 74h/yr on Marsabit feeder",
    ],
  },
  {
    id: "opp-modular-housing",
    title: "Modular housing manufacturing cluster",
    region: "Nairobi Metro · Eastern industrial belt",
    hypothesis:
      "Housing deficit of 220,000 units/yr coincides with local steel supply and strong formal rental demand — a factory-first supply response beats site-built economics at scale.",
    score: 87,
    capex: "$26.8M",
    irr: "16.2%",
    resilienceLift: 9,
    payback: "6.4 yrs",
    stage: "Financing",
    drivers: [
      { label: "Unmet demand", value: 97 },
      { label: "Resource availability", value: 78 },
      { label: "Technical feasibility", value: 82 },
      { label: "Capital intensity", value: 44 },
      { label: "Scalability", value: 93 },
      { label: "Social benefit", value: 91 },
    ],
    evidence: [
      "Rental yield 8.4% in target sub-markets",
      "Steel input within 40km · 3 qualified suppliers",
      "Approved county industrial land 12.4 ha",
    ],
  },
  {
    id: "opp-water-reuse",
    title: "Decentralized treatment + industrial reuse network",
    region: "Mombasa Port Belt",
    hypothesis:
      "Water stress is rising while wastewater assets sit at 41% utilization; industrial offtakers will pay above marginal cost for non-potable supply.",
    score: 83,
    capex: "$9.6M",
    irr: "14.8%",
    resilienceLift: 15,
    payback: "6.9 yrs",
    stage: "Validated",
    drivers: [
      { label: "Unmet demand", value: 88 },
      { label: "Resource availability", value: 71 },
      { label: "Technical feasibility", value: 79 },
      { label: "Capital intensity", value: 66 },
      { label: "Scalability", value: 74 },
      { label: "Social benefit", value: 80 },
    ],
    evidence: [
      "Saline intrusion advancing 0.8 km/decade",
      "4 industrial offtakers · 11,200 m³/day combined",
      "Existing plant utilization 41%",
    ],
  },
  {
    id: "opp-waste-heat",
    title: "Waste-heat to food processing exchange",
    region: "Jinja Industrial",
    hypothesis:
      "Idle factory shells plus continuous waste heat from two plants can host drying and milling capacity at near-zero marginal thermal cost.",
    score: 76,
    capex: "$3.1M",
    irr: "22.6%",
    resilienceLift: 6,
    payback: "3.8 yrs",
    stage: "Hypothesis",
    drivers: [
      { label: "Unmet demand", value: 69 },
      { label: "Resource availability", value: 92 },
      { label: "Technical feasibility", value: 84 },
      { label: "Capital intensity", value: 88 },
      { label: "Scalability", value: 58 },
      { label: "Social benefit", value: 63 },
    ],
    evidence: [
      "8.4 MW-th rejected heat measured across 2 sites",
      "Idle shell area 14,000 m²",
      "Cassava & maize surplus within 60 km",
    ],
  },
];

export type Asset = {
  id: string;
  name: string;
  kind: string;
  site: string;
  status: "nominal" | "degraded" | "attention" | "offline";
  utilization: number;
  output: string;
  failureRisk: number;
  rul: string;
  capex: string;
  revenue: string;
  co2: string;
};

export const assets: Asset[] = [
  {
    id: "ARK-114",
    name: "Cold Pod 20ft · Marsabit",
    kind: "Cold storage",
    site: "Marsabit aggregation hub",
    status: "attention",
    utilization: 87,
    output: "38 t stored",
    failureRisk: 42,
    rul: "41 days",
    capex: "$92k",
    revenue: "$4.1k/mo",
    co2: "-18 tCO₂e/yr",
  },
  {
    id: "SLR-208",
    name: "Microgrid 480 kWp + 900 kWh",
    kind: "Energy",
    site: "Marsabit aggregation hub",
    status: "nominal",
    utilization: 71,
    output: "1.94 MWh/day",
    failureRisk: 9,
    rul: "> 5 yrs",
    capex: "$710k",
    revenue: "$21.6k/mo",
    co2: "-612 tCO₂e/yr",
  },
  {
    id: "LFP-031",
    name: "LifePod cluster · 48 units",
    kind: "Housing",
    site: "Athi River phase 1",
    status: "nominal",
    utilization: 96,
    output: "48 households",
    failureRisk: 6,
    rul: "> 20 yrs",
    capex: "$1.15M",
    revenue: "$9.4k/mo",
    co2: "-31 tCO₂e/yr",
  },
  {
    id: "WTR-077",
    name: "Reuse skid 1,200 m³/day",
    kind: "Water",
    site: "Changamwe industrial",
    status: "degraded",
    utilization: 58,
    output: "694 m³/day",
    failureRisk: 61,
    rul: "97 days",
    capex: "$486k",
    revenue: "$12.8k/mo",
    co2: "-44 tCO₂e/yr",
  },
  {
    id: "FAB-002",
    name: "Modular fab line B",
    kind: "Industry",
    site: "Nairobi east works",
    status: "nominal",
    utilization: 82,
    output: "6.2 units/wk",
    failureRisk: 14,
    rul: "2.1 yrs",
    capex: "$3.4M",
    revenue: "$188k/mo",
    co2: "-96 tCO₂e/yr",
  },
  {
    id: "EDG-419",
    name: "Edge compute + sensor mesh",
    kind: "Digital",
    site: "Regional · 34 nodes",
    status: "nominal",
    utilization: 44,
    output: "1.2M readings/day",
    failureRisk: 11,
    rul: "3.4 yrs",
    capex: "$128k",
    revenue: "internal",
    co2: "-2 tCO₂e/yr",
  },
];

export type Agent = {
  name: string;
  role: string;
  status: "active" | "idle" | "awaiting approval";
  confidence: number;
  lastAction: string;
};

export const agents: Agent[] = [
  {
    name: "Opportunity Agent",
    role: "Discovers unmet demand against latent resource",
    status: "active",
    confidence: 0.86,
    lastAction: "Raised 3 new hypotheses in Northern corridor",
  },
  {
    name: "Infrastructure Agent",
    role: "Composes modular system topologies",
    status: "active",
    confidence: 0.81,
    lastAction: "Configured 1,000-person community blueprint v4",
  },
  {
    name: "Engineering Agent",
    role: "Validates technical configurations",
    status: "awaiting approval",
    confidence: 0.74,
    lastAction: "Flagged undersized inverter bank on SLR-208 expansion",
  },
  {
    name: "Finance Agent",
    role: "Models economics and financing structures",
    status: "active",
    confidence: 0.88,
    lastAction: "Restructured cold-chain facility to blended 60/40",
  },
  {
    name: "Maintenance Agent",
    role: "Predicts failures across the deployed fleet",
    status: "active",
    confidence: 0.79,
    lastAction: "RUL 41d on ARK-114 compressor; work order drafted",
  },
  {
    name: "Climate Agent",
    role: "Models environmental risk and scenarios",
    status: "active",
    confidence: 0.72,
    lastAction: "OND below-normal rainfall propagated to 4 regions",
  },
  {
    name: "Community Agent",
    role: "Structures local signals into opportunities",
    status: "active",
    confidence: 0.69,
    lastAction: "Clustered 12 Wakiso water reports into one proposal",
  },
  {
    name: "Governance Agent",
    role: "Ethics, consent, compliance and accountability",
    status: "awaiting approval",
    confidence: 0.91,
    lastAction: "Held land-acquisition step pending consent evidence",
  },
];

export type Recommendation = {
  id: string;
  title: string;
  rationale: string;
  agent: string;
  confidence: number;
  impact: string;
  requiresApproval: boolean;
};

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    title: "Advance Northern cold-chain network to financing",
    rationale:
      "Highest resilience lift per dollar in the portfolio (12 index points at $14.2M) with a validated offtake base and open DFI facility matching the structure.",
    agent: "Executive Agent",
    confidence: 0.87,
    impact: "+12 resilience · 19.4% IRR",
    requiresApproval: true,
  },
  {
    id: "rec-2",
    title: "Dispatch maintenance crew to ARK-114 within 21 days",
    rationale:
      "Compressor cycling anomaly implies 41-day remaining useful life; intervention now avoids an estimated $61k spoilage exposure at peak season.",
    agent: "Maintenance Agent",
    confidence: 0.79,
    impact: "Avoids $61k loss",
    requiresApproval: false,
  },
  {
    id: "rec-3",
    title: "Pre-position water trucking contracts in Turkana Basin",
    rationale:
      "Below-normal OND forecast plus 28% borehole yield decline puts 340k people at supply risk within 90 days; contracts are cheaper before scarcity pricing.",
    agent: "Climate Agent",
    confidence: 0.72,
    impact: "340k people covered",
    requiresApproval: true,
  },
];

export type Project = {
  id: string;
  name: string;
  phase: "Plan" | "Procure" | "Build" | "Deploy" | "Operate";
  progress: number;
  location: string;
  budget: string;
  spend: number;
  health: "on track" | "at risk" | "blocked";
  next: string;
};

export const projects: Project[] = [
  {
    id: "PRJ-014",
    name: "Marsabit cold-chain node 1",
    phase: "Operate",
    progress: 100,
    location: "Marsabit, Kenya",
    budget: "$1.1M",
    spend: 97,
    health: "on track",
    next: "Node 2 replication package ready",
  },
  {
    id: "PRJ-021",
    name: "Athi River LifePod phase 2",
    phase: "Build",
    progress: 62,
    location: "Machakos, Kenya",
    budget: "$4.6M",
    spend: 58,
    health: "at risk",
    next: "Cladding supplier lead time +3 weeks",
  },
  {
    id: "PRJ-027",
    name: "Changamwe reuse network",
    phase: "Procure",
    progress: 28,
    location: "Mombasa, Kenya",
    budget: "$9.6M",
    spend: 12,
    health: "blocked",
    next: "Awaiting offtake agreement countersignature",
  },
  {
    id: "PRJ-033",
    name: "Jinja waste-heat exchange pilot",
    phase: "Plan",
    progress: 11,
    location: "Jinja, Uganda",
    budget: "$3.1M",
    spend: 3,
    health: "on track",
    next: "Thermal survey scheduled",
  },
];

export type Module = {
  id: string;
  name: string;
  category: string;
  capacity: string;
  cost: string;
  deploy: string;
  life: string;
  energy: string;
};

export const catalog: Module[] = [
  {
    id: "MOD-LP1",
    name: "LifePod 32",
    category: "Housing",
    capacity: "32 m² · 4 persons",
    cost: "$14,800",
    deploy: "6 days",
    life: "25 yrs",
    energy: "1.8 kWh/day",
  },
  {
    id: "MOD-SG4",
    name: "Solar microgrid 480",
    category: "Energy",
    capacity: "480 kWp · 900 kWh",
    cost: "$710,000",
    deploy: "9 weeks",
    life: "25 yrs",
    energy: "generates 1.9 MWh/day",
  },
  {
    id: "MOD-CP2",
    name: "Cold Pod 20",
    category: "Food",
    capacity: "38 t · -18 to +8 °C",
    cost: "$92,000",
    deploy: "3 weeks",
    life: "15 yrs",
    energy: "46 kWh/day",
  },
  {
    id: "MOD-WP3",
    name: "Water treatment skid 1200",
    category: "Water",
    capacity: "1,200 m³/day",
    cost: "$486,000",
    deploy: "11 weeks",
    life: "20 yrs",
    energy: "310 kWh/day",
  },
  {
    id: "MOD-HC1",
    name: "Clinic module L2",
    category: "Health",
    capacity: "6 beds · diagnostics",
    cost: "$168,000",
    deploy: "4 weeks",
    life: "20 yrs",
    energy: "62 kWh/day",
  },
  {
    id: "MOD-FB2",
    name: "Modular fab shell",
    category: "Industry",
    capacity: "1,800 m² · 2 lines",
    cost: "$1,240,000",
    deploy: "16 weeks",
    life: "30 yrs",
    energy: "1.4 MWh/day",
  },
  {
    id: "MOD-EC1",
    name: "Edge compute node",
    category: "Digital",
    capacity: "24 TOPS · mesh gateway",
    cost: "$3,800",
    deploy: "2 days",
    life: "8 yrs",
    energy: "4 kWh/day",
  },
  {
    id: "MOD-CA2",
    name: "Controlled agriculture bay",
    category: "Food",
    capacity: "420 m² · 38 t/yr",
    cost: "$228,000",
    deploy: "7 weeks",
    life: "18 yrs",
    energy: "180 kWh/day",
  },
];

export type Scenario = {
  id: string;
  name: string;
  question: string;
  severity: number;
  impacts: { system: string; loss: number; note: string }[];
  interventions: string[];
};

export const scenarios: Scenario[] = [
  {
    id: "scn-grid",
    name: "Grid capacity loss",
    question: "What happens if the city loses 30% of grid capacity for 14 days?",
    severity: 78,
    impacts: [
      { system: "Energy", loss: 72, note: "Rolling 9h/day outages across 6 feeders" },
      { system: "Water", loss: 54, note: "Pumping stations fall to backup only" },
      { system: "Food", loss: 61, note: "Cold chain break; 2,400 t spoilage risk" },
      { system: "Health", loss: 38, note: "14 facilities on <8h autonomy" },
      { system: "Economic", loss: 47, note: "Estimated $84M output loss" },
    ],
    interventions: [
      "Deploy 12 MW distributed storage at critical feeders (48h mobilization)",
      "Prioritize 14 health facilities for microgrid islanding",
      "Activate cold-chain mutual aid across 9 Atlas nodes",
    ],
  },
  {
    id: "scn-rain",
    name: "Rainfall decline −20%",
    question: "What happens to this region if rainfall decreases by 20%?",
    severity: 66,
    impacts: [
      { system: "Water", loss: 63, note: "Borehole yield −24%, reservoir −31%" },
      { system: "Food", loss: 58, note: "Cereal output −19%, prices +12%" },
      { system: "Economic", loss: 34, note: "Pastoral income −27%" },
      { system: "Social", loss: 41, note: "Migration pressure on 3 urban nodes" },
      { system: "Environmental", loss: 45, note: "Rangeland degradation accelerates" },
    ],
    interventions: [
      "Decentralized storage: 18 × 500 m³ tanks at ward level",
      "Shift 900 ha to drought-tolerant varieties with offtake guarantee",
      "Pre-position trucking contracts before scarcity pricing",
    ],
  },
  {
    id: "scn-supply",
    name: "Supply-chain disruption",
    question: "What if port throughput drops 40% for 30 days?",
    severity: 59,
    impacts: [
      { system: "Industry", loss: 66, note: "Input stockout at 4 of 6 fab lines" },
      { system: "Food", loss: 44, note: "Wheat and rice imports constrained" },
      { system: "Energy", loss: 29, note: "Diesel reserve down to 11 days" },
      { system: "Economic", loss: 52, note: "Estimated $210M trade delay" },
    ],
    interventions: [
      "Localize 38% of BOM through qualified regional suppliers",
      "Raise strategic buffer on 9 critical SKUs to 45 days",
      "Route 20% of volume through secondary corridor",
    ],
  },
];

export type Facility = {
  name: string;
  type: string;
  size: string;
  tickets: string;
  status: string;
};

export const capitalStack: Facility[] = [
  {
    name: "East Africa Resilience Facility I",
    type: "Blended · DFI anchored",
    size: "$180M",
    tickets: "$2M–$25M",
    status: "Open",
  },
  {
    name: "Distributed Energy Project Finance",
    type: "Senior debt",
    size: "$64M",
    tickets: "$5M–$20M",
    status: "Open",
  },
  {
    name: "Community Ownership Vehicle",
    type: "Revenue share · local equity",
    size: "$12M",
    tickets: "$50k–$1M",
    status: "Structuring",
  },
  {
    name: "Outcome-Based Water Fund",
    type: "Results financing",
    size: "$31M",
    tickets: "$1M–$8M",
    status: "Diligence",
  },
];

export type CommunityProposal = {
  id: string;
  ward: string;
  text: string;
  signals: number;
  converted: string;
};

export const proposals: CommunityProposal[] = [
  {
    id: "CP-118",
    ward: "Wakiso ward 7",
    text: "Our area needs water storage — the standpipe has been dry for three days.",
    signals: 12,
    converted: "Ward-level 500 m³ storage + booster · screening",
  },
  {
    id: "CP-121",
    ward: "Jinja north",
    text: "There is unused industrial land behind the old mill.",
    signals: 4,
    converted: "Latent asset registered · waste-heat exchange site",
  },
  {
    id: "CP-127",
    ward: "Marsabit town",
    text: "Farmers throw away tomatoes every week when the lorry is late.",
    signals: 23,
    converted: "Cold Pod node 2 demand evidence · configured",
  },
];
