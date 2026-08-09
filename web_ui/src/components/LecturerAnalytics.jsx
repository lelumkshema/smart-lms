import React, { useState } from 'react';
import { Users, AlertTriangle, CheckCircle, BarChart2, TrendingUp, Bell } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts';

export default function LecturerAnalytics() {
  const [selectedCourse, setSelectedCourse] = useState("CS101");

  const riskDistribution = [
    { name: 'Low Risk', count: 142, color: '#10b981' },
    { name: 'Medium Risk', count: 43, color: '#f59e0b' },
    { name: 'High Risk (Intervention Needed)', count: 15, color: '#f43f5e' },
  ];

  const engagementFeatures = [
    { feature: 'Quiz Assessment Mean', importance: 36.4 },
    { feature: 'Assignment Average', importance: 32.1 },
    { feature: 'Lecture Attendance %', importance: 18.2 },
    { feature: 'LMS Login Velocity', importance: 8.5 },
    { feature: 'Forum Contributions', importance: 4.8 },
  ];

  const atRiskStudents = [
    { id: 'UOP_202412', name: 'Kavindu Perera', course: 'CS101', attendance: '52%', score: '44.5%', delay: '14 hrs', risk: 'High' },
    { id: 'UOP_202445', name: 'Nisal Bandara', course: 'CS101', attendance: '48%', score: '41.2%', delay: '22 hrs', risk: 'High' },
    { id: 'UOP_202488', name: 'Dilini Fernando', course: 'CS101', attendance: '58%', score: '48.0%', delay: '18 hrs', risk: 'High' },
  ];

  return (
    <div className="grid-layout">
      {/* Top Stat Cards */}
      <div className="glass-panel" style={{ gridColumn: 'span 4', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>Total Enrolled Students</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>200</div>
          </div>
          <Users color="#6366f1" size={32} />
        </div>
      </div>

      <div className="glass-panel" style={{ gridColumn: 'span 4', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>Average Attendance Rate</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#10b981', marginTop: '4px' }}>82.4%</div>
          </div>
          <TrendingUp color="#10b981" size={32} />
        </div>
      </div>

      <div className="glass-panel" style={{ gridColumn: 'span 4', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>Early Intervention Alerts</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#f43f5e', marginTop: '4px' }}>15 Students</div>
          </div>
          <AlertTriangle color="#f43f5e" size={32} />
        </div>
      </div>

      {/* Chart 1: Risk Tier Distribution */}
      <div className="glass-panel" style={{ gridColumn: 'span 7', padding: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>Student Risk Tier Distribution</h2>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>Predictive forecasting prior to midterm evaluations</p>
        
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={riskDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 12 }} />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
              <Bar dataKey="count" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Feature Importance */}
      <div className="glass-panel" style={{ gridColumn: 'span 5', padding: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>EDM Feature Importance Ranking</h2>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>Relative weight in forecasting academic performance</p>
        
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={engagementFeatures} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis type="category" dataKey="feature" stroke="#94a3b8" tick={{ fontSize: 10 }} width={120} />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }} />
              <Bar dataKey="importance" fill="#a855f7" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* High Risk Intervention Alerts Table */}
      <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc' }}>High-Risk Early Intervention Radar</h2>
          <span className="badge badge-rose">15 Students Require Support</span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
                <th style={{ padding: '12px' }}>Student ID</th>
                <th style={{ padding: '12px' }}>Student Name</th>
                <th style={{ padding: '12px' }}>Course</th>
                <th style={{ padding: '12px' }}>Attendance</th>
                <th style={{ padding: '12px' }}>Assessment Score</th>
                <th style={{ padding: '12px' }}>Mean Delay</th>
                <th style={{ padding: '12px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {atRiskStudents.map((s) => (
                <tr key={s.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#f8fafc' }}>
                  <td style={{ padding: '12px', fontWeight: 600 }}>{s.id}</td>
                  <td style={{ padding: '12px' }}>{s.name}</td>
                  <td style={{ padding: '12px' }}>{s.course}</td>
                  <td style={{ padding: '12px', color: '#f43f5e' }}>{s.attendance}</td>
                  <td style={{ padding: '12px', color: '#f43f5e' }}>{s.score}</td>
                  <td style={{ padding: '12px' }}>{s.delay}</td>
                  <td style={{ padding: '12px' }}>
                    <button style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#818cf8', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
                      Send Academic Counseling Alert
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
