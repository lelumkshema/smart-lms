import React, { useState } from 'react';
import { Award, CheckCircle, Upload, FileText, Download, HelpCircle, RefreshCw } from 'lucide-react';

export default function AssessmentCertification() {
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz', 'assignment', 'certificate'
  
  // MCQ Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const quizQuestions = [
    {
      id: 1,
      question: "Which Educational Data Mining feature carries the highest predictive weight for student risk forecasting in SmartLMS?",
      options: ["LMS Login Frequency", "Quiz Assessment Mean", "Lecture Attendance %", "Discussion Forum Posts"],
      correct: 1
    },
    {
      id: 2,
      question: "What is the primary objective of Gradient-weighted Class Activation Mapping (Grad-CAM) in diagnostic AI?",
      options: ["Reducing model parameters", "Generating visual saliency heatmaps for explainability", "Compressing PNG scans", "Automating SQL queries"],
      correct: 1
    },
    {
      id: 3,
      question: "In Random Forest Classifiers, what does an ensemble of decision trees prevent?",
      options: ["Overfitting on training data", "Underfitting", "Data encryption", "Network latency"],
      correct: 0
    }
  ];

  const handleSelectOption = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers({ ...selectedAnswers, [qId]: optionIdx });
  };

  const handleQuizSubmit = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) score += 1;
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  return (
    <div className="grid-layout">
      {/* Sub Navigation */}
      <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '16px 24px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className={`toggle-btn ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}>
            <HelpCircle size={14} inline style={{ marginRight: '6px' }} /> Auto-Graded MCQ Quiz Engine
          </button>
          <button className={`toggle-btn ${activeTab === 'assignment' ? 'active' : ''}`} onClick={() => setActiveTab('assignment')}>
            <Upload size={14} inline style={{ marginRight: '6px' }} /> Assignment Upload & Feedback
          </button>
          <button className={`toggle-btn ${activeTab === 'certificate' ? 'active' : ''}`} onClick={() => setActiveTab('certificate')}>
            <Award size={14} inline style={{ marginRight: '6px' }} /> Automated Course Certificate
          </button>
        </div>
      </div>

      {/* Tab 1: Quiz Engine */}
      {activeTab === 'quiz' && (
        <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc' }}>CS101 Midterm Quiz Assessment</h2>
              <p style={{ fontSize: '13px', color: '#94a3b8' }}>3 Questions | Instant AI Auto-Grading & Feedback</p>
            </div>
            {quizSubmitted && (
              <span className={`badge ${quizScore >= 2 ? 'badge-emerald' : 'badge-rose'}`}>
                Score: {quizScore} / {quizQuestions.length} ({((quizScore / quizQuestions.length) * 100).toFixed(0)}%)
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
            {quizQuestions.map((q, idx) => (
              <div key={q.id} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontWeight: 700, fontSize: '14.5px', color: '#f8fafc', marginBottom: '12px' }}>
                  Question {idx + 1}: {q.question}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[q.id] === optIdx;
                    const isCorrect = q.correct === optIdx;
                    
                    let btnStyle = { padding: '12px', textAlign: 'left', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', fontSize: '13px', color: '#cbd5e1', background: 'rgba(255,255,255,0.03)' };
                    
                    if (isSelected) {
                      btnStyle.background = 'rgba(99, 102, 241, 0.2)';
                      btnStyle.borderColor = '#818cf8';
                      btnStyle.color = '#fff';
                    }

                    if (quizSubmitted) {
                      if (isCorrect) {
                        btnStyle.background = 'rgba(16, 185, 129, 0.2)';
                        btnStyle.borderColor = '#10b981';
                        btnStyle.color = '#10b981';
                      } else if (isSelected && !isCorrect) {
                        btnStyle.background = 'rgba(244, 63, 94, 0.2)';
                        btnStyle.borderColor = '#f43f5e';
                        btnStyle.color = '#f43f5e';
                      }
                    }

                    return (
                      <button key={optIdx} onClick={() => handleSelectOption(q.id, optIdx)} style={btnStyle}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            {!quizSubmitted ? (
              <button className="btn-primary" onClick={handleQuizSubmit} disabled={Object.keys(selectedAnswers).length < quizQuestions.length}>
                <CheckCircle size={16} /> Submit Quiz & Auto-Grade
              </button>
            ) : (
              <button className="btn-primary" onClick={handleResetQuiz}>
                <RefreshCw size={16} /> Retake Quiz Assessment
              </button>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Assignment Submission */}
      {activeTab === 'assignment' && (
        <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>Course Assignment Submission & Lecturer Feedback</h2>
          
          <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc' }}>Assignment 1: Predictive Learning Analytics Implementation</div>
              <span className="badge badge-emerald">Graded: 92 / 100</span>
            </div>

            <p style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '14px' }}>
              <strong>Submitted File:</strong> <code>Assignment_1_UOP202401.pdf</code> (Submitted on 2026-08-06)
            </p>

            <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(99, 102, 241, 0.2)', fontSize: '13px', color: '#cbd5e1' }}>
              <strong>💬 Lecturer Feedback (Prof. Lelum Kshema):</strong> "Excellent implementation of Random Forest hyperparameter tuning. ROC-AUC plots are clearly annotated."
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Certificate Generator */}
      {activeTab === 'certificate' && (
        <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '28px', textAlign: 'center' }}>
          <Award color="#a855f7" size={48} style={{ marginBottom: '12px' }} />
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc' }}>Official Certificate of Course Completion</h2>
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: '6px 0 20px 0' }}>SmartLMS Automated Credential Verification</p>

          <div style={{ maxWidth: '600px', margin: '0 auto', background: 'rgba(15, 23, 42, 0.8)', padding: '30px', borderRadius: '16px', border: '2px solid rgba(168, 85, 247, 0.3)', marginBottom: '20px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#a855f7', fontWeight: 700 }}>University of Peradeniya | SmartLMS</div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', margin: '12px 0 6px 0' }}>Certificate of Academic Achievement</div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>This certifies that</div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#818cf8', margin: '8px 0' }}>Kavindu Perera</div>
            <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              has successfully completed <strong>CS101: Introduction to Educational Data Mining & AI</strong> with an overall score of <strong>92.5% (Grade A)</strong>.
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '16px' }}>Issued by Academic Coordinator: Prof. Lelum Kshema</div>
          </div>

          <a href="/Research_Paper_SmartLMS.pdf" download="SmartLMS_Certificate_UOP202401.pdf" className="btn-primary" style={{ textDecoration: 'none' }}>
            <Download size={16} /> Download Verified PDF Certificate
          </a>
        </div>
      )}
    </div>
  );
}
