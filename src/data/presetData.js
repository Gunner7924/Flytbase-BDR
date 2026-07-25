export const INDUSTRIES = [
  "Autonomous Drones & Aerial Robotics (UAS)",
  "B2B SaaS & Cloud Infrastructure",
  "FinTech & Digital Banking",
  "CyberSecurity & Identity",
  "AI & Data Analytics",
  "Healthcare & HealthTech",
  "E-Commerce Enablement",
  "DevTools & Observability"
];

export const REFERENCE_COMPANIES = [
  { name: "FlytBase", industry: "Autonomous Drones & Aerial Robotics (UAS)", country: "India" },
  { name: "Skydio", industry: "Autonomous Drones & Aerial Robotics (UAS)", country: "United States" },
  { name: "Zipline", industry: "Autonomous Drones & Aerial Robotics (UAS)", country: "United States" },
  { name: "DroneDeploy", industry: "Autonomous Drones & Aerial Robotics (UAS)", country: "United States" },
  { name: "IdeaForge", industry: "Autonomous Drones & Aerial Robotics (UAS)", country: "India" },
  { name: "Stripe", industry: "FinTech & Digital Banking", country: "United States" },
  { name: "Snowflake", industry: "AI & Data Analytics", country: "United States" },
  { name: "Datadog", industry: "DevTools & Observability", country: "United States" }
];

export const COUNTRIES = [
  "All Countries",
  "India",
  "United States",
  "United Kingdom",
  "Germany",
  "Canada",
  "Japan",
  "Singapore",
  "Australia",
  "United Arab Emirates (UAE)",
  "France"
];

