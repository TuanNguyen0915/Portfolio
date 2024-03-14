import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlignJustify } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "./Logo"
import Nav from "./Nav"
import Social from "../Social"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col overflow-hidden">
          <div className="mb-20 w-full">
            <Logo />
          </div>
          <div className="flex-1">
            <Nav containerStyles="flex flex-col gap-4" linkStyles="text-2xl" />
          </div>
          <div className="mb-10">
            <Social mobileNav={true} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
