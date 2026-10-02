"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SCHOOL_INFO } from "../../config";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState('student');

  const handleSignup = () => {
    localStorage.setItem('userRole', role);
    router.push('/dashboard');
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f3f4f6' }}>
      <div style={{ background: 'white', padding: '32px', borderRadius: '12px', width: '380px' }}>
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', color: '#1e3a8a', fontSize: '16px' }}>{SCHOOL_INFO.name}</h1>
        <p style={{ textAlign: 'center', color: 'gray', fontSize: '14px' }}>{SCHOOL_INFO.motto}</p>
        <h2 style={{ marginTop: '20px', fontWeight: 'bold' }}>Create Account</h2>
        
        <input placeholder="Full Name" style={{ width: '100%', marginTop: '12px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
        <input placeholder="Email" style={{ width: '100%', marginTop: '12px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
        <input placeholder="Password" type="password" style={{ width: '100%', marginTop: '12px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
        
        <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%', marginTop: '12px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
          <option value="admin">Admin (Principal)</option>
        </select>

        <button onClick={handleSignup} style={{ width: '100%', marginTop: '16px', background: '#1e3a8a', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold' }}>Create Account</button>
        <p style={{ marginTop: '12px', fontSize: '14px' }}>Already have account? <a href="/login" style={{ color: 'blue' }}>Login</a></p>
      </div>
    </div>
  )
}