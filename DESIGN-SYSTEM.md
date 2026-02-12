# Design System Reference

Use this document as the foundation for any new project. It defines the exact stack, color tokens, typography, component patterns, layout conventions, and spacing rules. Follow everything below unless explicitly told otherwise.

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (no tailwind.config.js -- all config lives in globals.css via `@theme inline`)
- **Components:** shadcn/ui (Radix UI primitives, unstyled by default, themed via CSS tokens)
- **Icons:** Lucide React (`lucide-react`), always `size-4` unless in a heading or hero context
- **Font:** DM Sans (variable weight, from `next/font/google`) for all text. Apply via `font-sans` class on `<body>`.

---

## Color System

All colors use `oklch()` for perceptually uniform blending. Never use raw hex, rgb, or hsl values. Always reference semantic tokens.

### Light Mode (:root)

```css
:root {
  /* Core surfaces */
  --background: oklch(0.97 0.01 85);       /* Warm cream page background */
  --foreground: oklch(0.25 0.02 45);       /* Dark brown-gray text */
  --card: oklch(0.99 0.005 85);            /* Slightly lighter cream for cards */
  --card-foreground: oklch(0.25 0.02 45);
  --popover: oklch(0.99 0.005 85);
  --popover-foreground: oklch(0.25 0.02 45);

  /* Brand */
  --primary: oklch(0.65 0.15 55);          /* Warm amber/orange -- the main accent */
  --primary-foreground: oklch(0.99 0.005 85);

  /* Supporting surfaces */
  --secondary: oklch(0.94 0.015 85);
  --secondary-foreground: oklch(0.35 0.02 45);
  --muted: oklch(0.92 0.015 85);
  --muted-foreground: oklch(0.50 0.02 45);
  --accent: oklch(0.90 0.02 85);
  --accent-foreground: oklch(0.25 0.02 45);

  /* Destructive */
  --destructive: oklch(0.55 0.20 25);
  --destructive-foreground: oklch(0.98 0.01 25);

  /* Borders & inputs */
  --border: oklch(0.88 0.02 85);
  --input: oklch(0.92 0.015 85);
  --ring: oklch(0.65 0.15 55);

  /* Status colors (for health data, badges, alerts) */
  --status-normal: oklch(0.75 0.15 145);       /* Green */
  --status-normal-bg: oklch(0.92 0.06 145);
  --status-high: oklch(0.70 0.16 70);           /* Amber/yellow */
  --status-high-bg: oklch(0.92 0.06 70);
  --status-low: oklch(0.65 0.12 230);           /* Blue */
  --status-low-bg: oklch(0.92 0.05 230);
  --status-critical: oklch(0.55 0.20 25);       /* Red */
  --status-critical-bg: oklch(0.90 0.08 25);

  /* Charts */
  --chart-1: oklch(0.65 0.15 55);
  --chart-2: oklch(0.60 0.12 185);
  --chart-3: oklch(0.55 0.10 145);
  --chart-4: oklch(0.75 0.15 85);
  --chart-5: oklch(0.70 0.18 35);

  --radius: 0.5rem;

  /* Sidebar */
  --sidebar: oklch(0.98 0.01 85);
  --sidebar-foreground: oklch(0.30 0.02 45);
  --sidebar-primary: oklch(0.65 0.15 55);
  --sidebar-primary-foreground: oklch(0.99 0.005 85);
  --sidebar-accent: oklch(0.94 0.02 85);
  --sidebar-accent-foreground: oklch(0.25 0.02 45);
  --sidebar-border: oklch(0.90 0.02 85);
  --sidebar-ring: oklch(0.65 0.15 55);
}
```

### Dark Mode

```css
.dark {
  --background: oklch(0.18 0.01 60);
  --foreground: oklch(0.92 0.01 85);
  --card: oklch(0.22 0.01 60);
  --card-foreground: oklch(0.92 0.01 85);
  --popover: oklch(0.22 0.01 60);
  --popover-foreground: oklch(0.92 0.01 85);
  --primary: oklch(0.72 0.14 55);
  --primary-foreground: oklch(0.18 0.01 60);
  --secondary: oklch(0.28 0.01 60);
  --secondary-foreground: oklch(0.92 0.01 85);
  --muted: oklch(0.28 0.01 60);
  --muted-foreground: oklch(0.65 0.01 85);
  --accent: oklch(0.30 0.02 60);
  --accent-foreground: oklch(0.92 0.01 85);
  --destructive: oklch(0.50 0.18 25);
  --destructive-foreground: oklch(0.92 0.01 85);
  --border: oklch(0.32 0.01 60);
  --input: oklch(0.28 0.01 60);
  --ring: oklch(0.72 0.14 55);
  --status-normal: oklch(0.70 0.14 145);
  --status-normal-bg: oklch(0.30 0.04 145);
  --status-high: oklch(0.75 0.15 70);
  --status-high-bg: oklch(0.30 0.04 70);
  --status-low: oklch(0.70 0.12 230);
  --status-low-bg: oklch(0.28 0.04 230);
  --status-critical: oklch(0.60 0.18 25);
  --status-critical-bg: oklch(0.30 0.06 25);
  --chart-1: oklch(0.72 0.14 55);
  --chart-2: oklch(0.65 0.12 185);
  --chart-3: oklch(0.60 0.10 145);
  --chart-4: oklch(0.78 0.14 85);
  --chart-5: oklch(0.72 0.16 35);
  --sidebar: oklch(0.22 0.01 60);
  --sidebar-foreground: oklch(0.92 0.01 85);
  --sidebar-primary: oklch(0.72 0.14 55);
  --sidebar-primary-foreground: oklch(0.18 0.01 60);
  --sidebar-accent: oklch(0.30 0.02 60);
  --sidebar-accent-foreground: oklch(0.92 0.01 85);
  --sidebar-border: oklch(0.32 0.01 60);
  --sidebar-ring: oklch(0.50 0.01 60);
}
```

