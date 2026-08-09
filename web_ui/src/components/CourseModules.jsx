import React, { useState } from 'react';
import { PlayCircle, Video, FileText, CheckCircle, ExternalLink, Headphones, Award } from 'lucide-react';

export default function CourseModules() {
  const [selectedModule, setSelectedModule] = useState(1);

  const modules = [
    {
      id: 1,
      title: "Module 1: Introduction to Data Mining & AI in Education",
      progress: 100,
      lessons: [
        { title: "Lesson 1.1: Overview of Learning Management Systems", type: "video", duration: "18 mins", completed: true, link: "https://www.youtube.com/watch?v=aircAruvnKk" },
        { title: "Lesson 1.2: Lecture Slides PDF - EDM Overview", type: "pdf", size: "4.2 MB", completed: true },
        { title: "Live Class: Interactive Zoom Q&A Session", type: "zoom", duration: "1 hour", completed: true, link: "https://zoom.us" }
      ]
    },
    {
      id: 2,
      title: "Module 2: Supervised Learning & Student Risk Prediction",
      progress: 66,
      lessons: [
        { title: "Lesson 2.1: Decision Trees & Random Forest Classifier", type: "video", duration: "24 mins", completed: true, link: "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ" },
        { title: "Lesson 2.2: Gradient Boosting Trees & Hyperparameters", type: "video", duration: "30 mins", completed: true, link: "https://www.youtube.com/watch?v=3CC4N4z3GJc" },
        { title: "Lesson 2.3: Audio Podcast - AI Ethics in Student Analytics", type: "audio", duration: "12 mins", completed: false }
      ]
    },
    {
      id: 3,
      title: "Module 3: Neural Networks & Deep Learning for Time-Series Logs",
      progress: 0,
      lessons: [
        { title: "Lesson 3.1: Multi-Layer Perceptrons for Engagement Modeling", type: "video", duration: "32 mins", completed: false },
        { title: "Lesson 3.2: Live Class: Google Meet Workshop", type: "meet", duration: "45 mins", completed: false, link: "https://meet.google.com" }
      ]
    }
  ];

  return (
    <div className="grid-layout">
      {/* Top Progress Tracker */}
      <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>Course Progress Tracker (CS101)</h2>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>3 Modules | 8 Lessons Total | 5 Completed</p>
          </div>
          <span className="badge badge-indigo">62.5% Course Completed</span>
        </div>

        <div style={{ height: '10px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '5px', overflow: 'hidden' }}>
          <div style={{ width: '62.5%', height: '100%', background: 'linear-gradient(90deg, #6366f1, #a855f7)', borderRadius: '5px' }}></div>
        </div>
      </div>

      {/* Module Selector List */}
      <div className="glass-panel" style={{ gridColumn: 'span 5', padding: '20px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc', marginBottom: '14px' }}>Course Modules</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {modules.map((m) => (
            <button
              key={m.id}
              className={`toggle-btn ${selectedModule === m.id ? 'active' : ''}`}
              onClick={() => setSelectedModule(m.id)}
              style={{ textAlign: 'left', padding: '14px', borderRadius: '10px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '13.5px' }}>{m.title}</div>
                {m.progress === 100 && <CheckCircle color="#10b981" size={16} />}
              </div>
              <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>
                Progress: {m.progress}% ({m.lessons.length} Lessons)
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Module Lessons & Multimedia Player */}
      <div className="glass-panel" style={{ gridColumn: 'span 7', padding: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>
          {modules.find(m => m.id === selectedModule)?.title}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {modules.find(m => m.id === selectedModule)?.lessons.map((l, idx) => (
            <div 
              key={idx}
              style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {l.type === 'video' && <PlayCircle color="#818cf8" size={22} />}
                {l.type === 'pdf' && <FileText color="#10b981" size={22} />}
                {l.type === 'zoom' && <Video color="#3b82f6" size={22} />}
                {l.type === 'meet' && <Video color="#f59e0b" size={22} />}
                {l.type === 'audio' && <Headphones color="#a855f7" size={22} />}

                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#f8fafc' }}>{l.title}</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                    Type: {l.type.toUpperCase()} | {l.duration || l.size}
                  </div>
                </div>
              </div>

              <div>
                {l.link ? (
                  <a 
                    href={l.link} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ textDecoration: 'none', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#818cf8', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    Open <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className={`badge ${l.completed ? 'badge-emerald' : 'badge-indigo'}`}>
                    {l.completed ? 'Completed' : 'Start Lesson'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
