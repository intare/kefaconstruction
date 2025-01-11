"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesBrochure() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Brochure</h3>
            <p className="text-white/80">
              Typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/brochure">DOWNLOAD BROCHURE</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Let's help you!</h3>
            <p className="text-white/80">
              There are many variations of passages of lorem available, but the majority have suffered alteration in some form, by inject humour, or randomised words which don't look even believable.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}