### Tailwind Theme Mapping (@theme inline)

These go inside the `@theme inline {}` block in `globals.css`. They map CSS variables to Tailwind utility classes (e.g., `bg-primary`, `text-status-critical`, `border-sidebar-border`).

```css
@theme inline {
  --font-sans: 'DM Sans', 'DM Sans Fallback', sans-serif;
  --font-mono: 'DM Mono', 'DM Mono Fallback', monospace;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-status-normal: var(--status-normal);
  --color-status-normal-bg: var(--status-normal-bg);
  --color-status-high: var(--status-high);
  --color-status-high-bg: var(--status-high-bg);
  --color-status-low: var(--status-low);
  --color-status-low-bg: var(--status-low-bg);
  --color-status-critical: var(--status-critical);
  --color-status-critical-bg: var(--status-critical-bg);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}
```

---

## Typography Rules

| Element | Tailwind Classes | Example |
|---------|-----------------|---------|
| Page title | `text-2xl font-bold text-foreground` | "Bloodwork Analysis" |
| Page subtitle | `text-muted-foreground mt-1` (base size) | "Compare panels across multiple dates" |
| Section heading | `text-lg font-semibold` | "Key Findings from Latest Panel" |
| Card title | `text-sm font-medium` | Sidebar card headers like "Upcoming" |
| Table header | `font-semibold` (default size) | Column headers |
| Body/cell text | `text-sm` | Table cell values, descriptions |
| Small label | `text-xs font-semibold uppercase tracking-wider text-muted-foreground` | "SELECT DATES TO COMPARE" |
| Metadata/captions | `text-xs text-muted-foreground` | Dates, secondary info |
| Alert description | `text-sm text-muted-foreground leading-relaxed` | Finding descriptions |

Key rules:
- Use `text-balance` on headings for clean line breaks.
- Use `leading-relaxed` on multi-line body text.
- Never go below `text-xs` (12px). Body text is `text-sm` (14px). Titles are `text-2xl`.
- Muted text always uses `text-muted-foreground`, never raw gray values.

---

## Spacing Conventions

| Context | Pattern | Example |
|---------|---------|---------|
| Page padding | `p-6` | Main content area |
| Section gaps | `space-y-6` | Between page sections |
| Card internal padding | `p-4` or `p-6` | Card content |
| Inline element gaps | `gap-2` | Badge + value pairs, icon + label |
| List item spacing | `space-y-3` | Sidebar items, alert lists |
| Grid gaps | `gap-4` | Two-column layouts |
| Between icon and label | `gap-2` | Sidebar menu items |
| Max content width | `max-w-6xl mx-auto` | Main content container |

Key rules:
- Always use Tailwind spacing scale (`p-4`, `gap-2`, etc.), never arbitrary values.
- Use `gap-*` for flex/grid children, never `space-*`.
- Never mix margin/padding with gap on the same element.

---

## Layout Patterns

### Three-Panel Layout (Sidebar + Content + Secondary Panel)

```tsx
<SidebarProvider>
  <AppSidebar />                              {/* Left: collapsible nav sidebar */}
  <SidebarInset className="overflow-hidden">  {/* Main area (renders as <main>) */}
    <div className="flex flex-1 h-full min-h-0">
      <div className="flex-1 overflow-auto">  {/* Scrollable content */}
        {children}
      </div>
      <NavSecondary />                        {/* Right: contextual info panel */}
    </div>
  </SidebarInset>
</SidebarProvider>
```

- The secondary panel uses `hidden lg:flex w-64` to hide on mobile.
- Content area scrolls independently with `overflow-auto`.

### Page Structure

Every page follows this pattern:

