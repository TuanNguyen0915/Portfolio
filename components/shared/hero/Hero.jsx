import { RiArrowDownSLine } from "react-icons/ri"
import Social from "../Social"
import Description from "./Description"
import MyImg from "./HeroImg"
import HeroImg from "./HeroImg"

const Hero = () => {
  return (
    <section className="h-[84vh] bg-hero bg-cover bg-bottom bg-no-repeat py-12 dark:bg-none xl:py-24 xl:pt-28">
      <div className="container mx-auto xl:mt-20 mt-5">
        <div className="flex justify-between gap-8">
          <div className="mx-auto flex max-w-[600px] flex-col justify-center text-center lg:mx-0 lg:text-left">
            {/* DESC */}
            <Description />
            {/* SOCIAL ICONS */}
            <div className="mx-auto lg:mx-0">
              <Social />
            </div>
          </div>
          <div className="relative hidden md:flex">
            <HeroImg />
          </div>
        </div>
        <div className="2 absolute bottom-44 left-1/2 hidden animate-bounce lg:bottom-1 lg:flex">
          <RiArrowDownSLine className="text-3xl text-primary" size={40} />
        </div>
      </div>
    </section>
  )
}

export default Hero
