"use client"
import { useState, useEffect } from 'react';
import { SCHOOL_INFO } from "../../config";

export default function DashboardPage() {
  const [role, setRole] = useState<string>("student");

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole') || 'student';
    setRole(savedRole);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6' }}>
      {/* HEADER - Fixed School Name */}
      <div style={{ background: '#1e3a8a', color: 'white', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '18px' }}>{SCHOOL_INFO.name}</h1>
        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>{role.toUpperCase()}</span>
      </div>

      <div style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Dashboard</h2>
        <p style={{ color: 'gray' }}>Welcome to {SCHOOL_INFO.name} Portal</p>

        {/* ROLE BASED CONTROL */}
        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          
          {/* Everyone can see this */}
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px' }}>
            <h3>📢 Announcements</h3>
            <p style={{ fontSize: '14px', color: 'gray' }}>Visible to ALL - {role}</p>
          </div>

          {/* Only student & staff & admin */}
          {(role === 'student' || role === 'staff' || role === 'admin') && (
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px' }}>
              <h3>📝 My Results</h3>
              <p style={{ fontSize: '14px', color: 'gray' }}>Student sees only his result</p>
            </div>
          )}

          {/* Only staff & admin */}
          {(role === 'staff' || role === 'admin') && (
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '2px solid #fbbf24' }}>
              <h3>👨‍🏫 Staff Only: Mark Attendance</h3>
              <p style={{ fontSize: '14px', color: 'gray' }}>Students will NOT see this card</p>
            </div>
          )}

          {/* Only admin */}
          {role === 'admin' && (
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '2px solid #ef4444' }}>
              <h3>⚙️ Admin Only: Manage Fees & Staff</h3>
              <p style={{ fontSize: '14px', color: 'gray' }}>Only Admin sees this</p>
            </div>
          )}
        </div>

        <a href="/login" style={{ display: 'inline-block', marginTop: '30px', color: 'blue' }}>Logout</a>
      </div>
    </div>
  )
}