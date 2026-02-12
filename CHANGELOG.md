# Changelog

All notable changes to the Enrich Med Dashboard.

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

### 2026-02-12 - Initial Setup Session
**With**: Warp AI (Claude)

**Context Provided**:
- v0 bloodwork dashboard as template
- Kenzie's pulmonary nodules markdown (637 lines)
- Claude artifact design variants (color palettes)

**Decisions Made**:
1. Clone v0 template rather than start fresh (faster)
2. Keep design system in sidebar footer (separate from content)
3. Use collapsible navigation for course sections
4. Structure matches markdown content sections

**User Preferences Noted**:
- Design System should be in lower-left, not main nav
- Single source of truth for documentation (md files → dashboard)
- Prefers detailed technical solutions
