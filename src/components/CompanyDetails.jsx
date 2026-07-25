import React from 'react';
import { FileText, Layers, AlertTriangle, Newspaper, UserCheck, Award, ExternalLink, Mail, MapPin } from 'lucide-react';

export default function CompanyDetails({ company }) {
  if (!company) {
    return (
      <div className="glass-panel" style={{ textAlign: 'center', padding: '48px 24px' }}>
        <FileText size={40} className="text-gray-600" style={{ margin: '0 auto 16px auto', display: 'block' }} />
        <h3 style={{ color: 'var(--text-muted)' }}>No Company Selected</h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', marginTop: '8px' }}>
          Select a target company from the table to view AI-extracted intelligence and buyer profiles.
        </p>
      </div>
    );
  }

  const scoreClass = company.leadScore >= 88 ? 'score-high' : 'score-medium';

  return (
    <div className="glass-panel">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <FileText className="text-indigo-400" size={20} />
          <span>Company Details</span>
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>Lead Score:</span>
          <span className={`score-pill ${scoreClass}`}>
            {company.leadScore || 85} / 100
          </span>
        </div>
      </div>

      {/* Selected Company Header Banner */}
      <div style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>{company.name}</h3>
          <div style={{ fontSize: '0.82rem', color: 'var(--accent-cyan)', marginTop: '2px' }}>
            {company.website} &bull; {company.country}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="badge badge-researched">{company.status}</span>
        </div>
      </div>

      {/* 1. Summary */}
      <div className="detail-card">
        <div className="detail-label">
          <FileText size={14} />
          <span>Summary</span>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#e5e7eb', lineHeight: '1.6' }}>
          {company.summary}
        </p>
      </div>

      {/* 2. Products */}
      <div className="detail-card">
        <div className="detail-label">
          <Layers size={14} />
          <span>Products & Core Stack</span>
        </div>
        <div>
          {company.products && company.products.map((prod, i) => (
            <span key={i} className="tech-tag">{prod}</span>
          ))}
        </div>
      </div>

      {/* 3. Pain Points */}
      <div className="detail-card">
        <div className="detail-label" style={{ color: 'var(--accent-amber)' }}>
          <AlertTriangle size={14} />
          <span>Pain Points & Growth Triggers</span>
        </div>
        <div>
          {company.painPoints && company.painPoints.map((pain, i) => (
            <div key={i} className="pain-point-item">
              <span style={{ color: 'var(--accent-amber)', fontWeight: 700 }}>•</span>
              <span>{pain}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Recent News */}
      <div className="detail-card">
        <div className="detail-label" style={{ color: 'var(--accent-cyan)' }}>
          <Newspaper size={14} />
          <span>Recent News & Market Signals</span>
        </div>
        <div>
          {company.recentNews && company.recentNews.map((news, i) => (
            <div key={i} className="news-item">
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{news.date}</div>
              <div style={{ fontSize: '0.88rem', color: '#f3f4f6', fontWeight: 500 }}>{news.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Decision Maker */}
      <div className="detail-card" style={{ background: 'rgba(16,185,129,0.05)', borderColor: 'rgba(16,185,129,0.2)' }}>
        <div className="detail-label" style={{ color: 'var(--accent-emerald)' }}>
          <UserCheck size={14} />
          <span>Decision Maker</span>
        </div>
        {company.decisionMaker ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>{company.decisionMaker.name}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
                  {company.decisionMaker.title}
                </div>
              </div>
              <a
                href={company.decisionMaker.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '4px 10px', fontSize: '0.75rem' }}
              >
                LinkedIn
                <ExternalLink size={12} />
              </a>
            </div>

            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', gap: '16px', marginTop: '4px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Mail size={13} className="text-emerald-400" />
                {company.decisionMaker.email}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={13} />
                {company.decisionMaker.location}
              </span>
            </div>
          </div>
        ) : (
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Run Research to identify key decision makers.
          </div>
        )}
      </div>

      {/* 6. Lead Score Detail */}
      <div className="detail-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="detail-label" style={{ color: 'var(--accent-indigo)' }}>
            <Award size={14} />
            <span>Lead Score Fit</span>
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Based on ICP alignment, recent funding, tech stack match & buyer signals.
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className={`score-pill ${scoreClass}`} style={{ fontSize: '1.2rem', padding: '6px 16px' }}>
            {company.leadScore || 85}%
          </div>
        </div>
      </div>
    </div>
  );
}
