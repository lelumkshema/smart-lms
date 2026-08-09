import React, { useState } from 'react';
import { GraduationCap, BarChart2, UserCheck, FileText, BookOpen, LogOut, User } from 'lucide-react';
import LoginScreen from './components/LoginScreen';
import LecturerAnalytics from './components/LecturerAnalytics';
import StudentDashboard from './components/StudentDashboard';
import CourseMaterials from './components/CourseMaterials';
import PaperViewer from './components/PaperViewer';

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    role: 'lecturer',
    name: 'Prof. Lelum Kshema (Lecturer & Coordinator)',
    email: 'lecturer@uop.ac.lk',
    id: 'STAFF_UOP_102'
  });

  const [activeTab, setActiveTab] = useState('slides'); // 'slides', 'lecturer', 'student', 'paper'

  if (!currentUser) {
    return <LoginScreen onLogin={(user) => { setCurrentUser(user); setActiveTab(user.role === 'lecturer' ? 'lecturer' : 'student'); }} />;
  }

  return (
    <div className="dashboard-container">
      {/* Top Navigation Header */}
      <header className="glass-panel header-bar">
        <div className="brand-title">
          <GraduationCap color="#818cf8" size={32} />
          <span>SmartLMS</span>
          <span className="badge badge-indigo">{currentUser.role === 'lecturer' ? 'Lecturer Portal' : 'Student Portal'}</span>
        </div>

        <nav className="nav-tabs">
          <button 
            className={`tab-btn ${activeTab === 'slides' ? 'active' : ''}`}
            onClick={() => setActiveTab('slides')}
          >
            <BookOpen size={16} /> Course Slides & Materials
          </button>
          
          {currentUser.role === 'lecturer' && (
            <button 
              className={`tab-btn ${activeTab === 'lecturer' ? 'active' : ''}`}
              onClick={() => setActiveTab('lecturer')}
            >
              <BarChart2 size={16} /> Lecturer Risk Radar
            </button>
          )}

          <button 
            className={`tab-btn ${activeTab === 'student' ? 'active' : ''}`}
            onClick={() => setActiveTab('student')}
          >
            <UserCheck size={16} /> Student Grade Simulator
          </button>
          
          <button 
            className={`tab-btn ${activeTab === 'paper' ? 'active' : ''}`}
            onClick={() => setActiveTab('paper')}
          >
            <FileText size={16} /> Paper & Citations
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>{currentUser.name}</div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>{currentUser.id}</div>
          </div>
          <button 
            onClick={() => setCurrentUser(null)}
            title="Switch User / Logout"
            style={{ background: 'rgba(244, 63, 94, 0.15)', border: '1px solid rgba(244, 63, 94, 0.3)', color: '#f43f5e', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <LogOut size={14} /> Switch Account
          </button>
        </div>
      </header>

      {/* Main Tab Content */}
      <main>
        {activeTab === 'slides' && <CourseMaterials userRole={currentUser.role} />}
        {activeTab === 'lecturer' && <LecturerAnalytics />}
        {activeTab === 'student' && <StudentDashboard />}
        {activeTab === 'paper' && <PaperViewer />}
      </main>
    </div>
  );
}
