// @ts-nocheck
import React from 'react'
import Head from 'next/head'
import OrderForm from '../components/OrderForm'

export default function OrderPage(){
  return (
    <>
      <Head>
        <title>Zur Kasse | Mo Kebap Münsingen – Bestellung abschließen</title>
        <meta
          name="description"
          content="Bequem online bezahlen und Bestellung bei Mo Kebap Münsingen abschließen. Schnelle Lieferung in 72525."
        />
        <link rel="canonical" href="https://mo-kebap.de/order" />
        <meta property="og:title" content="Bestellung abschließen – Mo Kebap Münsingen" />
        <meta property="og:description" content="Online Checkout für Döner, Kebab und Pizza in Münsingen." />
        <meta property="og:url" content="https://mo-kebap.de/order" />
        <meta property="og:image" content="https://mo-kebap.de/images/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zur Kasse | Mo Kebap Münsingen" />
        <meta name="twitter:description" content="Online Checkout – schnell und sicher bestellen." />
        <meta name="twitter:image" content="https://mo-kebap.de/images/logo.jpg" />
      </Head>
      <div className="page-shell">
      <div className="content-section">
        <div className="container">
        <h2 className="section-title">Zur Kasse</h2>
        <p className="section-subtitle">Schließen Sie Ihre Bestellung ab</p>
        <div className="order-grid" style={{maxWidth: '600px', margin: '0 auto'}}>
          <OrderForm />
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}
