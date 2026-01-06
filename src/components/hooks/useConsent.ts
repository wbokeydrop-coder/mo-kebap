import { useCallback, useEffect, useState } from 'react'

export function useConsent() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const val = localStorage.getItem('cookieConsent')
    setHasConsent(val === 'accepted')

    const onStorage = (event: StorageEvent) => {
      if (event.key === 'cookieConsent') {
        setHasConsent(event.newValue === 'accepted')
      }
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const acceptConsent = useCallback(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem('cookieConsent', 'accepted')
    setHasConsent(true)
  }, [])

  return { hasConsent, acceptConsent }
}
