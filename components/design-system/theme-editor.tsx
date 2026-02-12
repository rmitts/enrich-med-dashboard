"use client"

import { useState, useCallback, useEffect } from "react"
import { RotateCcw, Check, Download } from "lucide-react"
import { saveTheme, clearTheme, getSavedTheme, loadGoogleFont, clearThemeFromDOM, type SavedTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ThemePreset {
  name: string
  description: string
  tokens: Record<string, string>
}

const presets: ThemePreset[] = [
  {
    name: "Warm Cream",
    description: "Warm amber and cream - the default PawHealth palette",
    tokens: {
      "--background": "oklch(0.97 0.01 85)",
      "--foreground": "oklch(0.25 0.02 45)",
      "--card": "oklch(0.99 0.005 85)",
      "--card-foreground": "oklch(0.25 0.02 45)",
      "--popover": "oklch(0.99 0.005 85)",
      "--popover-foreground": "oklch(0.25 0.02 45)",
      "--primary": "oklch(0.65 0.15 55)",
      "--primary-foreground": "oklch(0.99 0.005 85)",
      "--secondary": "oklch(0.94 0.015 85)",
      "--secondary-foreground": "oklch(0.35 0.02 45)",
      "--muted": "oklch(0.92 0.015 85)",
      "--muted-foreground": "oklch(0.50 0.02 45)",
      "--accent": "oklch(0.90 0.02 85)",
      "--accent-foreground": "oklch(0.25 0.02 45)",
      "--destructive": "oklch(0.55 0.20 25)",
      "--destructive-foreground": "oklch(0.98 0.01 25)",
      "--border": "oklch(0.88 0.02 85)",
      "--input": "oklch(0.92 0.015 85)",
      "--ring": "oklch(0.65 0.15 55)",
      "--sidebar": "oklch(0.98 0.01 85)",
      "--sidebar-foreground": "oklch(0.30 0.02 45)",
      "--sidebar-primary": "oklch(0.65 0.15 55)",
      "--sidebar-primary-foreground": "oklch(0.99 0.005 85)",
      "--sidebar-accent": "oklch(0.94 0.02 85)",
      "--sidebar-accent-foreground": "oklch(0.25 0.02 45)",
      "--sidebar-border": "oklch(0.90 0.02 85)",
      "--sidebar-ring": "oklch(0.65 0.15 55)",
    },
  },
  {
    name: "Cool Slate",
    description: "Modern blue-gray with indigo accents",
    tokens: {
      "--background": "oklch(0.97 0.005 260)",
      "--foreground": "oklch(0.20 0.02 260)",
      "--card": "oklch(0.99 0.003 260)",
      "--card-foreground": "oklch(0.20 0.02 260)",
      "--popover": "oklch(0.99 0.003 260)",
      "--popover-foreground": "oklch(0.20 0.02 260)",
      "--primary": "oklch(0.55 0.18 265)",
      "--primary-foreground": "oklch(0.98 0.005 260)",
      "--secondary": "oklch(0.94 0.008 260)",
      "--secondary-foreground": "oklch(0.30 0.02 260)",
      "--muted": "oklch(0.92 0.008 260)",
      "--muted-foreground": "oklch(0.50 0.015 260)",
      "--accent": "oklch(0.90 0.01 260)",
      "--accent-foreground": "oklch(0.20 0.02 260)",
      "--destructive": "oklch(0.55 0.20 25)",
      "--destructive-foreground": "oklch(0.98 0.01 25)",
      "--border": "oklch(0.88 0.01 260)",
      "--input": "oklch(0.92 0.008 260)",
      "--ring": "oklch(0.55 0.18 265)",
      "--sidebar": "oklch(0.98 0.005 260)",
      "--sidebar-foreground": "oklch(0.25 0.02 260)",
      "--sidebar-primary": "oklch(0.55 0.18 265)",
      "--sidebar-primary-foreground": "oklch(0.98 0.005 260)",
      "--sidebar-accent": "oklch(0.94 0.008 260)",
      "--sidebar-accent-foreground": "oklch(0.20 0.02 260)",
      "--sidebar-border": "oklch(0.88 0.01 260)",
      "--sidebar-ring": "oklch(0.55 0.18 265)",
    },
  },
  {
    name: "Forest Green",
    description: "Natural greens with warm earth tones",
    tokens: {
      "--background": "oklch(0.97 0.01 145)",
      "--foreground": "oklch(0.22 0.03 145)",
      "--card": "oklch(0.99 0.005 145)",
      "--card-foreground": "oklch(0.22 0.03 145)",
      "--popover": "oklch(0.99 0.005 145)",
      "--popover-foreground": "oklch(0.22 0.03 145)",
      "--primary": "oklch(0.55 0.14 155)",
      "--primary-foreground": "oklch(0.98 0.005 145)",
      "--secondary": "oklch(0.94 0.015 145)",
      "--secondary-foreground": "oklch(0.30 0.03 145)",
      "--muted": "oklch(0.92 0.015 145)",
      "--muted-foreground": "oklch(0.48 0.02 145)",
      "--accent": "oklch(0.90 0.02 145)",
      "--accent-foreground": "oklch(0.22 0.03 145)",
      "--destructive": "oklch(0.55 0.20 25)",
      "--destructive-foreground": "oklch(0.98 0.01 25)",
      "--border": "oklch(0.88 0.02 145)",
      "--input": "oklch(0.92 0.015 145)",
      "--ring": "oklch(0.55 0.14 155)",
      "--sidebar": "oklch(0.98 0.01 145)",
      "--sidebar-foreground": "oklch(0.25 0.03 145)",
      "--sidebar-primary": "oklch(0.55 0.14 155)",
      "--sidebar-primary-foreground": "oklch(0.98 0.005 145)",
      "--sidebar-accent": "oklch(0.94 0.015 145)",
      "--sidebar-accent-foreground": "oklch(0.22 0.03 145)",
      "--sidebar-border": "oklch(0.88 0.02 145)",
      "--sidebar-ring": "oklch(0.55 0.14 155)",
    },
  },
  {
    name: "Rose Clinical",
    description: "Clean rose and warm gray for a medical aesthetic",
    tokens: {
      "--background": "oklch(0.97 0.008 10)",
      "--foreground": "oklch(0.22 0.015 10)",
      "--card": "oklch(0.99 0.004 10)",
      "--card-foreground": "oklch(0.22 0.015 10)",
      "--popover": "oklch(0.99 0.004 10)",
      "--popover-foreground": "oklch(0.22 0.015 10)",
      "--primary": "oklch(0.60 0.16 15)",
      "--primary-foreground": "oklch(0.98 0.005 10)",
      "--secondary": "oklch(0.94 0.01 10)",
      "--secondary-foreground": "oklch(0.30 0.015 10)",
      "--muted": "oklch(0.92 0.01 10)",
      "--muted-foreground": "oklch(0.50 0.015 10)",
      "--accent": "oklch(0.90 0.012 10)",
      "--accent-foreground": "oklch(0.22 0.015 10)",
      "--destructive": "oklch(0.55 0.20 25)",
      "--destructive-foreground": "oklch(0.98 0.01 25)",
      "--border": "oklch(0.88 0.012 10)",
      "--input": "oklch(0.92 0.01 10)",
      "--ring": "oklch(0.60 0.16 15)",
      "--sidebar": "oklch(0.98 0.008 10)",
      "--sidebar-foreground": "oklch(0.25 0.015 10)",
      "--sidebar-primary": "oklch(0.60 0.16 15)",
      "--sidebar-primary-foreground": "oklch(0.98 0.005 10)",
      "--sidebar-accent": "oklch(0.94 0.01 10)",
      "--sidebar-accent-foreground": "oklch(0.22 0.015 10)",
      "--sidebar-border": "oklch(0.88 0.012 10)",
      "--sidebar-ring": "oklch(0.60 0.16 15)",
    },
  },
  {
    name: "Midnight",
    description: "Dark mode with deep navy and teal accents",
    tokens: {
      "--background": "oklch(0.18 0.015 260)",
      "--foreground": "oklch(0.93 0.005 260)",
      "--card": "oklch(0.22 0.015 260)",
      "--card-foreground": "oklch(0.93 0.005 260)",
      "--popover": "oklch(0.22 0.015 260)",
      "--popover-foreground": "oklch(0.93 0.005 260)",
      "--primary": "oklch(0.72 0.16 200)",
      "--primary-foreground": "oklch(0.15 0.01 260)",
      "--secondary": "oklch(0.28 0.015 260)",
      "--secondary-foreground": "oklch(0.88 0.005 260)",
      "--muted": "oklch(0.28 0.015 260)",
      "--muted-foreground": "oklch(0.68 0.01 260)",
      "--accent": "oklch(0.30 0.015 260)",
      "--accent-foreground": "oklch(0.93 0.005 260)",
      "--destructive": "oklch(0.60 0.18 25)",
      "--destructive-foreground": "oklch(0.93 0.005 260)",
      "--border": "oklch(0.35 0.015 260)",
      "--input": "oklch(0.28 0.015 260)",
      "--ring": "oklch(0.72 0.16 200)",
      "--sidebar": "oklch(0.15 0.015 260)",
      "--sidebar-foreground": "oklch(0.88 0.005 260)",
      "--sidebar-primary": "oklch(0.72 0.16 200)",
      "--sidebar-primary-foreground": "oklch(0.15 0.01 260)",
      "--sidebar-accent": "oklch(0.25 0.015 260)",
      "--sidebar-accent-foreground": "oklch(0.88 0.005 260)",
      "--sidebar-border": "oklch(0.30 0.015 260)",
      "--sidebar-ring": "oklch(0.72 0.16 200)",
    },
  },
]

const fontOptions = [
  { value: "dm-sans", label: "DM Sans (Current)", css: "'DM Sans', sans-serif" },
  { value: "inter", label: "Inter", css: "'Inter', sans-serif" },
  { value: "geist", label: "Geist", css: "'Geist', sans-serif" },
  { value: "system", label: "System UI", css: "system-ui, sans-serif" },
  { value: "source-serif", label: "Source Serif Pro", css: "'Source Serif Pro', serif" },
]

export function ThemeEditor() {
  const [activePreset, setActivePreset] = useState(0)
  const [radius, setRadius] = useState(8)
  const [font, setFont] = useState("dm-sans")
  const [isLive, setIsLive] = useState(false)
  const [hasApplied, setHasApplied] = useState(false)
  const [showAppliedToast, setShowAppliedToast] = useState(false)

  // Load saved theme on mount
  useEffect(() => {
    const saved = getSavedTheme()
    if (saved) {
      setActivePreset(saved.presetIndex)
      setRadius(saved.radius)
      setFont(saved.fontValue)
      setHasApplied(true)
    }
  }, [])

  const applyThemeToDOM = useCallback(
    (preset: ThemePreset, radiusVal: number, fontVal: string) => {
      const root = document.documentElement
      for (const [key, value] of Object.entries(preset.tokens)) {
        root.style.setProperty(key, value)
      }
      root.style.setProperty("--radius", `${radiusVal / 16}rem`)
      const selectedFont = fontOptions.find((f) => f.value === fontVal)
      if (selectedFont) {
        // Load the Google Font file dynamically
        loadGoogleFont(fontVal)
        // Set the CSS variable
        root.style.setProperty("--font-sans", selectedFont.css)
        // Also set directly on body to override Tailwind's compiled font-sans
        document.body.style.fontFamily = selectedFont.css
      }
    },
    []
  )

  const handleApplyTheme = useCallback(() => {
    const preset = presets[activePreset]
    const selectedFont = fontOptions.find((f) => f.value === font)
    applyThemeToDOM(preset, radius, font)
    saveTheme({
      presetIndex: activePreset,
      tokens: preset.tokens,
      radius,
      fontCss: selectedFont?.css || "'DM Sans', sans-serif",
      presetName: preset.name,
      fontValue: font,
    })
    setHasApplied(true)
    setIsLive(true)
    setShowAppliedToast(true)
    setTimeout(() => setShowAppliedToast(false), 2500)
  }, [activePreset, radius, font, applyThemeToDOM])

  const resetTheme = useCallback(() => {
    clearThemeFromDOM()
    clearTheme()
    setActivePreset(0)
    setRadius(8)
    setFont("dm-sans")
    setIsLive(false)
    setHasApplied(false)
  }, [])

  const handlePresetChange = (index: number) => {
    setActivePreset(index)
    if (isLive) {
      applyThemeToDOM(presets[index], radius, font)
    }
  }

  const handleRadiusChange = (value: number[]) => {
    setRadius(value[0])
    if (isLive) {
      applyThemeToDOM(presets[activePreset], value[0], font)
    }
  }

  const handleFontChange = (value: string) => {
    setFont(value)
    if (isLive) {
      applyThemeToDOM(presets[activePreset], radius, value)
    }
  }

  const handleToggleLive = (checked: boolean) => {
    setIsLive(checked)
    if (checked) {
      applyThemeToDOM(presets[activePreset], radius, font)
    } else {
      // If there's a saved theme, revert to that; otherwise clear all
      const saved = getSavedTheme()
      if (saved) {
        applyThemeToDOM(presets[saved.presetIndex], saved.radius, saved.fontValue)
        setActivePreset(saved.presetIndex)
        setRadius(saved.radius)
        setFont(saved.fontValue)
      } else {
        clearThemeFromDOM()
        setActivePreset(0)
        setRadius(8)
        setFont("dm-sans")
      }
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Applied Theme Toast */}
      {showAppliedToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-3 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Check className="size-4" />
          <span className="text-sm font-medium">Theme applied across all pages</span>
        </div>
      )}

      {/* Apply Theme Bar */}
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold text-foreground">Apply Theme Globally</p>
            <p className="text-xs text-muted-foreground">
              Save your selections and apply them across every page in the dashboard
            </p>
          </div>
          <div className="flex items-center gap-2">
            {hasApplied && (
              <Button variant="ghost" size="sm" onClick={resetTheme} className="gap-1.5">
                <RotateCcw className="size-3" />
                Reset to Default
              </Button>
            )}
            <Button size="sm" onClick={handleApplyTheme} className="gap-1.5">
              <Download className="size-3" />
              Apply Theme
            </Button>
          </div>
        </div>
        {hasApplied && (
          <div className="mt-3 flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2">
            <Check className="size-3.5 text-primary" />
            <p className="text-xs text-primary font-medium">
              Active: {presets[activePreset]?.name} / {fontOptions.find((f) => f.value === font)?.label} / {radius}px radius
            </p>
          </div>
        )}
      </div>

      {/* Live Preview Toggle */}
      <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
        <div className="flex flex-col gap-0.5">
          <Label htmlFor="live-preview" className="text-sm font-medium cursor-pointer">
            Live Preview Mode
          </Label>
          <p className="text-xs text-muted-foreground">
            Preview changes in real-time before applying
          </p>
        </div>
        <Switch id="live-preview" checked={isLive} onCheckedChange={handleToggleLive} />
      </div>

      {/* Color Presets */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Color Palette Presets</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {presets.map((preset, i) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => handlePresetChange(i)}
              className={`text-left rounded-lg border p-4 transition-all ${
                activePreset === i
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm font-medium text-foreground">{preset.name}</p>
                {activePreset === i && (
                  <Badge variant="outline" className="bg-primary/10 text-primary border-0 text-[10px]">
                    Active
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-3">{preset.description}</p>
              {/* Mini preview swatches */}
              <div className="flex gap-1.5">
                {["--background", "--primary", "--foreground", "--muted", "--border"].map(
                  (token) => (
                    <div
                      key={token}
                      className="size-6 rounded-md border border-black/10"
                      style={{ backgroundColor: preset.tokens[token] || "transparent" }}
                    />
                  )
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Border Radius */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Border Radius</h3>
        <div className="flex items-center gap-6 max-w-md">
          <Slider
            value={[radius]}
            min={0}
            max={20}
            step={2}
            onValueChange={handleRadiusChange}
            className="flex-1"
          />
          <span className="text-sm font-mono text-muted-foreground w-16 text-right shrink-0">
            {radius}px
          </span>
        </div>
        <div className="flex gap-3 mt-1">
          {[0, 4, 8, 12, 16, 20].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => handleRadiusChange([val])}
              className={`size-10 border transition-all ${
                radius === val ? "border-primary bg-primary/10" : "border-border bg-card"
              }`}
              style={{ borderRadius: `${val}px` }}
            >
              <span className="text-[10px] font-mono text-muted-foreground">{val}</span>
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Font Family */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Font Family</h3>
        <Select value={font} onValueChange={handleFontChange}>
          <SelectTrigger className="max-w-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((f) => (
              <SelectItem key={f.value} value={f.value}>
                <span style={{ fontFamily: f.css }}>{f.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* Font preview */}
        <div className="rounded-lg border border-border bg-card p-4 max-w-lg">
          <p
            className="text-2xl font-bold text-foreground mb-1"
            style={{
              fontFamily: fontOptions.find((f) => f.value === font)?.css,
            }}
          >
            Bloodwork Analysis
          </p>
          <p
            className="text-sm text-muted-foreground"
            style={{
              fontFamily: fontOptions.find((f) => f.value === font)?.css,
            }}
          >
            Compare panels across multiple dates for your pet
          </p>
        </div>
      </div>

      <Separator />

      {/* Generated CSS Output */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">Generated CSS</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const css = generateCSSOutput(presets[activePreset], radius, font)
              navigator.clipboard.writeText(css)
            }}
          >
            Copy CSS
          </Button>
        </div>
        <pre className="rounded-lg border border-border bg-foreground/5 p-4 text-xs font-mono text-foreground overflow-x-auto max-h-64 overflow-y-auto">
          {generateCSSOutput(presets[activePreset], radius, font)}
        </pre>
      </div>
    </div>
  )
}

function generateCSSOutput(preset: ThemePreset, radius: number, font: string): string {
  const selectedFont = fontOptions.find((f) => f.value === font)
  const lines = [":root {"]
  for (const [key, value] of Object.entries(preset.tokens)) {
    lines.push(`  ${key}: ${value};`)
  }
  lines.push(`  --radius: ${radius / 16}rem;`)
  lines.push("}")
  lines.push("")
  lines.push("@theme inline {")
  lines.push(`  --font-sans: ${selectedFont?.css || "'DM Sans', sans-serif"};`)
  lines.push("}")
  return lines.join("\n")
}
