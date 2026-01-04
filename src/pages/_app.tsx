// @ts-nocheck
import type { AppProps } from 'next/app'
import '../assets/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileAnchorAd from '../components/MobileAnchorAd'
import CookieConsent from '../components/CookieConsent'
import FloatingCartFab from '../components/FloatingCartFab'
import { CartProvider } from '../context/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <main className="site-main">
        <Component {...pageProps} />
      </main>
      <FloatingCartFab />
      <MobileAnchorAd />
      <Footer />
      <CookieConsent />
    </CartProvider>
  )
}

export default MyApp
