import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AboutImg from "./AboutImg"
import Image from "next/image"

const About = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center lg:mb-16">
          About me
        </h2>
        <AboutImg />
        <div className="mt-10 flex w-full justify-between gap-4">
          <div className="bg-hero_shape relative hidden min-h-[600px] min-w-[600px] items-center justify-center bg-center bg-no-repeat lg:flex">
            <Image
              src="/about/about.png"
              alt="photo"
              fill
              className="translate-x-10 object-contain"
            />
          </div>
          <Tabs defaultValue="personal" className="flex-1">
            <TabsList>
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <div className="mt-12 text-lg xl:mt-8">
              <TabsContent value="personal">Tuan Nguyen</TabsContent>
              <TabsContent value="qualifications">Tuan Qualify</TabsContent>
              <TabsContent value="skills">Tuan Nguyen skills</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default About
