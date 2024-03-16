"use client"
import ProjectCard from "@/components/shared/projects/ProjectCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projectsData } from "@/lib/constants"
import { TabsContent } from "@radix-ui/react-tabs"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const uniqueProjectCategories = [
  "all projects",
  ...new Set(projectsData.map((item) => item.category)),
]
const ProjectPage = () => {
  const [categories, setCategories] = useState(uniqueProjectCategories)
  const [category, setCategory] = useState("all projects")
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  useEffect(() => {
    if (category === "all projects") {
      setFilteredProjects(projectsData)
    } else {
      const newData = projectsData.filter((item) => item.category === category)
      setFilteredProjects(newData)
    }
  }, [category])

  return (
    <section className="my-12">
      <div className="container mx-auto">
        <h1 className="h1 mx-auto mb-8 text-center xl:mb-16">My Projects</h1>
        <Tabs defaultValue={category}>
          <TabsList className="mx-auto mb-12 grid h-full w-full grid-cols-1 rounded-full dark:border-none md:grid-cols-4 md:border">
            {categories.map((item, idx) => (
              <TabsTrigger
                onClick={() => setCategory(item)}
                key={idx}
                value={item}
                className="capitalize"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="grid w-full grid-cols-1 gap-8 text-lg md:grid-cols-2 lg:grid-cols-3 xl:my-8">
            {filteredProjects.map((project, idx) => (
              <TabsContent key={idx} value={category}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <ProjectCard project={project} projectPage />
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default ProjectPage
