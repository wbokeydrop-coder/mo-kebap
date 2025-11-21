import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import MenuPage from './pages/Menu'
import OrderPage from './pages/Order'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import About from './pages/About'
import Lieferung from './pages/Lieferung'
import { CartProvider } from './context/CartContext'

export default function App(){
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/lieferung" element={<Lieferung />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </BrowserRouter>
    </CartProvider>
  )
}
