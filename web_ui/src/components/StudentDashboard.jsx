import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Clock, Zap, CheckCircle2 } from 'lucide-react';

export default function StudentDashboard() {
  const [attendance, setAttendance] = useState(85);
  const [quizScore, setQuizScore] = useState(78);
  const [assignmentScore, setAssignmentScore] = useState(80);
  const [submissionDelay, setSubmissionDelay] = useState(2);

  // Compute live predicted GPA & grade
  const computedScore = Math.min(100, Math.max(0, (0.35 * assignmentScore) + (0.35 * quizScore) + (0.20 * attendance) + (0.10 * 80) - (0.5 * submissionDelay)));
  
  let predictedGrade = "A";
  let predictedGPA = 4.0;
  let statusBadge = "badge-emerald";

  if (computedScore < 50) {
    predictedGrade = "F";
    predictedGPA = 0.0;
    statusBadge = "badge-rose";
  } else if (computedScore < 65) {
    predictedGrade = "C";
    predictedGPA = 2.0;
    statusBadge = "badge-amber";
  } else if (computedScore < 80) {
    predictedGrade = "B";
    predictedGPA = 3.0;
    statusBadge = "badge-indigo";
  }

  return (
    <div className="grid-layout">
      {/* Student Overview Header */}
      <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>Undergraduate Student Portal</h2>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Student ID: UOP_202401 | Faculty of Engineering, University of Peradeniya</p>
          </div>
          <span className={`badge ${statusBadge}`}>Predicted Status: {predictedGrade} Grade ({computedScore.toFixed(1)}%)</span>
        </div>
      </div>

      {/* Left Column: Interactive AI Grade Simulator */}
      <div className="glass-panel" style={{ gridColumn: 'span 7', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Zap color="#6366f1" size={22} />
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc' }}>Interactive AI Grade Simulator</h2>
        </div>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>Adjust behavioral sliders to model how habits impact your final forecasted GPA.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '8px' }}>
              <span>Lecture Attendance Percentage</span>
              <strong style={{ color: '#818cf8' }}>{attendance}%</strong>
            </div>
            <input 
              type="range" min="40" max="100" value={attendance} 
              onChange={(e) => setAttendance(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#6366f1' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '8px' }}>
              <span>Quiz & Assessment Mean</span>
              <strong style={{ color: '#818cf8' }}>{quizScore}%</strong>
            </div>
            <input 
              type="range" min="30" max="100" value={quizScore} 
              onChange={(e) => setQuizScore(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#6366f1' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '8px' }}>
              <span>Assignment Score Average</span>
              <strong style={{ color: '#818cf8' }}>{assignmentScore}%</strong>
            </div>
            <input 
              type="range" min="30" max="100" value={assignmentScore} 
              onChange={(e) => setAssignmentScore(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#6366f1' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '8px' }}>
              <span>Average Submission Delay (Hours)</span>
              <strong style={{ color: '#f43f5e' }}>{submissionDelay} hrs</strong>
            </div>
            <input 
              type="range" min="0" max="48" value={submissionDelay} 
              onChange={(e) => setSubmissionDelay(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f43f5e' }}
            />
          </div>
        </div>
      </div>

      {/* Right Column: Predicted Outcomes */}
      <div className="glass-panel" style={{ gridColumn: 'span 5', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>Forecasted Performance</h2>
          
          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>Predicted Final Grade</div>
            <div style={{ fontSize: '48px', fontWeight: 900, color: '#818cf8', margin: '4px 0' }}>{predictedGrade}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#cbd5e1' }}>Forecasted GPA: {predictedGPA.toFixed(2)} / 4.00</div>
          </div>

          <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', background: 'rgba(99, 102, 241, 0.1)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            <strong>💡 AI Advisor Recommendation:</strong> To boost your grade to an <strong>A</strong>, maintain attendance above 85% and reduce submission delays under 4 hours.
          </div>
        </div>

        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          <CheckCircle2 size={18} /> Apply Academic Study Goals
        </button>
      </div>
    </div>
  );
}
