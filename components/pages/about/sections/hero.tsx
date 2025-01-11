"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { AnimatedCounter } from "./stats/animated-counter"
import { ImageSlider } from "./hero/image-slider"

const stats = [
  {
    value: "13691+",
    label: "PROJECT COMPLETED",
    delay: 0.1
  },
  {
    value: "1725+",
    label: "SATISFIED CLIENTS",
    delay: 0.2
  },
  {
    value: "984+",
    label: "WORKERS EMPLOYED",
    delay: 0.3
  }
]

export function AboutHero() {
  return (
    <section className="relative bg-muted/30 py-16">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-12 flex items-center gap-2 text-sm">
          <Link 
            href="/" 
            className="text-primary hover:text-primary/80"
          >
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">About Us 2</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                OUR HISTORY & FACTS
              </h1>
              <div className="mt-4 h-1 w-12 bg-primary" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground"
            >
              Established in 2016, Kefa Sport Ltd has built a reputation of reliability, quality,innovation and environmentally conscious sporting goods, construction and design. We offer an array of services tailored to our clients need. Provided bespoke designs, giving each client a unique product.
            </motion.p>

            {/* Stats */}
            <div className="grid gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  className="text-center"
                >
                  <div className="text-primary">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ImageSlider />
          </motion.div>
        </div>
      </div>
    </section>
  )
}