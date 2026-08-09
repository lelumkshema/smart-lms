import React, { useState } from 'react';
import { GraduationCap, BarChart2, UserCheck, FileText } from 'lucide-react';
import LecturerAnalytics from './components/LecturerAnalytics';
import StudentDashboard from './components/StudentDashboard';
import PaperViewer from './components/PaperViewer';

export default function App() {
  const [activeTab, setActiveTab] = useState('lecturer');

  return (
    <div className="dashboard-container">
      {/* Header Bar */}
      <header className="glass-panel header-bar">
        <div className="brand-title">
          <GraduationCap color="#818cf8" size={32} />
          <span>SmartLMS</span>
          <span className="badge badge-indigo">AI University Portal</span>
        </div>

        <nav className="nav-tabs">
          <button 
            className={`tab-btn ${activeTab === 'lecturer' ? 'active' : ''}`}
            onClick={() => setActiveTab('lecturer')}
          >
            <BarChart2 size={16} /> Lecturer Risk Radar
          </button>
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
      </header>

      {/* Dynamic Tab Content */}
      <main>
        {activeTab === 'lecturer' && <LecturerAnalytics />}
        {activeTab === 'student' && <StudentDashboard />}
        {activeTab === 'paper' && <PaperViewer />}
      </main>
    </div>
  );
}
