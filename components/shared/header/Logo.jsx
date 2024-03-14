"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Logo = () => {
  const { theme } = useTheme()
  const [src, setSrc] = useState("")
  useEffect(() => {
    const newSrc =
      theme === "dark" ? "/Tuan_signature_w.png" : "/Tuan_signature.png"
    setSrc(newSrc)
  }, [theme])
  return (
    <>
      {src && (
        <Link href="/" className="transition-all duration-500 hover:scale-110">
          <Image
            src={src}
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>
      )}
    </>
  )
}

export default Logo
