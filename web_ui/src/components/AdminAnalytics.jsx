import React from 'react';
import { ShieldCheck, Lock, FileSpreadsheet, Activity, Building, Key } from 'lucide-react';

export default function AdminAnalytics() {
  const roles = [
    { role: 'Student', permissions: 'View Course Modules, Download Slides, Submit Assignments, Take Quizzes, Model GPA' },
    { role: 'Lecturer', permissions: 'Upload Lecture Slides, Grade Quizzes, View Risk Radar, Send Student Counseling Alerts' },
    { role: 'Academic Coordinator / Dean', permissions: 'Institutional Reports, Analytics Export, Faculty Performance Overview' },
    { role: 'Parent Portal', permissions: 'Read-only View of Student Attendance & Academic Progress Reports' },
  ];

  return (
    <div className="grid-layout">
      {/* Admin Institutional Header */}
      <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>Institutional Admin & Security Control</h2>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>University of Peradeniya | SmartLMS Governance & Data Security Policy</p>
          </div>
          <span className="badge badge-emerald">256-Bit Encrypted Data Policy Active</span>
        </div>
      </div>

      {/* Role Management Matrix */}
      <div className="glass-panel" style={{ gridColumn: 'span 7', padding: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>User Role & Access Permission Matrix</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {roles.map((r, idx) => (
            <div key={idx} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#818cf8', marginBottom: '4px' }}>{r.role}</div>
              <div style={{ fontSize: '12.5px', color: '#cbd5e1' }}><strong>Permissions:</strong> {r.permissions}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Performance Overview */}
      <div className="glass-panel" style={{ gridColumn: 'span 5', padding: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>Institutional Pass Rate Metrics</h3>

        <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px' }}>
          <div style={{ fontSize: '12px', color: '#94a3b8' }}>Faculty Overall Pass Rate</div>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#10b981', margin: '4px 0' }}>92.5%</div>
          <div style={{ fontSize: '12px', color: '#cbd5e1' }}>Based on 4 active courses & 200 student records.</div>
        </div>

        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          <FileSpreadsheet size={16} /> Export Faculty CSV Audit Report
        </button>
      </div>
    </div>
  );
}
