"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  CircleDot,
  Scan,
  ClipboardList,
  Scissors,
  Activity,
  ArrowRight,
  GraduationCap,
  Clock,
  Target,
} from "lucide-react"

const courseModules = [
  {
    title: "Introduction",
    description: "Course overview, objectives, and why lung nodules matter",
    icon: BookOpen,
    href: "/introduction",
    status: "start",
  },
  {
    title: "Nodule Basics",
    description: "Characteristics, composition, calcifications, margins, and differential diagnoses",
    icon: CircleDot,
    href: "/nodule-basics/characteristics",
  },
  {
    title: "Screening",
    description: "LDCT guidelines, eligibility criteria, Lung-RADS categories",
    icon: Scan,
    href: "/screening/ldct-guidelines",
  },
  {
    title: "Management",
    description: "Fleischner Society guidelines, surveillance protocols by nodule type",
    icon: ClipboardList,
    href: "/management/fleischner",
  },
  {
    title: "Intervention",
    description: "PET-CT evaluation, biopsy vs resection, when to refer",
    icon: Scissors,
    href: "/intervention/pet-ct",
  },
  {
    title: "Cancer Types",
    description: "NSCLC, SCLC, and rare lung cancer subtypes",
    icon: Activity,
    href: "/cancer-types/nsclc",
  },
]

export function CourseWelcome() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4 md:px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <span className="text-sm font-medium">Welcome</span>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {/* Hero Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                <Clock className="size-3 mr-1" />
                CME Course
              </Badge>
              <Badge variant="outline" className="text-xs">
                Primary Care Focus
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Pulmonary Nodules for Primary Care Management
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive review of the latest guidelines (2023–2025) on pulmonary nodules, 
              from incidental findings to lung cancer screening, with practical guidance on when to intervene.
            </p>
          </div>

          {/* Presenter Card */}
          <Card className="bg-card/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10">
                  <GraduationCap className="size-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">Kenzie Reich, MSN, APRN, AGCNS-BC</CardTitle>
                  <CardDescription>
                    Adult-Gerontology Clinical Nurse Specialist • Pulmonary Specialty • 5+ Years Experience
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Learning Objectives */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="size-5 text-primary" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary text-xs font-semibold">1</div>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Define Lung Nodules:</strong> Characteristics (solid vs subsolid, size, margins) and differential diagnoses</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary text-xs font-semibold">2</div>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Monitor at Appropriate Intervals:</strong> Lung cancer screening eligible patients</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary text-xs font-semibold">3</div>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Know When to Intervene:</strong> Criteria for PET-CT, biopsy, or surgical referral</p>
              </div>
            </CardContent>
          </Card>

          {/* Course Modules Grid */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Course Modules</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courseModules.map((module, index) => (
                <Link key={module.title} href={module.href}>
                  <Card className="h-full hover:border-primary/50 hover:bg-accent/50 transition-colors cursor-pointer group">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                          <module.icon className="size-5 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground">{index + 1} of 6</span>
                      </div>
                      <CardTitle className="text-base mt-3">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                      <div className="flex items-center gap-1 mt-3 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        {module.status === "start" ? "Start here" : "View module"}
                        <ArrowRight className="size-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="flex justify-center pt-4">
            <Button asChild size="lg">
              <Link href="/introduction">
                Begin Course
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
