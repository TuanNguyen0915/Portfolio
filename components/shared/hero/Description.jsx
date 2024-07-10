import { Button } from "@/components/ui/button"
import { Download, Send } from "lucide-react"
import Link from "next/link"

const Description = () => {
  return (
    <>
      <p className="mb-4 text-base font-semibold uppercase tracking-[4px] text-primary">
        Software Developer
      </p>
      <h1 className="h1">Hello, my name is </h1>
      <h1 className="h1 mb-6 text-primary">Tuan Nguyen</h1>
      <p className="subtitle mx-auto max-w-[480px] lg:mx-0">
        I'm a full-stack software engineer who enjoys building apps for
        accessible and intuitive design to give the customer the best and
        simplest way solutions.
      </p>
      <div className="mb-12 flex gap-4 max-lg:flex-col">
        <Link href="/contact">
          <Button className="gap-2 hover:brightness-125">
            Contact me <Send size={18} />
          </Button>
        </Link>
        <Link
          href="https://docs.google.com/document/d/1p7bVWegf957LCUH3wjxbnQrTQxHEwKsgn_6cLPO335k"
          target="_blank"
        >
          <Button
            href="https://drive.google.com/file/d/1OWeWAuvbt9uBGs89TiQnXw2uIig-UCAy/view"
            target="_blank"
            variant="secondary"
            className="gap-2 transition-all hover:border hover:border-primary hover:bg-transparent hover:text-primary"
          >
            My CV <Download size={18} />
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Description
