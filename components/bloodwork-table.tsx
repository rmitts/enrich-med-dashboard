"use client"

import * as React from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import type { BloodworkParameter, StatusLevel } from "@/lib/bloodwork-data"

interface BloodworkTableProps {
  parameters: BloodworkParameter[]
  selectedDates: string[]
}

function StatusBadge({ status }: { status: StatusLevel }) {
  const statusConfig = {
    normal: {
      label: "Normal",
      className: "bg-status-normal-bg text-status-normal border-0",
    },
    high: {
      label: "High",
      className: "bg-status-high-bg text-status-high border-0",
    },
    low: {
      label: "Low",
      className: "bg-status-low-bg text-status-low border-0",
    },
    critical: {
      label: "Critical",
      className: "bg-status-critical-bg text-status-critical border-0",
    },
  }

  const config = statusConfig[status]

  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  )
}

function TrendIndicator({
  trend,
  direction,
}: {
  trend: string
  direction?: "up" | "down" | "stable"
}) {
  if (trend === "—" || direction === "stable") {
    return <span className="text-muted-foreground">—</span>
  }

  return (
    <span
      className={`flex items-center gap-1 ${
        direction === "up" ? "text-status-high" : "text-status-normal"
      }`}
    >
      {direction === "up" ? (
        <TrendingUp className="size-3" />
      ) : (
        <TrendingDown className="size-3" />
      )}
      {trend}
    </span>
  )
}

export function BloodworkTable({
  parameters,
  selectedDates,
}: BloodworkTableProps) {
  return (
    <div className="rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[200px] font-semibold">Parameter</TableHead>
            <TableHead className="font-semibold">Reference</TableHead>
            {selectedDates.map((date) => (
              <TableHead key={date} className="font-semibold">
                {date}
              </TableHead>
            ))}
            <TableHead className="font-semibold">Trend</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parameters.map((param) => (
            <TableRow key={param.name} className="hover:bg-accent/30">
              <TableCell>
                <div>
                  <span className="font-medium">{param.name}</span>
                  {param.note && (
                    <p className="text-xs text-primary mt-0.5">{param.note}</p>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {param.reference}
              </TableCell>
              {selectedDates.map((date) => {
                const valueData = param.values.find((v) => v.date === date)
                if (!valueData) {
                  return (
                    <TableCell key={date} className="text-muted-foreground">
                      —
                    </TableCell>
                  )
                }
                return (
                  <TableCell key={date}>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-medium ${
                          valueData.status === "critical"
                            ? "text-status-critical"
                            : valueData.status === "high"
                              ? "text-status-high"
                              : valueData.status === "low"
                                ? "text-status-low"
                                : "text-foreground"
                        }`}
                      >
                        {valueData.value}
                      </span>
                      <StatusBadge status={valueData.status} />
                    </div>
                  </TableCell>
                )
              })}
              <TableCell>
                <TrendIndicator
                  trend={param.trend || "—"}
                  direction={param.trendDirection}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
