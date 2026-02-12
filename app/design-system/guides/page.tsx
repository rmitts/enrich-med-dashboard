"use client"

import * as React from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check, Copy, Plus, Trash2, Palette } from "lucide-react"
import { saveTheme, getSavedTheme, loadGoogleFont } from "@/components/theme-provider"

const TOKEN_KEYS = [
  { key: "--background", label: "Background" },
  { key: "--foreground", label: "Foreground" },
  { key: "--card", label: "Card" },
  { key: "--card-foreground", label: "Card FG" },
  { key: "--popover", label: "Popover" },
  { key: "--popover-foreground", label: "Popover FG" },
  { key: "--primary", label: "Primary" },
  { key: "--primary-foreground", label: "Primary FG" },
  { key: "--secondary", label: "Secondary" },
  { key: "--secondary-foreground", label: "Secondary FG" },
  { key: "--muted", label: "Muted" },
  { key: "--muted-foreground", label: "Muted FG" },
  { key: "--accent", label: "Accent" },
  { key: "--accent-foreground", label: "Accent FG" },
  { key: "--destructive", label: "Destructive" },
  { key: "--destructive-foreground", label: "Destructive FG" },
  { key: "--border", label: "Border" },
  { key: "--input", label: "Input" },
  { key: "--ring", label: "Ring" },
  { key: "--sidebar", label: "Sidebar" },
  { key: "--sidebar-foreground", label: "Sidebar FG" },
  { key: "--sidebar-primary", label: "Sidebar Primary" },
  { key: "--sidebar-primary-foreground", label: "Sidebar Primary FG" },
  { key: "--sidebar-accent", label: "Sidebar Accent" },
  { key: "--sidebar-accent-foreground", label: "Sidebar Accent FG" },
  { key: "--sidebar-border", label: "Sidebar Border" },
  { key: "--sidebar-ring", label: "Sidebar Ring" },
]

const CUSTOM_THEMES_KEY = "pawhealth-custom-themes"

interface CustomTheme {
  id: string
  name: string
  tokens: Record<string, string>
}

function loadCustomThemes(): CustomTheme[] {
  try {
    const raw = localStorage.getItem(CUSTOM_THEMES_KEY)
    if (!raw) return []
    return JSON.parse(raw) as CustomTheme[]
  } catch {
    return []
  }
}

function saveCustomThemes(themes: CustomTheme[]) {
  localStorage.setItem(CUSTOM_THEMES_KEY, JSON.stringify(themes))
}

function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = React.useState(false)
  return (
    <div className={`relative group ${className || ""}`}>
      <pre className="rounded-lg border border-border bg-foreground/5 p-4 text-xs font-mono text-foreground overflow-x-auto">
        {code}
      </pre>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(code)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        }}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-card border border-border opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="size-3 text-status-normal" /> : <Copy className="size-3 text-muted-foreground" />}
      </button>
    </div>
  )
}

