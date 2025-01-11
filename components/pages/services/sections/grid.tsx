import Image from "next/image"

const services = [
  {
    title: "Sports Facility Design",
    description: "Custom design solutions for sports facilities that meet international standards and local requirements.",
    image: "/services/design.jpg"
  },
  {
    title: "Construction Management",
    description: "End-to-end project management ensuring timely delivery and quality construction of sports facilities.",
    image: "/services/construction.jpg"
  },
  {
    title: "Facility Maintenance",
    description: "Comprehensive maintenance services to ensure longevity and optimal performance of sports facilities.",
    image: "/services/maintenance.jpg"
  },
  // Add more services as needed
]

export function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group rounded-lg border bg-card p-6 shadow-sm transition-colors hover:border-primary"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 