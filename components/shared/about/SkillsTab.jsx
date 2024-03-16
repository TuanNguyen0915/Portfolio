"use client"
import { TabsContent } from "@/components/ui/tabs"
import { skillData } from "@/lib/constants"
import { motion } from "framer-motion"
const SkillsTab = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }
  return (
    <TabsContent value="skills">
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="rounded-xl bg-orange-200/30 p-4 text-center backdrop-blur-lg backdrop-filter dark:bg-secondary/40 lg:text-left"
      >
        <h3 className="my-8 text-center text-2xl font-bold capitalize">
          Tools I Use For Work
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col gap-4 border-b border-border p-4">
            <p className="text-xl font-semibold capitalize text-primary">
              {getData(skillData, "skills").title}
            </p>
            <div className="grid w-full grid-cols-2 gap-10">
              {getData(skillData, "skills").data.map((item, idx) => (
                <p key={idx} className="text-muted-foreground">
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <p className="text-xl font-semibold capitalize text-primary">
              {getData(skillData, "tools").title}
            </p>
            <div className="flex items-center justify-between gap-4 lg:justify-evenly lg:gap-16">
              {getData(skillData, "tools").data.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx}>
                    <Icon className="size-8 dark:text-muted-foreground lg:size-12" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </TabsContent>
  )
}

export default SkillsTab
