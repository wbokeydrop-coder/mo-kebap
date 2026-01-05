// @ts-nocheck
import React from 'react'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '2rem 1rem',
      color: '#e0e0e0',
      lineHeight: '1.8'
    }}>
      <h1 style={{
        color: '#d4af37',
        fontSize: '2.5rem',
        marginBottom: '1rem',
        borderBottom: '3px solid #d4af37',
        paddingBottom: '0.5rem'
      }}>
        Datenschutzerklärung
      </h1>
      
      <p style={{ fontSize: '0.95rem', color: '#bbb', marginBottom: '2rem' }}>
        <strong>Letzte Aktualisierung:</strong> 10. November 2025
      </p>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.8rem', marginBottom: '1rem' }}>
          1. Verantwortlicher
        </h2>
        <p>
          <strong>MO KEBAP</strong><br />
          Hauptstraße<br />
          72525 Münsingen<br />
          Baden-Württemberg, Deutschland<br />
          <br />
          Telefon: 01749633343<br />
          E-Mail: info@mo-kebab.de
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.8rem', marginBottom: '1rem' }}>
          2. Allgemeine Hinweise
        </h2>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
          passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
          persönlich identifiziert werden können.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.8rem', marginBottom: '1rem' }}>
          3. Datenerfassung auf unserer Website
        </h2>
        
        <h3 style={{ color: '#c19e2b', fontSize: '1.3rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
          3.1 Cookies
        </h3>
        <p>
          Unsere Internetseiten verwenden sogenannte „Cookies". Cookies sind kleine Textdateien und richten auf 
          Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und 
          Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell 
          ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
        </p>

        <h3 style={{ color: '#c19e2b', fontSize: '1.3rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
          3.2 Server-Log-Dateien
        </h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, 
          die Ihr Browser automatisch an uns übermittelt:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
          Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.8rem', marginBottom: '1rem' }}>
          4. Google AdSense
        </h2>
        <p>
          Diese Website nutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Ireland Limited 
          („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p>
          Google AdSense verwendet Cookies, die auf Ihrem Computer gespeichert werden und die eine Analyse der 
          Benutzung der Website ermöglichen. Google AdSense verwendet auch sogenannte Web Beacons (unsichtbare Grafiken). 
          Durch diese Web Beacons können Informationen wie der Besucherverkehr auf diesen Seiten ausgewertet werden.
        </p>
        <p>
          Die durch Cookies und Web Beacons erzeugten Informationen über die Benutzung dieser Website (einschließlich 
          Ihrer IP-Adresse) und Auslieferung von Werbeformaten werden an einen Server von Google in den USA übertragen 
          und dort gespeichert. Diese Informationen können von Google an Vertragspartner von Google weitergegeben werden.
        </p>
        <p>
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Cookie-Banner)
        </p>
        <p>
          Mehr Informationen: 
          <a href="https://policies.google.com/technologies/ads" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{ color: '#d4af37', marginLeft: '0.5rem' }}>
            Google Werbe-Richtlinien
          </a>
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.8rem', marginBottom: '1rem' }}>
          5. Ihre Rechte
        </h2>
        <p>Sie haben folgende Rechte:</p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li><strong>Auskunftsrecht</strong> – Recht auf Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li><strong>Berichtigungsrecht</strong> – Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li><strong>Löschungsrecht</strong> – Recht auf Löschung („Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
          <li><strong>Einschränkung der Verarbeitung</strong> – Recht auf Einschränkung (Art. 18 DSGVO)</li>
          <li><strong>Datenübertragbarkeit</strong> – Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li><strong>Widerspruchsrecht</strong> – Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li><strong>Widerruf der Einwilligung</strong> – Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.8rem', marginBottom: '1rem' }}>
          6. Beschwerderecht bei einer Aufsichtsbehörde
        </h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
          personenbezogenen Daten durch uns zu beschweren.
        </p>
        <p>
          <strong>Zuständige Aufsichtsbehörde:</strong><br />
          Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
          Lautenschlagerstraße 20<br />
          70173 Stuttgart<br />
          Deutschland
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.8rem', marginBottom: '1rem' }}>
          7. SSL/TLS-Verschlüsselung
        </h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
          SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
          des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ color: '#d4af37', fontSize: '1.8rem', marginBottom: '1rem' }}>
          8. Kontakt
        </h2>
        <p>
          Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:<br />
          <strong>E-Mail:</strong> info@mo-kebab.de<br />
          <strong>Telefon:</strong> 01749633343
        </p>
      </section>

      <div style={{
        marginTop: '3rem',
        padding: '1.5rem',
        background: 'rgba(212, 175, 55, 0.1)',
        borderLeft: '4px solid #d4af37',
        borderRadius: '4px'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          <strong>Hinweis:</strong> Diese Datenschutzerklärung gilt ausschließlich für diese Website. 
          Für externe Links übernehmen wir keine Verantwortung.
        </p>
      </div>

      <p style={{ marginTop: '1.5rem', color: '#ccc' }}>
        Weitere rechtliche Hinweise finden Sie im{' '}
        <Link href="/impressum" style={{ color: '#d4af37' }}>Impressum</Link>. Bei Fragen können Sie uns über die{' '}
        <Link href="/contact" style={{ color: '#d4af37' }}>Kontaktseite</Link> erreichen.
      </p>
    </div>
  )
}

export async function getStaticProps() {
  return { props: {} }
}
