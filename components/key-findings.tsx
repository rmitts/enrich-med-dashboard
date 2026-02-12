"use client"

import { AlertTriangle } from "lucide-react"
import type { KeyFinding } from "@/lib/bloodwork-data"

interface KeyFindingsProps {
  findings: KeyFinding[]
}

export function KeyFindings({ findings }: KeyFindingsProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold mb-4">Key Findings from Latest Panel</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {findings.map((finding) => (
          <div
            key={finding.title}
            className={`rounded-lg p-4 ${
              finding.severity === "critical"
                ? "bg-status-critical-bg/50"
                : "bg-status-high-bg/50"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle
                className={`size-4 ${
                  finding.severity === "critical"
                    ? "text-status-critical"
                    : "text-status-high"
                }`}
              />
              <h4
                className={`font-semibold ${
                  finding.severity === "critical"
                    ? "text-status-critical"
                    : "text-status-high"
                }`}
              >
                {finding.title}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {finding.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
