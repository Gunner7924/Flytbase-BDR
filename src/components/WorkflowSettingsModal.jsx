import React, { useState } from 'react';
import { Settings, Zap, Key, Link, X, Save, CheckCircle } from 'lucide-react';

export default function WorkflowSettingsModal({ isOpen, onClose, webhookUrl, onSaveWebhook }) {
  const [url, setUrl] = useState(webhookUrl || 'https://n8n.internal.app/webhook/outbound-bdr');
  const [apiKey, setApiKey] = useState('sk-n8n-bdr-key-8891');
  const [mode, setMode] = useState('simulated');

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSaveWebhook(url);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card" style={{ maxWidth: '520px', textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Settings className="text-indigo-400" size={20} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>n8n Backend & Webhook Settings</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSave}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Workflow Engine Mode</label>
              <select className="form-select" value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value="simulated">Built-in Interactive AI Workflow (n8n Simulation)</option>
                <option value="live">Live HTTP Webhook Server (External n8n)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <Link size={13} style={{ display: 'inline', marginRight: 4 }} />
                n8n Webhook URL
              </label>
              <input
                type="url"
                className="form-input"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://n8n.yourdomain.com/webhook/..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Key size={13} style={{ display: 'inline', marginRight: 4 }} />
                API Key / Auth Header (Optional)
              </label>
              <input
                type="password"
                className="form-input"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>

            <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button type="button" className="btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                <Save size={15} />
                <span>Save Configuration</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
