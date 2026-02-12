"use client"

import { AlertTriangle, TrendingUp, TrendingDown, Bell, PawPrint, Check } from "lucide-react"
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

export function ComponentExamples() {
  return (
    <div className="flex flex-col gap-8">
      {/* Status Badges */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Status Badges</h3>
        <p className="text-xs text-muted-foreground">
          Used for bloodwork results, health indicators, and alert levels
        </p>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" className="bg-status-normal-bg text-status-normal border-0">
            Normal
          </Badge>
          <Badge variant="outline" className="bg-status-high-bg text-status-high border-0">
            High
          </Badge>
          <Badge variant="outline" className="bg-status-low-bg text-status-low border-0">
            Low
          </Badge>
          <Badge variant="outline" className="bg-status-critical-bg text-status-critical border-0">
            Critical
          </Badge>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Buttons</h3>
        <p className="text-xs text-muted-foreground">
          Primary actions use the amber brand color. Secondary actions are muted.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>Primary Action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Date Selector Pills */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Date Selector Pills</h3>
        <p className="text-xs text-muted-foreground">
          Toggle between active (filled) and inactive (outline) states
        </p>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Select dates to compare
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" className="bg-primary text-primary-foreground">
              Sept 2025
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground">
              June 2025
            </Button>
            <Button variant="outline" size="sm">
              March 2025
            </Button>
            <Button variant="outline" size="sm">
              Dec 2024
            </Button>
          </div>
        </div>
      </div>

      {/* Trend Indicators */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Trend Indicators</h3>
        <p className="text-xs text-muted-foreground">
          Show directional changes between data points
        </p>
        <div className="flex flex-wrap gap-6">
          <span className="flex items-center gap-1 text-sm text-status-high">
            <TrendingUp className="size-3" /> 13.2%
          </span>
          <span className="flex items-center gap-1 text-sm text-status-normal">
            <TrendingDown className="size-3" /> 3.1%
          </span>
          <span className="flex items-center gap-1 text-sm text-status-critical">
            <TrendingUp className="size-3" /> 25.7%
          </span>
          <span className="text-sm text-muted-foreground">{"---"}</span>
        </div>
      </div>

      {/* Alert Cards */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Alert Cards</h3>
        <p className="text-xs text-muted-foreground">
          Contextual alerts for health findings
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg p-4 bg-status-critical-bg/50 border border-status-critical/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="size-4 text-status-critical" />
              <h4 className="text-sm font-semibold text-status-critical">Kidney Function</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              BUN (43) and Creatinine (2.12) both elevated, indicating reduced filtration.
            </p>
          </div>
          <div className="rounded-lg p-4 bg-status-high-bg/50 border border-status-high/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="size-4 text-status-high" />
              <h4 className="text-sm font-semibold text-status-high">Liver Enzymes</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ALT (308) and ALP (495) are severely elevated. GGT (28) warrants follow-up.
            </p>
          </div>
          <div className="rounded-lg p-4 bg-status-normal-bg/50 border border-status-normal/20">
            <div className="flex items-center gap-2 mb-2">
              <Check className="size-4 text-status-normal" />
              <h4 className="text-sm font-semibold text-status-normal">Metabolic Panel</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Glucose, Sodium, and Potassium all within normal reference ranges.
            </p>
          </div>
          <div className="rounded-lg p-4 bg-status-low-bg/50 border border-status-low/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="size-4 text-status-low" />
              <h4 className="text-sm font-semibold text-status-low">Iron Levels</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Iron at 74 ug/dL is below the reference range of 80-270 ug/dL.
            </p>
          </div>
        </div>
      </div>

      {/* Mini Data Table */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Data Table</h3>
        <p className="text-xs text-muted-foreground">
          Standard table pattern with status-colored values and badges
        </p>
        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[160px] font-semibold">Parameter</TableHead>
                <TableHead className="font-semibold">Reference</TableHead>
                <TableHead className="font-semibold">Value</TableHead>
                <TableHead className="font-semibold">Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-accent/30">
                <TableCell className="font-medium">BUN</TableCell>
                <TableCell className="text-muted-foreground">7-30 mg/dL</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-status-high">43</span>
                    <Badge variant="outline" className="bg-status-high-bg text-status-high border-0">High</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1 text-status-high">
                    <TrendingUp className="size-3" /> 13.2%
                  </span>
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-accent/30">
                <TableCell className="font-medium">ALT</TableCell>
                <TableCell className="text-muted-foreground">10-90 IU/L</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-status-critical">308</span>
                    <Badge variant="outline" className="bg-status-critical-bg text-status-critical border-0">Critical</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1 text-status-critical">
                    <TrendingUp className="size-3" /> 25.7%
                  </span>
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-accent/30">
                <TableCell className="font-medium">Albumin</TableCell>
                <TableCell className="text-muted-foreground">2.3-3.9 g/dL</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">3.1</span>
                    <Badge variant="outline" className="bg-status-normal-bg text-status-normal border-0">Normal</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1 text-status-normal">
                    <TrendingDown className="size-3" /> 3.1%
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Notification / Sidebar Card */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Info Cards</h3>
        <p className="text-xs text-muted-foreground">
          Used in the secondary sidebar for appointments, alerts, and quick stats
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
          <div className="rounded-lg border border-border bg-card p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-8 rounded-md bg-primary/10">
                <Bell className="size-4 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">3 Alerts</p>
            </div>
            <p className="text-xs text-muted-foreground">
              2 critical findings, 1 upcoming vaccination
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-8 rounded-md bg-status-normal-bg">
                <PawPrint className="size-4 text-status-normal" />
              </div>
              <p className="text-sm font-medium text-foreground">Weight: 72 lbs</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Stable, within healthy range
            </p>
          </div>
        </div>
      </div>

      {/* Spacing Reference */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Spacing Scale</h3>
        <p className="text-xs text-muted-foreground">
          Visual reference of commonly used spacing values
        </p>
        <div className="flex flex-col gap-3">
          {[
            { name: "gap-1 / p-1", size: "0.25rem (4px)", width: "w-1" },
            { name: "gap-2 / p-2", size: "0.5rem (8px)", width: "w-2" },
            { name: "gap-3 / p-3", size: "0.75rem (12px)", width: "w-3" },
            { name: "gap-4 / p-4", size: "1rem (16px)", width: "w-4" },
            { name: "gap-6 / p-6", size: "1.5rem (24px)", width: "w-6" },
            { name: "gap-8 / p-8", size: "2rem (32px)", width: "w-8" },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-4">
              <div className={`${item.width} h-4 rounded-sm bg-primary shrink-0`} />
              <span className="text-xs font-mono text-foreground w-28 shrink-0">{item.name}</span>
              <span className="text-xs text-muted-foreground">{item.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
