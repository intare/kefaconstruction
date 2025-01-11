"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Wrench, HardHat, Home, Users, Ruler, Zap, PaintBucket } from "lucide-react";const services = [
  {
    icon: Building2,
    title: "ROOMS & HALLS",
    description: "Lorem ipsum is simply dummy text of the printing and setting as Planning your ambitions."
  },
  {
    icon: Wrench,
    title: "RENOVATION",
    description: "Lorem ipsum is simply dummy text of the printing and setting as Planning your ambitions."
  },
  {
    icon: HardHat,
    title: "CONSTRUCTION",
    description: "Lorem ipsum is simply dummy text of the printing and setting as Planning your ambitions."
  },
  {
    icon: Home,
    title: "INTERIOR",
    description: "Lorem ipsum is simply dummy text of the printing and setting as Planning your ambitions."
  },
  {
    icon: Users,
    title: "PROFESSIONAL OPINION",
    description: "Lorem ipsum is simply dummy text of the printing and setting as Planning your ambitions."
  },
  {
    icon: Ruler,
    title: "ACCURATE ENGINEERING",
    description: "Lorem ipsum is simply dummy text of the printing and setting as Planning your ambitions."
  },
  {
    icon: Wrench,
    title: "GENERAL BUILDER",
    description: "Lorem ipsum is simply dummy text of the printing and setting as Planning your ambitions."
  },
  {
    icon: Zap,
    title: "ELECTRICITY",
    description: "Lorem ipsum is simply dummy text of the printing and setting as Planning your ambitions."
  },
  {
    icon: PaintBucket,
    title: "REFURBISHMENT",
    description: "Lorem ipsum is simply dummy text of the printing and setting as Planning your ambitions."
  }
]

export function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-4 text-lg font-bold">{service.title}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{service.description}</p>
              <Link 
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}