import Image from "next/image"

export function AboutVision() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/team.jpg?q=80&w=1920&auto=format&fit=crop"
              alt="Modern sports facility"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Vision
              </h3>
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                Creating Spaces That Inspire Excellence
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
            KefaSports Ltd offers a full range of sports facilities construction services from customizing basketball courts, swimming pools, playgrounds and soccer fields to building basketball arenas. We are a highly client-focused company that prioritizes quality and attention to detail to ensure our clients get the best service possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}