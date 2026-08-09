import React, { useState } from 'react';
import { GraduationCap, BarChart2, UserCheck, FileText, BookOpen, LogOut, Award, MessageSquare, ShieldCheck, Flame } from 'lucide-react';
import LoginScreen from './components/LoginScreen';
import LecturerAnalytics from './components/LecturerAnalytics';
import StudentDashboard from './components/StudentDashboard';
import CourseMaterials from './components/CourseMaterials';
import CourseModules from './components/CourseModules';
import AssessmentCertification from './components/AssessmentCertification';
import CommunicationHub from './components/CommunicationHub';
import AdminAnalytics from './components/AdminAnalytics';
import GamificationHub from './components/GamificationHub';
import PaperViewer from './components/PaperViewer';

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    role: 'lecturer',
    name: 'Prof. Lelum Kshema (Lecturer & Coordinator)',
    email: 'lecturer@uop.ac.lk',
    id: 'STAFF_UOP_102'
  });

  const [activeTab, setActiveTab] = useState('modules'); 

  if (!currentUser) {
    return <LoginScreen onLogin={(user) => { setCurrentUser(user); setActiveTab('modules'); }} />;
  }

  return (
    <div className="dashboard-container">
      {/* Navigation Bar Header */}
      <header className="glass-panel header-bar">
        <div className="brand-title">
          <GraduationCap color="#818cf8" size={32} />
          <span>SmartLMS</span>
          <span className="badge badge-indigo">{currentUser.role === 'lecturer' ? 'Lecturer & Admin Portal' : 'Student Portal'}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>{currentUser.name}</div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>{currentUser.id}</div>
          </div>
          <button 
            onClick={() => setCurrentUser(null)}
            style={{ background: 'rgba(244, 63, 94, 0.15)', border: '1px solid rgba(244, 63, 94, 0.3)', color: '#f43f5e', padding: '8px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <LogOut size={14} /> Switch User
          </button>
        </div>
      </header>

      {/* Categorized Tab Navigation */}
      <div className="glass-panel" style={{ padding: '10px 16px', marginBottom: '24px' }}>
        <nav className="nav-tabs" style={{ background: 'transparent', border: 'none', flexWrap: 'wrap' }}>
          <button className={`tab-btn ${activeTab === 'modules' ? 'active' : ''}`} onClick={() => setActiveTab('modules')}>
            <BookOpen size={16} /> 1. Modules & Multimedia
          </button>
          
          <button className={`tab-btn ${activeTab === 'assessment' ? 'active' : ''}`} onClick={() => setActiveTab('assessment')}>
            <Award size={16} /> 2. Quizzes, Assignments & Certificates
          </button>

          <button className={`tab-btn ${activeTab === 'communication' ? 'active' : ''}`} onClick={() => setActiveTab('communication')}>
            <MessageSquare size={16} /> 3. Forum, Messages & Alerts
          </button>

          <button className={`tab-btn ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => setActiveTab('admin')}>
            <ShieldCheck size={16} /> 4. Roles, Security & Reports
          </button>

          <button className={`tab-btn ${activeTab === 'gamification' ? 'active' : ''}`} onClick={() => setActiveTab('gamification')}>
            <Flame size={16} /> 5. Leaderboard & Badges
          </button>

          {currentUser.role === 'lecturer' && (
            <button className={`tab-btn ${activeTab === 'lecturer' ? 'active' : ''}`} onClick={() => setActiveTab('lecturer')}>
              <BarChart2 size={16} /> AI Risk Radar
            </button>
          )}

          <button className={`tab-btn ${activeTab === 'student' ? 'active' : ''}`} onClick={() => setActiveTab('student')}>
            <UserCheck size={16} /> AI Grade Simulator
          </button>

          <button className={`tab-btn ${activeTab === 'paper' ? 'active' : ''}`} onClick={() => setActiveTab('paper')}>
            <FileText size={16} /> Research Paper PDF
          </button>
        </nav>
      </div>

      {/* Main Tab Content Display */}
      <main>
        {activeTab === 'modules' && <CourseModules />}
        {activeTab === 'assessment' && <AssessmentCertification />}
        {activeTab === 'communication' && <CommunicationHub currentUser={currentUser} />}
        {activeTab === 'admin' && <AdminAnalytics />}
        {activeTab === 'gamification' && <GamificationHub />}
        {activeTab === 'lecturer' && <LecturerAnalytics />}
        {activeTab === 'student' && <StudentDashboard />}
        {activeTab === 'paper' && <PaperViewer />}
      </main>
    </div>
  );
}
