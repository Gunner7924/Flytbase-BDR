import React, { useState } from 'react';
import Header from './components/Header';
import CampaignBuilder from './components/CampaignBuilder';
import TargetCompaniesTable from './components/TargetCompaniesTable';
import CompanyDetails from './components/CompanyDetails';
import GeneratedEmail from './components/GeneratedEmail';
import CampaignStatus from './components/CampaignStatus';
import GenerationModal from './components/GenerationModal';
import WorkflowCanvas from './components/WorkflowCanvas';
import WorkflowSettingsModal from './components/WorkflowSettingsModal';
import { INITIAL_COMPANIES, GENERATE_MOCK_COMPANIES } from './data/presetData';
import { N8N_WORKFLOW_NODES } from './data/workflowNodes';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [companies, setCompanies] = useState(INITIAL_COMPANIES);
  const [selectedCompanyId, setSelectedCompanyId] = useState(INITIAL_COMPANIES[0].id);
  const [toastMessage, setToastMessage] = useState(null);

  // Tab State: 'campaign' vs 'workflow'
  const [activeTab, setActiveTab] = useState('campaign');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('https://n8n.internal.app/webhook/outbound-bdr');

  // n8n Workflow execution state
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [isWorkflowRunning, setIsWorkflowRunning] = useState(false);

  // AI Modal Simulation State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSteps, setModalSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const selectedCompany = companies.find((c) => c.id === selectedCompanyId) || companies[0];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleResetDefaults = () => {
    setCompanies(INITIAL_COMPANIES);
    setSelectedCompanyId(INITIAL_COMPANIES[0].id);
    showToast("Sample campaign reloaded!");
  };

  // Run the n8n Workflow Node Sequence
  const runWorkflowAnimation = (onComplete) => {
    setIsWorkflowRunning(true);
    const nodeSequence = [
      "webhook",
      "find_companies",
      "parse_companies",
      "loop_companies",
      "company_analysis",
      "lead_qualification",
      "collect_leads",
      "aggregate_leads",
      "create_excel",
      "build_response",
      "respond_webhook"
    ];

    let idx = 0;
    setActiveNodeId(nodeSequence[0]);

    const interval = setInterval(() => {
      idx++;
      if (idx < nodeSequence.length) {
        setActiveNodeId(nodeSequence[idx]);
      } else {
        clearInterval(interval);
        setActiveNodeId(null);
        setIsWorkflowRunning(false);
        if (onComplete) onComplete();
      }
    }, 450);
  };

  // Generate new campaign handler
  const handleGenerateCampaign = ({ industry, refCompany, country, targetCount }) => {
    setModalTitle(`n8n Webhook: Generating Campaign (${refCompany})`);
    const steps = [
      `[Webhook] Triggering payload to n8n endpoint...`,
      `[Find Companies] OpenAI Model generating lookalikes in ${industry}...`,
      `[Parse Companies] Extracting JSON schema & array items...`,
      `[Loop Over Companies] Analyzing products, news, and decision makers...`,
      `[Lead Qualification & Scoring] Computing ICP scores & email drafts...`,
      `[Create Excel & Respond] Finalizing CSV sequence package...`
    ];
    setModalSteps(steps);
    setCurrentStepIndex(0);
    setIsModalOpen(true);

    // Also trigger workflow canvas animation
    runWorkflowAnimation(() => {
      const newCompanies = GENERATE_MOCK_COMPANIES(industry, refCompany, country, targetCount);
      setCompanies(newCompanies);
      if (newCompanies.length > 0) {
        setSelectedCompanyId(newCompanies[0].id);
      }
      setIsModalOpen(false);
      showToast(`n8n Pipeline complete! ${newCompanies.length} companies processed.`);
    });

    let step = 0;
    const modalInterval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(modalInterval);
      }
    }, 800);
  };

  // Research company handler
  const handleResearchCompany = (companyId) => {
    const targetComp = companies.find((c) => c.id === companyId);
    if (!targetComp) return;

    setModalTitle(`n8n Node Execution: Company Analysis (${targetComp.name})`);
    const steps = [
      `[Loop Over Companies] Sending domain payload: ${targetComp.website}`,
      `[Company Analysis] OpenAI Model parsing tech stack & news signals...`,
      `[Lead Qualification & Scoring] Calculating lead score & customized email...`,
      `[Collect Leads] Updating campaign record in database...`
    ];
    setModalSteps(steps);
    setCurrentStepIndex(0);
    setIsModalOpen(true);

    runWorkflowAnimation(() => {
      setCompanies((prev) =>
        prev.map((comp) => {
          if (comp.id === companyId) {
            return {
              ...comp,
              status: comp.status === 'Discovered' ? 'Researched' : comp.status
            };
          }
          return comp;
        })
      );
      setSelectedCompanyId(companyId);
      setIsModalOpen(false);
      showToast(`n8n Analysis completed for ${targetComp.name}!`);
    });

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
      }
    }, 700);
  };

  // Research all companies handler
  const handleResearchAll = () => {
    setModalTitle("n8n Pipeline: Batch Research Loop");
    const steps = [
      "[Webhook] Triggering batch lead qualification loop...",
      "[Find & Analysis Nodes] Processing multi-agent telemetry...",
      "[Lead Qualification & Scoring] Scoring all prospective leads...",
      "[Create Excel & Respond to Webhook] Aggregating final output..."
    ];
    setModalSteps(steps);
    setCurrentStepIndex(0);
    setIsModalOpen(true);

    runWorkflowAnimation(() => {
      setCompanies((prev) =>
        prev.map((comp) => ({
          ...comp,
          status: comp.status === 'Discovered' ? 'Email Ready' : comp.status
        }))
      );
      setIsModalOpen(false);
      showToast("Batch n8n workflow execution completed for all companies!");
    });

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
      }
    }, 850);
  };

  const handleUpdateEmail = (companyId, newEmailData) => {
    setCompanies((prev) =>
      prev.map((comp) => {
        if (comp.id === companyId) {
          return {
            ...comp,
            email: {
              ...comp.email,
              ...newEmailData
            }
          };
        }
        return comp;
      })
    );
  };

  const handleRegenerateEmail = (companyId, tone) => {
    const targetComp = companies.find((c) => c.id === companyId);
    if (!targetComp) return;

    const dmName = targetComp.decisionMaker?.name?.split(' ')[0] || 'there';
    const newSubjects = {
      'Consultative': `Strategic question regarding ${targetComp.name}'s H2 roadmap`,
      'Direct': `Quick query on ${targetComp.name}'s tech stack`,
      'Value-First': `Potential 30% operational efficiency for ${targetComp.name}`,
      'Friendly': `Intro & congrats on ${targetComp.name}'s recent momentum`
    };

    const newBodies = {
      'Consultative': `Hi ${dmName},\n\nHope this finds you well. I was reviewing ${targetComp.name}'s recent developments in ${targetComp.country}.\n\nGiven your focus on ${targetComp.products[0] || 'core infrastructure'}, enterprise teams often face friction around ${targetComp.painPoints[0] || 'scaling operations'}.\n\nWe provide specialized automation that streamlines these exact bottlenecks. Would you be open to a 10-minute brief exchange next Tuesday?\n\nBest,\nAlex Rivera`,
      'Direct': `Hi ${dmName},\n\nNoticed ${targetComp.name} is scaling rapidly in ${targetComp.country}.\n\nWe help executives in ${targetComp.country} cut operational friction associated with ${targetComp.painPoints[0] || 'growth'} by 40%.\n\nWorth a 5-minute call this Thursday?\n\nBest,\nAlex`,
      'Value-First': `Hi ${dmName},\n\nQuick note — we recently helped a company with a similar profile to ${targetComp.name} reduce operational setup time from 3 days to under 15 minutes.\n\nI thought this might align with your H2 priorities around ${targetComp.products[0] || 'platform performance'}.\n\nWould you be open to reviewing a 2-minute summary video?\n\nBest regards,\nAlex Rivera`,
      'Friendly': `Hi ${dmName},\n\nCongrats on ${targetComp.name}'s impressive growth trajectory!\n\nJust wanted to reach out since we work with similar technical leaders tackling ${targetComp.painPoints[0] || 'workflow optimization'}.\n\nWould love to connect briefly if you have 7 minutes to spare next week.\n\nWarmly,\nAlex`
    };

    setCompanies((prev) =>
      prev.map((comp) => {
        if (comp.id === companyId) {
          return {
            ...comp,
            status: 'Email Ready',
            email: {
              ...comp.email,
              subject: newSubjects[tone] || newSubjects['Consultative'],
              body: newBodies[tone] || newBodies['Consultative']
            }
          };
        }
        return comp;
      })
    );

    showToast(`n8n Lead Scoring node regenerated email in ${tone} tone!`);
  };

  const handleApproveEmail = (companyId) => {
    setCompanies((prev) =>
      prev.map((comp) => {
        if (comp.id === companyId) {
          const newApproved = !(comp.email && comp.email.approved);
          return {
            ...comp,
            status: newApproved ? 'Approved' : 'Email Ready',
            email: {
              ...comp.email,
              approved: newApproved
            }
          };
        }
        return comp;
      })
    );
    showToast("Approved email sequence ready for webhook sync!");
  };

  const handleExportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,Company,Website,Country,Status,LeadScore,DecisionMaker,Email,Subject,Approved\n";
    companies.forEach((c) => {
      const row = [
        `"${c.name}"`,
        `"${c.website}"`,
        `"${c.country}"`,
        `"${c.status}"`,
        `"${c.leadScore}"`,
        `"${c.decisionMaker?.name || ''}"`,
        `"${c.decisionMaker?.email || ''}"`,
        `"${(c.email?.subject || '').replace(/"/g, '""')}"`,
        `"${c.email?.approved ? 'YES' : 'NO'}"`
      ].join(",");
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `n8n_bdr_campaign_export_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Create Excel node generated campaign export!");
  };

  return (
    <div className="app-container">
      {/* 1. Header Navigation Bar */}
      <Header
        onResetDefaults={handleResetDefaults}
        activeCount={companies.length}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* View 1: n8n Workflow Visualizer Tab */}
      {activeTab === 'workflow' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <WorkflowCanvas
            activeNodeId={activeNodeId}
            isRunning={isWorkflowRunning}
            onTriggerRun={() => handleResearchAll()}
          />
          <CampaignStatus
            companies={companies}
            onExportCSV={handleExportCSV}
          />
        </div>
      ) : (
        /* View 2: Campaign Studio Tab */
        <>
          {/* 2. Campaign Builder Form */}
          <CampaignBuilder
            onGenerateCampaign={handleGenerateCampaign}
          />

          {/* n8n Live Workflow Status Bar */}
          <div style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '0.85rem', color: '#e5e7eb', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 700, color: 'var(--accent-indigo)' }}>n8n Backend Pipeline:</span>
              <span>Webhook ➔ Find Companies ➔ Parse ➔ Loop ➔ Analysis ➔ Lead Qualification ➔ Create Excel</span>
            </div>
            <button
              className="btn-secondary"
              onClick={() => setActiveTab('workflow')}
              style={{ padding: '4px 12px', fontSize: '0.78rem' }}
            >
              View Node Canvas ➔
            </button>
          </div>

          {/* 3. Main Split View: Table vs Details & Email */}
          <div className="main-content-grid">
            <TargetCompaniesTable
              companies={companies}
              selectedCompanyId={selectedCompanyId}
              onSelectCompany={setSelectedCompanyId}
              onResearchCompany={handleResearchCompany}
              onResearchAll={handleResearchAll}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <CompanyDetails company={selectedCompany} />
              <GeneratedEmail
                company={selectedCompany}
                onUpdateEmail={handleUpdateEmail}
                onRegenerateEmail={handleRegenerateEmail}
                onApproveEmail={handleApproveEmail}
                onCopyToast={() => showToast("Copied subject & email body to clipboard!")}
              />
            </div>
          </div>

          {/* 4. Campaign Status Metrics */}
          <CampaignStatus
            companies={companies}
            onExportCSV={handleExportCSV}
          />
        </>
      )}

      {/* AI Processing Modal */}
      <GenerationModal
        isOpen={isModalOpen}
        title={modalTitle}
        currentStep={currentStepIndex}
        steps={modalSteps}
      />

      {/* Webhook & Settings Modal */}
      <WorkflowSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        webhookUrl={webhookUrl}
        onSaveWebhook={(url) => {
          setWebhookUrl(url);
          showToast("n8n Webhook settings saved!");
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle size={18} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
