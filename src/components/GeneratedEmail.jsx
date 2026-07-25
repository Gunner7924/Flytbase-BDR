import React, { useState, useEffect } from 'react';
import { Mail, Copy, RefreshCw, CheckCircle, Sparkles, Send, Edit3 } from 'lucide-react';

export default function GeneratedEmail({
  company,
  onUpdateEmail,
  onRegenerateEmail,
  onApproveEmail,
  onCopyToast
}) {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [tone, setTone] = useState('Consultative');

  useEffect(() => {
    if (company && company.email) {
      setSubject(company.email.subject || '');
      setBody(company.email.body || '');
    } else {
      setSubject('');
      setBody('');
    }
  }, [company]);

  if (!company) {
    return (
      <div className="glass-panel" style={{ textAlign: 'center', padding: '48px 24px' }}>
        <Mail size={40} className="text-gray-600" style={{ margin: '0 auto 16px auto', display: 'block' }} />
        <h3 style={{ color: 'var(--text-muted)' }}>No Email Generated</h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', marginTop: '8px' }}>
          Select a company and trigger research to draft AI outreach sequences.
        </p>
      </div>
    );
  }

  const isApproved = company.email && company.email.approved;

  const handleSubjectChange = (e) => {
    const newSubject = e.target.value;
    setSubject(newSubject);
    onUpdateEmail(company.id, { subject: newSubject, body });
  };

  const handleBodyChange = (e) => {
    const newBody = e.target.value;
    setBody(newBody);
    onUpdateEmail(company.id, { subject, body: newBody });
  };

  const handleCopy = () => {
    const fullText = `Subject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(fullText);
    onCopyToast();
  };

  return (
    <div className="glass-panel">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <Mail className="text-purple-400" size={20} />
          <span>Generated Email</span>
        </h2>

        {/* Tone Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tone:</span>
          <select
            className="form-select"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            style={{ padding: '4px 8px', fontSize: '0.78rem', width: '130px' }}
          >
            <option value="Consultative">Consultative</option>
            <option value="Direct">Direct & Short</option>
            <option value="Value-First">Value-First</option>
            <option value="Friendly">Friendly Intro</option>
          </select>
        </div>
      </div>

      <div className="email-container">
        {/* Subject Header */}
        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Subject Line</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Editable</span>
          </label>
          <input
            type="text"
            className="email-subject-input"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Email Subject Line..."
          />
        </div>

        {/* Body Editor */}
        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Email Body</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Recipient: {company.decisionMaker?.name || 'Prospect'} ({company.decisionMaker?.email || 'N/A'})
            </span>
          </label>
          <textarea
            className="email-textarea"
            value={body}
            onChange={handleBodyChange}
            placeholder="AI generating email body content..."
          />
        </div>

        {/* Action Buttons: Copy, Regenerate, Approve */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', paddingTop: '8px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={handleCopy}
              title="Copy subject and email body to clipboard"
            >
              <Copy size={15} />
              <span>Copy</span>
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => onRegenerateEmail(company.id, tone)}
              title="Generate a new email variation with selected tone"
            >
              <RefreshCw size={15} className="text-purple-400" />
              <span>Regenerate</span>
            </button>
          </div>

          <button
            type="button"
            className={isApproved ? 'btn-secondary' : 'btn-emerald'}
            onClick={() => onApproveEmail(company.id)}
            style={isApproved ? { borderColor: 'var(--accent-emerald)', color: 'var(--accent-emerald)' } : {}}
          >
            <CheckCircle size={16} />
            <span>{isApproved ? 'Approved ✓' : 'Approve'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
