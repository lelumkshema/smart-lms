import React, { useState } from 'react';
import { GraduationCap, UserCheck, ShieldCheck, ArrowRight, Lock, Mail } from 'lucide-react';

export default function LoginScreen({ onLogin }) {
  const [role, setRole] = useState('lecturer'); // 'lecturer' or 'student'
  const [email, setEmail] = useState('lecturer@uop.ac.lk');
  const [password, setPassword] = useState('••••••••');

  const handleRoleSwitch = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === 'lecturer') {
      setEmail('lecturer@uop.ac.lk');
    } else {
      setEmail('student@uop.ac.lk');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      role: role,
      name: role === 'lecturer' ? 'Prof. Lelum Kshema (Lecturer & Coordinator)' : 'Kavindu Perera (Undergraduate)',
      email: email,
      id: role === 'lecturer' ? 'STAFF_UOP_102' : 'UOP_202401'
    });
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass-panel" style={{ maxWidth: '460px', width: '100%', padding: '36px', borderRadius: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ width: '56px', height: '56px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
            <GraduationCap color="#818cf8" size={32} />
          </div>
          <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc' }}>SmartLMS Portal Login</h1>
          <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '6px' }}>University Learning Management System & Analytics</p>
        </div>

        {/* Role Switcher */}
        <div style={{ display: 'flex', gap: '8px', background: 'rgba(15, 23, 42, 0.7)', padding: '4px', borderRadius: '10px', marginBottom: '24px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button 
            type="button"
            className={`toggle-btn ${role === 'lecturer' ? 'active' : ''}`}
            onClick={() => handleRoleSwitch('lecturer')}
            style={{ padding: '10px', borderRadius: '8px' }}
          >
            <ShieldCheck size={14} inline style={{ marginRight: '6px' }} /> Lecturer / Staff
          </button>
          <button 
            type="button"
            className={`toggle-btn ${role === 'student' ? 'active' : ''}`}
            onClick={() => handleRoleSwitch('student')}
            style={{ padding: '10px', borderRadius: '8px' }}
          >
            <UserCheck size={14} inline style={{ marginRight: '6px' }} /> Student Login
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#cbd5e1', display: 'block', marginBottom: '6px' }}>University Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '10px 12px 10px 36px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '13.5px' }}
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: '#cbd5e1', display: 'block', marginBottom: '6px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '10px 12px 10px 36px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '13.5px' }}
                required
              />
            </div>
          </div>

          <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
            Sign In to {role === 'lecturer' ? 'Lecturer Portal' : 'Student Portal'} <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
