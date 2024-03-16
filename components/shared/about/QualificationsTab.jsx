"use client"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { qualificationData } from "@/lib/constants"
import { Briefcase, GraduationCap } from "lucide-react"

const QualificationsTab = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }
  return (
    <TabsContent value="qualifications">
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="rounded-xl bg-orange-200/30 p-4 text-center backdrop-blur-lg backdrop-filter dark:bg-secondary/40 lg:text-left"
      >
        <h3 className="my-8 text-center text-2xl font-bold">
          My Awesome Journey
        </h3>
        <div>
          <Tabs defaultValue={getData(qualificationData, "experience").title}>
            <TabsList className="grid w-full grid-cols-2 rounded-full dark:border-none lg:border">
              <TabsTrigger
                className="flex w-auto items-center justify-center gap-6 capitalize"
                value={getData(qualificationData, "experience").title}
              >
                <Briefcase size={24} />
                {getData(qualificationData, "experience").title}
              </TabsTrigger>
              <TabsTrigger
                className="flex w-auto items-center justify-center gap-6 capitalize"
                value={getData(qualificationData, "education").title}
              >
                <GraduationCap size={24} />
                {getData(qualificationData, "education").title}
              </TabsTrigger>
            </TabsList>
            <TabsContent value={getData(qualificationData, "experience").title}>
              <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-4 flex w-full flex-col gap-8">
                {getData(qualificationData, "experience").data.map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="group flex min-h-[180px] gap-4 max-lg:h-auto"
                    >
                      <div className="relative h-auto w-[1px] py-4 max-lg:hidden">
                        <div className="h-auto w-[1px] bg-muted-foreground"></div>
                        <div className="absolute -left-1 top-4 h-[10px] w-[10px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[118px]"></div>
                      </div>
                      <div className="flex w-full flex-col justify-between gap-2 pb-8 border-b border-border">
                        <div className="flex w-full items-center justify-between py-2">
                          <p className=" flex-1 text-left font-medium">
                            {item.company}
                          </p>
                          <p className="text-sm italic">{item.years}</p>
                        </div>
                        <p className="text-left text-muted-foreground">
                          {item.exp}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </motion.div>
            </TabsContent>
            <TabsContent value={getData(qualificationData, "education").title}>
              {/* DATA */}
              <motion.div
               initial={{ x: -10, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: 10, opacity: 0 }}
               transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-4 flex w-full flex-col gap-8">
                {getData(qualificationData, "education").data.map(
                  (item, idx) => (
                    <div key={idx} className="group flex min-h-[80px] gap-4 ">
                      <div className="relative h-full w-[1px] py-4 max-lg:hidden">
                        <div className="h-full w-[1px] bg-muted-foreground"></div>
                        <div className="absolute -left-1 top-4 h-[10px] w-[10px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[48px]"></div>
                      </div>
                      <div className="flex w-full flex-col gap-2 border-b border-border">
                        <div className="flex items-center justify-between ">
                          <p className="flex-1 text-left font-medium">
                            {item.university}
                          </p>
                          <p className="text-sm italic">{item.years}</p>
                        </div>
                        <p className="text-left text-muted-foreground">
                          {item.qualification}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </TabsContent>
  )
}

export default QualificationsTab
