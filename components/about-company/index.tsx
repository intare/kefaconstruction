"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Building2, Users, Factory, PaintBucket } from "lucide-react"

const images = [
  {
    src: "/team.jpg?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction Team"
  },
  {
    src: "/team1.png?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction site"
  },
  {
    src: "/team2.png?auto=format&fit=crop&w=1920&q=80",
    alt: "Construction workers"
  }
]

const stats = [
  {
    icon: Building2,
    value: "2500",
    label: "Projects Done"
  },
  {
    icon: Users,
    value: "1500",
    label: "Happy Client"
  },
  {
    icon: Factory,
    value: "840",
    label: "Industries Served"
  },
  {
    icon: PaintBucket,
    value: "180",
    label: "Renovate"
  }
]

export function AboutCompany() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-24">
      <div className="container">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center">
            <h2 className="inline-flex items-center gap-4 text-3xl font-bold">
              <span className="text-primary">ABOUT</span>
              <span>Kefa Construction</span>
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-12 bg-primary" />
              <div className="h-2 w-2 rounded-full bg-primary" />
              <div className="h-0.5 w-12 bg-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black/10"
            >
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === currentImage ? "bg-primary" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <div className="space-y-6 rounded-lg bg-primary p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold">
                Kefa Construction Ltd : Committed to superior quality and results.
                </h3>
                <p className="text-primary-foreground/90">
                Established in 2016, Kefa Construction Ltd has built a reputation of reliability, quality,innovation and environmentally conscious sporting goods, construction and design. We offer an array of services tailored to our clients need. Provided bespoke designs, giving each client a unique product.
                </p>
                <Button 
                  variant="outline" 
                  className="border-2 border-primary-foreground bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  READ MORE
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid gap-8 border-t border-muted pt-16 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}