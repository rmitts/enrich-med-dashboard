"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { GraduationCap, Info, ArrowRight, Target, AlertTriangle } from "lucide-react"

export default function IntroductionPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4 md:px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Introduction</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {/* Page Header */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">Introduction</h1>
            <p className="text-muted-foreground mt-1">
              Welcome to this presentation on lung nodules for primary care management.
            </p>
          </div>

          {/* Presenter Card */}
          <Card>
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
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This presentation will review the latest (2023–2025) guidelines on pulmonary nodules, 
                from incidental findings to lung cancer screening, and when to intervene. We&apos;ll focus 
                on practical points for primary care, hospitalists, and pulmonary providers, emphasizing 
                early detection and appropriate management.
              </p>
            </CardContent>
          </Card>

          {/* Course Focus */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="size-5 text-primary" />
                Target Audience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Primary Care Providers</Badge>
                <Badge variant="secondary">Hospitalists</Badge>
                <Badge variant="secondary">Pulmonary Providers</Badge>
                <Badge variant="secondary">Advanced Practice Providers</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Financial Disclosure */}
          <Alert>
            <Info className="size-4" />
            <AlertTitle>Financial Disclosure</AlertTitle>
            <AlertDescription>
              The presenter has no relevant financial relationships to disclose.
            </AlertDescription>
          </Alert>

          {/* Presenter Note */}
          <Alert className="bg-amber-500/10 border-amber-500/30">
            <AlertTriangle className="size-4 text-amber-600" />
            <AlertTitle className="text-amber-700">Presenter Note</AlertTitle>
            <AlertDescription className="text-amber-700/80">
              Must state having no relevant financial relationships to disclose at beginning of presentation per AAFP requirements.
            </AlertDescription>
          </Alert>

          {/* Navigation */}
          <div className="flex justify-end pt-4">
            <Button asChild>
              <Link href="/introduction/objectives">
                Next: Learning Objectives
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
