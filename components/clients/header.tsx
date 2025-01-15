"use client"

import { motion } from "framer-motion"

export function ClientsHeader() {
  return (
    <div className="mb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
          Our Trusted Partners
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Working together with leading organizations to deliver excellence in sports infrastructure
        </p>
        <div className="mx-auto mt-6 h-1 w-12 bg-primary" />
      </motion.div>
    </div>
  )
}