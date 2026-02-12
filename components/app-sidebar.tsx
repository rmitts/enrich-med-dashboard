"use client"

import * as React from "react"
import Link from "next/link"
import {
  BookOpen,
  ChevronRight,
  CircleDot,
  ClipboardList,
  FileText,
  Palette,
  Scan,
  Scissors,
  Settings,
  Stethoscope,
  Target,
  Activity,
  GraduationCap,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const courseContent = [
  {
    title: "Introduction",
    icon: BookOpen,
    isActive: true,
    items: [
      { title: "Overview", href: "/introduction" },
      { title: "Objectives", href: "/introduction/objectives" },
      { title: "Why Lung Nodules?", href: "/introduction/why-lung-nodules" },
    ],
  },
  {
    title: "Nodule Basics",
    icon: CircleDot,
    items: [
      { title: "Characteristics", href: "/nodule-basics/characteristics" },
      { title: "Composition", href: "/nodule-basics/composition" },
      { title: "Calcifications", href: "/nodule-basics/calcifications" },
      { title: "Margins", href: "/nodule-basics/margins" },
      { title: "Differential Dx", href: "/nodule-basics/differential" },
    ],
  },
  {
    title: "Screening",
    icon: Scan,
    items: [
      { title: "LDCT Guidelines", href: "/screening/ldct-guidelines" },
      { title: "Eligibility", href: "/screening/eligibility" },
      { title: "Lung-RADS", href: "/screening/lung-rads" },
      { title: "Shared Decision Making", href: "/screening/sdm" },
    ],
  },
  {
    title: "Management",
    icon: ClipboardList,
    items: [
      { title: "Fleischner Guidelines", href: "/management/fleischner" },
      { title: "Solid Nodules", href: "/management/solid" },
      { title: "Subsolid Nodules", href: "/management/subsolid" },
      { title: "Multiple Nodules", href: "/management/multiple" },
      { title: "Risk Stratification", href: "/management/risk" },
    ],
  },
  {
    title: "Intervention",
    icon: Scissors,
    items: [
      { title: "PET-CT Evaluation", href: "/intervention/pet-ct" },
      { title: "Biopsy vs Resection", href: "/intervention/biopsy-resection" },
      { title: "When to Refer", href: "/intervention/referral" },
    ],
  },
  {
    title: "Cancer Types",
    icon: Activity,
    items: [
      { title: "NSCLC Overview", href: "/cancer-types/nsclc" },
      { title: "SCLC Overview", href: "/cancer-types/sclc" },
      { title: "Rare Types", href: "/cancer-types/rare" },
    ],
  },
]

const quickLinks = [
  { title: "References", icon: FileText, href: "/references" },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Stethoscope className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Enrich Med</span>
                  <span className="text-xs text-muted-foreground">Pulmonary Nodules</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Course Content</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {courseContent.map((item) => (
                <Collapsible key={item.title} defaultOpen={item.isActive}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.href}>{subItem.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <Collapsible>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <Palette className="size-4" />
                  <span>Design System</span>
                  <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/design-system">Theme Editor</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/design-system/components">Component Library</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <Link href="/design-system/guides">Guides & Presets</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/settings">
                <Settings className="size-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="mt-2">
              <Avatar className="size-8">
                <AvatarFallback className="bg-primary/10 text-primary">
                  <GraduationCap className="size-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Kenzie Reich</span>
                <span className="text-xs text-muted-foreground">MSN, APRN, AGCNS-BC</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
