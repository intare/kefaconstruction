"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const clients = [
  {
    name: "Giants of Africa",
    logo: "/clients/giants.jpg",
  },
  {
    name: "Bal Africa",
    logo: "/clients/bal.jpg",
  },
  {
    name: "Imbuto Foundation",
    logo: "/clients/imbuto.jpg",
  },
  {
    name: "Kepler",
    logo: "/clients/kepler.jpg",
  },
  {
    name: "Stecol",
    logo: "/clients/stecol.jpg",
  },
  {
    name: "Metito",
    logo: "/clients/metito.jpg",
  },
  {
    name: "Ministry of Sports Rwanda",
    logo: "/clients/min-sports.jpg",
  },
  {
    name: "Rwanda Defence Force",
    logo: "/clients/rdf.jpg",
  },
  {
    name: "Rwanda Olympic Committee",
    logo: "/clients/rp.jpg",
  },
  {
    name: "Rwanda Football Federation",
    logo: "/clients/ferwaba.jpg",
  }
]

const VISIBLE_SLIDES = 5

export function ClientsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1))
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(showNext, 4000)
      return () => clearInterval(timer)
    }
  }, [isHovered])

  // Create a circular array for infinite scrolling
  const visibleClients = [...clients, ...clients].slice(
    currentIndex,
    currentIndex + VISIBLE_SLIDES
  )

  return (
    <div 
      className="relative mx-auto max-w-6xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden px-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {visibleClients.map((client, index) => (
              <motion.div
                key={`${index}-${currentIndex}`}
                className="w-1/5 flex-shrink-0 px-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <div className="group relative aspect-square overflow-hidden rounded-full bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    {client.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-4 top-1/3 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 shadow-sm backdrop-blur-sm hover:bg-background"
        onClick={showPrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-1/3 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 shadow-sm backdrop-blur-sm hover:bg-background"
        onClick={showNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}