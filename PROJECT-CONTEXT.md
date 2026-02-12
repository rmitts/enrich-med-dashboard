# Enrich Med Dashboard

## Overview
A medical education dashboard for presenting **Pulmonary Nodules for Primary Care Management** - a CME course developed by Kenzie Reich, MSN, APRN, AGCNS-BC.

## Purpose
- Interactive presentation platform for pulmonary nodule education
- Target audience: Primary care providers, hospitalists, pulmonary specialists
- Focus: Early detection, appropriate management, and timely intervention

## Tech Stack
| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 (oklch color system) |
| Components | shadcn/ui (Radix primitives) |
| Icons | Lucide React |
| Font | DM Sans |
| Deployment | Vercel |
| Repository | GitHub (rmitts/enrich-med-dashboard) |

## Architecture

### Route Structure
```
/                           → Course welcome/landing
/introduction               → Course intro, objectives
/nodule-basics/*            → Characteristics, composition, calcifications, margins, differential
/screening/*                → LDCT guidelines, eligibility, Lung-RADS, shared decision making
/management/*               → Fleischner guidelines, solid/subsolid/multiple nodules, risk
/intervention/*             → PET-CT, biopsy vs resection, referral criteria
/cancer-types/*             → NSCLC, SCLC, rare types
/references                 → Clinical references and resources
/design-system/*            → Theme editor, component library, guides
/settings/project/*         → This documentation (rendered from repo .md files)
```

### Key Directories
```
app/                        → Next.js App Router pages
components/                 → React components
  ui/                       → shadcn/ui components (55+)
  design-system/            → Theme editor components
styles/                     → Global CSS with oklch tokens
```

### Design System
- **Color tokens**: oklch() for perceptual uniformity
- **Semantic tokens**: `--primary`, `--background`, `--status-normal`, etc.
- **Status colors**: Green (normal), Amber (high), Blue (low), Red (critical)
- **Theme editor**: Live customization at `/design-system`

## Content Source
The course content originates from:
```
/Users/ryanmitts/Obsidian Local Vaults/Kenzie cleanup theme/Enrich Med Project/
  └── Slides - Outline, Overviews, Markdown/
      └── Kenzie's Slide Content Files/
          └── Pulmonary nodules. Markdown_Formatted.md
```

## Learning Objectives
By the end of this course, learners will be able to:
1. **Define Lung Nodules**: Characteristics (solid vs subsolid, size, margins) and differential diagnoses
2. **Monitor at Appropriate Intervals**: Lung cancer screening eligible patients
3. **Know When to Intervene**: Criteria for PET-CT, biopsy, or surgical referral

## Key Clinical Guidelines Referenced
- USPSTF Lung Cancer Screening Guidelines
- Fleischner Society 2017 Guidelines
- Lung-RADS 2022 Update
- CMS Medicare Coverage Criteria

## Project Status
- [x] Initial dashboard scaffolding
- [x] Sidebar navigation structure
- [x] Course welcome landing page
- [x] Design system with theme editor
- [x] GitHub + Vercel deployment
- [ ] Populate content pages from markdown
- [ ] Add interactive tables (Lung-RADS, Fleischner)
- [ ] Risk calculator integration
- [ ] Image/diagram support
