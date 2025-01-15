
import { ServicesHero } from "./sections/hero"
import { ServicesGrid } from "./sections/services-grid"
import { ServicesBrochure } from "./sections/brochure"
import { ServicesExperience } from "./sections/experience"
import { ServicesProjects } from "./sections/projects"

export function ServicesPage() {
  return (
    <main className="relative">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProjects />
    </main>
  )
}