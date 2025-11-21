import React, { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
    // If user already accepted, ensure AdSense script is loaded
    if (consent === 'accepted') {
      try {
        if (!document.querySelector('script[data-adsense]')) {
          const s = document.createElement('script')
          s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3490607792366389'
          s.async = true
          s.setAttribute('crossorigin', 'anonymous')
          s.setAttribute('data-adsense', '1')
          document.head.appendChild(s)
          s.onload = () => {
            try {
              (window.adsbygoogle = window.adsbygoogle || []).push({})
            } catch (e) {
              console.warn('adsbygoogle push failed after load', e)
            }
          }
        }
      } catch (e) {
        console.error('Failed to ensure AdSense script on mount', e)
      }
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    // Dynamically load AdSense script after user accepts cookies
    try {
      if (!document.querySelector('script[data-adsense]')) {
        const s = document.createElement('script')
        s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3490607792366389'
        s.async = true
        s.setAttribute('crossorigin', 'anonymous')
        s.setAttribute('data-adsense', '1')
        document.head.appendChild(s)
        s.onload = () => {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({})
          } catch (e) {
            console.warn('adsbygoogle push failed after load', e)
          }
        }
      }
    } catch (e) {
      console.error('Failed to load AdSense script dynamically', e)
    }
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(0, 0, 0, 0.95)',
      color: 'white',
      padding: '1.5rem',
      zIndex: 10000,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
      borderTop: '3px solid var(--primary-gold, #d4af37)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '1rem',
        justifyContent: 'space-between'
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>🍪 Cookie-Hinweis</h3>
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
            Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
            Dies umfasst funktionale Cookies sowie Cookies von Google AdSense für personalisierte Werbung. 
            Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer{' '}
            <a href="/privacy" style={{ color: '#d4af37', textDecoration: 'underline' }}>Datenschutzerklärung</a> zu.
          </p>
        </div>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={acceptCookies}
            style={{
              padding: '0.75rem 2rem',
              background: '#d4af37',
              color: '#1a1a1a',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#c19e2b'}
            onMouseLeave={(e) => e.target.style.background = '#d4af37'}
          >
            Akzeptieren
          </button>
          <button
            onClick={declineCookies}
            style={{
              padding: '0.75rem 2rem',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white'
              e.target.style.color = '#1a1a1a'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.color = 'white'
            }}
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  )
}
