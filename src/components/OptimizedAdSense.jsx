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
  responsive = true,
  rootMargin = '400px 0px'
}) {
  const [adLoaded, setAdLoaded] = useState(!lazy);
  const adContainerRef = useRef(null);
  const pushedRef = useRef(false);
  const observerRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const pushAttemptsRef = useRef(0);
  const effectiveRootMargin = (slot === '7948160161' || slot === '3767396093') ? '200px 0px' : rootMargin;

  // Determine min-height based on format and device
  const getMinHeight = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (minHeight !== null && minHeight !== undefined) {
      // Honor smaller explicit heights (e.g., anchor), but default mobile to 200px when higher.
      if (isMobile) {
        return minHeight < 200 ? minHeight : 200;
      }
      return minHeight;
    }

    // Default stable heights
    return isMobile ? 200 : 280;
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
    pushedRef.current = false;
    pushAttemptsRef.current = 0;

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

      // Create observer with configurable rootMargin for preloading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setAdLoaded(true);
              setTimeout(pushAdSafely, 50);
              if (observerRef.current) {
                observerRef.current.unobserve(entry.target);
              }
            }
          });
        },
        {
          rootMargin: effectiveRootMargin,
          threshold: 0
        }
      );

      observerRef.current = observer;
      observer.observe(adContainerRef.current);
    };

    // Push only the ins inside this component when size is ready
    const pushAdSafely = () => {
      try {
        const insEl = adContainerRef.current?.querySelector('ins.adsbygoogle');
        if (!insEl || pushedRef.current) return;

        const getWidth = (el) => el?.getBoundingClientRect?.().width || el?.offsetWidth || 0;
        const width = getWidth(insEl);

        if (width <= 0) {
          // Watch for the first non-zero width before pushing adsbygoogle
          if (resizeObserverRef.current) {
            resizeObserverRef.current.disconnect();
          }
          const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
              const targetWidth = entry.contentRect?.width || getWidth(entry.target);
              if (targetWidth > 0 && !pushedRef.current) {
                pushAdSafely();
              }
            }
          });
          resizeObserverRef.current = ro;
          ro.observe(insEl);
          return;
        }

        if (insEl.getAttribute('data-adsbygoogle-status') === 'done') {
          pushedRef.current = true;
          resizeObserverRef.current?.disconnect();
          return;
        }

        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
          resizeObserverRef.current?.disconnect();
        }
      } catch (err) {
        console.error('AdSense push error:', err);
      }
    };

    // Initialize ads
    const initializeAd = async () => {
      try {
        if (process.env.NODE_ENV === 'production' && slot && !slot.includes('REPLACE_WITH')) {
          await loadAdSenseScript();
          
          setupLazyLoading();

          // Wait a bit for script to initialize and DOM to be ready
          setTimeout(() => {
            if (adLoaded) {
              pushAdSafely();
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
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [slot, lazy]);

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
