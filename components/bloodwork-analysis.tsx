"use client"

import * as React from "react"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BloodworkTable } from "@/components/bloodwork-table"
import { KeyFindings } from "@/components/key-findings"
import {
  chemistryPanel,
  cbcPanel,
  keyFindings,
  availableDates,
} from "@/lib/bloodwork-data"

export function BloodworkAnalysis() {
  const [selectedDates, setSelectedDates] = React.useState<string[]>([
    "Sept 2025",
    "June 2025",
  ])
  const [comparisonMode, setComparisonMode] = React.useState(true)

  const toggleDate = (date: string) => {
    if (selectedDates.includes(date)) {
      if (selectedDates.length > 1) {
        setSelectedDates(selectedDates.filter((d) => d !== date))
      }
    } else {
      setSelectedDates([...selectedDates, date])
    }
  }

  return (
    <div className="flex flex-col h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/">Health Records</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Bloodwork Analysis</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Bloodwork Analysis
              </h1>
              <p className="text-muted-foreground mt-1">
                Compare panels across multiple dates
              </p>
            </div>
            <Button
              variant={comparisonMode ? "default" : "outline"}
              onClick={() => setComparisonMode(!comparisonMode)}
              className="shrink-0"
            >
              Comparison Mode
            </Button>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Select Dates to Compare
            </p>
            <div className="flex flex-wrap gap-2">
              {availableDates.map((date) => (
                <Button
                  key={date}
                  variant={selectedDates.includes(date) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleDate(date)}
                  className={
                    selectedDates.includes(date)
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }
                >
                  {date}
                </Button>
              ))}
            </div>
          </div>

          <Tabs defaultValue="chemistry" className="w-full">
            <TabsList className="bg-transparent border-b border-border rounded-none w-full justify-start h-auto p-0 gap-0">
              <TabsTrigger
                value="chemistry"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                Chemistry Panel
              </TabsTrigger>
              <TabsTrigger
                value="cbc"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
              >
                CBC
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chemistry" className="mt-4">
              <BloodworkTable
                parameters={chemistryPanel.parameters}
                selectedDates={selectedDates}
              />
            </TabsContent>
            <TabsContent value="cbc" className="mt-4">
              <BloodworkTable
                parameters={cbcPanel.parameters}
                selectedDates={selectedDates}
              />
            </TabsContent>
          </Tabs>

          <KeyFindings findings={keyFindings} />
        </div>
      </div>
    </div>
  )
}
