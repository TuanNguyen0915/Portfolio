"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  const { theme } = useTheme()
  return (
    <Link href="/" className="transition-all duration-500 hover:scale-110">
      {theme === "dark" ? (
        <Image
          src="/Tuan_signature_w.png"
          alt="logo"
          width={150}
          height={150}
          className="object-contain"
        />
      ) : (
        <Image
          src="/Tuan_signature.png"
          alt="logo"
          width={150}
          height={150}
          className="object-contain"
        />
      )}
    </Link>
  )
}

export default Logo
