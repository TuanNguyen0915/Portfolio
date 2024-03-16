"use client"

import { icons } from "@/lib/constants"
import Link from "next/link"

const Social = ({ mobileNav, footer }) => {
  return (
    <div
      className={`${mobileNav && "justify-end"} flex w-full items-center gap-10`}
    >
      {icons.map((icon, idx) => {
        const Icon = icon.icon
        return (
          <Link href={icon.path} key={idx} target="_blank">
            <Icon
              className={`${mobileNav && "text-primary"} ${footer && "text-primary duration-300 hover:text-white dark:text-white/60 dark:hover:text-primary"} hover:-translate-y -1 transition-all hover:text-primary`}
              size={34}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default Social
