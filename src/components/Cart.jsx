import React from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import AdSense from './AdSense'

export default function Cart(){
  const { items, removeFromCart, updateQty, total } = useCart()
  return (
    <aside className="cart">
      <h3 style={{color: 'var(--primary-gold)', marginBottom: '1.5rem'}}>Warenkorb</h3>
      {items.length === 0 ? (
        <p style={{color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0'}}>
          Ihr Warenkorb ist leer.
        </p>
      ) : (
        <>
          <ul style={{listStyle: 'none', padding: 0}}>
            {items.map(it => (
              <li key={it.id} style={{
                marginBottom: '1rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(245,179,1,0.1)'
              }}>
                <div className="cart-row" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
                  <div style={{flex: 1}}>
                    <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>{it.name}</div>
                    <div style={{color: 'var(--primary-gold)', fontSize: '0.9rem'}}>€ {it.price.toFixed(2)}</div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <input 
                      type="number" 
                      min="1" 
                      value={it.qty} 
                      onChange={e => updateQty(it.id, Number(e.target.value))}
                      style={{width: '50px', padding: '0.25rem', textAlign: 'center'}}
                    />
                    <button 
                      onClick={() => removeFromCart(it.id)}
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(255,107,53,0.5)',
                        color: 'var(--accent-orange)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total" style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--primary-gold)',
            marginTop: '1.5rem',
            marginBottom: '1rem',
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(245,179,1,0.05)',
            borderRadius: '8px'
          }}>
            Gesamt: € {total().toFixed(2)}
          </div>
          {/* AdSense pod podsumowaniem zamówienia */}
          <div style={{ margin: '1.5rem 0', display: 'flex', justifyContent: 'center' }}>
            <AdSense slot="8991098342" format="horizontal" />
          </div>
        </>
      )}
      <Link 
        href="/order" 
        className="btn primary" 
        style={{
          display: 'block',
          textAlign: 'center',
          marginTop: '1rem',
          width: '100%'
        }}
      >
        Zur Kasse
      </Link>
    </aside>
  )
}
