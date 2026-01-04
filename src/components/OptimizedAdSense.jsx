import React, { useEffect, useRef, useState } from 'react'

/**
 * Optimized Google AdSense Component with Advanced Features
 * 
 * Features:
 * - Lazy loading with IntersectionObserver (400px rootMargin)
 * - Custom channels for tracking
 * - A/B testing support (layout-key parameter)
 * - Responsive ad formats (fluid, auto, multiplex)
 * - Cookie consent integration
 * - Placeholder with min-height for layout protection
 * 
 * @param {string} slot - AdSense ad slot ID
 * @param {string} format - Ad format ('auto', 'fluid', 'multiplex', 'rectangle', 'horizontal', 'vertical')
 * @param {string} channel - Custom channel for tracking (e.g., 'hero-auto', 'menu-infeed')
 * @param {string} layoutKey - A/B test layout key (e.g., 'control', 'variant')
 * @param {boolean} lazy - Enable lazy loading (default: true)
 * @param {number} minHeight - Placeholder minimum height in pixels (default: 280 desktop, 200 mobile)
 * @param {object} style - Additional inline styles
 * @param {boolean} responsive - Full-width responsive ads (default: true)
 */
export default function OptimizedAdSense({ 
  slot, 
  format = 'auto', 
  channel = '',
  layoutKey = '',
  lazy = true,
  minHeight = null,
  style = {},
  responsive = true
}) {
  const [adLoaded, setAdLoaded] = useState(!lazy);
  const [hasConsent, setHasConsent] = useState(false);
  const adContainerRef = useRef(null);
  const observerRef = useRef(null);

  // Determine min-height based on format and device
  const getMinHeight = () => {
    if (minHeight) return minHeight;
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    switch(format) {
      case 'fluid':
      case 'auto':
        return isMobile ? 200 : 280;
      case 'multiplex':
        return isMobile ? 300 : 400;
      case 'rectangle':
        return 250;
      case 'horizontal':
        return 90;
      default:
        return isMobile ? 200 : 280;
    }
  };

  // A/B test: Randomly assign layout-key if not provided
  const getLayoutKey = () => {
    if (layoutKey) return layoutKey;
    
    try {
      const stored = localStorage.getItem('adsense-layoutkey-test');
      if (stored) return stored;
      
      const random = Math.random() < 0.5 ? 'control' : 'variant';
      localStorage.setItem('adsense-layoutkey-test', random);
      return random;
    } catch (e) {
      return Math.random() < 0.5 ? 'control' : 'variant';
    }
  };

  // Get layout-key variants
  const getLayoutKeyValue = () => {
    const test = getLayoutKey();
    if (test === 'control') {
      return '-gu-18+5g-2f-83';
    } else {
      return '-gu-3+5g-2f-90';
    }
  };

  useEffect(() => {
    // Check for cookie consent
    const checkConsent = () => {
      try {
        const consent = typeof window !== 'undefined' ? localStorage.getItem('cookieConsent') : null;
        const consentAccepted = consent === 'accepted';
        setHasConsent(consentAccepted);
        return consentAccepted;
      } catch (error) {
        console.error('Error checking consent:', error);
        return false;
      }
    };

    if (!checkConsent()) {
      return;
    }

    // Load AdSense script if not already loaded
    const loadAdSenseScript = () => {
      if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
        return Promise.resolve();
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3490607792366389';
        script.crossOrigin = 'anonymous';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Setup lazy loading with IntersectionObserver
    const setupLazyLoading = () => {
      if (!lazy || !adContainerRef.current) return;

      // Create observer with 400px rootMargin for preloading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setAdLoaded(true);
              if (observerRef.current) {
                observerRef.current.unobserve(entry.target);
              }
            }
          });
        },
        {
          rootMargin: '400px 0px',
          threshold: 0
        }
      );

      observerRef.current = observer;
      observer.observe(adContainerRef.current);
    };

    // Initialize ads
    const initializeAd = async () => {
      try {
        if (process.env.NODE_ENV === 'production' && slot && !slot.includes('REPLACE_WITH')) {
          await loadAdSenseScript();
          
          setupLazyLoading();

          // Wait a bit for script to initialize and DOM to be ready
          setTimeout(() => {
            if (adLoaded && adContainerRef.current && window.adsbygoogle) {
              try {
                document.querySelectorAll('.adsbygoogle').forEach((el) => {
                  if (el.getAttribute('data-adsbygoogle-status') !== 'done') {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                  }
                });
              } catch (err) {
                console.error('AdSense push error:', err);
              }
            }
          }, 100);
        }
      } catch (error) {
        console.error('AdSense initialization error:', error);
      }
    };

    initializeAd();

    return () => {
      if (observerRef.current && adContainerRef.current) {
        observerRef.current.unobserve(adContainerRef.current);
      }
    };
  }, [slot, adLoaded, lazy]);

  // Show placeholder in development
  if (process.env.NODE_ENV !== 'production') {
    const height = getMinHeight();
    return (
      <div 
        ref={adContainerRef}
        style={{
          background: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)',
          border: '2px dashed #999',
          padding: '20px',
          textAlign: 'center',
          color: '#333',
          minHeight: `${height}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          ...style
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📢</div>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>AdSense Placeholder</div>
        <div style={{ fontSize: '0.85rem', marginBottom: '5px' }}>Format: {format} | Channel: {channel || 'default'}</div>
        <div style={{ fontSize: '0.75rem', color: '#666' }}>Slot: {slot || 'Not configured'}</div>
      </div>
    );
  }

  // Don't render if user didn't accept cookies
  if (!hasConsent) {
    return null;
  }

  // Don't render if slot is still placeholder
  if (!slot || slot.includes('REPLACE_WITH')) {
    return (
      <div style={{
        background: '#fff3cd',
        border: '1px solid #ffeaa7',
        padding: '10px',
        textAlign: 'center',
        color: '#856404',
        fontSize: '12px',
        ...style
      }}>
        ⚠️ AdSense: Ad slot not configured. Check ads.js config.
      </div>
    );
  }

  const minHeightValue = getMinHeight();
  const adChannelValue = channel || 'default';
  const layoutKeyVariant = getLayoutKey();
  const layoutKeyValue = getLayoutKeyValue();
  const dataAdChannel = layoutKey ? `${adChannelValue}` : `layoutkey-${layoutKeyVariant}`;

  return (
    <div 
      ref={adContainerRef}
      className="adsense-container"
      style={{
        maxHeight: minHeightValue ? `${minHeightValue * 2}px` : 'auto',
        overflow: 'hidden',
        ...style
      }}
    >
      {adLoaded ? (
        <ins
          className="adsbygoogle"
          style={{ 
            display: 'block',
            minHeight: `${minHeightValue}px`
          }}
          data-ad-client="ca-pub-3490607792366389"
          data-ad-slot={slot}
          data-ad-format={format}
          data-ad-layout-key={layoutKeyValue}
          data-full-width-responsive={responsive.toString()}
          data-ad-channel={dataAdChannel}
          data-lazy={lazy.toString()}
        />
      ) : (
        // Placeholder while ad loads
        <div
          style={{
            background: 'linear-gradient(90deg, #f0f0f0 0%, #e8e8e8 50%, #f0f0f0 100%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite',
            minHeight: `${minHeightValue}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: '0.85rem'
          }}
        >
          <style>{`
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>
          Loading...
        </div>
      )}
    </div>
  );
}
