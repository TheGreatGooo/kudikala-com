function App() {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 50%, #ff99ac 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem', fontWeight: 300, letterSpacing: '0.1em' }}>
          KUDIKALA
        </h1>
        <p style={{ fontSize: '1.1rem', margin: '0 0 2rem', opacity: 0.95, fontWeight: 300 }}>
          The Kudikala Family Homepage
        </p>
        <a
          href="https://illu.kudikala.com/"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '8px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={e => {
            e.target.style.background = 'rgba(255,255,255,0.3)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.target.style.background = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Family Application Portal →
        </a>
        <p style={{ fontSize: '0.75rem', marginTop: '1.5rem', opacity: 0.65, fontStyle: 'italic' }}>
          Note: Portal is only accessible via VPN or physical connection inside certain networks
        </p>
        <p style={{ fontSize: '0.85rem', marginTop: '1rem', opacity: 0.7 }}>
          illu.kudikala.com
        </p>
      </div>
    </div>
  )
}

export default App
