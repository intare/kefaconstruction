"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigationLinks } from "@/config/navigation"
import { SheetHeader, SheetTitle } from "@/components/ui/sheet"

interface MobileNavContentProps {
  onNavItemClick?: () => void
}

export function MobileNavContent({ onNavItemClick }: MobileNavContentProps) {
  const pathname = usePathname()

  return (
    <>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <nav className="mt-8" aria-label="Mobile navigation">
        <ul className="space-y-4" role="list">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavItemClick}
                className={cn(
                  "block py-2 text-base font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}