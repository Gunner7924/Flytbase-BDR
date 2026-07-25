import React, { useState } from 'react';
import { Sparkles, Sliders, Globe, Building2, Target, Crosshair } from 'lucide-react';
import { INDUSTRIES, REFERENCE_COMPANIES, COUNTRIES } from '../data/presetData';

export default function CampaignBuilder({ onGenerateCampaign }) {
  const [industry, setIndustry] = useState(INDUSTRIES[0]); // Default: Autonomous Drones & Aerial Robotics (UAS)
  const [refCompany, setRefCompany] = useState("FlytBase"); // Default: FlytBase
  const [country, setCountry] = useState("All Countries");
  const [targetCount, setTargetCount] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateCampaign({
      industry,
      refCompany,
      country,
      targetCount: Number(targetCount)
    });
  };

  const handleSelectPreset = (preset) => {
    setIndustry(preset.industry);
    setRefCompany(preset.name);
    setCountry(preset.country);
  };

  return (
    <div className="glass-panel">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <Sliders className="text-indigo-400" size={20} />
          <span>Campaign Builder</span>
        </h2>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          Configure ICP filters & AI lookalike target discovery
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="campaign-builder-grid">
          {/* Industry */}
          <div className="form-group">
            <label className="form-label">
              <Building2 size={13} style={{ display: 'inline', marginRight: 4 }} />
              Industry
            </label>
            <select
              className="form-select"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* Reference Company */}
          <div className="form-group">
            <label className="form-label">
              <Target size={13} style={{ display: 'inline', marginRight: 4 }} />
              Reference Company
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. FlytBase, Skydio, ideaForge"
              value={refCompany}
              onChange={(e) => setRefCompany(e.target.value)}
              required
            />
          </div>

          {/* Country (Optional) */}
          <div className="form-group">
            <label className="form-label">
              <Globe size={13} style={{ display: 'inline', marginRight: 4 }} />
              Country (Optional)
            </label>
            <select
              className="form-select"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Target Company Count */}
          <div className="form-group">
            <label className="form-label">
              Target Company Count: <span style={{ color: 'var(--accent-indigo)', fontWeight: 700 }}>{targetCount}</span>
            </label>
            <input
              type="range"
              min="3"
              max="20"
              step="1"
              value={targetCount}
              onChange={(e) => setTargetCount(e.target.value)}
              style={{ accentColor: 'var(--accent-indigo)', cursor: 'pointer', margin: '10px 0' }}
            />
          </div>

          {/* Action Button */}
          <div className="form-group">
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              <Sparkles size={18} />
              <span>Generate Campaign</span>
            </button>
          </div>
        </div>
      </form>

      {/* Preset Drone & SaaS Companies Quick Select */}
      <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Crosshair size={14} />
          Drone & Robotics Presets:
        </span>
        {REFERENCE_COMPANIES.slice(0, 5).map((preset) => (
          <button
            key={preset.name}
            type="button"
            className="btn-secondary"
            style={{
              padding: '4px 10px',
              fontSize: '0.75rem',
              borderRadius: '6px',
              borderColor: preset.name === 'FlytBase' ? 'var(--accent-emerald)' : 'rgba(6, 182, 212, 0.3)',
              color: preset.name === 'FlytBase' ? 'var(--accent-emerald)' : '#fff'
            }}
            onClick={() => handleSelectPreset(preset)}
          >
            🚁 Lookalike: {preset.name}
          </button>
        ))}
      </div>
    </div>
  );
}
