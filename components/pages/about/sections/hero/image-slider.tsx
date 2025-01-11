"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction team reviewing plans"
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction site aerial view"
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction workers on site"
  },
  {
    src: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction project progress"
  }
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [isHovered])

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80 text-gray-800 shadow-sm backdrop-blur-sm hover:bg-white"
        onClick={showPrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80 text-gray-800 shadow-sm backdrop-blur-sm hover:bg-white"
        onClick={showNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`aspect-square overflow-hidden rounded-lg transition-opacity ${
              index === currentIndex ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}