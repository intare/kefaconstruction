"use client"

import { Logo } from "./logo"
import { NavLinks } from "./nav-links"
import { SocialLinks } from "./social-links"
import { MobileNavigation } from "@/components/layout/mobile-navigation"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-b from-background/95 via-background/90 to-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Logo />
          <div className="hidden items-center gap-4 md:gap-8 lg:flex">
            <NavLinks />
            <div className="flex items-center gap-2 sm:gap-4">
              <SocialLinks />
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  )
}
