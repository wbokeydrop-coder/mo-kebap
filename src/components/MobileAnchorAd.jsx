import React, { useEffect, useState } from 'react'
import OptimizedAdSense from './OptimizedAdSense'
import ADS from '../config/ads'

/**
 * Mobile Anchor Ad Component
 * Sticky ad that appears only on mobile devices (max-width: 767px)
 * Displays at the bottom of the viewport
 */
export default function MobileAnchorAd() {
  const [showOnMobile, setShowOnMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check if screen is mobile size
    const checkMobile = () => {
      const isMobileSize = window.innerWidth <= 767
      setShowOnMobile(isMobileSize)
    }

    checkMobile()

    // Listen for window resize
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Don't render on server or initially to prevent hydration mismatch
  if (!isMounted || !showOnMobile) {
    return null
  }

  return (
    <div
      className="mobile-anchor-ad"
      style={{
        // Only show on mobile devices
        display: showOnMobile ? 'block' : 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'var(--darker-bg, #1a1a1a)',
        borderTop: '1px solid rgba(245, 179, 1, 0.2)',
        padding: '8px 0',
        maxHeight: '90px',
        overflow: 'hidden',
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.3)',
        // Add bottom margin to content to prevent overlap
        paddingBottom: '100px'
      }}
    >
      <style>{`
        /* Mobile Anchor Ad Styles */
        @media (max-width: 767px) {
          .mobile-anchor-ad {
            display: block !important;
          }
          
          .mobile-anchor-ad .adsense-container {
            margin: 0 !important;
            padding: 4px 0 !important;
          }
          
          /* Adjust body padding to prevent content overlap */
          body {
            padding-bottom: 100px;
          }
        }
        
        @media (min-width: 768px) {
          .mobile-anchor-ad {
            display: none !important;
          }
        }
      `}</style>

      <OptimizedAdSense
        slot={ADS.slots.anchor_mobile}
        format={ADS.formats.anchor_mobile}
        channel={ADS.channels.anchor_mobile}
        lazy={true}
        minHeight={80}
        style={{
          margin: '0 8px'
        }}
      />
    </div>
  )
}
