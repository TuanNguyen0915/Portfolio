import "./globals.css"
import Header from "@/components/shared/header/Header"
import Footer from "@/components/shared/footer/Footer"
import { Outfit } from "next/font/google"
// theme provider
import ThemeProvider from "@/components/shared/themeProvider/ThemeProvider"

const outfit = Outfit({ subsets: ["latin"], display: "swap" })

export const metadata = {
  title: "TuanNguyen Portfolio",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col justify-between">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
