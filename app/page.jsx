import About from "@/components/shared/about/About"
import Cta from "@/components/shared/cta/Cta"
import Hero from "@/components/shared/hero/Hero"
import Services from "@/components/shared/services/Services"
import Work from "@/components/shared/projects/Work"

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <About />
      <Services />
      <Work />
      <Cta />
    </main>
  )
}