function CustomThemeBuilder() {
  const [themes, setThemes] = React.useState<CustomTheme[]>([])
  const [name, setName] = React.useState("")
  const [tokens, setTokens] = React.useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {}
    for (const t of TOKEN_KEYS) {
      defaults[t.key] = ""
    }
    return defaults
  })
  const [showToast, setShowToast] = React.useState(false)
  const [toastMessage, setToastMessage] = React.useState("")

  React.useEffect(() => {
    setThemes(loadCustomThemes())
  }, [])

  const toast = (msg: string) => {
    setToastMessage(msg)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2500)
  }

  const handleSaveTheme = () => {
    if (!name.trim()) return
    const hasValues = Object.values(tokens).some((v) => v.trim() !== "")
    if (!hasValues) return

    const newTheme: CustomTheme = {
      id: Date.now().toString(),
      name: name.trim(),
      tokens: Object.fromEntries(Object.entries(tokens).filter(([, v]) => v.trim() !== "")),
    }
    const updated = [...themes, newTheme]
    setThemes(updated)
    saveCustomThemes(updated)
    setName("")
    const cleared: Record<string, string> = {}
    for (const t of TOKEN_KEYS) cleared[t.key] = ""
    setTokens(cleared)
    toast(`Theme "${newTheme.name}" saved`)
  }

  const handleApplyCustomTheme = (theme: CustomTheme) => {
    const root = document.documentElement
    for (const [key, value] of Object.entries(theme.tokens)) {
      root.style.setProperty(key, value)
    }
    // Get current font or default
    const saved = getSavedTheme()
    const fontCss = saved?.fontCss || "'DM Sans', sans-serif"
    const fontValue = saved?.fontValue || "dm-sans"
    const radius = saved?.radius || 8
    root.style.setProperty("--font-sans", fontCss)
    document.body.style.fontFamily = fontCss
    loadGoogleFont(fontValue)
    saveTheme({
      presetIndex: -1,
      tokens: theme.tokens,
      radius,
      fontCss,
      presetName: theme.name,
      fontValue,
    })
    toast(`Applied "${theme.name}"`)
  }

  const handleDeleteTheme = (id: string) => {
    const updated = themes.filter((t) => t.id !== id)
    setThemes(updated)
    saveCustomThemes(updated)
  }

  const handlePrefill = () => {
    const root = document.documentElement
    const style = getComputedStyle(root)
    const filled: Record<string, string> = {}
    for (const t of TOKEN_KEYS) {
      const val = root.style.getPropertyValue(t.key) || style.getPropertyValue(t.key)
      filled[t.key] = val.trim()
    }
    setTokens(filled)
    toast("Prefilled from current theme")
  }

  return (
    <div className="flex flex-col gap-6">
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-3 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Check className="size-4" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Saved Custom Themes */}
      {themes.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">Your Custom Themes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {themes.map((theme) => (
              <div key={theme.id} className="rounded-lg border border-border bg-card p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">{theme.name}</p>
                  <button
                    type="button"
                    onClick={() => handleDeleteTheme(theme.id)}
                    className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Delete theme"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
                <div className="flex gap-1.5">
                  {TOKEN_KEYS.slice(0, 6).map((t) => (
                    <div
                      key={t.key}
                      className="size-6 rounded-md border border-black/10"
                      style={{ backgroundColor: theme.tokens[t.key] || "transparent" }}
                    />
                  ))}
                </div>
                <Button size="sm" variant="outline" onClick={() => handleApplyCustomTheme(theme)} className="w-full gap-1.5">
                  <Palette className="size-3" />
                  Apply Theme
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Builder Form */}
      <div className="rounded-lg border border-border bg-card p-4 md:p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold text-foreground">Create New Theme</h3>
          <p className="text-xs text-muted-foreground">
            Define oklch() color values for each token. Leave blank to inherit the default. Use the prefill button to start from the current active theme.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2 flex-1">
            <Label htmlFor="theme-name" className="text-xs">Theme Name</Label>
            <Input
              id="theme-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Ocean Breeze"
              className="max-w-xs"
            />
          </div>
          <Button variant="outline" size="sm" onClick={handlePrefill} className="shrink-0 gap-1.5">
            <Copy className="size-3" />
            Prefill from Current
          </Button>
        </div>

        <Separator />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOKEN_KEYS.map((t) => (
            <div key={t.key} className="flex flex-col gap-1.5">
              <Label className="text-xs font-mono text-muted-foreground">{t.key}</Label>
              <div className="flex items-center gap-2">
                <div
                  className="size-8 rounded-md border border-border shrink-0"
                  style={{ backgroundColor: tokens[t.key] || "var(" + t.key + ")" }}
                />
                <Input
                  value={tokens[t.key]}
                  onChange={(e) => setTokens((prev) => ({ ...prev, [t.key]: e.target.value }))}
                  placeholder={`oklch(0.65 0.15 55)`}
                  className="text-xs font-mono"
                />
              </div>
            </div>
          ))}
        </div>

        <Button onClick={handleSaveTheme} disabled={!name.trim()} className="gap-1.5 self-start">
          <Plus className="size-3" />
          Save Theme
        </Button>
      </div>
    </div>
  )
}

