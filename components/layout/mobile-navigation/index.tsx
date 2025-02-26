"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNavTrigger } from "@/components/layout/mobile-navigation/mobile-nav-trigger"
import { MobileNavContent } from "@/components/layout/mobile-navigation/mobile-nav-content"

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MobileNavTrigger />
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[300px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <MobileNavContent onNavItemClick={() => setOpen(false)} />
      </SheetContent>
    </Sheet>
  )
}
