"use client"

import { useState } from "react"
import { ReferenceCard } from "./card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const references = [
  {
    title: "BASKETBALL COURT",
    location: "JUBA (SOUTH SUDAN)",
    image: "/gallery/southsudan/s1.jpg",
    href: "/references/juba-basketball-court",
  },
  {
    title: "SPORTS CANOPY",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/k2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-sports-canopy",
  },
  {
    title: "TENNIS COMPLEX",
    location: "BANGUI (CENTRAL AFRICA)",
    image: "/gallery/centralafrica/c1.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/bangui-tennis-complex",
  },
  {
    title: "INDOOR COURT",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/k9.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-indoor-court",
  },
  {
    title: "SWIMMING POOL",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/swimingpool.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-swimming-pool",
  },
  {
    title: "CLIMBING CENTER",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/s2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-climbing-center",
  },
  {
    title: "AQUATIC CENTER",
    location: "JUBA (SOUTH SUDAN)",
    image: "/gallery/southsudan/s2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/juba-aquatic-center",
  },
  {
    title: "FITNESS CENTER",
    location: "BANGUI (CENTRAL AFRICA)",
    image: "/gallery/centralafrica/c2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/bangui-fitness-center",
  },
  {
    title: "DANCE STUDIO",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/k10.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-dance-studio",
  },
]

const INITIAL_COUNT = 6

export function ReferencesGrid() {
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT)
  const hasMore = displayCount < references.length

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {references.slice(0, displayCount).map((reference) => (
          <ReferenceCard key={reference.href} {...reference} />
        ))}
      </div>
      
      <div className="flex items-center justify-center gap-4">
        {hasMore && (
          <Button
            variant="outline"
            onClick={() => setDisplayCount(references.length)}
            className="min-w-[200px]"
          >
            Show More
          </Button>
        )}
        <Button
          asChild
          className="min-w-[200px] bg-primary"
        >
          <Link href="/references">
            + References
          </Link>
        </Button>
      </div>
    </div>
  )
}
