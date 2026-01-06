// @ts-nocheck
import type { AppProps } from 'next/app'
import '../assets/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileAnchorAd from '../components/MobileAnchorAd'
import FloatingCartFab from '../components/FloatingCartFab'
import { CartProvider } from '../context/CartContext'
import { useAdsenseLoader } from '../components/hooks/useAdsenseLoader'
import { HomeTopAd } from '../components/ads/HomeTopAd'

function MyApp({ Component, pageProps }: AppProps) {
  useAdsenseLoader()

  return (
    <CartProvider>
      <Header />
      <HomeTopAd />
      <main className="site-main">
        <Component {...pageProps} />
      </main>
      <FloatingCartFab />
      <MobileAnchorAd />
      <Footer />
    </CartProvider>
  )
}

export default MyApp
