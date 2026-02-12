"use client"

import * as React from "react"
import { Calendar, Clock, TrendingUp, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const upcomingItems = [
  {
    title: "Annual Checkup",
    date: "Feb 15, 2026",
    type: "appointment",
  },
  {
    title: "Rabies Booster",
    date: "Mar 1, 2026",
    type: "vaccination",
  },
  {
    title: "Bloodwork Recheck",
    date: "Mar 20, 2026",
    type: "test",
  },
]

const alerts = [
  {
    title: "Kidney Function",
    description: "Monitor BUN/Creatinine levels",
    severity: "warning",
  },
  {
    title: "Liver Enzymes",
    description: "ALT/ALP elevated - follow up needed",
    severity: "critical",
  },
]

export function NavSecondary() {
  return (
    <div className="hidden lg:flex w-64 flex-col gap-4 border-l border-border bg-card/50 p-4 overflow-auto">
      <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="px-0 pt-0 pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-medium">
            <Calendar className="size-4" />
            Upcoming
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="space-y-3">
            {upcomingItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-lg p-2 hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <Clock className="size-4 mt-0.5 text-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="px-0 pt-0 pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-medium">
            <AlertTriangle className="size-4 text-status-high" />
            Health Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.title}
                className={`rounded-lg p-3 ${
                  alert.severity === "critical"
                    ? "bg-status-critical-bg"
                    : "bg-status-high-bg"
                }`}
              >
                <p
                  className={`text-sm font-medium ${
                    alert.severity === "critical"
                      ? "text-status-critical"
                      : "text-status-high"
                  }`}
                >
                  {alert.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {alert.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-none bg-transparent mt-auto">
        <CardHeader className="px-0 pt-0 pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-medium">
            <TrendingUp className="size-4 text-status-normal" />
            Quick Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-accent/50 p-3 text-center">
              <p className="text-2xl font-bold text-foreground">68</p>
              <p className="text-xs text-muted-foreground">Weight (lbs)</p>
            </div>
            <div className="rounded-lg bg-accent/50 p-3 text-center">
              <p className="text-2xl font-bold text-foreground">7</p>
              <p className="text-xs text-muted-foreground">Age (years)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
