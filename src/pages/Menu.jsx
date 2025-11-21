import React from 'react'
import menu from '../data/menu.json'
import MenuList from '../components/MenuList'
import Cart from '../components/Cart'
import AdSense from '../components/AdSense'
import ADS from '../config/ads'

export default function MenuPage(){
  const categories = Array.from(new Set(menu.map(i => i.category)))
  return (
    <div className="content-section">
      <div className="container">
        <h2 className="section-title">Unsere Speisekarte - Döner, Kebab & Pizza</h2>
        <p className="section-subtitle">Entdecken Sie unsere köstlichen türkischen Spezialitäten und italienische Pizza in Münsingen</p>
        
        <div className="page-grid">
          <div>
            {categories.map((cat, index) => (
              <React.Fragment key={cat}>
                <MenuList category={cat} items={menu} />
                {/* AdSense between menu categories */}
                {index === 1 && (
                  <div style={{ margin: '2rem 0' }}>
                    <AdSense slot={ADS.slots.menu_top} format="horizontal" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <aside>
            <Cart />
            {/* Sidebar AdSense */}
            <div style={{ marginTop: '2rem' }}>
              <AdSense slot={ADS.slots.menu_rect} format="rectangle" responsive={false} style={{ minHeight: '250px' }} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
