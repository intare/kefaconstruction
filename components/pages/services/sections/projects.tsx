"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = ["ALL", "CONSTRUCTION", "RENOVATION", "OUTDOOR", "INTERIORS", "CONSULTING"]

const projects = [
  {
    image: "/gallery/southsudan/s1.jpg?auto=format&fit=crop&w=1920&q=80",
    category: "CONSTRUCTION",
    title: "Modern Office Building"
  },
  {
    image: "/gallery/southsudan/k1.jpg?auto=format&fit=crop&w=1920&q=80",
    category: "CONSTRUCTION",
    title: "Corporate Headquarters"
  },
  {
    image: "/gallery/southsudan/k2.jpg?auto=format&fit=crop&w=1920&q=80",
    category: "RENOVATION",
    title: "Historic Building Renovation"
  },
  {
    image: "/gallery/southsudan/k3.jpg?auto=format&fit=crop&w=1920&q=80",
    category: "OUTDOOR",
    title: "Urban Park Development"
  },
  {
    image: "/gallery/southsudan/s2.jpg?auto=format&fit=crop&w=1920&q=80",
    category: "INTERIORS",
    title: "Modern Office Interior"
  },
  {
    image: "/gallery/southsudan/swimingk2.jpg?auto=format&fit=crop&w=1920&q=80",
    category: "CONSULTING",
    title: "Project Planning"
  },
  {
    image: "/gallery/southsudan/k17.jpg?auto=format&fit=crop&w=1920&q=80",
    category: "CONSTRUCTION",
    title: "Infrastructure Development"
  },
  {
    image: "/gallery/southsudan/swim-k1.jpg?auto=format&fit=crop&w=1920&q=80",
    category: "OUTDOOR",
    title: "Landscape Design"
  }
]

export function ServicesProjects() {
  const [activeCategory, setActiveCategory] = useState("ALL")

  const filteredProjects = projects.filter(
    project => activeCategory === "ALL" || project.category === activeCategory
  )

  return (
    <section className="relative bg-black py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white">OUR PROJECT</h2>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeCategory === category ? "text-primary" : "text-white/60"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-primary">{project.category}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}