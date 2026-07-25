import React from 'react';
import { Bot, Zap, Database, GitGraph, Settings, Sparkles } from 'lucide-react';

export default function Header({
  onResetDefaults,
  activeCount,
  activeTab,
  onTabChange,
  onOpenSettings
}) {
  return (
    <header className="header-bar">
      <div className="logo-section">
        <div className="logo-icon-wrapper">
          <Bot className="w-6 h-6 text-white" size={26} />
        </div>
        <div>
          <h1 className="logo-title">AI Outbound BDR Assistant</h1>
          <div className="logo-subtitle">n8n + OpenAI Automated Prospecting & Outreach</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', padding: '4px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
        <button
          className={activeTab === 'campaign' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => onTabChange('campaign')}
          style={{ padding: '6px 16px', fontSize: '0.82rem', border: 'none' }}
        >
          <Sparkles size={14} />
          <span>Campaign Studio</span>
        </button>

        <button
          className={activeTab === 'workflow' ? 'btn-primary' : 'btn-secondary'}
          onClick={() => onTabChange('workflow')}
          style={{ padding: '6px 16px', fontSize: '0.82rem', border: 'none' }}
        >
          <GitGraph size={14} />
          <span>n8n Workflow Visualizer</span>
        </button>
      </div>

      {/* Header Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button className="btn-secondary" onClick={onOpenSettings} title="Configure n8n Webhook & Backend API Keys">
          <Settings size={15} />
          <span>Webhook Settings</span>
        </button>

        <button className="btn-secondary" onClick={onResetDefaults} title="Load Default Campaign Sample">
          <Database size={15} />
          <span>Reset Sample Data</span>
        </button>
      </div>
    </header>
  );
}
