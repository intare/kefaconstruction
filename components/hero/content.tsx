import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroContent() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 px-4 md:px-0">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Experience
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Kefa Construction
          </span>
          <br />
          Like Never Before
        </h1>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-4">
        <Button asChild size="default" className="px-4 md:px-8 md:h-12 md:text-base text-sm" variant="default">
          <Link href="/">
            Get Started
            <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
          </Link>
        </Button>
        {/* 
        <Button asChild size="lg" variant="outline" className="h-12 px-8">
          <Link href="/matches">Live Matches</Link>
        </Button>
        */}
      </div>
    </div>
  )
}
