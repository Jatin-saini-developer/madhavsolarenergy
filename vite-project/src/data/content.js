// ─── Company Metrics ─────────────────────────────────────────────────────────
// TODO: Replace all values with final approved company figures.
export const companyData = {
  commissionedCapacity: "200+ MW",
  industrialProjects:   "550+",
  footprint:            "Pan-India",
  yearsOfExperience:    "10+",       // TODO: confirm
  statesPresent:        "15+",       // TODO: confirm
};

// ─── Hero / Problem (Pass 1) ──────────────────────────────────────────────────
export const problemCards = [
  {
    id: "margins",
    title: "Margins",
    description: "Energy costs put pressure on profitability.",
    iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    id: "production",
    title: "Production Economics",
    description: "Energy is part of the cost of every unit produced.",
    iconPath: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  },
  {
    id: "predictability",
    title: "Cost Predictability",
    description: "Changing power costs make long-term planning harder.",
    iconPath: "M2 12h4l3-9 5 18 3-9h5",
  },
  {
    id: "competitiveness",
    title: "Competitiveness",
    description: "Higher operating costs can affect your ability to compete.",
    iconPath: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
];

export const valueCards = [
  {
    id: "dependence",
    title: "Lower Grid Dependence",
    description: "Reduce exposure to conventional power dependence.",
    iconPath: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  },
  {
    id: "visibility",
    title: "Better Cost Visibility",
    description: "Build greater predictability into long-term energy planning.",
    iconPath: "M2 12h4l3-9 5 18 3-9h5",
  },
  {
    id: "economics",
    title: "Stronger Business Economics",
    description: "Evaluate solar through ROI, payback and lifecycle value.",
    iconPath: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
  {
    id: "growth",
    title: "Sustainable Growth",
    description: "Support decarbonisation objectives without compromising business performance.",
    iconPath: "M12 20V10M18 20V4M6 20v-4",
  },
];

// ─── Section 4: Solar Models ──────────────────────────────────────────────────
// TODO: Replace imagePlaceholder with actual asset paths once approved images are available.
// Recommended paths:
//   rooftop     → src/assets/images/solar-model-rooftop.jpg
//   ground-mount → src/assets/images/solar-model-ground-mount.jpg
//   captive     → src/assets/images/solar-model-captive.jpg
//   open-access → src/assets/images/solar-model-open-access.jpg
export const solarModels = [
  {
    id:               "rooftop",
    index:            "01",
    microLabel:       "ON-SITE GENERATION",
    title:            "Rooftop Solar",
    description:      "For businesses with usable rooftop infrastructure and significant daytime consumption.",
    suitedFor:        ["Factories & warehouses", "Daytime heavy consumers", "Owned or long-leased properties"],
    // TODO: Replace null with: import rooftopImg from '../assets/images/solar-model-rooftop.jpg'
    image:            "https://images.openai.com/static-rsc-4/S5wWKv9eeOYPC8MtNcqiayOsvcP86G9d24zg3sH5KmBd_V__qIMx3hdhdez7YDKSU3_CT9tuP9dAynrWNTPQmd8NbUxRRvo70FXc6csz3Mr73TLvsS4jpAwyiu8j7vh7Fez_oeAJwuPuwTwy8SrEUYVKR2W5HtyqTN9dhenq9HR-DnRwkEhwRvoRchjTDpgz?purpose=fullsize",
    imageAlt:         "Manufacturing building with rooftop solar installation",
  },
  {
    id:               "ground-mount",
    index:            "02",
    microLabel:       "LARGE-SCALE GENERATION",
    title:            "Ground-Mounted Solar",
    description:      "For larger projects where land and scale create stronger generation potential.",
    suitedFor:        ["Large industrial campuses", "Dedicated land parcels", "High-MW requirements"],
    // TODO: Replace null with: import groundImg from '../assets/images/solar-model-ground-mount.jpg'
    image:            "https://images.openai.com/static-rsc-4/a5aNfyjiFS445t3scAPRtw2GWt4r5niFSETXjTvF3t8s-XZUzA23gxbFcCPlP_7dPCoHHo2QOXBkOurciqEjOElEXaVOBvuPaxSkiCa-Yl4bwyaSqyMwDcg-OibX7fPcktlySIClupq-aM8Q1pFkV_CY0EufJo9v-PWVCnZzvoNIKCwrkfjO3kh9BCj64jpu?purpose=fullsize",
    imageAlt:         "Large industrial ground-mounted solar installation",
  },
  {
    id:               "captive",
    index:            "03",
    microLabel:       "STRUCTURED PROCUREMENT",
    title:            "Captive / Group Captive",
    description:      "For businesses exploring structured long-term renewable power procurement.",
    suitedFor:        ["Long-term energy planning", "Multi-facility enterprises", "Structured ownership models"],
    // TODO: Replace null with: import captiveImg from '../assets/images/solar-model-captive.jpg'
    image:            "https://images.openai.com/static-rsc-4/lwISZM6ay5wojPguJ7AMfwbo4xmicDJx0Vsryi54VU2KOxZcjgBgsJi4TCs2XsMs4PFAqhOGozIzmk7cz8mXIVLmirwdNrIrBTw4iRUk86xCxz9Svnyl9Ztieranfk01YO1sOMN26bX-fru_70GByRo8qg079FYnq8Y9_ZmTU2cGNacInurT6skLwF3AwMsY?purpose=fullsize",
    imageAlt:         "Industrial energy infrastructure and solar generation facility",
  },
  {
    id:               "open-access",
    index:            "04",
    microLabel:       "OFF-SITE RENEWABLE ENERGY",
    title:            "Open Access",
    description:      "For enterprises evaluating renewable energy beyond on-site generation.",
    suitedFor:        ["Grid-connected buyers", "Large consumers (>1 MW)", "Third-party PPA buyers"],
    // TODO: Replace null with: import openAccessImg from '../assets/images/solar-model-open-access.jpg'
    image:            "https://images.openai.com/static-rsc-4/GZVmw8ZOYwho2T1NPk8hUjp7_87D3XlgsZZ2klUpNannKBVwizcT5AQr8WW00Pn3cNkHdTMmmKV9rfC3C3FqKNq42s17uarSxOg8J_XiOcy9CcFpaJUOU0bYKWb3Apvom-U6ao7953xrTkw-Q-rzt16mlSEZSS_-cqt916mamnj4VC-fAMhOLPh7OGKNpOgM?purpose=fullsize",
    imageAlt:         "Large-scale renewable energy infrastructure with grid connection",
  },
];

// ─── Section 5: Engineering Credibility / Why Madhav ─────────────────────────
export const capabilityBlocks = [
  {
    id:          "engineering",
    title:       "Engineering",
    description: "Solutions designed around actual site and operating conditions.",
  },
  {
    id:          "execution",
    title:       "Execution",
    description: "Reliable project delivery with focus on quality.",
  },
  {
    id:          "economics",
    title:       "Economics",
    description: "Solar evaluated as a long-term business investment.",
  },
  {
    id:          "scale",
    title:       "Scale",
    description: "Solutions structured for commercial and industrial requirements.",
  },
];

// ─── Section 7: Decision-Maker Stakeholders ───────────────────────────────────
export const stakeholders = [
  {
    id:       "ceo",
    role:     "CEO / MD",
    question: "Will this improve our long-term competitiveness?",
    featured: true,
  },
  {
    id:       "cfo",
    role:     "CFO",
    question: "Does the investment make commercial sense?",
    featured: false,
  },
  {
    id:       "plant-head",
    role:     "Plant Head",
    question: "Can this be executed without compromising operations?",
    featured: false,
  },
  {
    id:       "procurement",
    role:     "Procurement Head",
    question: "Can this partner deliver at the required quality and scale?",
    featured: false,
  },
  {
    id:       "sustainability",
    role:     "Sustainability Head",
    question: "How does this support our renewable-energy and decarbonisation goals?",
    featured: false,
  },
];

// ─── Section 8: Case Study ────────────────────────────────────────────────────
// TODO: Replace ALL placeholder values below with final approved Madhav project data.
// DO NOT publish fabricated metrics.
export const caseStudy = {
  industry:  "Manufacturing",
  location:  "TODO: Approved project location",
  capacity:  "TODO: Approved actual capacity (e.g., X.X MWp)",
  challenge: "TODO: Approved challenge description",
  approach:  "TODO: Approved Madhav project approach",
  impact:    "TODO: Approved verified project outcome",
  imageUrl:  "https://madhavsolarenergy.com/wp-content/uploads/2026/08/3-2.jpg", // TODO: Replace with approved Madhav project image path.
  imageAlt:  "Madhav Solar manufacturing project installation",
};

// ─── Section 9: Assessment Deliverables ───────────────────────────────────────
export const assessmentDeliverables = [
  "Suitable solar model for your facility",
  "Approximate project opportunity (scale & feasibility)",
  "Technical feasibility overview",
  "Commercial considerations",
  "CAPEX / OPEX suitability",
  "Recommended next step",
];

// ─── Section 11: Trust Points ─────────────────────────────────────────────────
export const trustPoints = [
  {
    id:    "economics",
    title: "Business Economics",
    body:  "Every proposal is evaluated through ROI, payback period and lifecycle cost — not just installation price.",
  },
  {
    id:    "execution",
    title: "Execution Reliability",
    body:  "Structured EPC process with quality benchmarks, site-specific engineering and delivery accountability.",
  },
  {
    id:    "feasibility",
    title: "Technical Feasibility",
    body:  "Site survey, shadow analysis, load profiling — before any commercial recommendation.",
  },
  {
    id:    "performance",
    title: "Long-Term Performance",
    body:  "O&M frameworks designed for asset longevity and sustained generation yield.",
  },
];

// ─── Form: Industry options ───────────────────────────────────────────────────
export const industryOptions = [
  "Textiles & Apparel",
  "Food & Beverages",
  "Pharmaceuticals",
  "Chemicals",
  "Automotive & Auto Components",
  "Steel & Metals",
  "Cement & Construction Materials",
  "Plastics & Rubber",
  "Paper & Packaging",
  "Electronics & Engineering",
  "Other Manufacturing",
];
