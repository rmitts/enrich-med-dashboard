import React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { NavSecondary } from "@/components/nav-secondary"
import { ThemeLoader } from "@/components/theme-provider"
import "./globals.css"

const _dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PawHealth - Vet Records Dashboard",
  description: "Track and manage your pet's health records, bloodwork, and veterinary visits",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <ThemeLoader />
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="overflow-hidden">
            <div className="flex flex-1 h-full min-h-0">
              <div className="flex-1 overflow-auto">{children}</div>
              <NavSecondary />
            </div>
          </SidebarInset>
        </SidebarProvider>
        <Analytics />
      </body>
    </html>
  )
}
