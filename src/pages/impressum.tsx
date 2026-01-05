// @ts-nocheck
import React from 'react'
import Link from 'next/link'

export default function Impressum(){
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem', color: '#e0e0e0', lineHeight: 1.7 }}>
      <h1 style={{ color: '#d4af37', fontSize: '2.5rem', marginBottom: '1rem', borderBottom: '3px solid #d4af37', paddingBottom: '0.5rem' }}>Impressum</h1>

      <section style={{ marginBottom: '1rem' }}>
        <p style={{ color: '#ccc' }}>
          <strong>MO KEBAP</strong><br/>
          Inhaber: [Imię Nazwisko]<br/>
          Hauptstraße<br/>
          72525 Münsingen<br/>
          Deutschland
        </p>
        <p style={{ color: '#ccc' }}>
          Telefon: 0174 9633343<br/>
          E-Mail: info@mo-kebab.de
        </p>
      </section>

      <section style={{ marginBottom: '1rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Umsatzsteuer-ID</h2>
        <p style={{ color: '#ccc' }}>USt-ID: [jeśli dostępna, wpisz tutaj]</p>
      </section>

      <section style={{ marginBottom: '1rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Haftung für Inhalte</h2>
        <p style={{ color: '#ccc' }}>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
      </section>

      <p style={{ color: '#bbb', marginTop: '1.5rem' }}><em>Hinweis: Bitte ergänzen Sie die fehlenden Pflichtangaben (Inhabername, USt-ID) bevor Veröffentlichung.</em></p>
      <p style={{ color: '#ccc', marginTop: '1rem' }}>
        Kontakt aufnehmen? Besuchen Sie unsere{' '}
        <Link href="/contact" style={{ color: '#d4af37' }}>Kontaktseite</Link>{' '}
        oder informieren Sie sich in unserer{' '}
        <Link href="/privacy" style={{ color: '#d4af37' }}>Datenschutzerklärung</Link>.
      </p>
    </div>
  )
}

export async function getStaticProps() {
  return { props: {} }
}
