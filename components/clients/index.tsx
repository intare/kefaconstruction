"use client"

import { motion } from "framer-motion"
import { ClientsHeader } from "./header"
import { ClientsSlider } from "./slider"

export function Clients() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24">
      <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] bg-repeat opacity-5" />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container relative z-10"
      >
        <ClientsHeader />
        <ClientsSlider />
      </motion.div>
    </section>
  )
}