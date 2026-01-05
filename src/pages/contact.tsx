// @ts-nocheck
import React from 'react'
import Link from 'next/link'
import OptimizedAdSense from '../components/OptimizedAdSense'
import ADS from '../config/ads'

export default function Contact(){
  return (
    <div className="page-shell">
      <div className="content-section">
        <div className="container">
        <h2 className="section-title">Kontakt & Standort</h2>
        <p className="section-subtitle">Besuchen Sie uns in Münsingen - Beste Döner, Kebab und Pizza in Baden-Württemberg</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{
            background: 'var(--darker-bg)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(245,179,1,0.1)'
          }}>
            <h3 style={{color: 'var(--primary-gold)', marginBottom: '1.5rem', fontSize: '1.5rem'}}>
              MO KEBAP Münsingen
            </h3>
            <p style={{marginBottom: '1rem'}}>
              <strong>Adresse:</strong><br/>
              Marktpl. 12<br/>
              72525 Münsingen<br/>
              Baden-Württemberg
            </p>
            <p style={{marginBottom: '1rem'}}>
              <strong>Telefon:</strong><br/>
              <a href="tel:01749633343" style={{color: 'var(--primary-gold)', textDecoration: 'none'}}>
                01749633343
              </a>
            </p>
            <p style={{marginBottom: '1rem'}}>
              <strong>WhatsApp Bestellung:</strong><br/>
              <a 
                href="https://wa.me/4901749633343" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#25D366', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(37, 211, 102, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  marginTop: '0.5rem'
                }}
              >
                <span style={{fontSize: '1.5rem'}}>💬</span>
                Chat starten
              </a>
            </p>
            <p style={{marginBottom: '1rem'}}>
              <strong>E-Mail:</strong><br/>
              <a href="mailto:info@mo-kebap.de" style={{color: 'var(--primary-gold)', textDecoration: 'none'}}>
                info@mo-kebap.de
              </a>
            </p>
            <p>
              <strong>Öffnungszeiten:</strong><br/>
              Montag–Samstag: 11:00–22:00 Uhr<br/>
              Sonntag: geschlossen<br/>
              <span style={{color: '#25D366', fontSize: '0.9rem', marginTop: '0.5rem', display: 'block'}}>
                ✓ Schnelle Lieferung in Münsingen<br/>
                ✓ Auch zum Mitnehmen
              </span>
            </p>
          </div>
          
          <div style={{
            background: 'var(--darker-bg)',
            padding: '1rem',
            borderRadius: '15px',
            border: '1px solid rgba(245,179,1,0.1)',
            overflow: 'hidden',
            minHeight: '400px'
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.8!2d9.402!3d48.407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDI0JzI1LjIiTiA5wrAyNCcwNy4yIkU!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: '10px',
                minHeight: '380px'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MO KEBAP Standort in Münsingen 72525"
            ></iframe>
          </div>
        </div>

        {/* OPTIMIZED: Contact In-Feed Ad - Above contact/form section */}
        <div style={{ margin: '3rem 0' }}>
          <OptimizedAdSense 
            slot={ADS.slots.contact_infeed}
            format={ADS.formats.contact_infeed}
            channel={ADS.channels.contact_infeed}
            lazy={true}
            minHeight={ADS.lazyLoading.minHeightDesktop}
          />
        </div>
        
        {/* SEO-optimierte Textsektion */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          background: 'rgba(212, 175, 55, 0.05)',
          borderRadius: '15px',
          borderLeft: '4px solid var(--primary-gold)'
        }}>
          <h3 style={{color: 'var(--primary-gold)', fontSize: '1.8rem', marginBottom: '1rem'}}>
            Beste Döner und Kebab in Münsingen
          </h3>
          <p style={{lineHeight: '1.8', marginBottom: '1rem'}}>
            Willkommen bei <strong>MO KEBAP</strong> - Ihrer ersten Adresse für authentisches <strong>türkisches Essen in Münsingen</strong>. 
            Wir sind stolz darauf, die beste <strong>Döner und Kebab</strong> in der Region <strong>Baden-Württemberg (72525)</strong> anzubieten.
          </p>
          <p style={{lineHeight: '1.8', marginBottom: '1rem'}}>
            Unser Restaurant befindet sich zentral in Münsingen und bietet Ihnen eine große Auswahl an frisch zubereiteten Spezialitäten. 
            Von klassischem <strong>Döner Kebab</strong>, über knusprige <strong>Pizza</strong>, bis hin zu traditionellem <strong>Lahmacun</strong> und 
            herzhaften <strong>Pide</strong> - bei uns finden Sie für jeden Geschmack das Richtige.
          </p>
          <p style={{lineHeight: '1.8', marginBottom: '1rem'}}>
            <strong>Warum MO KEBAP in Münsingen?</strong>
          </p>
          <ul style={{marginLeft: '2rem', lineHeight: '1.8', marginBottom: '1rem'}}>
            <li>✓ Frische Zutaten täglich geliefert</li>
            <li>✓ Authentische türkische Rezepte</li>
            <li>✓ Schneller Lieferservice in Münsingen und Umgebung</li>
            <li>✓ Auch zum Mitnehmen verfügbar</li>
            <li>✓ Faire Preise und große Portionen</li>
            <li>✓ Familienfreundliches Ambiente</li>
          </ul>
          <p style={{lineHeight: '1.8'}}>
            Ob Sie auf der Suche nach <strong>schnellem Essen in der Nähe</strong> sind oder ein gemütliches Abendessen planen - 
            MO KEBAP ist die perfekte Wahl. Besuchen Sie uns in der Marktpl. 12 in <strong>72525 Münsingen</strong> oder 
            bestellen Sie bequem über WhatsApp. Wir freuen uns auf Ihren Besuch!
          </p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center', color: '#ccc' }}>
        Weitere Informationen finden Sie in unserem{' '}
        <Link href="/impressum" style={{ color: 'var(--primary-gold)' }}>Impressum</Link>{' '}
        und der{' '}
        <Link href="/privacy" style={{ color: 'var(--primary-gold)' }}>Datenschutzerklärung</Link>.
      </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return { props: {} }
}
