"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { slideshowImages } from "./slideshow-data"

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Only run client-side
  useEffect(() => {
    setMounted(true)
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  // Don't render anything during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="h-full w-full bg-muted/20 rounded-lg animate-pulse"></div>
    )
  }

  // Safety check
  if (!slideshowImages || slideshowImages.length === 0) {
    return <div className="h-full w-full bg-muted rounded-lg"></div>
  }

  const currentImage = slideshowImages[currentIndex]

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden">
      {/* Static image approach for better mobile performance */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={currentImage.url}
          alt={currentImage.alt}
          fill
          className="object-cover transition-opacity duration-500"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={currentIndex === 0}
        />
      </div>

      {/* Gradient overlay - adjusted for better visibility on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30 md:from-background/80 md:via-background/40 md:to-transparent" />
      
      {/* Mobile-optimized indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
