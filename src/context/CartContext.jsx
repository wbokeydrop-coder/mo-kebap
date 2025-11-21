import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export function useCart(){
  return useContext(CartContext)
}

export function CartProvider({ children }){
  const [items, setItems] = useState([])

  function addToCart(item, qty = 1){
    setItems(prev => {
      const found = prev.find(i => i.id === item.id)
      if(found){
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i)
      }
      return [...prev, { ...item, qty }]
    })
  }

  function removeFromCart(id){
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function updateQty(id, qty){
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  function clearCart(){
    setItems([])
  }

  function total(){
    return items.reduce((sum, it) => sum + it.price * (it.qty || 1), 0)
  }

  const value = { items, addToCart, removeFromCart, updateQty, clearCart, total }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
