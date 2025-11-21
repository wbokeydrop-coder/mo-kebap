import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header(){
  const { items } = useCart()
  const count = items.reduce((s, i) => s + (i.qty || 0), 0)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <img 
            src="/images/logo.png" 
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
            <h1>MO KEBAP</h1>
            <p className="slogan">Frisch. Herzhaft. Heimat.</p>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/">Startseite</Link>
          <Link to="/menu">Speisekarte</Link>
          <Link to="/about">Über uns</Link>
          <Link to="/lieferung">Lieferung</Link>
          <Link to="/order">Bestellen</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/order" className="cart-cta" style={{
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
