import { Button } from "@/components/ui/button"
import Link from "next/link"

const Cta = () => {
  return (
    <section className="mt-12 bg-tertiary p-24 dark:bg-secondary/40 xl:mt-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="mb-8  max-w-xl text-center text-5xl md:max-w-2xl xl:max-w-4xl">
            Get in touch
          </h2>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta
