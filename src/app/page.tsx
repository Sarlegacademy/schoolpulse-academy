export default function Home() {
  return (
    <div style={{minHeight: '100vh', background: 'white'}}>
      <header style={{padding: '16px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between'}}>
        <h1 style={{fontWeight: 'bold', color: '#0f2c5c'}}>SchoolPulse Academy</h1>
        <nav style={{display: 'flex', gap: '16px', fontSize: '14px'}}>
          <a href="/academics">Academics</a>
          <a href="/admissions">Admissions</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main style={{padding: '60px 20px', textAlign: 'center'}}>
        <h2 style={{fontSize: '42px', fontWeight: 'bold', color: '#0f2c5c'}}>Welcome to SchoolPulse Academy</h2>
        <p style={{marginTop: '16px'}}>Nursery | Primary | JSS | SSS</p>
        <a href="/academics" style={{display: 'inline-block', marginTop: '24px', background: '#0f2c5c', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none'}}>Explore Academics</a>
      </main>
    </div>
  );
}
