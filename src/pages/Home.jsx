import React from 'react'
import { Link } from 'react-router-dom'
import AdSense from '../components/AdSense'
import ADS from '../config/ads'

export default function Home(){
  return (
    <section className="hero">
      {/* Pizza slice decorations */}
      <div className="pizza-decoration left">
        <svg viewBox="0 0 100 100" className="pizza-slice-svg">
          <path d="M50,50 L20,20 Q25,15 35,20 L50,50 Z M30,25 Q32,23 34,25" />
          <circle cx="28" cy="28" r="2" fill="var(--primary-gold)" />
          <circle cx="38" cy="32" r="2" fill="var(--primary-gold)" />
        </svg>
      </div>
      <div className="pizza-decoration right">
        <svg viewBox="0 0 100 100" className="pizza-slice-svg">
          <path d="M50,50 L80,20 Q75,15 65,20 L50,50 Z M70,25 Q68,23 66,25" />
          <circle cx="72" cy="28" r="2" fill="var(--primary-gold)" />
          <circle cx="62" cy="32" r="2" fill="var(--primary-gold)" />
        </svg>
      </div>

      <div className="hero-inner">
        <h2>Erleben Sie den authentischen Geschmack.</h2>
        <p className="hero-subtitle">
          Genießen Sie authentische türkische und italienische Spezialitäten. 
          Frische Zutaten, traditionelle Rezepte und handgemachter Teig – 
          für einen unvergesslichen Geschmack.
        </p>

        <article className="hero-text" style={{marginTop: '1.5rem', color: '#eee', lineHeight: 1.7}}>
          <h3 style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>Mo Kebap in Münsingen — Frisch, Schnell, Lecker</h3>
          <p>
            Willkommen bei Mo Kebap in Münsingen. Wir verwenden nur sorgfältig ausgewählte Zutaten: 
            knuspriges Brot, saftiges Fleisch, frischer Salat und hausgemachte Soßen. Ob Sie eine klassische 
            Pizza, einen Döner oder eine unserer Spezialitäten probieren möchten — bei uns bekommen Sie 
            unkomplizierten Geschmack und schnelle Zubereitung. Unser Lieferservice bringt warme Speisen
            direkt zu Ihnen nach Hause, oder Sie holen Ihre Bestellung bequem bei uns ab.
          </p>
          <p>
            Unsere Speisekarte bietet eine große Auswahl für jeden Geschmack: vegetarische Optionen, 
            beliebte Familienpizzen, handgefertigte Pide und frische Salate. Für Firmenessen und Gruppen 
            bereiten wir gern größere Bestellungen vor. Schauen Sie sich unsere Menüseite an für Preise,
            Portionen und ausführliche Beschreibungen jeder Speise.
          </p>
          <h3 style={{fontSize: '1.15rem', marginTop: '1rem'}}>Warum Mo Kebap?</h3>
          <p>
            Bei Mo Kebap achten wir auf kurze Wartezeiten und gleichbleibende Qualität. Unser Fleisch wird 
            täglich frisch zubereitet, Gemüse kommt von regionalen Lieferanten, und unser Teig wird 
            täglich handgemacht. Wir legen großen Wert auf Geschmack und Hygiene – ideal für Familien und 
            schnelle Mittagspausen.
          </p>
          <h3 style={{fontSize: '1.15rem', marginTop: '1rem'}}>Lieferservice & Catering</h3>
          <p>
            Wir liefern in Münsingen und näherer Umgebung. Für größere Veranstaltungen bieten wir Catering-
            Pakete an. Kontaktieren Sie uns telefonisch für ein individuelles Angebot.
          </p>
          <p>
            Öffnungszeiten: Montag–Sonntag: 11:00–22:00 (Feiertage nach besonderer Regelung). 
            Telefonisch erreichbar unter <strong>+49 123 456789</strong> (Bestellungen & Reservierungen).
            Wir freuen uns auf Ihren Besuch in Münsingen!
          </p>
        </article>
        
        {/* Sekcja opcji zamówień */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
          marginBottom: '2rem'
        }}>
          {/* WhatsApp opcja */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(37, 211, 102, 0.05) 100%)',
            padding: '2rem',
            borderRadius: '20px',
            border: '2px solid rgba(37, 211, 102, 0.3)',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)'
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          onClick={() => window.location.href = '/menu'}
          >
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💬</div>
            <h3 style={{
              color: '#25D366',
              fontSize: '1.5rem',
              marginBottom: '0.75rem',
              fontWeight: '700'
            }}>
              WhatsApp Bestellung
            </h3>
            <p style={{
              color: '#ddd',
              fontSize: '0.95rem',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}>
              Bestellen Sie bequem über WhatsApp und bezahlen Sie bar bei Lieferung oder Abholung
            </p>
            <div style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#25D366',
              color: 'white',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1rem'
            }}>
              Jetzt bestellen →
            </div>
          </div>

          {/* PayPal opcja */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 112, 186, 0.15) 0%, rgba(0, 112, 186, 0.05) 100%)',
            padding: '2rem',
            borderRadius: '20px',
            border: '2px solid rgba(0, 112, 186, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💳</div>
            <h3 style={{
              color: '#0070BA',
              fontSize: '1.5rem',
              marginBottom: '0.75rem',
              fontWeight: '700'
            }}>
              PayPal Bezahlung
            </h3>
            <p style={{
              color: '#ddd',
              fontSize: '0.95rem',
              lineHeight: '1.6'
            }}>
              Bestellen Sie online und bezahlen Sie sicher und schnell mit PayPal
            </p>
          </div>
        </div>

        {/* AdSense Banner - Top of page */}
        <div style={{ margin: '2rem 0' }}>
          <AdSense slot={ADS.slots.home_top} format="horizontal" />
        </div>

        <div className="hero-buttons">
          <Link to="/contact" className="btn secondary">Kontakt & Öffnungszeiten</Link>
        </div>
      </div>
    </section>
  )
}
