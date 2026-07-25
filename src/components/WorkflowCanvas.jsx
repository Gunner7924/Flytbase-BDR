import React, { useState } from 'react';
import { N8N_WORKFLOW_NODES } from '../data/workflowNodes';
import {
  Zap, Bot, Code, RotateCw, Cpu, CheckCircle2, Database,
  GitMerge, FileSpreadsheet, Layers, Send, ZoomIn, ZoomOut, Maximize2, RefreshCw, X, Play
} from 'lucide-react';

export default function WorkflowCanvas({ activeNodeId, isRunning, onTriggerRun }) {
  const [selectedNode, setSelectedNode] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const getIcon = (iconName, size = 18) => {
    switch (iconName) {
      case 'Zap': return <Zap size={size} />;
      case 'Bot': return <Bot size={size} />;
      case 'Code': return <Code size={size} />;
      case 'RotateCw': return <RotateCw size={size} />;
      case 'Cpu': return <Cpu size={size} />;
      case 'CheckCircle2': return <CheckCircle2 size={size} />;
      case 'Database': return <Database size={size} />;
      case 'GitMerge': return <GitMerge size={size} />;
      case 'FileSpreadsheet': return <FileSpreadsheet size={size} />;
      case 'Layers': return <Layers size={size} />;
      case 'Send': return <Send size={size} />;
      default: return <Zap size={size} />;
    }
  };

  return (
    <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden', padding: 0, minHeight: '620px', background: '#0b0f19' }}>
      {/* Top Canvas Bar */}
      <div style={{
        padding: '14px 20px',
        background: 'rgba(16, 23, 38, 0.9)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: isRunning ? 'var(--accent-amber)' : 'var(--accent-emerald)', boxShadow: '0 0 10px currentColor' }} />
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>n8n / LangChain Backend Pipeline</span>
          <span className="badge badge-researched" style={{ fontSize: '0.72rem' }}>
            {isRunning ? "Executing Execution Graph..." : "Status: Active & Idle"}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button className="btn-primary" onClick={onTriggerRun} disabled={isRunning} style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
            <Play size={14} />
            <span>Test Webhook Trigger</span>
          </button>
        </div>
      </div>

      {/* Grid Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        top: 53,
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        transform: `scale(${zoomLevel})`,
        transformOrigin: 'top left',
        transition: 'transform 0.2s ease',
        overflowX: 'auto',
        overflowY: 'auto',
        padding: '40px 20px 60px 20px'
      }}>
        {/* Workflow Diagram Nodes Flow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px', minWidth: '1280px', padding: '20px 10px' }}>
          {N8N_WORKFLOW_NODES.map((node, index) => {
            const isActive = activeNodeId === node.id;
            const isSelected = selectedNode?.id === node.id;

            return (
              <React.Fragment key={node.id}>
                {/* Node Box */}
                <div
                  onClick={() => setSelectedNode(node)}
                  style={{
                    width: '190px',
                    background: isSelected ? 'rgba(30, 41, 59, 0.95)' : 'rgba(17, 24, 39, 0.85)',
                    border: `1.5px solid ${isActive ? 'var(--accent-indigo)' : isSelected ? '#fff' : 'rgba(255, 255, 255, 0.12)'}`,
                    borderRadius: '12px',
                    boxShadow: isActive ? '0 0 25px rgba(99, 102, 241, 0.6)' : '0 4px 20px rgba(0,0,0,0.5)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Top Node Color Strip */}
                  <div style={{
                    height: '32px',
                    background: node.color,
                    padding: '0 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.8rem'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {getIcon(node.icon, 14)}
                      <span>{node.type.toUpperCase()}</span>
                    </span>
                    <span style={{ fontSize: '0.68rem', background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: '4px' }}>
                      {node.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '12px 14px' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                      {node.label}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: '1.3', height: '32px' }}>
                      {node.sublabel}
                    </div>

                    <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        {node.items}
                      </span>
                      {isActive && (
                        <span className="animate-pulse" style={{ fontSize: '0.68rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                          RUNNING...
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow Connector Line */}
                {index < N8N_WORKFLOW_NODES.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <div style={{
                      width: '32px',
                      height: '2px',
                      background: isRunning ? 'linear-gradient(90deg, #6366f1, #06b6d4)' : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: isRunning ? '0 0 10px #6366f1' : 'none'
                    }} />
                    <div style={{
                      width: 0,
                      height: 0,
                      borderTop: '5px solid transparent',
                      borderBottom: '5px solid transparent',
                      borderLeft: `7px solid ${isRunning ? '#06b6d4' : 'rgba(255, 255, 255, 0.3)'}`
                    }} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Bottom Canvas Controls (Matching screenshot zoom bar) */}
      <div style={{
        position: 'absolute',
        bottom: 16,
        left: 16,
        background: 'rgba(15, 23, 42, 0.9)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px',
        zIndex: 20
      }}>
        <button
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          onClick={() => setZoomLevel(Math.min(zoomLevel + 0.1, 1.4))}
        >
          <ZoomIn size={15} />
        </button>
        <button
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          onClick={() => setZoomLevel(Math.max(zoomLevel - 0.1, 0.7))}
        >
          <ZoomOut size={15} />
        </button>
        <button
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          onClick={() => setZoomLevel(1)}
        >
          <Maximize2 size={15} />
        </button>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          {Math.round(zoomLevel * 100)}%
        </span>
      </div>

      {/* Node Inspector Drawer */}
      {selectedNode && (
        <div style={{
          position: 'absolute',
          right: 0,
          top: 53,
          bottom: 0,
          width: '360px',
          background: 'rgba(15, 23, 42, 0.95)',
          borderLeft: '1px solid var(--border-color)',
          backdropFilter: 'blur(16px)',
          zIndex: 30,
          padding: '20px',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {getIcon(selectedNode.icon, 18)}
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>{selectedNode.label}</h3>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          {selectedNode.modelConfig && (
            <div className="detail-card">
              <div className="detail-label">Model Configuration</div>
              <div style={{ fontSize: '0.8rem', color: '#e5e7eb', fontFamily: 'var(--font-mono)' }}>
                <div>Model: <span style={{ color: 'var(--accent-cyan)' }}>{selectedNode.modelConfig.model}</span></div>
                <div>Temperature: {selectedNode.modelConfig.temperature}</div>
                <div>Memory: {selectedNode.modelConfig.memory}</div>
                <div>Parser: {selectedNode.modelConfig.parser}</div>
              </div>
            </div>
          )}

          <div className="detail-card">
            <div className="detail-label">Input Payload</div>
            <pre style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', whiteSpace: 'pre-wrap' }}>
              {typeof selectedNode.inputs === 'object' ? JSON.stringify(selectedNode.inputs, null, 2) : selectedNode.inputs}
            </pre>
          </div>

          <div className="detail-card">
            <div className="detail-label">Output Payload</div>
            <pre style={{ fontSize: '0.75rem', color: 'var(--accent-indigo)', fontFamily: 'var(--font-mono)', whiteSpace: 'pre-wrap' }}>
              {typeof selectedNode.outputs === 'object' ? JSON.stringify(selectedNode.outputs, null, 2) : selectedNode.outputs}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
