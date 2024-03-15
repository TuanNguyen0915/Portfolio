import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AboutImg from "./AboutImg"
import Image from "next/image"
import InfoTab from "./InfoTab"
import QualificationsTab from "./QualificationsTab"
import SkillsTab from "./SkillsTab"

const About = () => {
  return (
    <section>
      <div className="relative container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center lg:mb-16">
          About me
        </h2>
        <AboutImg />
        <div className="mt-10 flex w-full justify-between gap-4">
          <div className="bg-hero_shape relative bottom-0 hidden h-[500px] w-[500px] items-center justify-center bg-center bg-no-repeat lg:flex xl:min-h-[500px] xl:min-w-[600px]">
            <Image
              src="/about/about.png"
              alt="photo"
              fill
              className="translate-x-10 object-contain"
            />
          </div>
          <Tabs defaultValue="personal" className="flex-1">
            <TabsList className="grid w-full grid-cols-3 rounded-full dark:border-none lg:border">
              <TabsTrigger className="w-auto" value="personal">
                Personal Info
              </TabsTrigger>
              <TabsTrigger className="w-auto" value="qualifications">
                Qualifications
              </TabsTrigger>
              <TabsTrigger className="w-auto" value="skills">
                Skills
              </TabsTrigger>
            </TabsList>
            <div className="mt-12 text-lg xl:mt-8">
              <InfoTab />
              <QualificationsTab />
              <SkillsTab />
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default About
