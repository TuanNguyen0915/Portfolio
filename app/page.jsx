import About from "@/components/shared/about/About"
import Hero from "@/components/shared/hero/Hero"

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <About />
    </main>
  )
}
