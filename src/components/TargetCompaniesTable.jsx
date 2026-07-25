import React, { useState } from 'react';
import { Building, ExternalLink, Search, Cpu, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';

export default function TargetCompaniesTable({
  companies,
  selectedCompanyId,
  onSelectCompany,
  onResearchCompany,
  onResearchAll
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCompanies = companies.filter((comp) => {
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          comp.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          comp.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || comp.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Discovered':
        return <span className="badge badge-discovered"><Clock size={12} /> Discovered</span>;
      case 'Researched':
        return <span className="badge badge-researched"><Cpu size={12} /> Researched</span>;
      case 'Email Ready':
        return <span className="badge badge-email-ready"><Sparkles size={12} /> Email Ready</span>;
      case 'Approved':
        return <span className="badge badge-approved"><CheckCircle2 size={12} /> Approved</span>;
      default:
        return <span className="badge badge-discovered">{status}</span>;
    }
  };

  return (
    <div className="glass-panel">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <Building className="text-cyan-400" size={20} />
          <span>Target Companies</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            ({filteredCompanies.length} matched)
          </span>
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            className="btn-secondary"
            onClick={onResearchAll}
            title="Batch research all discovered companies using AI"
            style={{ borderColor: 'var(--border-glow)' }}
          >
            <Cpu size={15} className="text-indigo-400" />
            <span>Research All</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
          <Search size={15} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="form-input"
            placeholder="Search company, domain, country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '36px', width: '100%' }}
          />
        </div>

        <select
          className="form-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ width: '160px' }}
        >
          <option value="All">All Statuses</option>
          <option value="Discovered">Discovered</option>
          <option value="Researched">Researched</option>
          <option value="Email Ready">Email Ready</option>
          <option value="Approved">Approved</option>
        </select>
      </div>

      {/* Companies Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Website</th>
              <th>Country</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                  No target companies found matching your filters. Try generating a new campaign!
                </td>
              </tr>
            ) : (
              filteredCompanies.map((comp) => {
                const isSelected = comp.id === selectedCompanyId;
                return (
                  <tr
                    key={comp.id}
                    className={isSelected ? 'selected-row' : ''}
                    onClick={() => onSelectCompany(comp.id)}
                  >
                    <td>
                      <div style={{ fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{comp.name}</span>
                        {comp.matchScore && (
                          <span style={{ fontSize: '0.72rem', color: 'var(--accent-indigo)', background: 'rgba(99,102,241,0.15)', padding: '2px 6px', borderRadius: '4px' }}>
                            {comp.matchScore} match
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <a
                        href={comp.website}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--accent-cyan)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{comp.website.replace('https://', '')}</span>
                        <ExternalLink size={12} />
                      </a>
                    </td>
                    <td style={{ color: 'var(--text-muted)' }}>{comp.country}</td>
                    <td>{getStatusBadge(comp.status)}</td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        type="button"
                        className={comp.status === 'Discovered' ? 'btn-primary' : 'btn-secondary'}
                        style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onResearchCompany(comp.id);
                        }}
                      >
                        <Cpu size={13} />
                        <span>Research</span>
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
