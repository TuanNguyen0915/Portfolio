'use client'
import { useEffect, useState } from 'react'
import ThemeToggle from '../themeProvider/ThemeToggle'
import Logo from './Logo'
import MobileNav from './MobileNav'
import Nav from './Nav'

const Header = () => {
  const [header, setHeader] = useState(false)

  useEffect(() => {
    const scrollYPosition = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
    return () => window.removeEventListener('scroll', scrollYPosition)
  })
  return (
    <header
      className={`sticky top-0 z-30 transition-all ${
        header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'
      }`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyles='hidden lg:flex gap-x-8 items-center'
              linkStyles='relative transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggle />
            {/* MOBILE NAV */}
            <div className='lg:hidden block'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
