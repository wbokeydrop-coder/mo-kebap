import React from 'react'
import MenuItem from './MenuItem'

export default function MenuList({ items, category }){
  const list = items.filter(i => i.category === category)
  return (
    <section className="menu-list">
      <h3 style={{color: 'var(--primary-gold)', fontSize: '2rem', marginBottom: '1.5rem', marginTop: '2rem'}}>
        {category}
      </h3>
      <div className="grid">
        {list.map(it => <MenuItem key={it.id} item={it} />)}
      </div>
    </section>
  )
}
