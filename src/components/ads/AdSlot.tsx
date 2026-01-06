import { useEffect, useRef, useState } from 'react'
import { useConsent } from '../hooks/useConsent'
import { useAdsenseLoader } from '../hooks/useAdsenseLoader'

type AdSlotProps = {
  adUnitId: string
  className?: string
  minHeight?: number
  width?: number
  height?: number
  responsive?: boolean
}

export function AdSlot({ adUnitId, className, minHeight = 250, width, height, responsive = true }: AdSlotProps) {
  const { hasConsent } = useConsent()
  const scriptReady = useAdsenseLoader(hasConsent)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    if (!hasConsent || !wrapRef.current) return
    const el = wrapRef.current
    const checkWidth = () => {
      const w = el.getBoundingClientRect().width
      if (w > 16) setCanRender(true)
    }
    checkWidth()
    const ro = new ResizeObserver(checkWidth)
    ro.observe(el)
    return () => ro.disconnect()
  }, [hasConsent])

  useEffect(() => {
    if (!hasConsent || !scriptReady || !canRender) return
    const ins = wrapRef.current?.querySelector('ins.adsbygoogle')
    if (!ins) return
    try {
      // Ensure adsbygoogle is an array before pushing
      const adsArray = ((window as any).adsbygoogle as unknown[]) || []
      adsArray.push({})
      ;(window as any).adsbygoogle = adsArray
    } catch (e) {
      console.warn('AdSense push error', e)
    }
  }, [hasConsent, scriptReady, canRender])

  if (!hasConsent) return null

  const inlineStyles: React.CSSProperties = {
    display: !responsive && width && height ? 'inline-block' : 'block',
    width: width ? `${width}px` : '100%',
    minHeight: height ?? minHeight,
    height: height ? `${height}px` : undefined
  }

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        width: width ? `${width}px` : '100%',
        display: 'flex',
        justifyContent: 'center',
        minHeight: height ?? minHeight,
        height: height ? `${height}px` : undefined,
        position: 'relative',
        margin: '16px 0'
      }}
    >
      <ins
        className="adsbygoogle"
        style={inlineStyles}
        data-ad-client="ca-pub-3490607792366389"
        data-ad-slot={adUnitId}
        data-ad-format="auto"
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  )
}
