import React, { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Header(){
  const { items } = useCart()
  const count = items.reduce((s, i) => s + (i.qty || 0), 0)
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          {/* TODO: replace homepage hero/section image with real pizzeria photo */}
          <img 
            src="/images/logohead.png" 
            alt="MO KEBAP Logo" 
            className="logo-img"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
              marginRight: '1rem'
            }}
          />
          <div>
            <div
              className="brand-title"
              role="heading"
              aria-level="2"
              style={{
                margin: 0,
                fontSize: '2rem',
                fontWeight: 800,
                lineHeight: 1.1
              }}
            >
              MO KEBAP
            </div>
            <p className="slogan">Frisch. Herzhaft. Heimat.</p>
          </div>
        </Link>
        <button
          className={`burger ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label="Menü öffnen"
          onClick={() => setOpen(v => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          <Link href="/">Startseite</Link>
          <Link href="/menu">Speisekarte</Link>
          <Link href="/about">Über uns</Link>
          <Link href="/lieferung">Lieferung</Link>
          <Link href="/order">Bestellen</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/order" className="cart-cta" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            minWidth: '70px',
            justifyContent: 'center'
          }}>
            <span style={{fontSize: '1.3rem', lineHeight: '1'}}>🛒</span>
            <span style={{fontWeight: '700', fontSize: '1rem'}}>{count}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
