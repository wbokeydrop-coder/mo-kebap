import React from 'react'

export default function FAQ(){
  return (
    <main style={{maxWidth: '900px', margin: '2rem auto', padding: '1rem', color: '#e0e0e0'}}>
      <h1 style={{color: '#d4af37'}}>FAQ – Häufig gestellte Fragen</h1>

      <section style={{marginTop: '1rem'}}>
        <h2>Lieferung und Abholung</h2>
        <p>Wir liefern innerhalb Münsingen und Umgebung. Die Lieferzeit beträgt in der Regel 30–50 Minuten, je nach Bestellaufkommen. Abholung ist sofort möglich; rufen Sie uns an, um Ihre Bestellung vorzubereiten.</p>
      </section>

      <section style={{marginTop: '1rem'}}>
        <h2>Zahlungsmöglichkeiten</h2>
        <p>Sie können bei Abholung oder Lieferung bar bezahlen. Zudem bieten wir Online-Zahlung über PayPal an — wählen Sie die Option beim Bestellvorgang.</p>
      </section>

      <section style={{marginTop: '1rem'}}>
        <h2>Allergene & Zutaten</h2>
        <p>Bitte informieren Sie uns bei der Bestellung über Unverträglichkeiten oder Allergien. Wir kennzeichnen in der Speisekarte die wichtigsten Allergene, geben jedoch keine Garantie auf vollständige Spurenfreiheit.</p>
      </section>

      <section style={{marginTop: '1rem'}}>
        <h2>Cookies & Werbung</h2>
        <p>Unsere Website verwendet Cookies, um Funktionalität und Analyse zu ermöglichen. Werbung (Google AdSense) wird nur geladen, wenn Sie dies über den Cookie-Hinweis akzeptieren. Sie können Cookies jederzeit in Ihrem Browser oder über unseren Cookie-Hinweis ablehnen.</p>
      </section>

      <section style={{marginTop: '1rem'}}>
        <h2>Kontakt</h2>
        <p>Telefon: <strong>01749633343</strong><br/>Adresse: Hauptstraße, 72525 Münsingen</p>
      </section>

      <div style={{marginTop: '2rem', padding: '1rem', background: 'rgba(212, 175, 55, 0.06)', borderLeft: '4px solid #d4af37'}}>
        <p style={{margin: 0}}>Wenn Sie weitere Fragen haben, kontaktieren Sie uns bitte telefonisch oder über das Kontaktformular.</p>
      </div>
    </main>
  )
}
