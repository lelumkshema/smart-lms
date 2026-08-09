import React, { useState } from 'react';
import { MessageSquare, Bell, Send, User, MessageCircle } from 'lucide-react';

export default function CommunicationHub({ currentUser }) {
  const [activeTab, setActiveTab] = useState('forum'); // 'forum', 'messages', 'notifications'
  const [newQuestion, setNewQuestion] = useState('');
  const [chatMessage, setChatMessage] = useState('');

  const [forumPosts, setForumPosts] = useState([
    { id: 1, author: 'Kavindu Perera', role: 'Student', question: 'How is the feature importance calculated in Random Forest for the SmartLMS dataset?', replies: 2, date: '2026-08-08' },
    { id: 2, author: 'Prof. Lelum Kshema', role: 'Lecturer', question: 'Reminder: Live Zoom Q&A session scheduled for tomorrow at 2:00 PM.', replies: 5, date: '2026-08-07' }
  ]);

  const [messages, setMessages] = useState([
    { sender: 'Prof. Lelum Kshema', text: 'Hello Kavindu! I noticed your quiz preparation score improved significantly.', time: '10:14 AM' },
    { sender: 'Kavindu Perera', text: 'Thank you Professor! The Grade Simulator helped me plan my study schedule.', time: '10:16 AM' }
  ]);

  const notifications = [
    { title: 'New Quiz Published: CS101 Midterm MCQ Assessment', time: '1 hour ago', type: 'quiz' },
    { title: 'Zoom Class Reminder: Live Q&A Session at 2:00 PM', time: '3 hours ago', type: 'zoom' },
    { title: 'Assignment 1 Feedback Posted by Prof. Lelum Kshema', time: '1 day ago', type: 'feedback' }
  ];

  const handleAddForumPost = (e) => {
    e.preventDefault();
    if (!newQuestion) return;
    setForumPosts([
      { id: forumPosts.length + 1, author: currentUser.name, role: currentUser.role, question: newQuestion, replies: 0, date: 'Just now' },
      ...forumPosts
    ]);
    setNewQuestion('');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage) return;
    setMessages([...messages, { sender: currentUser.name, text: chatMessage, time: 'Just now' }]);
    setChatMessage('');
  };

  return (
    <div className="grid-layout">
      {/* Sub Navigation Bar */}
      <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '16px 24px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className={`toggle-btn ${activeTab === 'forum' ? 'active' : ''}`} onClick={() => setActiveTab('forum')}>
            <MessageSquare size={14} inline style={{ marginRight: '6px' }} /> Discussion Forum
          </button>
          <button className={`toggle-btn ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
            <MessageCircle size={14} inline style={{ marginRight: '6px' }} /> Direct Messaging
          </button>
          <button className={`toggle-btn ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => setActiveTab('notifications')}>
            <Bell size={14} inline style={{ marginRight: '6px' }} /> Notifications & Alerts
          </button>
        </div>
      </div>

      {/* Tab 1: Discussion Forum */}
      {activeTab === 'forum' && (
        <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>Course Q&A Discussion Forum</h2>

          <form onSubmit={handleAddForumPost} style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <input 
                type="text" 
                placeholder="Ask a question or start a discussion..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                style={{ flex: 1, padding: '12px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '13.5px' }}
                required
              />
              <button type="submit" className="btn-primary">
                <Send size={14} /> Post Question
              </button>
            </div>
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {forumPosts.map((p) => (
              <div key={p.id} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#f8fafc' }}>
                    {p.author} <span className="badge badge-indigo" style={{ padding: '2px 6px', fontSize: '10px', marginLeft: '6px' }}>{p.role}</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>{p.date}</span>
                </div>
                <p style={{ fontSize: '13.5px', color: '#cbd5e1', lineHeight: '1.5' }}>{p.question}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Direct Messaging */}
      {activeTab === 'messages' && (
        <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>Private Lecturer-Student Direct Chat</h2>

          <div style={{ height: '240px', overflowY: 'auto', background: 'rgba(15, 23, 42, 0.8)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, idx) => (
              <div key={idx} style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(99, 102, 241, 0.2)', alignSelf: 'flex-start', maxWidth: '80%' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', marginBottom: '2px' }}>{m.sender} • {m.time}</div>
                <div style={{ fontSize: '13px', color: '#fff' }}>{m.text}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="text" 
              placeholder="Type private message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              style={{ flex: 1, padding: '10px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '13.5px' }}
              required
            />
            <button type="submit" className="btn-primary">
              <Send size={14} /> Send
            </button>
          </form>
        </div>
      )}

      {/* Tab 3: Notifications */}
      {activeTab === 'notifications' && (
        <div className="glass-panel" style={{ gridColumn: 'span 12', padding: '28px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '16px' }}>System Notifications & Push Alerts</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {notifications.map((n, idx) => (
              <div key={idx} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '14px 18px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '13.5px', color: '#f8fafc', fontWeight: 500 }}>{n.title}</div>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
