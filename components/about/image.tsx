import Image from "next/image"

export function AboutImage() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
      <Image
        src="https://images.unsplash.com/photo-1571053748382-141b7de59b88?q=80&w=1920&auto=format&fit=crop"
        alt="Modern sports facility"
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
    </div>
  )
}