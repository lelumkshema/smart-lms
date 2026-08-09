import React from 'react';
import { Award, Zap, Flame, Crown, CheckCircle2 } from 'lucide-react';

export default function GamificationHub() {
  const leaderboard = [
    { rank: 1, name: 'Kavindu Perera', points: 1450, badge: 'Quiz Master 🏆', course: 'CS101' },
    { rank: 2, name: 'Dilini Fernando', points: 1380, badge: 'Attendance Champion ⚡', course: 'CS101' },
    { rank: 3, name: 'Nisal Bandara', points: 1290, badge: 'Assignment Ace 🎯', course: 'CS101' },
    { rank: 4, name: 'Amaya Silva', points: 1180, badge: 'Forum Contributor 💬', course: 'CS101' },
  ];

  return (
    <div className="grid-layout">
      {/* Gamification Banner */}
      <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>Student Gamification & Leaderboard</h2>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Earn XP points, unlock achievement badges, and climb the course ranking!</p>
          </div>
          <span className="badge badge-indigo">Current User: 1,450 XP (Rank #1)</span>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="glass-panel" style={{ gridColumn: 'span 8', padding: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>CS101 Course Leaderboard Ranking</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {leaderboard.map((item) => (
            <div 
              key={item.rank} 
              style={{ background: item.rank === 1 ? 'rgba(99, 102, 241, 0.15)' : 'rgba(15, 23, 42, 0.6)', padding: '14px 20px', borderRadius: '12px', border: item.rank === 1 ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ fontSize: '16px', fontWeight: 800, color: item.rank === 1 ? '#f59e0b' : '#94a3b8', width: '24px' }}>
                  #{item.rank}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: '#818cf8', marginTop: '2px' }}>{item.badge}</div>
                </div>
              </div>

              <div style={{ fontSize: '16px', fontWeight: 800, color: '#10b981' }}>
                {item.points} XP
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges Unlock Status */}
      <div className="glass-panel" style={{ gridColumn: 'span 4', padding: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>Unlocked Badges</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <div style={{ fontWeight: 700, color: '#10b981', fontSize: '13.5px' }}>🏆 Quiz Master</div>
            <div style={{ fontSize: '12px', color: '#cbd5e1' }}>Scored 100% on CS101 MCQ Assessment.</div>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '14px', borderRadius: '10px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
            <div style={{ fontWeight: 700, color: '#818cf8', fontSize: '13.5px' }}>⚡ Attendance Champ</div>
            <div style={{ fontSize: '12px', color: '#cbd5e1' }}>Maintained over 85% lecture attendance.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
