"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

export const MobileNavTrigger = forwardRef<
  HTMLButtonElement, 
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, ...props }, ref) => {
  return (
    <Button 
      ref={ref}
      variant="ghost" 
      size="icon" 
      className="lg:hidden"
      aria-label="Open menu"
      {...props}
    >
      <Menu className="h-6 w-6" />
    </Button>
  )
})

MobileNavTrigger.displayName = "MobileNavTrigger"
