"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ColorSwatchProps {
  name: string
  token: string
  className?: string
  foregroundToken?: string
}

function ColorSwatch({ name, token, className, foregroundToken }: ColorSwatchProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(token)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "flex flex-col items-start gap-1.5 group cursor-pointer text-left",
        className
      )}
    >
      <div
        className="w-full aspect-[4/3] rounded-lg border border-border shadow-sm transition-transform group-hover:scale-105"
        style={{ backgroundColor: `var(${token})` }}
      >
        {foregroundToken && (
          <div
            className="p-2 text-xs font-medium"
            style={{ color: `var(${foregroundToken})` }}
          >
            Aa
          </div>
        )}
      </div>
      <div className="space-y-0">
        <p className="text-xs font-medium text-foreground leading-tight">{name}</p>
        <p className="text-[11px] text-muted-foreground font-mono leading-tight">
          {copied ? "Copied!" : token}
        </p>
      </div>
    </button>
  )
}

const coreColors = [
  { name: "Background", token: "--background", foreground: "--foreground" },
  { name: "Foreground", token: "--foreground" },
  { name: "Card", token: "--card", foreground: "--card-foreground" },
  { name: "Card Foreground", token: "--card-foreground" },
  { name: "Primary", token: "--primary", foreground: "--primary-foreground" },
  { name: "Primary Foreground", token: "--primary-foreground" },
  { name: "Secondary", token: "--secondary", foreground: "--secondary-foreground" },
  { name: "Secondary Foreground", token: "--secondary-foreground" },
  { name: "Muted", token: "--muted", foreground: "--muted-foreground" },
  { name: "Muted Foreground", token: "--muted-foreground" },
  { name: "Accent", token: "--accent", foreground: "--accent-foreground" },
  { name: "Accent Foreground", token: "--accent-foreground" },
  { name: "Destructive", token: "--destructive", foreground: "--destructive-foreground" },
  { name: "Border", token: "--border" },
  { name: "Input", token: "--input" },
  { name: "Ring", token: "--ring" },
]

const statusColors = [
  { name: "Normal", token: "--status-normal" },
  { name: "Normal BG", token: "--status-normal-bg" },
  { name: "High", token: "--status-high" },
  { name: "High BG", token: "--status-high-bg" },
  { name: "Low", token: "--status-low" },
  { name: "Low BG", token: "--status-low-bg" },
  { name: "Critical", token: "--status-critical" },
  { name: "Critical BG", token: "--status-critical-bg" },
]

const chartColors = [
  { name: "Chart 1", token: "--chart-1" },
  { name: "Chart 2", token: "--chart-2" },
  { name: "Chart 3", token: "--chart-3" },
  { name: "Chart 4", token: "--chart-4" },
  { name: "Chart 5", token: "--chart-5" },
]

const sidebarColors = [
  { name: "Sidebar", token: "--sidebar", foreground: "--sidebar-foreground" },
  { name: "Sidebar FG", token: "--sidebar-foreground" },
  { name: "Sidebar Primary", token: "--sidebar-primary", foreground: "--sidebar-primary-foreground" },
  { name: "Sidebar Accent", token: "--sidebar-accent", foreground: "--sidebar-accent-foreground" },
  { name: "Sidebar Border", token: "--sidebar-border" },
]

export function ColorPalette() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-1">Core Tokens</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Click any swatch to copy its CSS variable name
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {coreColors.map((color) => (
            <ColorSwatch
              key={color.token}
              name={color.name}
              token={color.token}
              foregroundToken={color.foreground}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-1">Status Colors</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Used for bloodwork badges and health indicators
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {statusColors.map((color) => (
            <ColorSwatch key={color.token} name={color.name} token={color.token} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-1">Chart Colors</h3>
        <p className="text-xs text-muted-foreground mb-4">
          For data visualizations and graphs
        </p>
        <div className="grid grid-cols-5 sm:grid-cols-5 gap-3 max-w-md">
          {chartColors.map((color) => (
            <ColorSwatch key={color.token} name={color.name} token={color.token} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-1">Sidebar Tokens</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Dedicated tokens for sidebar navigation
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-w-lg">
          {sidebarColors.map((color) => (
            <ColorSwatch
              key={color.token}
              name={color.name}
              token={color.token}
              foregroundToken={color.foreground}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
