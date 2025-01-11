"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: string
  duration?: number
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Extract numeric value and any suffix (like '+')
  const numericValue = parseInt(value.replace(/\D/g, ""))
  const suffix = value.replace(/[0-9]/g, "").trim()

  useEffect(() => {
    if (isInView) {
      const start = 0
      const end = numericValue
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.floor(duration * 60) // Total frames for the animation
      
      let currentFrame = 0
      let lastTimestamp: number | null = null

      const animate = (timestamp: number) => {
        if (!lastTimestamp) lastTimestamp = timestamp
        const elapsed = timestamp - lastTimestamp
        
        if (elapsed >= frameDuration) {
          currentFrame++
          const progress = currentFrame / totalFrames
          const easedProgress = easeOutExpo(progress)
          const currentValue = Math.floor(end * easedProgress)
          
          setDisplayValue(currentValue)
          lastTimestamp = timestamp
        }

        if (currentFrame < totalFrames) {
          requestAnimationFrame(animate)
        } else {
          setDisplayValue(end)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, numericValue, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-3xl font-bold"
    >
      {displayValue}{suffix}
    </motion.div>
  )
}

// Easing function for smooth animation
function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}