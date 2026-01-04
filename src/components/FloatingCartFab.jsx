import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCart } from '../context/CartContext'

export default function FloatingCartFab(){
  const { items, total } = useCart()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  // Pokazuj tylko na stronie menu (Speisekarte)
  if (router.pathname !== '/menu') return null

  const count = items.reduce((s, i) => s + (i.qty || 0), 0)
  if (count === 0) return null

  return (
    <>
      <button
        className={`cart-fab${open ? ' cart-fab--open' : ''}`}
        aria-label={`Warenkorb (${count}) anzeigen`}
        onClick={() => setOpen(v => !v)}
      >
        <div className="cart-fab__icon" aria-hidden="true">🛒</div>
        <span className="cart-fab__badge">{count}</span>
      </button>
      {open && (
        <div className="cart-fab__modal" onClick={() => setOpen(false)}>
          <div className="cart-fab__modal-content" onClick={e => e.stopPropagation()}>
            <div className="cart-fab__modal-header">
              <span style={{fontWeight:700, fontSize:'1.1rem'}}>Warenkorb</span>
              <button className="cart-fab__close" onClick={() => setOpen(false)} aria-label="Schließen">✕</button>
            </div>
            <div className="cart-fab__modal-body">
              {items.length === 0 ? (
                <div style={{color:'#aaa', textAlign:'center', padding:'2rem 0'}}>Ihr Warenkorb ist leer.</div>
              ) : (
                <ul style={{listStyle:'none', padding:0, margin:0}}>
                  {items.map(it => (
                    <li key={it.id} style={{marginBottom:'1rem', borderBottom:'1px solid #eee', paddingBottom:'0.5rem'}}>
                      <div style={{fontWeight:600}}>{it.name} <span style={{color:'#f5b301'}}>x{it.qty}</span></div>
                      <div style={{fontSize:'0.95rem', color:'#333'}}>€ {it.price.toFixed(2)}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="cart-fab__modal-footer">
              <div style={{fontWeight:700, color:'#f5b301', fontSize:'1.1rem'}}>Gesamt: € {total().toFixed(2)}</div>
              <Link to="/order" className="btn primary" style={{marginTop:'1rem', width:'100%', textAlign:'center'}} onClick={()=>setOpen(false)}>
                Zur Kasse
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
