"use client"

import { useEffect } from "react"

const THEME_KEY = "pawhealth-theme"

// Google Fonts URL mapping for dynamic loading
const FONT_URLS: Record<string, string> = {
  "dm-sans": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
  "inter": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
  "geist": "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&display=swap",
  "source-serif": "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap",
  "system": "",
}

export interface SavedTheme {
  presetIndex: number
  tokens: Record<string, string>
  radius: number
  fontCss: string
  presetName: string
  fontValue: string
}

export function saveTheme(theme: SavedTheme) {
  localStorage.setItem(THEME_KEY, JSON.stringify(theme))
}

export function clearTheme() {
  localStorage.removeItem(THEME_KEY)
}

export function getSavedTheme(): SavedTheme | null {
  try {
    const raw = localStorage.getItem(THEME_KEY)
    if (!raw) return null
    return JSON.parse(raw) as SavedTheme
  } catch {
    return null
  }
}

export function loadGoogleFont(fontValue: string) {
  const url = FONT_URLS[fontValue]
  if (!url) return
  // Check if already loaded
  const existing = document.querySelector(`link[data-font="${fontValue}"]`)
  if (existing) return
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = url
  link.dataset.font = fontValue
  document.head.appendChild(link)
}

function applyThemeToDOM(theme: SavedTheme) {
  const root = document.documentElement
  for (const [key, value] of Object.entries(theme.tokens)) {
    root.style.setProperty(key, value)
  }
  root.style.setProperty("--radius", `${theme.radius / 16}rem`)
  // Load the font file from Google Fonts
  loadGoogleFont(theme.fontValue)
  // Set the CSS variable AND directly on body so it overrides Tailwind's compiled font-sans
  root.style.setProperty("--font-sans", theme.fontCss)
  document.body.style.fontFamily = theme.fontCss
}

export function clearThemeFromDOM() {
  const root = document.documentElement
  const allProps = [
    "--background", "--foreground", "--card", "--card-foreground",
    "--popover", "--popover-foreground", "--primary", "--primary-foreground",
    "--secondary", "--secondary-foreground", "--muted", "--muted-foreground",
    "--accent", "--accent-foreground", "--destructive", "--destructive-foreground",
    "--border", "--input", "--ring",
    "--sidebar", "--sidebar-foreground", "--sidebar-primary",
    "--sidebar-primary-foreground", "--sidebar-accent",
    "--sidebar-accent-foreground", "--sidebar-border", "--sidebar-ring",
    "--radius", "--font-sans",
  ]
  for (const prop of allProps) {
    root.style.removeProperty(prop)
  }
  document.body.style.fontFamily = ""
}

export function ThemeLoader() {
  useEffect(() => {
    const saved = getSavedTheme()
    if (saved) {
      applyThemeToDOM(saved)
    }
  }, [])

  return null
}
