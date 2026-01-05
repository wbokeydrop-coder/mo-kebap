// @ts-nocheck
import React from 'react'
import OrderForm from '../components/OrderForm'

export default function OrderPage(){
  return (
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
  )
}

export async function getStaticProps() {
  return { props: {} }
}