export default function GuidesPage() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4 md:px-6">
        <SidebarTrigger className="-ml-2" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/">PawHealth</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/design-system">Design System</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Guides</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground text-balance">Guides & Custom Themes</h1>
            <p className="text-muted-foreground mt-1">
              How to add components, create new themes, and extend the design system
            </p>
          </div>

          <Tabs defaultValue="add-components" className="flex flex-col gap-0">
            <TabsList className="bg-transparent border-b border-border rounded-none w-full justify-start h-auto p-0 gap-0 overflow-x-auto">
              <TabsTrigger
                value="add-components"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm shrink-0"
              >
                Add Components
              </TabsTrigger>
              <TabsTrigger
                value="create-themes"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm shrink-0"
              >
                Create Themes
              </TabsTrigger>
              <TabsTrigger
                value="custom-builder"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm shrink-0"
              >
                Theme Builder
              </TabsTrigger>
              <TabsTrigger
                value="ai-prompts"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5 text-sm shrink-0"
              >
                AI Prompts
              </TabsTrigger>
            </TabsList>

            {/* Add Components Tab */}
            <TabsContent value="add-components" className="mt-6">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-foreground">Adding New shadcn/ui Components</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All 55+ shadcn/ui components are already installed in this project under <code className="text-xs font-mono bg-foreground/5 px-1.5 py-0.5 rounded">components/ui/</code>. They automatically inherit your theme tokens. To use any component, just import it.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Step 1: Import the component</h4>
                  <CodeBlock code={`import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Command, CommandInput, CommandList } from "@/components/ui/command"`} />
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Step 2: Use semantic token classes</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Never use raw colors. Always reference design tokens so your component automatically responds to theme changes.
                  </p>
                  <CodeBlock code={`// DO: Use semantic tokens
<div className="bg-card text-foreground border border-border rounded-lg p-4">
  <p className="text-muted-foreground">Description text</p>
  <Button className="bg-primary text-primary-foreground">Action</Button>
</div>

// DON'T: Use raw colors
<div className="bg-white text-gray-900 border border-gray-200">
  <p className="text-gray-500">Description text</p>
  <Button className="bg-orange-500 text-white">Action</Button>
</div>`} />
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Step 3: Follow existing patterns</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Match the spacing, sizing, and structure used throughout the app:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-border bg-card p-4 flex flex-col gap-2">
                      <p className="text-sm font-medium text-foreground">Icons</p>
                      <p className="text-xs text-muted-foreground">Default: <code className="font-mono bg-foreground/5 px-1 rounded">size-4</code> (16px), small: <code className="font-mono bg-foreground/5 px-1 rounded">size-3</code>, large: <code className="font-mono bg-foreground/5 px-1 rounded">size-5</code></p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-4 flex flex-col gap-2">
                      <p className="text-sm font-medium text-foreground">Spacing</p>
                      <p className="text-xs text-muted-foreground">Use <code className="font-mono bg-foreground/5 px-1 rounded">gap-*</code> for flex/grid. Cards use <code className="font-mono bg-foreground/5 px-1 rounded">p-4</code>. Pages use <code className="font-mono bg-foreground/5 px-1 rounded">p-6</code>.</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-4 flex flex-col gap-2">
                      <p className="text-sm font-medium text-foreground">Borders</p>
                      <p className="text-xs text-muted-foreground">Always <code className="font-mono bg-foreground/5 px-1 rounded">border border-border rounded-lg</code> for containers.</p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-4 flex flex-col gap-2">
                      <p className="text-sm font-medium text-foreground">Typography</p>
                      <p className="text-xs text-muted-foreground">Headings: <code className="font-mono bg-foreground/5 px-1 rounded">font-semibold</code>. Body: <code className="font-mono bg-foreground/5 px-1 rounded">text-sm</code>. Captions: <code className="font-mono bg-foreground/5 px-1 rounded">text-xs text-muted-foreground</code>.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Adding Components to a New Project</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If starting fresh outside v0, use the shadcn CLI to add individual components:
                  </p>
                  <CodeBlock code={`# Initialize shadcn in your project
npx shadcn@latest init

# Add specific components
npx shadcn@latest add button card dialog table tabs badge
npx shadcn@latest add sidebar breadcrumb collapsible separator
npx shadcn@latest add command calendar avatar tooltip

# Add newer components
npx shadcn@latest add kbd spinner empty field`} />
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Available Components</h4>
                  <p className="text-xs text-muted-foreground mb-2">All 55 components currently installed:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "accordion", "alert", "alert-dialog", "aspect-ratio", "avatar", "badge",
                      "breadcrumb", "button", "button-group", "calendar", "card", "carousel",
                      "chart", "checkbox", "collapsible", "command", "context-menu", "dialog",
                      "drawer", "dropdown-menu", "empty", "field", "form", "hover-card",
                      "input", "input-group", "input-otp", "item", "kbd", "label",
                      "menubar", "navigation-menu", "pagination", "popover", "progress",
                      "radio-group", "resizable", "scroll-area", "select", "separator",
                      "sheet", "sidebar", "skeleton", "slider", "sonner", "spinner",
                      "switch", "table", "tabs", "textarea", "toast", "toaster",
                      "toggle", "toggle-group", "tooltip",
                    ].map((name) => (
                      <Badge key={name} variant="outline" className="text-xs font-mono">{name}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Create Themes Tab */}
            <TabsContent value="create-themes" className="mt-6">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-foreground">Creating a New Theme Preset</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Themes are defined as a set of CSS custom property overrides using oklch() color values. The system will apply these values to the root element, and every component that uses semantic tokens will update automatically.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Understanding oklch()</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All colors in this system use <code className="text-xs font-mono bg-foreground/5 px-1.5 py-0.5 rounded">oklch(lightness chroma hue)</code> for perceptually uniform color mixing. This means two colors at the same lightness will actually look the same brightness to the human eye.
                  </p>
                  <CodeBlock code={`// oklch(lightness chroma hue)
// lightness: 0 (black) to 1 (white)
// chroma:    0 (gray) to ~0.4 (most saturated)
// hue:       0-360 color wheel degrees

oklch(0.65 0.15 55)   // Warm amber (hue 55)
oklch(0.55 0.18 265)  // Indigo (hue 265)
oklch(0.55 0.14 155)  // Forest green (hue 155)
oklch(0.97 0.01 85)   // Cream background (high L, low C)`} />
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Hue Reference</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {[
                      { hue: 0, label: "Red" },
                      { hue: 30, label: "Orange" },
                      { hue: 60, label: "Yellow" },
                      { hue: 120, label: "Green" },
                      { hue: 200, label: "Cyan" },
                      { hue: 265, label: "Blue" },
                      { hue: 300, label: "Purple" },
                      { hue: 340, label: "Pink" },
                    ].map((c) => (
                      <div key={c.hue} className="flex flex-col items-center gap-1.5">
                        <div
                          className="w-full aspect-square rounded-lg border border-black/10"
                          style={{ backgroundColor: `oklch(0.65 0.15 ${c.hue})` }}
                        />
                        <p className="text-xs font-mono text-muted-foreground">{c.hue} - {c.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Required Tokens</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    At minimum, define these 12 tokens. The rest will inherit from defaults:
                  </p>
                  <CodeBlock code={`const myTheme = {
  name: "Ocean Breeze",
  description: "Cool blues with a clean, airy feel",
  tokens: {
    "--background":         "oklch(0.97 0.005 220)",
    "--foreground":         "oklch(0.20 0.02 220)",
    "--card":               "oklch(0.99 0.003 220)",
    "--primary":            "oklch(0.55 0.16 220)",
    "--primary-foreground": "oklch(0.98 0.005 220)",
    "--secondary":          "oklch(0.94 0.008 220)",
    "--muted":              "oklch(0.92 0.008 220)",
    "--muted-foreground":   "oklch(0.50 0.015 220)",
    "--accent":             "oklch(0.90 0.01 220)",
    "--border":             "oklch(0.88 0.01 220)",
    "--sidebar":            "oklch(0.98 0.005 220)",
    "--sidebar-primary":    "oklch(0.55 0.16 220)",
  },
}`} />
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Tips for Cohesive Themes</h4>
                  <div className="flex flex-col gap-2">
                    {[
                      "Keep the same hue for background, border, and muted tokens (vary lightness only)",
                      "Primary should be high chroma (0.12-0.18) for contrast against muted surfaces",
                      "Background lightness of 0.95-0.98 works well for light themes, 0.15-0.22 for dark",
                      "Foreground should have high contrast against background (lightness difference > 0.6)",
                      "Border and muted should be between background and foreground in lightness",
                      "Use the Theme Builder tab to visually design and test your custom themes",
                    ].map((tip) => (
                      <div key={tip} className="flex gap-2 items-start">
                        <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Adding a Preset to the Theme Editor</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To add a new built-in preset, add it to the <code className="text-xs font-mono bg-foreground/5 px-1.5 py-0.5 rounded">presets</code> array in <code className="text-xs font-mono bg-foreground/5 px-1.5 py-0.5 rounded">components/design-system/theme-editor.tsx</code>:
                  </p>
                  <CodeBlock code={`// In components/design-system/theme-editor.tsx
const presets: ThemePreset[] = [
  // ... existing presets
  {
    name: "Ocean Breeze",
    description: "Cool blues with a clean, airy feel",
    tokens: {
      "--background": "oklch(0.97 0.005 220)",
      // ... all 12 tokens
    },
  },
]`} />
                </div>
              </div>
            </TabsContent>

            {/* Custom Theme Builder Tab */}
            <TabsContent value="custom-builder" className="mt-6">
              <CustomThemeBuilder />
            </TabsContent>

            {/* AI Prompts Tab */}
            <TabsContent value="ai-prompts" className="mt-6">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-foreground">Using This Design System with AI</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Copy these prompts to use in v0, ChatGPT, Claude, or any AI coding assistant. They provide the context needed to build consistent UIs matching this system.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">v0 Rule (paste into sidebar Rules)</h4>
                  <CodeBlock code={`Use my warm cream/amber design system: oklch colors, DM Sans font, shadcn/ui + Radix UI + Tailwind CSS v4. All colors must use semantic tokens (bg-background, text-foreground, border-border, bg-primary, text-muted-foreground). Never use raw colors like bg-white or text-gray-500. Status indicators use --status-normal (green), --status-high (amber), --status-low (blue), --status-critical (red). Icons use size-4 default. Spacing uses gap-* classes. Cards use rounded-lg border border-border bg-card p-4. Every page has a header with SidebarTrigger + Breadcrumb. Content uses max-w-5xl mx-auto.`} />
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">New Project Prompt</h4>
                  <CodeBlock code={`I have an existing design system. Here are the key files to replicate:

1. Replace globals.css :root tokens with my oklch color system
2. Use DM Sans from next/font/google as the primary font
3. All components use shadcn/ui with Tailwind CSS v4
4. Include a ThemeLoader component that persists theme choices to localStorage
5. Every page follows this structure:
   - Header: h-14, SidebarTrigger + Separator + Breadcrumb
   - Content: flex-1 overflow-auto p-6, max-w-5xl mx-auto
6. Never use raw colors -- always semantic tokens

Paste your globals.css :root block below for exact token values.`} />
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Component Creation Prompt</h4>
                  <CodeBlock code={`Build a [component name] using:
- shadcn/ui primitives from @/components/ui/
- Tailwind CSS v4 with semantic tokens (bg-card, text-foreground, border-border)
- Lucide React icons at size-4
- gap-* for spacing, rounded-lg for containers
- Status colors: bg-status-normal-bg text-status-normal for success states
- Never use raw hex/rgb colors or arbitrary Tailwind values`} />
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-foreground">Portable globals.css</h4>
                  <p className="text-xs text-muted-foreground mb-2">Copy this and paste into any AI prompt for exact color reproduction:</p>
                  <CodeBlock className="max-h-64 overflow-y-auto" code={`:root {
  --background: oklch(0.97 0.01 85);
  --foreground: oklch(0.25 0.02 45);
  --card: oklch(0.99 0.005 85);
  --card-foreground: oklch(0.25 0.02 45);
  --primary: oklch(0.65 0.15 55);
  --primary-foreground: oklch(0.99 0.005 85);
  --secondary: oklch(0.94 0.015 85);
  --secondary-foreground: oklch(0.35 0.02 45);
  --muted: oklch(0.92 0.015 85);
  --muted-foreground: oklch(0.50 0.02 45);
  --accent: oklch(0.90 0.02 85);
  --accent-foreground: oklch(0.25 0.02 45);
  --destructive: oklch(0.55 0.20 25);
  --border: oklch(0.88 0.02 85);
  --input: oklch(0.92 0.015 85);
  --ring: oklch(0.65 0.15 55);
  --status-normal: oklch(0.75 0.15 145);
  --status-normal-bg: oklch(0.92 0.06 145);
  --status-high: oklch(0.70 0.16 70);
  --status-high-bg: oklch(0.92 0.06 70);
  --status-low: oklch(0.65 0.12 230);
  --status-low-bg: oklch(0.92 0.05 230);
  --status-critical: oklch(0.55 0.20 25);
  --status-critical-bg: oklch(0.90 0.08 25);
  --radius: 0.5rem;
  --sidebar: oklch(0.98 0.01 85);
  --sidebar-primary: oklch(0.65 0.15 55);
}`} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
