import { useEffect, useState } from 'react'

export function useAdsenseLoader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') return

    const existing = document.querySelector(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
    ) as HTMLScriptElement | null

    if (existing) {
      setLoaded(true)
      return
    }

    const s = document.createElement('script')
    s.async = true
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3490607792366389'
    s.crossOrigin = 'anonymous'
    s.onload = () => setLoaded(true)
    s.onerror = () => setLoaded(false)
    document.head.appendChild(s)
  }, [])

  return loaded
}
