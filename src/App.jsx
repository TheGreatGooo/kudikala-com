function App() {
  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white', textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', margin: '0 0 0.5rem' }}>kudikala.com</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Deployed on Cloudflare Pages</p>
      </div>
    </div>
  )
}
export default App