export const INITIAL_COMPANIES = [
  {
    id: "comp-flytbase",
    name: "FlytBase",
    website: "https://flytbase.com",
    country: "India",
    status: "Researched",
    leadScore: 98,
    matchScore: "100%",
    summary: "FlytBase is an enterprise-grade autonomous drone dock software platform providing automated BVLOS drone-in-a-box operations for security perimeter surveillance, mining, and critical infrastructure.",
    products: ["FlytNow Autonomous Dock Platform", "FlytBase OS", "FlytCloud Edge Link", "BVLOS Safety Suite"],
    painPoints: [
      "India DGCA Digital Sky airspace clearance integration latency during automated BVLOS missions",
      "Managing real-time 4K video streaming & thermal telemetry drops from remote drone docks over 5G networks",
      "High operational friction when integrating multi-vendor hardware docks across remote industrial oil refineries"
    ],
    recentNews: [
      { date: "2 days ago", title: "Announced strategic partnership with global drone dock OEMs to power 10,000+ autonomous docks worldwide" },
      { date: "3 weeks ago", title: "Expanded R&D engineering center in Pune, India & North American HQ" }
    ],
    decisionMaker: {
      name: "Nitin Gupta",
      title: "Founder & CEO",
      email: "n.gupta@flytbase.com",
      linkedin: "https://linkedin.com/in/nitin-gupta-flytbase",
      location: "Pune, India",
      tone: "Visionary & Technical"
    },
    email: {
      subject: "Streamlining DGCA BVLOS clearance & 5G dock telemetry for FlytBase's global rollout",
      body: `Hi Nitin,

Huge congratulations on FlytBase's recent milestone powering over 10,000 autonomous drone docks globally!

As your FlytNow software platform orchestrates remote BVLOS deployments across India, EMEA, and the US, maintaining sub-30ms video streaming over cellular 5G while automating DGCA / FAA regulatory flight logs remains critical.

We help autonomous drone dock platforms optimize edge-to-cloud video telemetry while automating compliance auditing workflows.

Would you be open for a brief 10-minute exchange next Tuesday at 4 PM IST?

Warm regards,
Alex Rivera
Senior Outbound Specialist`,
      approved: true
    }
  },
  {
    id: "comp-drone-in-2",
    name: "AeroVayu Robotics",
    website: "https://aerovayu.in",
    country: "India",
    status: "Email Ready",
    leadScore: 94,
    matchScore: "97%",
    summary: "AeroVayu Robotics builds indigenous AI surveillance drones and autonomous tethered aerial platforms for Indian defense, border security, and industrial pipeline inspection.",
    products: ["VayuSentinel AI", "TetherDock Max", "AirVision Thermal Core", "SkyTrack Command"],
    painPoints: [
      "India DGCA Type Certification paperwork delays slowing enterprise deployment",
      "High altitude flight stability bottlenecks in Himalayan border weather conditions",
      "Manual multi-sensor payload calibration during night-vision surveillance missions"
    ],
    recentNews: [
      { date: "1 week ago", title: "Awarded Ministry of Defence tender for high-altitude surveillance drones in Ladakh" },
      { date: "1 month ago", title: "Opened new production manufacturing facility in Bengaluru" }
    ],
    decisionMaker: {
      name: "Rohan Deshmukh",
      title: "VP of Hardware & Robotics",
      email: "r.deshmukh@aerovayu.in",
      linkedin: "https://linkedin.com/in/rohan-deshmukh-robotics",
      location: "Bengaluru, India",
      tone: "Direct & Defense-Oriented"
    },
    email: {
      subject: "Accelerating high-altitude sensor telemetry for AeroVayu's MoD deployment",
      body: `Hi Rohan,

Saw the announcement regarding AeroVayu being awarded the Ministry of Defence high-altitude surveillance contract — outstanding accomplishment!

Operating tethered autonomous drones in high-altitude environments like Ladakh requires reliable sensor fusion without thermal sensor drift or telemetry packet drops.

We provide ruggedized edge AI sensor pipelines tailored for defense UAV deployments under strict Make-in-India guidelines.

Would 7 minutes next Thursday work for a quick technical sync?

Best,
Alex Rivera
Senior Outbound Specialist`,
      approved: false
    }
  },
  {
    id: "comp-drone-us-1",
    name: "SkyPulse Robotics",
    website: "https://skypulserobotics.io",
    country: "United States",
    status: "Researched",
    leadScore: 92,
    matchScore: "95%",
    summary: "SkyPulse Robotics manufactures autonomous AI-powered drone inspection fleets and dock-in-a-box stations for critical infrastructure, power grids, and solar farms.",
    products: ["SkyPulse Autopilot AI", "PulseDock Autonomous Station", "Thermal LiDAR Flight Engine", "GridScan Cloud Analytics"],
    painPoints: [
      "FAA Part 107 BVLOS waiver approval delays for remote grid missions",
      "High telemetry data ingestion latency during 4K thermal video streaming from autonomous docks",
      "Manual battery swap management reducing continuous fleet operation uptime"
    ],
    recentNews: [
      { date: "5 days ago", title: "Secured FAA BVLOS approval for autonomous power grid inspections" },
      { date: "2 weeks ago", title: "Raised $35M Series B led by Bessemer Venture Partners" }
    ],
    decisionMaker: {
      name: "Marcus Thorne",
      title: "VP of Autonomous Flight Systems",
      email: "m.thorne@skypulserobotics.io",
      linkedin: "https://linkedin.com/in/marcusthorne-dronetech",
      location: "Austin, TX",
      tone: "Technical & Safety-First"
    },
    email: {
      subject: "Streamlining 4K thermal telemetry streaming for SkyPulse's BVLOS grid expansion",
      body: `Hi Marcus,\n\nHuge congratulations on SkyPulse securing FAA BVLOS approval! Noticed your expansion of PulseDock autonomous stations following the $35M Series B.\n\nAs your autonomous drone fleets scale remote grid inspections, ingesting high-throughput 4K thermal telemetry without edge-to-cloud video packet drops is a major bottleneck.\n\nWe helped leading UAV inspection providers cut live telemetry latency to under 40ms while maintaining full compliance auditing logs.\n\nWould you be open to a quick 10-minute exchange next Wednesday?\n\nBest regards,\nAlex Rivera`,
      approved: false
    }
  },
  {
    id: "comp-drone-ge-1",
    name: "TerraDrone Europe",
    website: "https://terradrone.dev",
    country: "Germany",
    status: "Discovered",
    leadScore: 86,
    matchScore: "90%",
    summary: "TerraDrone Europe provides AI geospatial mapping and autonomous crop health monitoring software for industrial agriculture and forestry.",
    products: ["TerraMap AI", "MultiSpectral Suite", "CanopyScan", "Agronomy Vision"],
    painPoints: [
      "Processing multi-gigabyte orthomosaic aerial maps taking 12+ hours on local workstations",
      "Integration friction between drone flight data and legacy SAP / ERP systems",
      "Lack of automated crop disease detection model retraining pipeline"
    ],
    recentNews: [
      { date: "2 weeks ago", title: "Expanded European agriculture mapping coverage across 500,000 hectares" },
      { date: "1 month ago", title: "Launched multispectral AI analytics for vineyard yield prediction" }
    ],
    decisionMaker: {
      name: "Klaus Richter",
      title: "Director of Geospatial Engineering",
      email: "k.richter@terradrone.dev",
      linkedin: "https://linkedin.com/in/klaus-richter-geospatial",
      location: "Munich, Germany",
      tone: "Technical & Analytical"
    },
    email: {
      subject: "Accelerating orthomosaic map rendering & ERP sync for TerraDrone",
      body: `Hi Klaus,\n\nNoticed TerraDrone's recent expansion across 500k hectares in Europe!\n\nProcessing multi-band orthomosaic drone maps often creates compute bottlenecks, slowing down actionable agronomy reports for growers.\n\nWe help geospatial teams accelerate cloud map rendering by 8x while automating direct integration into farm management ERPs.\n\nCould we schedule a brief 7-minute call next week?\n\nBest regards,\nAlex Rivera`,
      approved: false
    }
  }
];

