import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdSense from './AdSense'
import ADS from '../config/ads'

export default function Footer(){
  const location = useLocation()
  const path = location && location.pathname ? location.pathname : '/'
  const showFooterAd = path === '/' || path.startsWith('/menu')
  return (
    <footer className="site-footer">
      {/* AdSense Banner - Footer */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 2rem',
        padding: '0 1rem'
      }}>
        {showFooterAd && <AdSense slot={ADS.slots.footer} format="horizontal" />}
      </div>
      
      <div className="container">
        <p style={{marginBottom: '0.5rem', fontSize: '0.9rem'}}>
          © {new Date().getFullYear()} MO KEBAP Münsingen — Alle Rechte vorbehalten
        </p>
        <p style={{fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem'}}>
          Öffnungszeiten: Mo–So 11:00–21:00 | Tel: 01749633343
        </p>
        <p style={{fontSize: '0.85rem', color: '#666'}}>
          <Link to="/privacy" style={{color: '#d4af37', textDecoration: 'none', marginRight: '1rem'}}>
            Datenschutz
          </Link>
          |
          <Link to="/contact" style={{color: '#d4af37', textDecoration: 'none', marginLeft: '1rem'}}>
            Impressum
          </Link>
        </p>
      </div>
    </footer>
  )
}
