"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ColorPalette } from "@/components/design-system/color-palette"
import { TypographyShowcase } from "@/components/design-system/typography-showcase"
import { ComponentExamples } from "@/components/design-system/component-examples"
import { ThemeEditor } from "@/components/design-system/theme-editor"

export default function DesignSystemPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4 md:px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/">PawHealth</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Design System</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold text-foreground text-balance">
              Design System
            </h1>
            <p className="text-muted-foreground mt-1">
              Visual reference for tokens, typography, components, and theme customization
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="colors" className="flex flex-col gap-0">
            <TabsList className="bg-transparent border-b border-border rounded-none w-full justify-start h-auto p-0 gap-0 overflow-x-auto">
              <TabsTrigger
                value="colors"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm shrink-0"
              >
                Colors
              </TabsTrigger>
              <TabsTrigger
                value="typography"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm shrink-0"
              >
                Typography
              </TabsTrigger>
              <TabsTrigger
                value="components"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm shrink-0"
              >
                Components
              </TabsTrigger>
              <TabsTrigger
                value="theme"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm shrink-0"
              >
                Theme Editor
              </TabsTrigger>
            </TabsList>

            <TabsContent value="colors" className="mt-6">
              <ColorPalette />
            </TabsContent>

            <TabsContent value="typography" className="mt-6">
              <TypographyShowcase />
            </TabsContent>

            <TabsContent value="components" className="mt-6">
              <ComponentExamples />
            </TabsContent>

            <TabsContent value="theme" className="mt-6">
              <ThemeEditor />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
