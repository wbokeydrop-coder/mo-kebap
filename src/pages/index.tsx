// @ts-nocheck
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import OptimizedAdSense from '../components/OptimizedAdSense.ssrfix'
import ADS from '../config/ads'
import AdSense from '../components/AdSense.ssrfix'

export const runtime = 'nodejs'

export default function Home(){
  // TODO: replace homepage hero/section image with real pizzeria photo
  return (
    <>
      <Head>
        <title>Mo Kebap Münsingen | Döner, Kebab & Pizza online bestellen</title>
        <meta
          name="description"
          content="Authentischer Döner, Kebab, Lahmacun und Pizza in Münsingen. Online bestellen unter mo-kebap.de mit schneller Lieferung."
        />
        <link rel="canonical" href="https://mo-kebap.de/" />
        <meta property="og:title" content="Mo Kebap Münsingen – Beste Döner & Pizza" />
        <meta property="og:description" content="Frische türkische und italienische Spezialitäten, jetzt online bestellen." />
        <meta property="og:url" content="https://mo-kebap.de/" />
        <meta property="og:image" content="https://mo-kebap.de/images/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mo Kebap Münsingen – Döner, Kebab & Pizza" />
        <meta name="twitter:description" content="Schnelle Lieferung in Münsingen. Jetzt online bestellen." />
        <meta name="twitter:image" content="https://mo-kebap.de/images/logo.jpg" />
      </Head>
      <section className="hero">
      {/* OPTIMIZED: Hero Auto Ad - High RPM placement at top of page */}
      <div style={{
        marginBottom: '2rem',
        maxWidth: '100%'
      }}>
        <OptimizedAdSense 
          slot={ADS.slots.hero_auto}
          format={ADS.formats.hero_auto}
          channel={ADS.channels.hero_auto}
          lazy={false}
          minHeight={ADS.lazyLoading.minHeightDesktop}
        />
      </div>
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
          <h1>Mo Kebap Münsingen – Döner, Pizza & Türkische Küche</h1> {/* SEO H1 */}
          <h2 style={{display:'none'}}>Erleben Sie den authentischen Geschmack.</h2> {/* zachowaj dla semantyki, ukryj */}
        <p className="hero-subtitle">
          Genießen Sie authentische türkische und italienische Spezialitäten. 
          Frische Zutaten, traditionelle Rezepte und handgemachter Teig – 
          für einen unvergesslichen Geschmack.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginTop: '0.5rem',
          alignItems: 'center'
        }}>
          <Link href="/menu" className="btn secondary" style={{padding: '0.5rem 0.95rem'}}>
            Speisekarte ansehen
          </Link>
          <Link href="/lieferung" className="btn ghost" style={{padding: '0.5rem 0.95rem'}}>
            Lieferung & Abholung
          </Link>
          <Link href="/contact" className="btn ghost" style={{padding: '0.5rem 0.95rem'}}>
            Kontakt aufnehmen
          </Link>
        </div>

        <article className="hero-text" style={{marginTop: '1.5rem', color: '#eee', lineHeight: 1.7}}>
          {/* SEO sekcje H2 i słowa kluczowe */}
          <section>
            <h2>Döner in Münsingen</h2>
            <p>Genießen Sie den besten Döner in Münsingen – frisch, herzhaft und schnell geliefert. Unser Döner ist bekannt für Qualität und Geschmack. kebap mün­singen, döner mün­singen, bester döner in mün­singen.</p>
          </section>
          <section>
            <h2>Pizza in Münsingen</h2>
            <p>Unsere Pizza in Münsingen wird mit handgemachtem Teig und hochwertigen Zutaten gebacken. pizza mün­singen, essen bestellen mün­singen.</p>
          </section>
          <section>
            <h2>Türkische Spezialitäten</h2>
            <p>Probieren Sie unsere türkischen Spezialitäten wie Lahmacun, Pide und hausgemachte Soßen – und nicht nur das! Bei uns finden Sie auch italienische Pizza und weitere beliebte Gerichte. kebap online bestellen mün­singen.</p>
          </section>
          <section>
            <h2>Online bestellen</h2>
            <p>Bestellen Sie Ihr Essen bequem online auf mo-kebap.de – lieferdienst mün­singen, pizza mün­singen, döner mün­singen.</p>
          </section>
          <section>
            <h2>Lieferservice Münsingen</h2>
            <p>Wir liefern schnell und zuverlässig in Münsingen und Umgebung. Bestellen Sie bequem online über mo-kebap.de. lieferdienst mün­singen, essen bestellen mün­singen.</p>
          </section>
          <section>
            <h2>Warum Mo Kebap?</h2>
            <p>Täglich frisch zubereitetes Fleisch, hausgemachte Soßen, handgemachter Teig, kurze Wartezeiten und faire Preise. kebap mün­singen, bester döner in mün­singen.</p>
          </section>
          {/* Oryginalny opis i dane kontaktowe */}
          <section>
            <h2 style={{fontSize: '1.15rem', marginTop: '1rem'}}>Über Mo Kebap</h2>
            <p>Mo Kebap in Münsingen steht für frische Zutaten, hausgemachte Soßen und traditionelle türkische sowie italienische Spezialitäten. Unser Team bereitet jeden Döner, jede Pizza und jedes Gericht mit Sorgfalt und Leidenschaft zu.</p>
          </section>
          <section>
            <h2 style={{fontSize: '1.15rem', marginTop: '1rem'}}>Lieferservice & Catering</h2>
            <p>Wir liefern schnell und zuverlässig in Münsingen und Umgebung. Bestellen Sie bequem online über mo-kebap.de.</p>
          </section>
          <section>
            <h2 style={{fontSize: '1.15rem', marginTop: '1rem'}}>Kontakt & Öffnungszeiten</h2>
            <p>Öffnungszeiten: Montag–Samstag: 11:00–22:00, Sonntag: geschlossen.<br />Telefonisch erreichbar unter <strong>01749633343</strong> (Bestellungen & Reservierungen).<br />Wir freuen uns auf Ihren Besuch in Münsingen!</p>
          </section>
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
          <Link href="/menu" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15) 0%, rgba(37, 211, 102, 0.05) 100%)',
              padding: '2rem',
              borderRadius: '20px',
              border: '2px solid rgba(37, 211, 102, 0.3)',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
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
          </Link>

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
          <AdSense 
            slot={ADS.slots.home_top} 
            format="horizontal" 
            style={{ display: 'block', width: '100%', minHeight: ADS.lazyLoading.minHeightDesktop }}
          />
        </div>

        <div className="hero-buttons">
          <Link href="/contact" className="btn secondary">Kontakt & Öffnungszeiten</Link>
        </div>
      </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}
