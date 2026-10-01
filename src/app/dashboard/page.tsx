"use client"
import { useState, useEffect } from 'react';
export default function DashboardPage() {
  const [schoolName, setSchoolName] = useState('');
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    const saved = localStorage.getItem('schoolName');
    if (saved) setSchoolName(saved);
  }, []);
  const saveName = () => {
    if (inputValue.trim() !== '') {
      localStorage.setItem('schoolName', inputValue);
      setSchoolName(inputValue);
      setInputValue('');
    }
  };
  if (!schoolName) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f3f4f6' }}>
        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '380px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>Welcome! 🏫</h1>
          <p style={{ color: 'gray' }}>What is your school name?</p>
          <input type="text" placeholder="e.g. Grace High School" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ width: '100%', marginTop: '20px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
          <button onClick={saveName} style={{ width: '100%', marginTop: '12px', background: '#2563eb', color: 'white', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none' }}>Save & Continue</button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ minHeight: '100vh', padding: '40px', background: '#f3f4f6' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Welcome to {schoolName} 🎓</h1>
      <a href="/login" style={{ color: 'blue' }}>Logout</a>
    </div>
  )
}