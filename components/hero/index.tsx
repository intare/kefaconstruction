import { HeroContent } from "./content"
import { HeroSlideshow } from "./slideshow"

export function Hero() {
  return (
    <section className="container relative h-[calc(100vh-3.5rem)]">
      <div className="grid h-full grid-cols-1 md:grid-cols-[0.8fr,1fr] lg:grid-cols-[0.7fr,1fr]">
        {/* Content section - stacked on mobile, side-by-side on larger screens */}
        <div className="flex items-center justify-center md:justify-start z-10 relative">
          <HeroContent />
        </div>
        
        {/* Slideshow - positioned absolutely on mobile, in grid on larger screens */}
        <div className="absolute inset-0 md:relative md:h-full">
          <HeroSlideshow />
        </div>
      </div>
    </section>
  )
}
