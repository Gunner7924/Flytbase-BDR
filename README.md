# 🚁 AI Outbound BDR Assistant - FlytBase & Drone Ecosystem Prospecting Engine

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![n8n Workflow](https://img.shields.io/badge/n8n-LangChain_Pipeline-FF6D5A?style=flat-square&logo=n8n&logoColor=white)](https://n8n.io/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

An autonomous **AI Outbound BDR (Business Development Representative) Assistant** designed for high-growth B2B SaaS and Drone/UAS robotics companies like **FlytBase**. The platform automates target company discovery, web intelligence gathering, BVLOS signal detection, lead qualification scoring, and hyper-personalized email outreach sequences.

---

## ⚡ Key Features

- **🎯 Campaign Builder**: Configure target industry parameters, lookalike reference companies (*FlytBase*, *Skydio*, *Zipline*, *ideaForge*), country region filters (including *India*, *US*, *UK*, *Germany*, *Japan*, *UAE*), and lead count sliders.
- **📊 Target Companies Directory**: Interactive tabular overview displaying live status tags (`Discovered`, `Researched`, `Email Ready`, `Approved`), domain links, match scores, and individual/bulk `[Research All]` triggers.
- **🔬 Company Details Intelligence Inspector**: Deep-dive profile featuring AI-extracted company summaries, core products & tech stacks, operational pain points (e.g., *DGCA/FAA BVLOS flight clearances*, *5G 4K video telemetry bandwidth*), recent news & funding signals, and verified decision-maker personas (*Nitin Gupta*, Founder & CEO).
- **✉️ AI Email Generation Studio**: Dynamic outreach draft generator with tone switches (*Consultative*, *Direct*, *Value-First*, *Friendly*), direct text editing, variable tag highlighting, and one-click `[Copy]`, `[Regenerate]`, and `[Approve]` controls.
- **📈 Campaign Status Metrics**: Real-time aggregate tracker for Companies Found, Research Completed, and Emails Ready, plus one-click `.CSV` sequence export.
- **⚡ n8n Backend Workflow Canvas**: Interactive visual node pipeline representing every stage of the n8n / LangChain multi-agent execution flow.

---

## 🔄 n8n / LangChain Backend Workflow Architecture

The application is synchronized with an **n8n multi-agent execution pipeline**:

```mermaid
graph LR
    A[⚡ Webhook Trigger] --> B[🤖 Find Companies Agent]
    B --> C[{} Parse Companies]
    C --> D[🔄 Loop Over Companies]
    D --> E[🔬 Company Analysis Agent]
    E --> F[⭐ Lead Qualification & Scoring]
    F --> G[📦 Collect Leads]
    G --> H[🔀 Aggregate Leads]
    H --> I[📊 Create Excel Export]
    I --> J[⚡ Respond to Webhook]
```

### Execution Node Breakdown:
1. **Webhook (`POST /webhook/bdr-campaign`)**: Ingests campaign criteria from the UI.
2. **Find Companies Agent (`OpenAI gpt-4o-mini + Buffer Memory`)**: Searches B2B company registries for lookalike targets based on the reference company (e.g., *FlytBase*).
3. **Parse Companies**: Extracts and validates structured JSON company schemas.
4. **Loop Over Companies**: Iterates through each prospective target company.
5. **Company Analysis Agent**: Scrapes web signals, tech stacks, recent news, and key decision-maker profiles.
6. **Lead Qualification & Scoring**: Computes a 0–100 ICP fit score and drafts personalized outreach email copy.
7. **Collect & Aggregate Leads**: Merges individual loop item outputs into a unified campaign payload.
8. **Create Excel**: Generates `.csv` / `.xlsx` spreadsheet exports.
9. **Respond to Webhook**: Returns the final JSON payload back to the client interface.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- `npm` or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gunner7924/Flytbase-BDR.git
   cd Flytbase-BDR
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## ⚙️ Webhook & n8n Configuration

You can connect the frontend directly to your self-hosted n8n instance or custom webhook endpoint:
1. Click the **Webhook Settings** button in the top navigation bar.
2. Enter your n8n Webhook URL (e.g., `https://n8n.yourdomain.com/webhook/outbound-bdr`).
3. (Optional) Provide your API authorization key.
4. Save configuration — all campaign requests will POST directly to your live workflow pipeline!

---

## 🛠️ Built With

- **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS3 with Glassmorphism SaaS dark system
- **Backend Workflow**: [n8n](https://n8n.io/) + [LangChain](https://www.langchain.com/) / OpenAI APIs

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
