import React, { useState } from 'react';
import { Download, Copy, Check, FileText } from 'lucide-react';

export default function PaperViewer() {
  const [copied, setCopied] = useState(false);

  const bibtex = `@article{kshema2026smartlms,
  title={SmartLMS: An AI-Driven Adaptive Learning Management System for Predictive Student Performance Analytics and Engagement Modeling in Higher Education},
  author={Lelum Kshema},
  journal={ResearchGate Preprint / University Research Proceedings},
  year={2026},
  publisher={GitHub Open Source Software Repository}
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid-layout">
      <div className="glass-panel" style={{ gridColumn: 'span 8', padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
              SmartLMS: An AI-Driven Adaptive Learning Management System
            </h2>
            <p style={{ fontSize: '13px', color: '#818cf8', fontWeight: 600 }}>
              Authored by Lelum Kshema | IEEE Transactions on Learning Technologies Format
            </p>
          </div>
          <a 
            href="/Research_Paper_SmartLMS.pdf" 
            download="Research_Paper_SmartLMS.pdf"
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            <Download size={16} /> Download PDF Paper
          </a>
        </div>

        <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Abstract</h3>
          <p style={{ fontSize: '13.5px', color: '#cbd5e1', lineHeight: '1.7', textAlign: 'justify' }}>
            The rapid digitisation of higher education has generated vast volumes of behavioral engagement logs within Learning Management Systems (LMS)... In this paper, we present <strong>SmartLMS</strong>, an artificial intelligence-driven adaptive learning management platform that integrates real-time behavioral analytics with predictive machine learning models to forecast academic performance and identify early student dropout risk. Ensemble models (Random Forest and Gradient Boosting) achieve predictive accuracies of 96.5% and 95.8% respectively...
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1, background: 'rgba(15, 23, 42, 0.4)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Target Repository</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc', marginTop: '4px' }}>ResearchGate Preprint</div>
          </div>
          <div style={{ flex: 1, background: 'rgba(15, 23, 42, 0.4)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Code Repository</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc', marginTop: '4px' }}>GitHub Open Source</div>
          </div>
          <div style={{ flex: 1, background: 'rgba(15, 23, 42, 0.4)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>Primary License</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#10b981', marginTop: '4px' }}>MIT Open Source</div>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ gridColumn: 'span 4', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc' }}>BibTeX Citation</h3>
          <button 
            onClick={handleCopy}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#818cf8', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied!' : 'Copy BibTeX'}
          </button>
        </div>

        <pre style={{ background: '#090d16', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', fontSize: '11.5px', color: '#94a3b8', overflowX: 'auto', lineHeight: '1.5' }}>
          {bibtex}
        </pre>
      </div>
    </div>
  );
}
