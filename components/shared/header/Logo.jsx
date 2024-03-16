"use client"
import LoadingPage from "@/app/loading"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Suspense } from "react"

const Logo = () => {
  const { theme } = useTheme()
  const [src, setSrc] = useState("")
  useEffect(() => {
    const newSrc =
      theme === "dark" ? "/Tuan_signature_w.png" : "/Tuan_signature.png"
    setSrc(newSrc)
  }, [theme])
  return (
    <Suspense fallback={<LoadingPage />}>
      {src && (
        <Link
          href="/"
          className="relative h-[80px] w-[150px] transition-all duration-500 hover:scale-110"
        >
          <Image src={src} alt="logo" fill className="object-contain" />
        </Link>
      )}
    </Suspense>
  )
}

export default Logo
