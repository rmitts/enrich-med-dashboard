"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import type { LucideIcon } from "lucide-react"

interface PlaceholderPageProps {
  title: string
  description: string
  icon: LucideIcon
  breadcrumbs: { label: string; href?: string }[]
}

export function PlaceholderPage({
  title,
  description,
  icon: Icon,
  breadcrumbs,
}: PlaceholderPageProps) {
  return (
    <div className="flex flex-col h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4 md:px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={crumb.label}>
                {i > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {crumb.href ? (
                    <BreadcrumbLink asChild><Link href={crumb.href}>{crumb.label}</Link></BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground text-balance">
              {title}
            </h1>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>

          <div className="flex flex-col items-center justify-center py-16 rounded-lg border border-dashed border-border bg-card/50">
            <div className="flex items-center justify-center size-16 rounded-2xl bg-primary/10 mb-4">
              <Icon className="size-8 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-1">
              Coming Soon
            </h2>
            <p className="text-sm text-muted-foreground text-center max-w-sm">
              This section is being built out. Content for {title.toLowerCase()} will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
