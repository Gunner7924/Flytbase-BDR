import React from 'react';
import { BarChart3, Building, Cpu, MailCheck, Download, CheckCircle2 } from 'lucide-react';

export default function CampaignStatus({ companies, onExportCSV }) {
  const companiesFound = companies.length;
  const researchCompleted = companies.filter(
    (c) => c.status === 'Researched' || c.status === 'Email Ready' || c.status === 'Approved'
  ).length;
  const emailsReady = companies.filter(
    (c) => c.status === 'Email Ready' || c.status === 'Approved'
  ).length;
  const approvedCount = companies.filter((c) => c.status === 'Approved').length;

  const researchPercent = companiesFound > 0 ? Math.round((researchCompleted / companiesFound) * 100) : 0;
  const emailPercent = companiesFound > 0 ? Math.round((emailsReady / companiesFound) * 100) : 0;

  return (
    <div className="glass-panel">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <BarChart3 className="text-emerald-400" size={20} />
          <span>Campaign Status</span>
        </h2>
        
        <button
          className="btn-secondary"
          onClick={onExportCSV}
          style={{ fontSize: '0.8rem', padding: '6px 12px' }}
        >
          <Download size={14} />
          <span>Export Sequence (.CSV)</span>
        </button>
      </div>

      <div className="metrics-grid">
        {/* Metric 1: Companies Found */}
        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: 'rgba(99, 102, 241, 0.15)', color: 'var(--accent-indigo)' }}>
            <Building size={24} />
          </div>
          <div>
            <div className="metric-val">{companiesFound}</div>
            <div className="metric-title">Companies Found</div>
          </div>
        </div>

        {/* Metric 2: Research Completed */}
        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-cyan)' }}>
            <Cpu size={24} />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div className="metric-val">{researchCompleted}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                {researchPercent}%
              </div>
            </div>
            <div className="metric-title">Research Completed</div>
          </div>
        </div>

        {/* Metric 3: Emails Ready */}
        <div className="metric-card">
          <div className="metric-icon-box" style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-violet)' }}>
            <MailCheck size={24} />
          </div>
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div className="metric-val">{emailsReady}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-violet)', fontWeight: 700 }}>
                {approvedCount} Approved
              </div>
            </div>
            <div className="metric-title">Emails Ready</div>
          </div>
        </div>
      </div>
    </div>
  );
}
