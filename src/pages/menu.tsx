// @ts-nocheck
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// Image source: images.pexels.com
// Verified working on 2026-01-04
import menu from '../data/menu'
import MenuList from '../components/MenuList'
import Cart from '../components/Cart'
import OptimizedAdSense from '../components/OptimizedAdSense'
import ADS from '../config/ads'

export default function MenuPage(){
  const categories = Array.from(new Set(menu.map(i => i.category)))
  return (
    <>
      <Head>
        <title>Speisekarte | Mo Kebap Münsingen – Döner, Pide & Pizza</title>
        <meta
          name="description"
          content="Speisekarte für Döner, Kebab, Lahmacun, Pide und Pizza in Münsingen. Jetzt online bestellen."
        />
        <link rel="canonical" href="https://mo-kebap.de/menu" />
        <meta property="og:title" content="Speisekarte – Mo Kebap Münsingen" />
        <meta property="og:description" content="Alle Gerichte und Preise, online bestellen oder abholen." />
        <meta property="og:url" content="https://mo-kebap.de/menu" />
        <meta property="og:image" content="https://mo-kebap.de/images/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Speisekarte | Mo Kebap Münsingen" />
        <meta name="twitter:description" content="Döner, Kebab, Lahmacun, Pide und Pizza – jetzt ansehen." />
        <meta name="twitter:image" content="https://mo-kebap.de/images/logo.jpg" />
      </Head>
      <div className="page-shell">
      <div className="content-section">
        <div className="container">
        <h2 className="section-title">Unsere Speisekarte - Döner, Kebab & Pizza</h2>
        <p className="section-subtitle">Entdecken Sie unsere köstlichen türkischen Spezialitäten und italienische Pizza in Münsingen</p>
        
        <div className="page-grid">
          <div className="menu-col">
            {categories.map((cat, index) => (
              <React.Fragment key={cat}>
                <MenuList category={cat} items={menu} />
                {/* OPTIMIZED: Menu In-Feed Ad - Between menu categories */}
                  {index === 1 && (
                    <div style={{ margin: '2rem 0' }}>
                      <OptimizedAdSense 
                        slot={ADS.slots.menu_infeed_1}
                        format={ADS.formats.menu_infeed}
                        channel={ADS.channels.menu_infeed_1}
                        lazy={true}
                        minHeight={ADS.lazyLoading.minHeightDesktop}
                      />
                    </div>
                  )}
                {/* Additional Menu In-Feed Ad - After 3rd category */}
                  {index === 3 && (
                    <div style={{ margin: '2rem 0' }}>
                      <OptimizedAdSense 
                        slot={ADS.slots.menu_infeed_2}
                        format={ADS.formats.menu_infeed}
                        channel={ADS.channels.menu_infeed_2}
                        lazy={true}
                        minHeight={ADS.lazyLoading.minHeightDesktop}
                      />
                    </div>
                  )}
              </React.Fragment>
            ))}
          </div>
          <aside className="cart-column">
            <Cart />
            {/* Sidebar AdSense - Optional legacy format */}
            <div style={{ marginTop: '2rem' }}>
              <OptimizedAdSense 
                slot={ADS.slots.menu_rect}
                format="rectangle"
                lazy={true}
                minHeight={ADS.lazyLoading.minHeightDesktop}
              />
            </div>
          </aside>
        </div>
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center', color: '#ccc' }}>
        Planen Sie eine Lieferung? Lesen Sie mehr auf unserer{' '}
        <Link href="/lieferung" style={{ color: 'var(--primary-gold)' }}>Lieferseite</Link>{' '}
        und schließen Sie Ihre Bestellung auf der{' '}
        <Link href="/order" style={{ color: 'var(--primary-gold)' }}>Checkout-Seite</Link> ab.
      </div>
      </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}
