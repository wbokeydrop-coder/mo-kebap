import React, { useEffect, useState } from 'react'

/**
 * Google AdSense Display Ad Component
 * @param {string} slot - AdSense ad slot ID
 * @param {string} format - Ad format (auto, rectangle, horizontal, vertical)
 * @param {boolean} responsive - Whether ad should be responsive
 * @param {string} style - Additional inline styles
 */
export default function AdSense({ 
  slot, 
  format = 'auto', 
  responsive = true,
  style = {}
}) {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
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

    // Initialize ads
    const initializeAd = async () => {
      try {
        if (process.env.NODE_ENV === 'production' && slot && slot !== 'REPLACE_WITH_SLOT_ID_HOME_TOP' && slot !== 'REPLACE_WITH_SLOT_ID_FOOTER' && slot !== 'REPLACE_WITH_SLOT_ID_MENU_TOP' && slot !== 'REPLACE_WITH_SLOT_ID_MENU_RECT') {
          await loadAdSenseScript();
          
          // Wait a bit for script to initialize
          setTimeout(() => {
            if (window.adsbygoogle) {
              let pushed = false;
              document.querySelectorAll('.adsbygoogle').forEach((el) => {
                if (el.getAttribute('data-adsbygoogle-status') !== 'done') {
                  (window.adsbygoogle = window.adsbygoogle || []).push({});
                  pushed = true;
                }
              });
              if (pushed) {
                setAdLoaded(true);
              }
            }
          }, 100);
        }
      } catch (error) {
        console.error('AdSense initialization error:', error);
      }
    };

    initializeAd();
  }, [slot]);

  // Show placeholder in development or when no consent
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div style={{
        background: '#f0f0f0',
        border: '2px dashed #ccc',
        padding: '20px',
        textAlign: 'center',
        color: '#666',
        ...style
      }}>
        AdSense Placeholder ({format}) - Slot: {slot}
      </div>
    );
  }

  // Don't render if slot is still placeholder
  if (!slot || slot.includes('REPLACE_WITH_SLOT_ID')) {
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
        AdSense: Waiting for ad slot configuration
      </div>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client="ca-pub-3490607792366389"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive.toString()}
    />
  );
}
