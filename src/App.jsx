import { useState, useEffect } from 'react';

const quotes = [
  { telugu: "కుటుంబం అంటే ప్రేమ, విశ్వాసం, మరియు ఒకరికొకరు సహాయం చేసుకోవడం", english: "Family is love, trust, and helping each other" },
  { telugu: "బంధాలు బలం, కుటుంబం శక్తి", english: "Relationships are strength, family is power" },
  { telugu: "ఇల్లు అంటే కుటుంబం, కుటుంబం అంటే ఇల్లు", english: "Home means family, family means home" },
  { telugu: "ఒకరికొకరు ప్రేమిస్తే అందమైన జీవితం", english: "A beautiful life when we love each other" },
  { telugu: "కుటుంబ సమేతే కుటుంబం", english: "Family together is truly a family" },
  { telugu: "తల్లిదండ్రుల ఆశీస్సులు ఎప్పుడూ మనతో ఉంటాయి", english: "Parents' blessings are always with us" },
  { telugu: "కుటుంబంలో ఉన్న సంతోషం ప్రపంచంలో ఏమీ లేదు", english: "Nothing in the world equals family happiness" },
  { telugu: "ఒకరికొకరు సహాయం చేసుకోవడమే కుటుంబ నిజమైన అర్థం", english: "Helping each other is the true meaning of family" },
  { telugu: "మాటలు తక్కువ, ప్రేమ ఎక్కువ", english: "Less words, more love" },
  { telugu: "కుటుంబం అనేది జీవితం యొక్క అందమైన దైవతత్వం", english: "Family is life's beautiful divinity" },
  { telugu: "చిన్నప్పుడు నేర్పిన తల్లిదండ్రులు పెద్దప్పుడు తోడు", english: "Parents who taught us young, stand by us when grown" },
  { telugu: "కుటుంబంలో ఒక్కడైనా బాధపడితే అందరూ బాధపడతారు", english: "If one suffers in family, all suffer" },
  { telugu: "ప్రేమ ఉన్న ఇల్లు సుఖమైన ఇల్లు", english: "A house with love is a happy house" },
  { telugu: "కుటుంబ బంధాలు జీవితాంతం ఉంటాయి", english: "Family bonds last a lifetime" },
  { telugu: "అన్నదమ్ముల ప్రేమ దేవుడి ఇచ్చిన అతి పెద్ద దయ", english: "Brothers' love is God's greatest gift" },
  { telugu: "అక్కాచెల్లెముల మధ్య ఉన్న ప్రేమ అమూల్యం", english: "Sisters' love is priceless" },
  { telugu: "కుటుంబం అంటే ఒకరికొకరు అర్థం చేసుకోవడం", english: "Family means understanding each other" },
  { telugu: "తల్లి యొక్క ఆశీస్సులు అందరికంటే పెద్దది", english: "A mother's blessing is the greatest of all" },
  { telugu: "నాన్న చెప్పిన మాటలు జీవితాంతం తోడు", english: "Father's words stay with us forever" },
  { telugu: "కుటుంబం సంతోషమే నిజమైన సంతోషం", english: "Family happiness is true happiness" },
  { telugu: "ఒకరి కోసం మరొకరు బ్రతకడమే కుటుంబం", english: "Living for each other is family" },
  { telugu: "కుటుంబంలో విభేదాలు ఉంటే కూడా ప్రేమ ఎప్పుడూ ఉంటుంది", english: "Even with disagreements, love always remains" },
  { telugu: "చేతులు కలిస్తే పని సులభం, కుటుంబం కలిస్తే సుఖం", english: "Hands together make work easy, family together brings joy" },
  { telugu: "కుటుంబం అనేది మనం ఎక్కడికి వెళ్లినా వెళ్లే వెలుగు", english: "Family is the light we carry wherever we go" },
  { telugu: "మామయ్య అమ్మయ్య ప్రేమ బంధం అద్భుతం", english: "The love bond between in-laws is wonderful" },
  { telugu: "మనవళ్ళ నవ్వు కుటుంబానికి పుష்டి", english: "Grandchildren's laughter enriches the family" },
  { telugu: "కుటుంబంలో ఉన్న ప్రతి ఒక్కరూ అమూల్యం", english: "Everyone in the family is precious" },
  { telugu: "పెద్దలను గౌరవించడమే కుటుంబ సంస్కృతి", english: "Respecting elders is family culture" },
  { telugu: "కుటుంబం అంటే ఒకరి కోసం మరొకరు ఎప్పుడూ ఉండటం", english: "Family means always being there for each other" },
  { telugu: "ఇల్లు వెచ్చగా ఉండాలంటే ప్రేమ ఉండాలి", english: "For a home to be warm, love must exist" },
  { telugu: "కుటుంబ సంబరాలు కలసి జరపడమే అసలైన ఆనందం", english: "Celebrating family occasions together is true joy" },
  { telugu: "తల్లి చేతి ఆహారం లోకంలో అతి రుచి", english: "Mother's cooking is the most delicious in the world" },
  { telugu: "కుటుంబం కలిసి ఉండటమే విజయం", english: "Staying together in family is success" },
  { telugu: "అన్నప్రస్థానం నుండి జీవితాంతం బంధం", english: "From annaprashana to lifelong bond" },
  { telugu: "కుటుంబం అనేది దేవుడి ఇచ్చిన అతి పెద్ద వరం", english: "Family is God's greatest blessing" },
  { telugu: "ఒకరి మాట ఒకరు వింటే కుటుంబంలో సుఖం", english: "When we listen to each other, family finds peace" },
  { telugu: "కుటుంబ బంధాలు కట్టుబాట్లు కాదు ప్రేమ", english: "Family bonds are not obligations, they are love" },
  { telugu: "పెద్దలు చెప్పేది మంచిదే, అది తెలిసిన కుటుంబం", english: "Elders speak well, that is a wise family" },
  { telugu: "కుటుంబంలో ఎప్పుడూ సంతోషం ఉండాలి", english: "Joy should always exist in the family" },
  { telugu: "నాన్న తల్లి ఆశీస్సులు మనకు బలం ఇస్తాయి", english: "Parents' blessings give us strength" },
  { telugu: "కుటుంబం కలిసి ఉన్నప్పుడే జీవితం అర్థమవుతుంది", english: "Life makes sense only when the family is together" },
  { telugu: "అన్నదమ్ములు అక్కచెల్లెములు కలసి ఉంటే ఇల్లు సంతోషంగా ఉంటుంది", english: "When brothers and sisters stay together, the home is happy" },
  { telugu: "కుటుంబం అంటే ప్రతి ఒక్కరికీ ప్రాముఖ్యత", english: "Family means everyone matters" },
  { telugu: "ఒకరి ప్రేమ మరొకరికి శక్తి", english: "One's love gives strength to the other" },
  { telugu: "కుటుంబంలో ఉన్న ఆనందానికి మరొకటి లేదు", english: "Nothing compares to family joy" },
  { telugu: "తల్లిదండ్రులు ఇచ్చిన విలువలు జీవితాంతం తోడు", english: "Values given by parents stay forever" },
  { telugu: "కుటుంబం అనేది మన జీవితంలో అతి ముఖ్యమైన భాగం", english: "Family is the most important part of our life" },
  { telugu: "ఎప్పుడూ కలిసి ఉండాలి, ఎప్పుడూ ప్రేమించాలి", english: "Always stay together, always love" },
  { telugu: "కుటుంబం అంటే నిన్ను నువ్వు చూసుకోవడం", english: "Family means taking care of yourself in each other" },
  { telugu: "కుటుంబ సమేతే శ్రీ రామ నవమి", english: "Family togetherness is like Rama Navami every day" }
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function App() {
  const shuffled = shuffle(quotes);
  const start = Math.floor(Math.random() * shuffled.length);
  const ordered = [...shuffled.slice(start), ...shuffled.slice(0, start)];

  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIdx(prev => (prev + 1) % ordered.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [ordered.length]);

  const current = ordered[quoteIdx % ordered.length];

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
      background: 'linear-gradient(135deg, #f0f7f0 0%, #e0efe0 30%, #d0e8d0 60%, #c0dfc0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(144,200,144,0.3) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(120,190,120,0.2) 0%, transparent 70%)',
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
        boxShadow: '0 20px 60px rgba(45,92,45,0.1), 0 1px 3px rgba(45,92,45,0.05)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, #6aab6a, #4a8a4a)',
          margin: '0 auto 2rem',
          borderRadius: '2px'
        }} />

        <pre style={{
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: 'clamp(6px, 2vw, 14px)',
          lineHeight: '1.15',
          margin: '0 0 2rem',
          whiteSpace: 'pre',
          color: '#2d5c2d',
          textShadow: '0 2px 8px rgba(45,92,45,0.15)',
          letterSpacing: '0.05em',
          fontWeight: 'bold'
        }}>
          {asciiArt}
        </pre>

        <p style={{
          fontSize: '1.5rem',
          margin: '0 0 1rem',
          fontWeight: 400,
          color: '#2d5c2d',
          letterSpacing: '0.05em'
        }}>
          Kudikala Family Page
        </p>

        <div style={{ minHeight: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 0 2.5rem' }}>
          <p style={{
            fontSize: '1.1rem',
            margin: '0 0 0.5rem',
            fontWeight: 300,
            color: '#2d5c2d',
            opacity: 0.8,
            fontStyle: 'italic',
            lineHeight: '1.6'
          }}>
            {current.telugu}
          </p>
          <p style={{
            fontSize: '0.9rem',
            margin: 0,
            fontWeight: 300,
            color: '#2d5c2d',
            opacity: 0.55
          }}>
            {current.english}
          </p>
        </div>

        <a
          href="http://illu.kudikala.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 36px',
            background: 'linear-gradient(135deg, #6aab6a, #4a8a4a)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(74,138,74,0.3)',
            cursor: 'pointer'
          }}
          onMouseEnter={function(e) {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 6px 20px rgba(74,138,74,0.4)';
          }}
          onMouseLeave={function(e) {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(74,138,74,0.3)';
          }}
        >
          <span>Family Application Portal</span>
          <span style={{ fontSize: '1.2em' }}>→</span>
        </a>
      </div>
    </div>
  );
}

export default App;
