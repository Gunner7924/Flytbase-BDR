import React from 'react';
import { Sparkles, Bot, CheckCircle2 } from 'lucide-react';

export default function GenerationModal({ isOpen, title, currentStep, steps }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="spinner-glow" />
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
          {title || "AI Agent Working..."}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '24px' }}>
          Analyzing web signals & executive profiles
        </p>

        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {steps && steps.map((stepText, idx) => {
            const isDone = idx < currentStep;
            const isCurrent = idx === currentStep;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.85rem',
                  color: isDone ? 'var(--accent-emerald)' : isCurrent ? '#fff' : 'var(--text-dim)',
                  fontWeight: isCurrent ? 700 : 400
                }}
              >
                {isDone ? (
                  <CheckCircle2 size={16} className="text-emerald-400" />
                ) : isCurrent ? (
                  <Bot size={16} className="text-indigo-400 animate-pulse" />
                ) : (
                  <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid var(--text-dim)' }} />
                )}
                <span>{stepText}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
