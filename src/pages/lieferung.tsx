// @ts-nocheck
import React from 'react'

export default function Lieferung(){
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem', color: '#e0e0e0', lineHeight: 1.7 }}>
      <h1 style={{ color: '#d4af37', fontSize: '2.5rem', marginBottom: '1rem', borderBottom: '3px solid #d4af37', paddingBottom: '0.5rem' }}>Lieferung & Abholung</h1>

      <section style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Liefergebiet</h2>
        <p style={{ color: '#ccc' }}>
          Wir liefern innerhalb von Münsingen und den umliegenden Ortsteilen. Bitte geben Sie beim Bestellen Ihre genaue Adresse an — wir zeigen die Liefergebühr und Lieferzeit im Bestellprozess an.
        </p>
      </section>
      <section style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Unser Lieferversprechen</h2>
        <p style={{ color: '#ccc' }}>
          Wir liefern schnell und zuverlässig in Münsingen und Umgebung. Bestellen Sie bequem online über mo-kebap.de.
        </p>
      </section>

      <section style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Lieferzeiten</h2>
        <p style={{ color: '#ccc' }}>Unsere Lieferzeiten entsprechen den Öffnungszeiten: in der Regel 30–60 Minuten, je nach Bestellaufkommen und Entfernung.</p>
      </section>

      <section style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Liefergebühren & Mindestbestellwert</h2>
        <p style={{ color: '#ccc' }}>
          Liefergebühr und Mindestbestellwert können variieren. Die genauen Kosten sehen Sie vor Abschluss der Bestellung. Für Abholung entfallen Liefergebühren.
        </p>
      </section>

      <section style={{ marginBottom: '1.25rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem', marginBottom: '.5rem' }}>Abholung</h2>
        <p style={{ color: '#ccc' }}>Sie können Ihre Bestellung online aufgeben und zur vereinbarten Zeit im Restaurant abholen. Bitte achten Sie auf die Bestätigungszeit im Checkout.</p>
      </section>

      <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(212, 175, 55, 0.06)', borderLeft: '4px solid #d4af37', borderRadius: '4px' }}>
        <p style={{ margin: 0, color: '#ddd' }}><strong>Tipp:</strong> Bei größeren Bestellungen kontaktieren Sie uns bitte telefonisch für eine kürzere Lieferzeit.</p>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return { props: {} }
}
