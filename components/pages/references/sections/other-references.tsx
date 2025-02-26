"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"

const otherReferences = [
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
    href: "/references/swimming-pool-kigali",
  },
  {
    title: "KEPLA BASKETBALL COURT",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/s2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/kepla-basketball-court-kigali",
  },
  {
    title: "JUBA BASKETBALL COURT",
    location: "JUBA (SOUTH SUDAN)",
    image: "/gallery/southsudan/s2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/juba-basketball-court-juba",
  },
  {
    title: "FITNESS CENTER",
    location: "BANGUI (CENTRAL AFRICA)",
    image: "/gallery/centralafrica/c2.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/fitness-center-bangui",
  },
  {
    title: "BASKETBALL COURT",
    location: "KIGALI (RWANDA)",
    image: "/gallery/kigali/k10.jpg?auto=format&fit=crop&w=1920&q=80",
    href: "/references/basketball-court-kigali",
  }
]

export function OtherReferences() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-2xl font-bold">OUR OTHER REFERENCES</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherReferences.map((reference) => (
            <Link
              key={reference.href}
              href={reference.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={reference.image}
                alt={`${reference.title} - ${reference.location}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
              
              {/* Plus icon - bottom right */}
              <div className="absolute bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Plus className="h-6 w-6 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