```tsx
<div className="flex flex-col h-full">
  {/* Sticky header with breadcrumbs */}
  <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-6">
    <SidebarTrigger className="-ml-2" />
    <Separator orientation="vertical" className="mr-2 h-4" />
    <Breadcrumb>...</Breadcrumb>
  </header>

  {/* Scrollable content */}
  <div className="flex-1 overflow-auto p-6">
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Page title block */}
      {/* Content sections */}
    </div>
  </div>
</div>
```

---

## Component Patterns

### Status Badges

Used for data values that have a state (normal, high, low, critical):

```tsx
<Badge variant="outline" className="bg-status-normal-bg text-status-normal border-0">Normal</Badge>
<Badge variant="outline" className="bg-status-high-bg text-status-high border-0">High</Badge>
<Badge variant="outline" className="bg-status-low-bg text-status-low border-0">Low</Badge>
<Badge variant="outline" className="bg-status-critical-bg text-status-critical border-0">Critical</Badge>
```

### Colored Value Text

Values in tables/data displays get colored based on status:

```tsx
<span className="font-medium text-status-critical">{value}</span>  // Critical
<span className="font-medium text-status-high">{value}</span>       // High
<span className="font-medium text-status-low">{value}</span>        // Low
<span className="font-medium text-foreground">{value}</span>        // Normal
```

### Trend Indicators

```tsx
<span className="flex items-center gap-1 text-status-high">
  <TrendingUp className="size-3" /> 13.2%
</span>
<span className="flex items-center gap-1 text-status-normal">
  <TrendingDown className="size-3" /> 3.1%
</span>
<span className="text-muted-foreground">---</span>  {/* Stable / no change */}
```

### Alert Cards

```tsx
<div className="rounded-lg p-4 bg-status-critical-bg/50">
  <div className="flex items-center gap-2 mb-2">
    <AlertTriangle className="size-4 text-status-critical" />
    <h4 className="font-semibold text-status-critical">{title}</h4>
  </div>
  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
</div>
```

### Date Selector Pills

```tsx
<Button
  variant={isSelected ? "default" : "outline"}
  size="sm"
  className={isSelected ? "bg-primary text-primary-foreground" : ""}
>
  {date}
</Button>
```

### Underline-Style Tabs (no background)

```tsx
<TabsList className="bg-transparent border-b border-border rounded-none w-full justify-start h-auto p-0 gap-0">
  <TabsTrigger
    value="tab-name"
    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2"
  >
    Tab Label
  </TabsTrigger>
</TabsList>
```

### Sidebar Navigation with Collapsible Sections

```tsx
<Collapsible defaultOpen={isActive}>
  <SidebarMenuItem>
    <CollapsibleTrigger asChild>
      <SidebarMenuButton>
        <Icon className="size-4" />
        <span>{title}</span>
        <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
      </SidebarMenuButton>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubItem>
          <SidebarMenuSubButton asChild>
            <a href={href}>{subTitle}</a>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>
```

---

## Icon Sizing

| Context | Size | Class |
|---------|------|-------|
| Default (sidebar, buttons, inline) | 16px | `size-4` |
| Small (inside badges, trend indicators) | 12px | `size-3` |
| Feature/hero icons | 20-24px | `size-5` or `size-6` |

---

## Data Table Pattern

Tables use shadcn `Table` components with this structure:

- `rounded-lg border border-border bg-card` wrapper div
- `hover:bg-transparent` on header row, `hover:bg-accent/30` on body rows
- Header cells use `font-semibold`
- First column is wider: `w-[200px]`
- Values paired with status badges in a `flex items-center gap-2` container
- Notes below parameter names: `text-xs text-primary mt-0.5`

---

## Do's and Don'ts

**Do:**
- Always use semantic tokens (`bg-background`, `text-foreground`, `border-border`)
- Use `oklch()` for any new custom colors
- Keep the warm cream/amber aesthetic -- hue 85 for neutrals, hue 55 for primary
- Use shadcn/ui components as the base for all UI elements
- Use `gap-*` for spacing between children
- Use `rounded-lg` for cards and containers

**Don't:**
- Never use raw colors (`bg-white`, `text-gray-500`, `#hex`)
- Never use `space-*` classes
- Never use more than 2 font families
- Never use gradients unless explicitly requested
- Never use arbitrary Tailwind values when a scale value exists
- Never skip the breadcrumb header on pages
- Never nest `<main>` elements (SidebarInset already renders `<main>`)

---

## Quick Start for New Projects

1. Install: `npx shadcn@latest init`
2. Add components: `npx shadcn@latest add sidebar table badge tabs avatar breadcrumb collapsible separator`
3. Replace the generated `globals.css` with the color tokens above
4. Set up DM Sans in `layout.tsx`:

```tsx
import { DM_Sans } from "next/font/google"
const _dmSans = DM_Sans({ subsets: ["latin"] })
// Use className="font-sans antialiased" on <body>
```

5. Wrap your app in `<SidebarProvider>` in the root layout
6. Follow the page structure and component patterns above
