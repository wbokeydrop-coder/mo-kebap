import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function OrderForm(){
  const { items, total, clearCart } = useCart()
  const [type, setType] = useState('delivery')
  const [payment, setPayment] = useState('cash')
  const [form, setForm] = useState({ name: '', address: '', phone: '' })

  function submit(e){
    e.preventDefault()
    
    // Jeśli wybrano PayPal, przekieruj do PayPal
    if (payment === 'paypal') {
      // Tutaj możesz dodać link do PayPal lub inną logikę
      const paypalLink = 'https://paypal.me/MohamedYosef828/' + total().toFixed(2)
      window.open(paypalLink, '_blank')
      
      // Po 2 sekundach wysyłamy zamówienie na WhatsApp
      setTimeout(() => {
        sendWhatsAppOrder()
      }, 2000)
      
      return
    }
    
    // Jeśli gotówka, od razu WhatsApp
    sendWhatsAppOrder()
  }
  
  function sendWhatsAppOrder() {
    // Tworzenie wiadomości WhatsApp z zamówieniem
    let message = `🍕 *NEUE BESTELLUNG - MO KEBAP*\n\n`
    message += `👤 *Name:* ${form.name}\n`
    message += `📱 *Telefon:* ${form.phone}\n`
    message += `📦 *Art:* ${type === 'delivery' ? '🚚 Lieferung' : '🏪 Abholung'}\n`
    if (type === 'delivery') {
      message += `📍 *Adresse:* ${form.address}\n`
    }
    message += `\n-------------------\n`
    message += `🛒 *BESTELLUNG:*\n\n`
    
    items.forEach(item => {
      const itemPrice = item.selectedSize 
        ? item.sizes[item.selectedSize] 
        : item.price
      const sizeText = item.selectedSize ? ` (${item.selectedSize})` : ''
      message += `• ${item.qty}x ${item.name}${sizeText}\n`
      message += `   €${(itemPrice * item.qty).toFixed(2)}\n\n`
    })
    
    message += `-------------------\n`
    message += `💰 *GESAMT: €${total().toFixed(2)}*\n`
    message += `💳 *ZAHLUNG: ${payment === 'cash' ? 'Bar bei Lieferung/Abholung' : 'PayPal'}*\n`
    
    // Otwieranie WhatsApp
    const phoneNumber = '4901749633343' // bez + i spacji
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    window.open(whatsappURL, '_blank')
    
    // Opcjonalnie: wyczyść koszyk po wysłaniu
    setTimeout(() => {
      if (confirm('Zamówienie wysłane przez WhatsApp. Wyczyścić koszyk?')) {
        clearCart()
      }
    }, 1000)
  }

  return (
    <form className="order-form" onSubmit={submit} style={{
      background: 'var(--darker-bg)',
      padding: '2rem',
      borderRadius: '15px',
      border: '1px solid rgba(245,179,1,0.1)'
    }}>
      <h3 style={{color: 'var(--primary-gold)', marginBottom: '1.5rem', fontSize: '1.8rem'}}>
        Bestellung
      </h3>
      
      <label style={{marginBottom: '1.5rem'}}>
        <span style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Name</span>
        <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
      </label>

      <label style={{marginBottom: '1.5rem'}}>
        <span style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Telefon</span>
        <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
      </label>

      <div style={{marginBottom: '1.5rem'}}>
        <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', cursor: 'pointer'}}>
          <input 
            type="radio" 
            name="type" 
            value="delivery" 
            checked={type==='delivery'} 
            onChange={() => setType('delivery')}
            style={{cursor: 'pointer'}}
          /> 
          <span>Lieferung</span>
        </label>
        <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
          <input 
            type="radio" 
            name="type" 
            value="pickup" 
            checked={type==='pickup'} 
            onChange={() => setType('pickup')}
            style={{cursor: 'pointer'}}
          /> 
          <span>Abholung</span>
        </label>
      </div>

      {type === 'delivery' && (
        <label style={{marginBottom: '1.5rem'}}>
          <span style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600'}}>Adresse</span>
          <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} required />
        </label>
      )}

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ marginBottom: '0.5rem', fontWeight: 'bold', display: 'block' }}>
          Zahlungsmethode
        </label>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={payment === 'cash'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <span>💵 Bar bei Lieferung/Abholung</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={payment === 'paypal'}
              onChange={(e) => setPayment(e.target.value)}
            />
            <span>💳 PayPal</span>
          </label>
        </div>
      </div>

      <div style={{
        padding: '1rem',
        background: 'rgba(37, 211, 102, 0.1)',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        border: '1px solid rgba(37, 211, 102, 0.3)',
        textAlign: 'center'
      }}>
        <span style={{fontSize: '1.5rem', marginRight: '0.5rem'}}>💬</span>
        <span style={{color: '#25D366', fontWeight: '600'}}>
          Bestellung wird über WhatsApp gesendet
        </span>
      </div>

      <div className="order-summary" style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--primary-gold)',
        marginTop: '2rem',
        marginBottom: '1.5rem',
        textAlign: 'center',
        padding: '1rem',
        background: 'rgba(245,179,1,0.05)',
        borderRadius: '8px'
      }}>
        Gesamt: € {total().toFixed(2)}
      </div>
      
      <button 
        className="btn primary" 
        type="submit"
        style={{
          width: '100%', 
          fontSize: '1.1rem', 
          padding: '1rem',
          background: payment === 'paypal' ? '#0070BA' : '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}
      >
        <span style={{fontSize: '1.5rem'}}>{payment === 'paypal' ? '💳' : '💬'}</span>
        {payment === 'paypal' ? 'Über PayPal bezahlen' : 'Über WhatsApp bestellen'}
      </button>
      
      <p style={{
        textAlign: 'center',
        marginTop: '1rem',
        fontSize: '0.85rem',
        color: '#888'
      }}>
        {payment === 'cash' 
          ? '💵 Bezahlung bar bei Lieferung oder Abholung' 
          : '💳 PayPal: @MohamedYosef828 - Link wird nach WhatsApp-Bestätigung gesendet'}
      </p>
    </form>
  )
}
