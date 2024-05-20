import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { FaGithubAlt } from "react-icons/fa6"
import { CiLink } from "react-icons/ci"

const ProjectCard = ({ project,projectPage }) => {
  return (
    <Card className={`group relative overflow-hidden ${projectPage && "hover:border-primary transition-all shadow-lg"} `}>
      <CardHeader className="p-0">
        <div className="xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark relative flex h-[300px] w-full items-end justify-center overflow-hidden bg-tertiary dark:bg-secondary/40 xl:bg-[110%] xl:bg-no-repeat">
          <div className="relative bottom-0 h-[250px] w-[247px] overflow-hidden rounded-lg">
            <Image
              className="absolute rounded-lg object-cover shadow-2xl group-hover:scale-125 transition-all"
              src={project.image}
              fill
              alt=""
            />
            <div className="absolute z-20 flex h-full w-full items-center justify-center gap-4 rounded-lg opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 dark:bg-black/30 xl:gap-10">
              <Link
                href={project.link}
                target="_blank"
                className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <CiLink className="text-white" size={30} />
              </Link>
              <Link
                href={project.github}
                target="_blank"
                className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <FaGithubAlt className="text-white" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="absolute left-4 top-4 mb-2 text-sm font-medium uppercase">
          {project.category}
        </Badge>
        <h4 className="mb-1 text-2xl font-bold">{project.name}</h4>
        <p className="text-lg text-muted-foreground line-clamp-3">{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
