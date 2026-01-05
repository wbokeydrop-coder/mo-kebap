import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import LazyImage from './LazyImage'

export default function MenuItem({ item }){
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(null)
  const [imageError, setImageError] = useState(false)

  const makeImage = (query, sig) => `https://source.unsplash.com/featured/900x600/?${encodeURIComponent(query)}&sig=${sig}`

  // Dish-specific remote images mapped by exact name
  const nameImageMap = {
    'Margherita': makeImage('margherita pizza', 1),
    'Salami': makeImage('salami pizza', 2),
    'Prosciutto': makeImage('prosciutto pizza', 3),
    'Funghi': makeImage('mushroom pizza', 4),
    'Tonno': makeImage('tuna pizza', 5),
    'Sucuk': makeImage('sucuk pizza', 6),
    'Hawaii': makeImage('hawaiian pizza', 7),
    'Vegetariana': makeImage('vegetarian pizza', 8),
    'Quattro Stagioni': makeImage('quattro stagioni pizza', 9),
    'Quattro Formaggi': makeImage('quattro formaggi pizza', 10),
    'Speciale': makeImage('special pizza salami schinken', 11),
    'Diavola': makeImage('diavola spicy salami pizza', 12),
    'Capricciosa': makeImage('capricciosa pizza', 13),
    'Calzone': makeImage('calzone pizza', 14),
    'Bolognese': makeImage('bolognese pizza', 15),
    'Carbonara': makeImage('carbonara pizza', 16),
    'Marinara': makeImage('marinara pizza', 17),
    'Döner Pizza': makeImage('doner kebab pizza', 18),
    'Prosciutto e Funghi': makeImage('prosciutto funghi pizza', 19),
    'Spinaci': makeImage('spinach pizza', 20),
    'Rucola': makeImage('rucola prosciutto pizza', 21),
    'Napoli': makeImage('napoli anchovy pizza', 22),
    'Romana': makeImage('romana pizza', 23),
    'Mexicana': makeImage('mexican pizza jalapeno', 24),
    'BBQ Chicken': makeImage('bbq chicken pizza', 25),
    'Lord Special': makeImage('loaded meat pizza', 26),
    'Mista': makeImage('mixed topping pizza', 27),
    'Party Pizza': makeImage('party sheet pizza', 28),
    'Pizzatasche Sucuk': makeImage('pizzatasche sucuk', 29),
    'Pizzatasche Salami': makeImage('pizzatasche salami', 30),
    'Pizzatasche Schinken': makeImage('pizzatasche ham', 31),
    'Pizzatasche Thunfisch': makeImage('pizzatasche tuna', 32),
    'Pizzatasche Döner': makeImage('pizzatasche doner kebab', 33),
    'Pizzatasche Vegetarisch': makeImage('pizzatasche vegetarian', 34),
    'Pizzatasche Hackfleisch': makeImage('pizzatasche minced meat', 35),
    'Pizzatasche Spinat': makeImage('pizzatasche spinach', 36),
    'Pide Sucuk': makeImage('pide sucuk', 37),
    'Pide Käse': makeImage('pide cheese', 38),
    'Pide Hackfleisch': makeImage('pide minced meat', 39),
    'Pide Spinat': makeImage('pide spinach', 40),
    'Pide Gemischt': makeImage('pide mixed toppings', 41),
    'Pide Ei': makeImage('pide egg', 42),
    'Pide Thunfisch': makeImage('pide tuna', 43),
    'Pide Salami': makeImage('pide salami', 44),
    'Pide Schinken': makeImage('pide ham', 45),
    'Pide Champignons': makeImage('pide mushroom', 46),
    'Pide Vegetarisch': makeImage('pide vegetarian', 47),
    'Lahmacun': makeImage('lahmacun', 48),
    'Lahmacun mit Salat': makeImage('lahmacun salad', 49),
    'Lahmacun mit Döner': makeImage('lahmacun doner kebab', 50),
    'Yufka Döner': makeImage('durum doner', 51),
    'Yufka Vegetarisch': makeImage('vegetarian durum wrap', 52),
    'Yufka Falafel': makeImage('falafel wrap', 53),
    'Döner Tasche': makeImage('doner tasche sandwich', 54),
    'Döner Teller': makeImage('doner teller plate', 55),
    'Döner Box': makeImage('doner box fries', 56),
    'Kebap im Fladenbrot': makeImage('kebab sandwich fladenbrot', 57),
    'Dürüm Döner': makeImage('durum kebab roll', 58),
    'Köfte im Brot': makeImage('kofte sandwich', 59),
    'Adana Kebap': makeImage('adana kebab plate', 60),
    'Iskender Kebap': makeImage('iskender kebab', 61),
    'Falafel Tasche': makeImage('falafel sandwich', 62),
    'Falafel Teller': makeImage('falafel plate', 63),
    'Falafel Box': makeImage('falafel box fries', 64),
    'Pommes klein': makeImage('french fries small', 65),
    'Pommes groß': makeImage('french fries large', 66),
    'Hähnchen Teller': makeImage('grilled chicken plate', 67),
    'Lamm Teller': makeImage('lamb plate', 68),
    'Mix Grill Teller': makeImage('mixed grill plate', 69),
    'Köfte Teller': makeImage('kofte plate', 70),
    'Manakisch Käse': makeImage('manakish cheese', 71),
    'Manakisch Zaatar': makeImage('manakish zaatar', 72),
    'Manakisch Sucuk': makeImage('manakish sucuk', 73),
    'Manakisch Hackfleisch': makeImage('manakish minced meat', 74),
    'Manakisch Spinat': makeImage('manakish spinach', 75),
    'Manakisch Ei': makeImage('manakish egg', 76),
    'Manakisch Thunfisch': makeImage('manakish tuna', 77),
    'Manakisch Gemischt': makeImage('manakish mixed toppings', 78),
    'Chicken Wings': makeImage('chicken wings', 79),
    'Chicken Nuggets': makeImage('chicken nuggets', 80),
    'Cheeseburger': makeImage('cheeseburger', 81),
    'Döner Burger': makeImage('doner burger', 82),
    'Crispy Chicken Burger': makeImage('crispy chicken burger', 83),
    'Crispy Chicken Box': makeImage('crispy chicken box fries', 84),
    'Crispy Chicken Wings': makeImage('crispy chicken wings', 85),
    'Gemischter Salat': makeImage('mixed salad bowl', 86),
    'Döner Salat': makeImage('doner salad', 87),
    'Cola': makeImage('cola glass bottle', 88),
    'Fanta': makeImage('fanta orange soda', 89),
    'Sprite': makeImage('sprite soda', 90),
    'Wasser': makeImage('bottle of water', 91),
    'Ayran': makeImage('ayran drink', 92),
    'Eistee': makeImage('iced tea glass', 93)
  }

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

  const displayImage = nameImageMap[item.name] || categoryImageMap[item.category] || item.image || '/menu/doner.jpg'
  
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