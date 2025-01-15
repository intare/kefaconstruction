import { Hero } from "@/components/hero"
import { AboutCompany } from "@/components/about-company"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Clients } from "@/components/clients"
import { References } from "@/components/references"
import { Cta } from "@/components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <WhyChooseUs />
      <Clients />
      <References />
      <Cta />
    </>
  )
}