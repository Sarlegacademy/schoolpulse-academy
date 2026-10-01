"use client"

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f3f4f6' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '350px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>SchoolPulse Login</h1>
        <p style={{ textAlign: 'center', color: 'gray', marginTop: '5px' }}>Enter to continue</p>

        <input type="email" placeholder="Email" style={{ width: '100%', marginTop: '20px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
        <input type="password" placeholder="Password" style={{ width: '100%', marginTop: '10px', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />

        <button 
          onClick={() => window.location.href = '/dashboard'}
          style={{ width: '100%', marginTop: '20px', background: '#2563eb', color: 'white', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
        >
          Login
        </button>
      </div>
    </div>
  )
}