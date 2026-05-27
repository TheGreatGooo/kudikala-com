function App() {
  const asciiArt = `██╗  ██╗ ██╗   ██╗ ██████╗  ██╗ ██╗  ██╗  █████╗  ██╗       █████╗
 ██║ ██╔╝ ██║   ██║ ██╔══██╗ ██║ ██║ ██╔╝ ██╔══██╗ ██║      ██╔══██╗
 █████╔╝  ██║   ██║ ██║  ██║ ██║ █████╔╝  ███████║ ██║      ███████║
 ██╔═██╗  ██║   ██║ ██║  ██║ ██║ ██╔═██╗  ██╔══██║ ██║      ██╔══██║
 ██║  ██╗ ╚██████╔╝ ██████╔╝ ██║ ██║  ██╗ ██║  ██║ ███████╗ ██║  ██║
 ╚═╝  ╚═╝  ╚═════╝  ╚═════╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚══════╝ ╚═╝  ╚═╝`.trim();

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #faf3eb 0%, #f5e6d3 30%, #edd5b3 60%, #e8c9a0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,200,150,0.3) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,180,150,0.2) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '800px',
        padding: '3rem',
        background: 'rgba(255,255,255,0.4)',
        borderRadius: '24px',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.5)',
        boxShadow: '0 20px 60px rgba(92,64,51,0.1), 0 1px 3px rgba(92,64,51,0.05)',
        textAlign: 'center'
      }}>
        {/* Decorative line */}
        <div style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, #d4a574, #c4956a)',
          margin: '0 auto 2rem',
          borderRadius: '2px'
        }} />
        
        <pre style={{
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: 'clamp(6px, 2vw, 14px)',
          lineHeight: '1.15',
          margin: '0 0 2rem',
          whiteSpace: 'pre',
          color: '#5c4033',
          textShadow: '0 2px 8px rgba(92,64,51,0.15)',
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }}>
          {asciiArt}
        </pre>
        
        <p style={{
          fontSize: '1.5rem',
          margin: '0 0 1rem',
          fontWeight: 400,
          color: '#5c4033',
          letterSpacing: '0.05em'
        }}>
          Kudikala Family Page
        </p>
        
        <p style={{
          fontSize: '1rem',
          margin: '0 0 0.5rem',
          fontWeight: 300,
          color: '#5c4033',
          opacity: 0.7,
          fontStyle: 'italic'
        }}>
          కుటుంబం అంటే ప్రేమ, విశ్వాసం, మరియు ఒకరికొకరు సహాయం చేసుకోవడం
        </p>
        
        <p style={{
          fontSize: '0.85rem',
          margin: '0 0 2.5rem',
          fontWeight: 300,
          color: '#5c4033',
          opacity: 0.5
        }}>
          "Family is love, trust, and helping each other"
        </p>
        
        <a
          href="https://illu.kudikala.com/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 36px',
            background: 'linear-gradient(135deg, #d4a574, #c4956a)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(196,149,106,0.3)',
            cursor: 'pointer'
          }}
          onMouseEnter={e => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 20px rgba(196,149,106,0.4)';
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(196,149,106,0.3)';
          }}
        >
          <span>Family Application Portal</span>
          <span style={{ fontSize: '1.2em' }}>→</span>
        </a>
        
        <p style={{
          fontSize: '0.8rem',
          marginTop: '2rem',
          opacity: 0.6,
          fontStyle: 'italic',
          color: '#5c4033',
          lineHeight: '1.5'
        }}>
          Note: Portal is only accessible via VPN or physical connection inside certain networks
        </p>
        
        <div style={{
          width: '40px',
          height: '2px',
          background: 'rgba(92,64,51,0.2)',
          margin: '2rem auto 0',
          borderRadius: '1px'
        }} />
        
        <p style={{
          fontSize: '0.9rem',
          marginTop: '1rem',
          opacity: 0.7,
          color: '#5c4033',
          letterSpacing: '0.05em'
        }}>
          illu.kudikala.com
        </p>
      </div>
    </div>
  )
}

export default App
