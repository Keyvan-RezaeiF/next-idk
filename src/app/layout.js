import { cn } from "@/utils"
import localFont from "next/font/local"
import { Sidebar } from "@/components/Sidebar"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
        <div className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen"
        )}>
          <Sidebar />
          <div className="flex-1 bg-[#171717]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
