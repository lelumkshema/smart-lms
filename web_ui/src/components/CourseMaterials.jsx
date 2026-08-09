import React, { useState } from 'react';
import { BookOpen, Download, Upload, FileText, CheckCircle, Plus, Eye, Layers } from 'lucide-react';

export default function CourseMaterials({ userRole }) {
  const [selectedCourse, setSelectedCourse] = useState('CS101');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [newSlideTitle, setNewSlideTitle] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [slides, setSlides] = useState([
    { id: 1, week: 'Week 1', title: 'Lecture 01: Introduction to Computer Science & Python Basics', date: '2026-08-01', size: '3.4 MB', downloads: 184 },
    { id: 2, week: 'Week 2', title: 'Lecture 02: Data Structures, Arrays & Linked Lists', date: '2026-08-03', size: '4.8 MB', downloads: 172 },
    { id: 3, week: 'Week 3', title: 'Lecture 03: Machine Learning & Supervised Classification', date: '2026-08-05', size: '6.1 MB', downloads: 165 },
    { id: 4, week: 'Week 4', title: 'Lecture 04: Educational Data Mining & Risk Prediction Models', date: '2026-08-07', size: '5.2 MB', downloads: 140 },
  ]);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!newSlideTitle) return;

    setIsUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setSlides([
            ...slides,
            {
              id: slides.length + 1,
              week: `Week ${slides.length + 1}`,
              title: newSlideTitle,
              date: new Date().toISOString().split('T')[0],
              size: '4.5 MB',
              downloads: 0
            }
          ]);
          setIsUploading(false);
          setShowUploadModal(false);
          setNewSlideTitle('');
          setUploadProgress(0);
        }, 400);
      }
    }, 200);
  };

  return (
    <div className="grid-layout">
      {/* Top Banner & Course Switcher */}
      <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>Course Lecture Slides & Learning Materials</h2>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Access course slides, syllabus, and lecture resources</p>
          </div>
          
          {userRole === 'lecturer' && (
            <button className="btn-primary" onClick={() => setShowUploadModal(true)}>
              <Plus size={16} /> Upload New Lecture Slide (PDF)
            </button>
          )}
        </div>
      </div>

      {/* Course Selector Cards */}
      <div className="glass-panel" style={{ gridColumn: 'span 4', padding: '20px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc', marginBottom: '14px' }}>Enrolled Courses</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button 
            className={`toggle-btn ${selectedCourse === 'CS101' ? 'active' : ''}`}
            onClick={() => setSelectedCourse('CS101')}
            style={{ textAlign: 'left', padding: '12px' }}
          >
            <div style={{ fontWeight: 700 }}>CS101 - Intro to Computer Science</div>
            <div style={{ fontSize: '11px', opacity: 0.8 }}>4 Lecture Slides | 200 Students</div>
          </button>
          <button 
            className={`toggle-btn ${selectedCourse === 'SE302' ? 'active' : ''}`}
            onClick={() => setSelectedCourse('SE302')}
            style={{ textAlign: 'left', padding: '12px' }}
          >
            <div style={{ fontWeight: 700 }}>SE302 - Software Architecture</div>
            <div style={{ fontSize: '11px', opacity: 0.8 }}>3 Lecture Slides | 145 Students</div>
          </button>
          <button 
            className={`toggle-btn ${selectedCourse === 'AI401' ? 'active' : ''}`}
            onClick={() => setSelectedCourse('AI401')}
            style={{ textAlign: 'left', padding: '12px' }}
          >
            <div style={{ fontWeight: 700 }}>AI401 - Artificial Intelligence & Data Science</div>
            <div style={{ fontSize: '11px', opacity: 0.8 }}>5 Lecture Slides | 98 Students</div>
          </button>
        </div>
      </div>

      {/* Lecture Slides List */}
      <div className="glass-panel" style={{ gridColumn: 'span 8', padding: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>
          {selectedCourse} - Weekly Lecture Slides & Notes
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {slides.map((s) => (
            <div 
              key={s.id}
              style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '42px', height: '42px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  <FileText color="#818cf8" size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>{s.title}</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                    <span className="badge badge-indigo" style={{ padding: '2px 8px', fontSize: '10px', marginRight: '8px' }}>{s.week}</span>
                    Added: {s.date} | File Size: {s.size} | Downloads: {s.downloads}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <a 
                  href="/Research_Paper_SmartLMS.pdf" 
                  download={`${s.week}_Lecture_Slide.pdf`}
                  style={{ textDecoration: 'none', background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#818cf8', padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Download size={14} /> Download Slide PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Slide Modal */}
      {showUploadModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div className="glass-panel" style={{ maxWidth: '480px', width: '100%', padding: '28px', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>Upload New Lecture Slide PDF</h3>
            
            <form onSubmit={handleUpload}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: '#cbd5e1', display: 'block', marginBottom: '6px' }}>Lecture Title & Topic</label>
                <input 
                  type="text" 
                  placeholder="e.g. Lecture 05: Deep Learning & Neural Networks"
                  value={newSlideTitle}
                  onChange={(e) => setNewSlideTitle(e.target.value)}
                  style={{ width: '100%', padding: '10px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '13.5px' }}
                  required
                />
              </div>

              {isUploading && (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#818cf8', marginBottom: '6px' }}>
                    <span>Uploading Lecture PDF...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${uploadProgress}%`, height: '100%', background: '#6366f1', transition: 'width 0.2s' }}></div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button 
                  type="button" 
                  onClick={() => setShowUploadModal(false)}
                  style={{ padding: '10px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={isUploading}>
                  {isUploading ? 'Uploading...' : 'Confirm Slide Upload'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
