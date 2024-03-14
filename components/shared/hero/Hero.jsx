import { RiArrowDownSLine } from "react-icons/ri"
import Social from "../Social"
import Description from "./Description"
import HeroImg from "./HeroImg"

const Hero = () => {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-between bg-hero bg-cover bg-bottom bg-no-repeat py-12 dark:bg-none xl:py-24 xl:pt-28">
      <div className="container mx-auto mt-5 xl:mt-20">
        <div className="flex justify-between gap-8">
          <div className="mx-auto flex flex-col justify-center text-center lg:mx-0 lg:text-left">
            {/* DESC */}
            <Description />
            {/* SOCIAL ICONS */}
            <div className="mx-auto lg:mx-0">
              <Social />
            </div>
          </div>
          <div className="hidden md:flex">
            <HeroImg />
          </div>
        </div>
      </div>
      <div className="bottom-44 left-1/2 hidden animate-bounce lg:bottom-1 lg:flex">
        <RiArrowDownSLine className="text-3xl text-primary" size={40} />
      </div>
    </section>
  )
}

export default Hero
