export const N8N_WORKFLOW_NODES = [
  {
    id: "webhook",
    label: "Webhook",
    type: "trigger",
    category: "Webhook",
    icon: "Zap",
    color: "#f43f5e",
    sublabel: "POST /webhook/bdr-campaign",
    items: "1 item",
    inputs: {
      industry: "B2B SaaS & Cloud Infrastructure",
      refCompany: "Stripe",
      country: "United States",
      targetCount: 5
    },
    outputs: {
      status: "Triggered",
      timestamp: "2026-07-25T10:45:00Z"
    }
  },
  {
    id: "find_companies",
    label: "Find Companies",
    type: "agent",
    category: "Agent / OpenAI",
    icon: "Bot",
    color: "#8b5cf6",
    sublabel: "Chat Model Memory + OpenAI Model + TS Output Parser",
    items: "1 item in → 1 item out",
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.2,
      memory: "Window Buffer Memory (k=5)",
      parser: "Structured Output Parser (CompanyArraySchema)"
    },
    inputs: "Webhook campaign criteria",
    outputs: "Raw JSON list of matched target company domains"
  },
  {
    id: "parse_companies",
    label: "Parse Companies",
    type: "code",
    category: "JSON Transformer",
    icon: "Code",
    color: "#10b981",
    sublabel: "Extract & Validate Schema",
    items: "1 item in → 5 items out",
    inputs: "Stringified JSON array",
    outputs: "Parsed Array of 5 Company Objects"
  },
  {
    id: "loop_companies",
    label: "Loop Over Companies",
    type: "control",
    category: "Loop Iterator",
    icon: "RotateCw",
    color: "#06b6d4",
    sublabel: "Iterate per Company Item",
    items: "5 iterations",
    inputs: "Array of Company Objects",
    outputs: "Individual Company Context"
  },
  {
    id: "company_analysis",
    label: "Company Analysis",
    type: "agent",
    category: "Agent / OpenAI",
    icon: "Cpu",
    color: "#8b5cf6",
    sublabel: "OpenAI Model + Analysis Parser",
    items: "5 items total",
    modelConfig: {
      model: "gpt-4o-mini",
      temperature: 0.3,
      parser: "CompanyIntelligenceSchema"
    },
    inputs: "Company Domain & Website context",
    outputs: "Summary, Tech Stack, Pain Points, News, Decision Maker"
  },
  {
    id: "lead_qualification",
    label: "Lead Qualification & Scoring",
    type: "evaluator",
    category: "Scoring Node",
    icon: "CheckCircle2",
    color: "#f59e0b",
    sublabel: "Weighted ICP & Fit Calculation",
    items: "5 items qualified",
    inputs: "Extracted intelligence & signals",
    outputs: "Lead Score (0-100), ICP fit rating, Initial Email draft"
  },
  {
    id: "collect_leads",
    label: "Collect Leads",
    type: "collector",
    category: "Data Aggregator",
    icon: "Database",
    color: "#10b981",
    sublabel: "Store Processed Leads",
    items: "5 items total",
    inputs: "Scored Lead objects",
    outputs: "Structured Campaign Lead Collection"
  },
  {
    id: "aggregate_leads",
    label: "Aggregate Leads",
    type: "combiner",
    category: "Array Merger",
    icon: "GitMerge",
    color: "#3b82f6",
    sublabel: "Merge Loop Outputs",
    items: "1 item",
    inputs: "5 Lead Collections",
    outputs: "Unified Campaign Payload"
  },
  {
    id: "create_excel",
    label: "Create Excel",
    type: "export",
    category: "Spreadsheet Generator",
    icon: "FileSpreadsheet",
    color: "#10b981",
    sublabel: "Generate .XLSX / .CSV",
    items: "1 file created",
    inputs: "Unified Campaign Leads",
    outputs: "bdr_campaign_export.csv"
  },
  {
    id: "build_response",
    label: "Build Response",
    type: "transformer",
    category: "Response Formatter",
    icon: "Layers",
    color: "#8b5cf6",
    sublabel: "Format HTTP Response JSON",
    items: "1 item",
    inputs: "Leads & Excel attachment",
    outputs: "HTTP 200 JSON Payload"
  },
  {
    id: "respond_webhook",
    label: "Respond to Webhook",
    type: "response",
    category: "Webhook Return",
    icon: "Send",
    color: "#f43f5e",
    sublabel: "Send Payload to Web App UI",
    items: "1 response sent",
    inputs: "Final JSON Payload",
    outputs: "Status 200 OK"
  }
];
