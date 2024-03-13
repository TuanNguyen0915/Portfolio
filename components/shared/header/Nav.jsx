"use client"
import { navLinks } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathName = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link, idx) => (
        <Link href={link.path} key={idx} className={`capitalize ${linkStyles}`}>
          {link.path === pathName && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId='"underline'
              className={`${underlineStyles}`}
            />
          )}
          <p
            className={`text-lg ${
              link.path === pathName
                ? "text-xl font-bold dark:text-white"
                : "text-muted-foreground"
            } hover:text-primary`}
          >
            {link.name}
          </p>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
