import React from 'react'

export default function About(){
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem', color: '#e0e0e0', lineHeight: 1.7 }}>
      <h1 style={{ color: '#d4af37', fontSize: '2.5rem', marginBottom: '1rem', borderBottom: '3px solid #d4af37', paddingBottom: '0.5rem' }}>Über MO KEBAP</h1>

      <p style={{ color: '#bbb', marginBottom: '1rem' }}>
        MO KEBAP ist ein familiengeführtes Lokal in Münsingen. Wir kombinieren traditionelle Rezepte mit frischen Zutaten und servieren herzhafte Gerichte wie Döner, Pide und hausgemachte Pizzen.
      </p>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Unsere Philosophie</h2>
        <p style={{ color: '#ccc' }}>
          Frische, Geschmack und Gastfreundschaft stehen bei uns im Mittelpunkt. Wir bereiten alle Speisen mit Sorgfalt zu — von der Wahl der Zutaten bis zur finalen Würzung.
        </p>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Öffnungszeiten</h2>
        <p style={{ color: '#ccc' }}>Mo–So: 11:00 – 22:00 (kann je nach Tag variieren; prüfen Sie unsere Website für aktuelle Zeiten)</p>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Catering & Veranstaltungen</h2>
        <p style={{ color: '#ccc' }}>
          Wir bieten Catering für Veranstaltungen, Geburtstage und Firmenfeiern an. Kontaktieren Sie uns per Telefon oder E-Mail für ein individuelles Angebot.
        </p>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Kontakt</h2>
        <p style={{ color: '#ccc' }}>Telefon: 0174 9633343<br/>E-Mail: info@mo-kebab.de<br/>Adresse: Hauptstraße, 72525 Münsingen</p>
      </section>
    </div>
  )
}
