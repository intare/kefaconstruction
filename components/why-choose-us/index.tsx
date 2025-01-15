"use client"

import { motion } from "framer-motion"
import { Award, Trophy, ThumbsUp, Users, BarChart, Leaf } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "BEST QUALITY",
    description: "Lorem ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing."
  },
  {
    icon: Trophy,
    title: "INTEGRITY",
    description: "Lorem ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing."
  },
  {
    icon: ThumbsUp,
    title: "STRATEGY",
    description: "Lorem ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing."
  },
  {
    icon: Users,
    title: "SAFETY",
    description: "Lorem ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing."
  },
  {
    icon: BarChart,
    title: "COMMUNITY",
    description: "Lorem ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing."
  },
  {
    icon: Leaf,
    title: "SUSTAINABILITY",
    description: "Lorem ipsum is simply dummy text of the printing and typesg indtrysum has been the ipsum dummy of the printing."
  }
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-white dark:bg-background" />
      <div className="container relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              WHY CHOOSE US
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-2">
              <div className="h-0.5 w-12 bg-primary" />
              <div className="h-2 w-2 rounded-full bg-primary" />
              <div className="h-0.5 w-12 bg-primary" />
            </div>
            <p className="mx-auto mt-6 text-muted-foreground">
            KefaSports Ltd offers a full range of sports facilities construction services from customizing basketball courts, swimming pools, playgrounds and soccer fields to building basketball arenas. We are a highly client-focused company that prioritizes quality and attention to detail to ensure our clients get the best service possible.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border bg-card p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/40 to-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}