export const GENERATE_MOCK_COMPANIES = (industry, refCompany, country, count = 5) => {
  const isDroneIndustry = (industry || "").toLowerCase().includes("drone") || 
                          (refCompany || "").toLowerCase().includes("flytbase") ||
                          (refCompany || "").toLowerCase().includes("skydio") ||
                          (refCompany || "").toLowerCase().includes("zipline") ||
                          (refCompany || "").toLowerCase().includes("ideaforge");

  const dronePrefixes = ["Flyt", "Vayu", "Aero", "Sky", "Garuda", "Hover", "Terra", "Nimbus", "Horizon", "Avian"];
  const droneSuffixes = ["Base", "Robotics", "UAS", "Dynamics", "Flight", "Airspace", "Wings", "Vision", "Autonomy", "Grid"];

  const regularPrefixes = ["Quantum", "Synapse", "Hyper", "Strata", "Aether", "Omni", "Nexus", "Cortex", "Nova", "Apex"];
  const regularSuffixes = ["Labs", "Systems", "Technologies", "AI", "Cloud", "Scale", "Networks", "Stack", "Platform"];

  const prefixes = isDroneIndustry ? dronePrefixes : regularPrefixes;
  const suffixes = isDroneIndustry ? droneSuffixes : regularSuffixes;

  const cities = {
    "India": ["Pune, India", "Bengaluru, India", "Hyderabad, India", "Gurgaon, India", "Chennai, India"],
    "United States": ["Austin, TX", "San Jose, CA", "Seattle, WA", "San Francisco, CA", "Denver, CO"],
    "United Kingdom": ["London, UK", "Edinburgh, UK"],
    "Germany": ["Munich, Germany", "Berlin, Germany"],
    "Canada": ["Toronto, ON", "Vancouver, BC"],
    "Japan": ["Tokyo, Japan", "Osaka, Japan"],
    "Singapore": ["Singapore, SG"],
    "Australia": ["Sydney, Australia", "Melbourne, Australia"],
    "United Arab Emirates (UAE)": ["Dubai, UAE", "Abu Dhabi, UAE"],
    "France": ["Paris, France", "Toulouse, France"]
  };

  const selectedCountry = country && country !== "All Countries" ? country : (isDroneIndustry ? "India" : "United States");
  const cityList = cities[selectedCountry] || cities["India"];

  const results = [];
  for (let i = 0; i < count; i++) {
    const prefix = prefixes[i % prefixes.length];
    const suffix = suffixes[(i + 1) % suffixes.length];
    const companyName = `${prefix}${suffix}`;
    const domainExtension = selectedCountry === "India" ? ".in" : ".io";
    const domain = companyName.toLowerCase() + domainExtension;
    const city = cityList[i % cityList.length];
    const score = Math.floor(86 + Math.random() * 13);

    const summary = isDroneIndustry
      ? `${companyName} specializes in autonomous drone software and dock orchestration solutions tailored for ${industry || "UAS operations"}, benchmarked against ${refCompany || "FlytBase"} to accelerate BVLOS inspection and enterprise surveillance.`
      : `${companyName} delivers specialized high-performance solutions in ${industry || "B2B SaaS"}, benchmarked against ${refCompany || "market leaders"}.`;

    const products = isDroneIndustry
      ? [`${prefix}Dock OS`, `${prefix}Nav Flight Link`, `${suffix}Cloud Command`, "DGCA / FAA Safety Hub"]
      : [`${prefix}Core Platform`, `${prefix}Connect API`, `${suffix}Analytics Suite`, "Cloud Hub"];

    const painPoints = isDroneIndustry
      ? [
          `DGCA / FAA BVLOS flight clearance latency slowing commercial dock deployment in ${selectedCountry}`,
          `Real-time 4K video telemetry bandwidth bottlenecks over 5G cellular networks`,
          `Manual battery dock maintenance reducing continuous 24/7 fleet uptime`
        ]
      : [
          `Scaling data throughput while maintaining compliance in ${industry || "enterprise workflows"}`,
          `High operational friction during onboarding legacy client accounts`,
          `Manual workflow bottlenecks impacting dev team velocity`
        ];

    const recentNews = isDroneIndustry
      ? [
          { date: "Recently", title: `${companyName} unveiled new autonomous dock OS with 5G live video telemetry` },
          { date: "1 month ago", title: `Granted regulatory BVLOS test authorization in ${selectedCountry}` }
        ]
      : [
          { date: "Recently", title: `${companyName} announced expansion of engineering operations` },
          { date: "1 month ago", title: `Featured in top industry report for tech innovation` }
        ];

    const firstNames = selectedCountry === "India" ? ["Nitin", "Rohan", "Ananya", "Vikram", "Priya", "Aditya"] : ["Alex", "Jordan", "Taylor", "Morgan", "Casey", "Sam"];
    const lastNames = selectedCountry === "India" ? ["Gupta", "Deshmukh", "Sharma", "Nair", "Patel", "Verma"] : ["Thorne", "Vance", "Sinclair", "Reynolds", "Beckett", "Kovacs"];

    const dmFirstName = firstNames[i % firstNames.length];
    const dmLastName = lastNames[i % lastNames.length];
    const decisionMakerName = `${dmFirstName} ${dmLastName}`;
    const decisionMakerTitle = isDroneIndustry
      ? `${["Founder & CEO", "VP of Autonomous Systems", "Chief Robotics Officer", "Head of Flight Operations", "VP of Engineering"][i % 5]}`
      : `${["VP of Engineering", "Chief Technology Officer", "Head of Product", "Director of IT", "VP of Operations"][i % 5]}`;

    results.push({
      id: `generated-flyt-${Date.now()}-${i}`,
      name: companyName,
      website: `https://${domain}`,
      country: selectedCountry,
      status: "Discovered",
      leadScore: score,
      matchScore: `${score}%`,
      summary,
      products,
      painPoints,
      recentNews,
      decisionMaker: {
        name: decisionMakerName,
        title: decisionMakerTitle,
        email: `${dmFirstName.toLowerCase()}.${dmLastName.toLowerCase()}@${domain}`,
        linkedin: `https://linkedin.com/in/${dmFirstName.toLowerCase()}-${dmLastName.toLowerCase()}-dronetech`,
        location: city,
        tone: isDroneIndustry ? "Visionary & Technical" : "Direct & Strategy-Oriented"
      },
      email: {
        subject: isDroneIndustry
          ? `Streamlining BVLOS clearance & 5G dock telemetry at ${companyName}`
          : `Quick thoughts on ${companyName}'s growth strategy`,
        body: `Hi ${dmFirstName},\n\nFollowed ${companyName}'s recent developments in ${selectedCountry} with great interest!\n\nAs companies scaling autonomous drone platforms alongside benchmarks like ${refCompany || "FlytBase"} expand BVLOS dock operations, managing sub-30ms 5G video telemetry without compliance logging drops is a key priority for tech leaders.\n\nWe help autonomous drone dock teams optimize edge-to-cloud telemetry while automating regulatory flight logs.\n\nWould you be open for a quick 10-minute exchange next week?\n\nBest regards,\nAlex Rivera\nSenior Outbound Specialist`,
        approved: false
      }
    });
  }

  return results;
};
