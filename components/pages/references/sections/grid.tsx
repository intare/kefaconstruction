"use client"

import { useState } from "react"
import { ReferenceCard } from "./reference-card"
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
    href: "/references/kigali-arena",
  },
  {
    title: "TENNIS COMPLEX",
    location: "BANGUI (CENTRAL AFRICA)",
    image: "/gallery/centralafrica/c1.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-arena",
  },
  {
    title: "INDOOR COURT",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/k9.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-arena",
  },
  {
    title: "SWIMMING POOL",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/swimingpool.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-arena",
  },
  {
    title: "CLIMBING CENTER",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/s2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-arena",
  },
  {
    title: "AQUATIC CENTER",
    location: "JUBA (SOUTH SUDAN)",
    image: "/gallery/southsudan/s2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-arena",
  },
  {
    title: "FITNESS CENTER",
    location: "BANGUI (CENTRAL AFRICA)",
    image: "/gallery/centralafrica/c2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-arena",
  },
  {
    title: "DANCE STUDIO",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/k10.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kigali-arena",
  }
]

export function ReferencesGrid() {
  const [displayCount, setDisplayCount] = useState(6)
  const hasMore = displayCount < references.length

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.slice(0, displayCount).map((reference) => (
            <ReferenceCard key={reference.href} {...reference} />
          ))}
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-4">
          {hasMore && (
            <Button
              variant="outline"
              onClick={() => setDisplayCount(references.length)}
              className="min-w-[200px]"
            >
              LOAD MORE
            </Button>
          )}
          <Button
            asChild
            className="min-w-[200px] bg-primary"
          >
            <Link href="/references">
              + REFERENCES
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}