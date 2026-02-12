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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Scan, Info, ArrowRight, ArrowLeft, Target, CheckCircle2 } from "lucide-react"

export default function LungRADSPage() {
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
              <BreadcrumbLink asChild>
                <Link href="/screening/ldct-guidelines">Screening</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Lung-RADS</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {/* Page Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">2022 Update</Badge>
              <Badge variant="outline">ACR Guidelines</Badge>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Lung-RADS Categories</h1>
            <p className="text-muted-foreground mt-1">
              Lung Imaging Reporting and Data System — standardized classification for LDCT screening reports.
            </p>
          </div>

          {/* What is Lung-RADS */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                  <Scan className="size-5 text-primary" />
                </div>
                <div>
                  <CardTitle>What is Lung-RADS?</CardTitle>
                  <CardDescription>Developed by the American College of Radiology (ACR)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Lung-RADS is a structured classification system that helps clinicians assess lung nodule 
                malignancy risk and determine appropriate follow-up actions for asymptomatic high-risk 
                individuals undergoing annual LDCT screening.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Target className="size-4 text-primary" />
                  Purpose
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2 ml-6 list-disc">
                  <li><strong className="text-foreground">Improve early lung cancer detection</strong> while minimizing unnecessary procedures</li>
                  <li><strong className="text-foreground">Provide consistent risk stratification</strong> and follow-up recommendations for LDCT screening programs (NLST, CMS-covered screening)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Main Categories Table */}
          <Card>
            <CardHeader>
              <CardTitle>Lung-RADS Categories (2022 Update)</CardTitle>
              <CardDescription>Risk stratification and management recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[120px]">Category</TableHead>
                    <TableHead className="w-[200px]">Description</TableHead>
                    <TableHead className="w-[100px]">Cancer Risk</TableHead>
                    <TableHead>Management</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/30 font-semibold">
                        1 – Negative
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      No nodules or definitely benign nodules
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium text-green-700">~0%</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Annual LDCT in 12 months
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/30 font-semibold">
                        2 – Benign
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Nodules with very low likelihood of cancer (e.g., calcified granuloma, &lt;6 mm solid)
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium text-green-700">&lt;1%</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Annual LDCT in 12 months
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-700 border-amber-500/30 font-semibold">
                        3 – Probably Benign
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Nodules with low suspicion: solid 6–8 mm, part-solid with &lt;6 mm solid part
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium text-amber-700">1–2%</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      LDCT in 6 months
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge variant="outline" className="bg-orange-500/10 text-orange-700 border-orange-500/30 font-semibold">
                        4A – Suspicious
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Solid 8–15 mm or part-solid with ≥6 mm solid part; new or growing nodules
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium text-orange-700">5–15%</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      LDCT in 3 months ± PET/CT
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-500/30 font-semibold">
                        4B/4X – Very Suspicious
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Solid &gt;15 mm, or growth with suspicious morphology
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium text-red-700">&gt;15%</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      PET/CT and/or tissue sampling recommended
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* 4X Modifier Note */}
          <Alert>
            <Info className="size-4" />
            <AlertTitle>4X Modifier</AlertTitle>
            <AlertDescription>
              4X is a modifier for category 4 nodules with additional suspicious features (e.g., spiculation, lymphadenopathy). 
              These nodules warrant more aggressive workup regardless of size.
            </AlertDescription>
          </Alert>

          {/* Quick Reference */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="size-5 text-primary" />
                Quick Reference: Follow-Up Intervals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-700">12 mo</div>
                  <div className="text-sm text-muted-foreground">Categories 1 & 2</div>
                  <div className="text-xs text-green-700 mt-1">Annual screening</div>
                </div>
                <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
                  <div className="text-2xl font-bold text-amber-700">6 mo</div>
                  <div className="text-sm text-muted-foreground">Category 3</div>
                  <div className="text-xs text-amber-700 mt-1">Short-term follow-up</div>
                </div>
                <div className="p-4 rounded-lg bg-orange-500/5 border border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-700">3 mo</div>
                  <div className="text-sm text-muted-foreground">Category 4A</div>
                  <div className="text-xs text-orange-700 mt-1">± PET/CT</div>
                </div>
                <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                  <div className="text-2xl font-bold text-red-700">ASAP</div>
                  <div className="text-sm text-muted-foreground">Category 4B/4X</div>
                  <div className="text-xs text-red-700 mt-1">PET/CT or biopsy</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Clinical Pearl */}
          <Alert className="bg-amber-500/10 border-amber-500/30">
            <Info className="size-4 text-amber-600" />
            <AlertTitle className="text-amber-700">Clinical Pearl</AlertTitle>
            <AlertDescription className="text-amber-700/80">
              Lung-RADS is specifically designed for <strong>lung cancer screening CT</strong> in asymptomatic 
              high-risk individuals. For <strong>incidental nodules</strong> found on CT done for other reasons, 
              use the <Link href="/management/fleischner" className="underline font-medium">Fleischner Society Guidelines</Link> instead.
            </AlertDescription>
          </Alert>

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button variant="outline" asChild>
              <Link href="/screening/eligibility">
                <ArrowLeft className="size-4 mr-2" />
                Eligibility
              </Link>
            </Button>
            <Button asChild>
              <Link href="/screening/sdm">
                Shared Decision Making
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
