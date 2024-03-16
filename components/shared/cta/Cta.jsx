import { Button } from "@/components/ui/button"
import Link from "next/link"

const Cta = () => {
  return (
    <section className="mt-12 bg-tertiary py-8 dark:bg-secondary/40 xl:mt-32">
      <div className="container mx-auto flex w-full flex-col items-center justify-between gap-8">
        <h2 className="section-title">Get in touch</h2>
        <p className="text-justify text-lg text-muted-foreground">
          I take great pleasure in collaborating with passionate and committed
          individuals who strive to make the world a better place
        </p>
        <Link href="/contact">
          <Button>Contact me</Button>
        </Link>
      </div>
    </section>
  )
}

export default Cta
