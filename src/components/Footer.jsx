import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import OptimizedAdSense from './OptimizedAdSense'
import ADS from '../config/ads'

export default function Footer(){
  const router = useRouter()
  const path = router && router.pathname ? router.pathname : '/'
  const showFooterAd = path === '/' || path.startsWith('/menu')
  return (
    <footer className="site-footer">
      {/* OPTIMIZED: Footer Auto Ad - High RPM placement at bottom */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto 2rem',
        padding: '0 1rem'
      }}>
        {showFooterAd && (
          <OptimizedAdSense 
            slot={ADS.slots.footer_auto}
            format={ADS.formats.footer_auto}
            channel={ADS.channels.footer_auto}
            lazy={true}
            minHeight={ADS.lazyLoading.minHeightDesktop}
          />
        )}
      </div>
      
      <div className="container">
        <p style={{marginBottom: '0.5rem', fontSize: '0.9rem'}}>
          © {new Date().getFullYear()} MO KEBAP Münsingen — Alle Rechte vorbehalten
        </p>
        <p style={{fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem'}}>
          Öffnungszeiten: Mo–Sa 11:00–22:00, Sonntag: geschlossen | Tel: 01749633343
        </p>
        <p style={{fontSize: '0.85rem', color: '#666'}}>
          <Link href="/privacy" style={{color: '#d4af37', textDecoration: 'none', marginRight: '1rem'}}>
            Datenschutz
          </Link>
          |
          <Link href="/impressum" style={{color: '#d4af37', textDecoration: 'none', marginLeft: '1rem'}}>
            Impressum
          </Link>
        </p>
      </div>
    </footer>
  )
}
