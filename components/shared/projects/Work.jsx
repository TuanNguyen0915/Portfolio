"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"
import { projectsData } from "@/lib/constants"
import ProjectCard from "./ProjectCard"
const Work = () => {
  return (
    <section className="mt-12 overflow-hidden xl:mt-32">
      <div className="container mx-auto mt-24 flex justify-between gap-4 max-lg:flex-col xl:gap-8">
        <div className="mx-auto flex h-auto w-full flex-col justify-between text-center xl:mx-0 xl:text-left">
          <div>
            <h2 className="section-title mb-8 ">Latest Projects</h2>
            <p className="subtitle mb-8">
              I designed with pleasure and passion, creating user-friendly
              interfaces with an intuitive UI that allows users to engage with
              the product easily.
            </p>
          </div>
          <Link href="/projects" className="mb-8 xl:mb-[80px]">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* SWIPER */}
        <div className="w-full lg:max-w-[800px]">
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          >
            {projectsData.slice(0, 4).map((project, idx) => (
              <SwiperSlide key={idx}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
