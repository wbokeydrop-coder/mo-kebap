import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import LazyImage from './LazyImage'

export default function MenuItem({ item }){
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(null)
  const [imageError, setImageError] = useState(false)

  // Prefer local category-based photos to avoid remote placeholders
  const categoryImageMap = {
    'Pizza': '/menu/pizza.jpg',
    'Pizzataschen': '/menu/pizza.jpg',
    'Pide': '/menu/pizza.jpg',
    'Lahmacun': '/menu/lahmacun.jpg',
    'Yufka': '/menu/doner.jpg',
    'Kebap Snacks': '/menu/doner.jpg',
    'Burger': '/menu/doner.jpg',
    'Crispy Chicken': '/menu/doner.jpg',
    'Salate': '/menu/salat.jpg',
    'Vegetarisches': '/menu/salat.jpg',
    'Tellergerichte': '/menu/doner.jpg',
    'Frühstück': '/menu/doner.jpg',
    'Grillgerichte': '/menu/doner.jpg',
    'Getränke': '/images/logo.jpg'
  }
  const displayImage = categoryImageMap[item.category] || item.image || '/menu/doner.jpg'
  
  // Jeśli produkt ma rozmiary (pizza), pokaż wybór rozmiaru
  const hasSizes = item.sizes && Object.keys(item.sizes).length > 0
  
  // Ustaw domyślny rozmiar dla pizzy
  React.useEffect(() => {
    if (hasSizes && !selectedSize) {
      setSelectedSize(Object.keys(item.sizes)[0])
    }
  }, [hasSizes, selectedSize, item.sizes])
  
  // Oblicz cenę na podstawie wybranego rozmiaru
  const currentPrice = hasSizes && selectedSize 
    ? item.sizes[selectedSize] 
    : item.price
  
  const handleAddToCart = () => {
    const itemToAdd = {
      ...item,
      price: currentPrice,
      selectedSize: hasSizes ? selectedSize : null
    }
    addToCart(itemToAdd, 1)
  }
  
  return (
    <article className="menu-item">
      {imageError ? (
        <div style={{
          width: '100%',
          height: '250px',
          background: 'linear-gradient(135deg, var(--darker-bg) 0%, var(--dark-bg) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '15px 15px 0 0'
        }}>
          <span style={{fontSize: '4rem', opacity: 0.3}}>🍕</span>
        </div>
      ) : (
        <LazyImage
          src={displayImage}
          alt={`${item.name} – ${item.category || 'Gericht'} bei MO KEBAP in Münsingen`}
          onError={() => setImageError(true)}
        />
      )}
      <div className="menu-info">
        <h3>{item.name}</h3>
        <p className="desc">{item.description}</p>
        
        {hasSizes && (
          <div style={{margin: '1rem 0'}}>
            <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)'}}>
              Größe wählen:
            </label>
            <select 
              value={selectedSize || ''} 
              onChange={(e) => setSelectedSize(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(245,179,1,0.3)',
                background: 'var(--dark-bg)',
                color: 'var(--text-light)',
                fontSize: '0.95rem'
              }}
            >
              {Object.entries(item.sizes).map(([size, price]) => (
                <option key={size} value={size}>
                  {size} - € {price.toFixed(2)}
                </option>
              ))}
            </select>
          </div>
        )}
        
        <div className="meta">
          <span className="price">€ {currentPrice.toFixed(2)}</span>
          <button 
            className="btn primary" 
            onClick={handleAddToCart}
            style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}
          >
            Hinzufügen
          </button>
        </div>
      </div>
    </article>
  )
}