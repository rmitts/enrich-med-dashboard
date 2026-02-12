"use client"

import { Badge } from "@/components/ui/badge"

const typographyScale = [
  {
    label: "Page Title",
    classes: "text-2xl font-bold text-foreground",
    sample: "Bloodwork Analysis",
    usage: "Primary page headings",
  },
  {
    label: "Page Subtitle",
    classes: "text-base text-muted-foreground",
    sample: "Compare panels across multiple dates",
    usage: "Descriptions below page titles",
  },
  {
    label: "Section Heading",
    classes: "text-lg font-semibold text-foreground",
    sample: "Key Findings from Latest Panel",
    usage: "Card and section headers",
  },
  {
    label: "Card Title",
    classes: "text-sm font-medium text-foreground",
    sample: "Upcoming Appointments",
    usage: "Sidebar cards, small section labels",
  },
  {
    label: "Table Header",
    classes: "text-sm font-semibold text-foreground",
    sample: "Parameter",
    usage: "Table column headers",
  },
  {
    label: "Body Text",
    classes: "text-sm text-foreground",
    sample: "BUN and Creatinine both elevated, indicating reduced filtration.",
    usage: "Default content, table cells, descriptions",
  },
  {
    label: "Small Label",
    classes: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
    sample: "SELECT DATES TO COMPARE",
    usage: "Section micro-labels, pill group titles",
  },
  {
    label: "Caption",
    classes: "text-xs text-muted-foreground",
    sample: "Golden Retriever - 7 years old",
    usage: "Metadata, timestamps, secondary info",
  },
  {
    label: "Mono / Code",
    classes: "text-xs font-mono text-muted-foreground",
    sample: "--primary: oklch(0.65 0.15 55)",
    usage: "Code references, CSS variable names",
  },
]

export function TypographyShowcase() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold text-foreground">Type Scale</h3>
        <p className="text-xs text-muted-foreground">
          {"Font family: DM Sans (variable weight). All sizes use Tailwind's default scale."}
        </p>
      </div>

      <div className="flex flex-col gap-0 rounded-lg border border-border overflow-hidden">
        {typographyScale.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 ${
              i !== typographyScale.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="shrink-0 w-full md:w-36">
              <Badge variant="outline" className="font-mono text-xs">
                {item.label}
              </Badge>
            </div>
            <div className="flex-1 min-w-0">
              <p className={item.classes}>{item.sample}</p>
            </div>
            <div className="shrink-0 w-full md:w-56">
              <p className="text-xs text-muted-foreground">{item.usage}</p>
              <p className="text-xs font-mono text-muted-foreground/70 mt-0.5 truncate">
                {item.classes}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border p-6 bg-card">
        <h4 className="text-sm font-semibold text-foreground mb-4">Paragraph Rendering</h4>
        <div className="max-w-2xl flex flex-col gap-4">
          <p className="text-sm text-foreground leading-relaxed">
            {"BUN (43) and Creatinine (2.12) are both elevated, indicating reduced kidney filtration. Phosphorus appears normal at 4.2 mg/dL but this is deceptively normal — PTH compensation is likely masking the severity of the underlying condition."}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {"ALT (308) and ALP (495) are severely elevated. GGT (28) elevation in a post-cholecystectomy patient suggests potential cholestasis. These values warrant immediate follow-up with the veterinary team."}
          </p>
        </div>
      </div>
    </div>
  )
}
