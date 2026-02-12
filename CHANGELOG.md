# Changelog

All notable changes to the Enrich Med Dashboard.

## [0.2.0] - 2026-02-12

### Documentation System
- **Single Source of Truth**: Markdown files in repo root automatically render in dashboard
- **New Documentation Section** in sidebar footer with:
  - How to Use (`/documentation` → HOW-TO-USE.md)
  - PROJECT-CONTEXT (`/documentation/project-context` → PROJECT-CONTEXT.md)
  - AGENTS (`/documentation/agents` → AGENTS.md)
  - CHANGELOG (`/documentation/changelog` → CHANGELOG.md)
  - PROMPTS (`/documentation/prompts` → PROMPTS.md)
- **Markdown Renderer Component**: Custom styling with design tokens, GFM support
- **PROMPTS.md**: AI starter prompts library for quick session onboarding
- **HOW-TO-USE.md**: Documentation system guide and AI context instructions

### Technical
- Installed `react-markdown` and `remark-gfm` for markdown rendering
- Created `MarkdownDocPage` component for consistent doc page layout
- Routes match file names for consistency (e.g., `/documentation/agents` → `AGENTS.md`)

---

## [0.1.0] - 2026-02-12

### Initial Setup
- Created project from v0 bloodwork-analysis-dashboard template
- Configured for Kenzie's pulmonary nodules CME course

### Added
- **Sidebar Navigation**: 6 course content sections
  - Introduction (Overview, Objectives, Why Lung Nodules)
  - Nodule Basics (Characteristics, Composition, Calcifications, Margins, Differential)
  - Screening (LDCT Guidelines, Eligibility, Lung-RADS, Shared Decision Making)
  - Management (Fleischner, Solid, Subsolid, Multiple, Risk Stratification)
  - Intervention (PET-CT, Biopsy vs Resection, Referral)
  - Cancer Types (NSCLC, SCLC, Rare)
- **Course Welcome Page**: Landing page with learning objectives and module cards
- **Presenter Card**: Kenzie Reich credentials in sidebar footer
- **Design System**: Theme editor in sidebar footer (separate from content nav)
- **Route Structure**: All directories created for 25+ content pages
- **Project Documentation**: PROJECT-CONTEXT.md, AGENTS.md, CHANGELOG.md

### Changed
- Rebranded from "PawHealth" to "Enrich Med"
- Updated sidebar header with stethoscope icon
- Moved Design System to footer per user preference

### Fixed
- Added `"use client"` directive to placeholder pages (Server/Client component boundary fix)

### Deployment
- GitHub: https://github.com/rmitts/enrich-med-dashboard
- Vercel: https://enrich-med-dashboard.vercel.app

---

## Planned Features

### Content Population
- [ ] Convert markdown content to page components
- [ ] Add clinical tables (Lung-RADS categories, Fleischner guidelines)
- [ ] Implement risk stratification tables

### Interactivity
- [ ] Pack-year calculator
- [ ] Nodule risk calculator links
- [ ] Slide/presentation mode toggle

### Design
- [ ] Custom theme presets (Clinical, Soft Periwinkle, etc.)
- [ ] Mobile responsive refinements
- [ ] Print-friendly styles for references

---

## Session Notes

### 2026-02-12 - Initial Setup & Documentation System
**With**: Warp AI (Claude)
**Duration**: ~2 hours

**What Was Built**:
1. **Project scaffolding** from v0 bloodwork dashboard template
2. **Full sidebar navigation** for 6 course sections + 25 sub-pages
3. **Course welcome page** with learning objectives and module cards
4. **Documentation system** with markdown → dashboard rendering
5. **Prompts library** for AI session onboarding
6. **GitHub repo** + **Vercel deployment**

**Context Provided**:
- v0 bloodwork dashboard as template
- Kenzie's pulmonary nodules markdown (637 lines)
- Claude artifact design variants (color palettes)

**Decisions Made**:
1. Clone v0 template rather than start fresh (faster)
2. Keep Design System in sidebar footer (separate from content)
3. Use collapsible navigation for course sections
4. Single source of truth: .md files render directly in dashboard
5. Route names match file names for consistency
6. Added PROMPTS.md for reusable AI starter prompts

**User Preferences Noted**:
- Design System should be in lower-left, not main nav
- Single source of truth for documentation
- Prefers detailed technical solutions
- Wants prompts library for AI session management

**Next Steps**:
1. Populate content pages from source markdown
2. Add clinical tables (Lung-RADS, Fleischner guidelines)
3. Implement risk stratification components
4. Customize theme colors if desired
