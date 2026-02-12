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
import { CircleDot, Info, ArrowRight, ArrowLeft, AlertTriangle } from "lucide-react"

export default function CompositionPage() {
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
                <Link href="/nodule-basics/characteristics">Nodule Basics</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Composition</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {/* Page Header */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">Nodule Composition</h1>
            <p className="text-muted-foreground mt-1">
              Understanding solid vs subsolid nodules and their clinical significance.
            </p>
          </div>

          {/* Solid Nodules Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                  <CircleDot className="size-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Solid Nodules</CardTitle>
                  <CardDescription>Homogeneous soft-tissue attenuation</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Solid nodules are completely dense on imaging. They are the most commonly detected type 
                and have an intermediate risk profile—malignancy risk increases with size and other features.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">Common Causes of Solid Pulmonary Nodules</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500/30">Benign Causes</Badge>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                      <li>Infectious granulomas (TB, histoplasmosis, coccidioidomycosis)</li>
                      <li>Hamartomas</li>
                      <li>Rheumatoid nodules</li>
                      <li>AV malformations</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-500/30">Malignant Causes</Badge>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                      <li>Primary lung cancer (especially adenocarcinoma, squamous cell)</li>
                      <li>Metastases (colon, breast, kidney, sarcomas)</li>
                      <li>Lymphoma</li>
                      <li>Carcinoid tumor</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subsolid Nodules Section */}
          <Card>
            <CardHeader>
              <CardTitle>Subsolid Nodules</CardTitle>
              <CardDescription>Includes pure ground-glass nodules (pGGN) and part-solid nodules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Appearance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Pure Ground-Glass (pGGN)</TableCell>
                    <TableCell className="text-muted-foreground">Hazy increased attenuation without obscuring underlying vessels or bronchial structures</TableCell>
                    <TableCell><Badge variant="secondary">Entirely ground-glass</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Part-Solid Nodule</TableCell>
                    <TableCell className="text-muted-foreground">Contains both ground-glass and solid components</TableCell>
                    <TableCell><Badge variant="secondary">Mixed: part hazy, part dense</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Clinical Significance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why Subsolid Nodules Matter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Subsolid nodules are <strong className="text-foreground">clinically significant</strong> because they are:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4 list-disc">
                <li><strong className="text-foreground">More likely to represent early lung adenocarcinoma</strong>, particularly those in the pre-invasive or minimally invasive stages</li>
                <li>Often show <strong className="text-foreground">indolent growth</strong> but may evolve into invasive adenocarcinoma over time</li>
                <li>Associated with <strong className="text-foreground">lepidic growth pattern</strong>, formerly called bronchioloalveolar carcinoma</li>
              </ul>

              <Separator className="my-4" />

              <h4 className="text-sm font-semibold text-foreground">Differential Diagnosis</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-green-500/5">Benign Causes</TableHead>
                    <TableHead className="bg-red-500/5">Malignant Causes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-muted-foreground">Inflammation (e.g., focal organizing pneumonia)</TableCell>
                    <TableCell className="text-muted-foreground">Atypical adenomatous hyperplasia (AAH)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground">Hemorrhage</TableCell>
                    <TableCell className="text-muted-foreground">Adenocarcinoma in situ (AIS)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground">Infection (viral, fungal, PCP)</TableCell>
                    <TableCell className="text-muted-foreground">Minimally invasive adenocarcinoma (MIA)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-muted-foreground">Drug reaction</TableCell>
                    <TableCell className="text-muted-foreground">Invasive adenocarcinoma (especially lepidic type)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Growth Pattern */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Growth Pattern</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-muted-foreground space-y-2 ml-4 list-disc">
                <li>Subsolid nodules, especially <strong className="text-foreground">ground-glass</strong>, grow <strong className="text-foreground">very slowly</strong></li>
                <li><strong className="text-foreground">Volume doubling time</strong> often &gt;400 days (vs. &lt;100 days in aggressive cancers)</li>
                <li>Any <strong className="text-foreground">increase in solid component</strong> or size over time is worrisome</li>
              </ul>
            </CardContent>
          </Card>

          {/* Red Flags */}
          <Alert variant="destructive" className="bg-red-500/10 border-red-500/30">
            <AlertTriangle className="size-4" />
            <AlertTitle>Red Flags Suggesting Malignancy</AlertTitle>
            <AlertDescription>
              <ul className="mt-2 space-y-1 list-disc ml-4">
                <li>Growth or emergence of a solid component</li>
                <li>Increasing size of solid portion &gt;6 mm</li>
                <li>Irregular or spiculated margins</li>
                <li>Persistence &gt;5 years</li>
              </ul>
            </AlertDescription>
          </Alert>

          {/* Presenter Note */}
          <Alert className="bg-amber-500/10 border-amber-500/30">
            <Info className="size-4 text-amber-600" />
            <AlertTitle className="text-amber-700">Clinical Pearl</AlertTitle>
            <AlertDescription className="text-amber-700/80">
              Always look back on previous imaging! A solid or subsolid nodule present and unchanged for &gt;2 years is very likely benign.
            </AlertDescription>
          </Alert>

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button variant="outline" asChild>
              <Link href="/nodule-basics/characteristics">
                <ArrowLeft className="size-4 mr-2" />
                Characteristics
              </Link>
            </Button>
            <Button asChild>
              <Link href="/nodule-basics/calcifications">
                Calcifications
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
