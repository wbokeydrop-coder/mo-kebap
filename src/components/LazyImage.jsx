import React, { useState, useEffect } from 'react'

/**
 * LazyImage component with loading placeholder
 * Improves performance by loading images only when they're near viewport
 */
export default function LazyImage({ src, alt, className, style, onError }) {
  const [imageSrc, setImageSrc] = useState(null)
  const [imageRef, setImageRef] = useState()

  useEffect(() => {
    let observer
    
    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setImageSrc(src)
                observer.unobserve(imageRef)
              }
            })
          },
          {
            rootMargin: '50px' // Start loading 50px before image enters viewport
          }
        )
        observer.observe(imageRef)
      } else {
        // Fallback for browsers without IntersectionObserver
        setImageSrc(src)
      }
    }
    
    return () => {
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef)
      }
    }
  }, [src, imageSrc, imageRef])

  return (
    <img
      ref={setImageRef}
      src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"%3E%3Crect fill="%23333" width="800" height="600"/%3E%3C/svg%3E'}
      alt={alt || 'Frisch zubereitetes Gericht von MO KEBAP in Münsingen'}
      className={className}
      style={style}
      loading="lazy"
      onError={onError}
    />
  )
}
