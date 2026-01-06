// @ts-nocheck
import type { AppProps } from 'next/app'
import '../assets/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileAnchorAd from '../components/MobileAnchorAd'
import CookieConsent from '../components/CookieConsent'
import FloatingCartFab from '../components/FloatingCartFab'
import { CartProvider } from '../context/CartContext'
import { useConsent } from '../components/hooks/useConsent'
import { useAdsenseLoader } from '../components/hooks/useAdsenseLoader'
import { ConsentBar } from '../components/consent/ConsentBar'
import { HomeTopAd } from '../components/ads/HomeTopAd'

function MyApp({ Component, pageProps }: AppProps) {
  const { hasConsent, acceptConsent } = useConsent()
  useAdsenseLoader(hasConsent)

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
      <CookieConsent />
      <ConsentBar hasConsent={hasConsent} onAccept={acceptConsent} />
    </CartProvider>
  )
}

export default MyApp
