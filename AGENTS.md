# AI Development Guidelines

Instructions for AI assistants (Claude, Warp, Cursor, etc.) working on this project.

## Project Context
This is a **medical education dashboard** for pulmonary nodule management. The content is clinical and must be accurate. When in doubt, defer to the source markdown files and established medical guidelines.

## Code Patterns

### Component Structure
```tsx
"use client"  // Required for components using hooks, icons as props, or interactivity

import { ComponentName } from "@/components/ui/component-name"
import { IconName } from "lucide-react"
```

### Styling Rules
1. **Always use semantic tokens** - never raw colors
   ```tsx
   // ✅ Correct
   className="bg-card text-foreground border-border"
   
   // ❌ Wrong
   className="bg-white text-gray-900 border-gray-200"
   ```

2. **Icon sizing**: `size-4` default, `size-3` small, `size-5` large

3. **Spacing**: `gap-*` for flex/grid, `p-4` for cards, `p-6` for pages

### File Naming
- Pages: `app/[route]/page.tsx`
- Components: `components/[name].tsx` (kebab-case files, PascalCase exports)
- Always use `@/` path aliases

### Adding New Pages
1. Create directory under `app/`
2. Add `page.tsx` with `"use client"` if using icons or interactivity
3. Use `PlaceholderPage` component for stub pages
4. Update sidebar navigation in `components/app-sidebar.tsx`

## Content Guidelines

### Medical Accuracy
- Source content is from `Pulmonary nodules. Markdown_Formatted.md`
- Preserve clinical terminology exactly
- Keep presenter notes (marked with `> *Note:*`) as callouts
- Tables should use the app's styled table components

### Tone
- Professional medical education context
- Clear, actionable guidance for clinicians
- Emphasize practical decision points

## Don't Do
- Don't use `hex`, `rgb`, or `hsl` colors - use oklch tokens
- Don't pass icon components as props without `"use client"`
- Don't create duplicate content - markdown files are single source of truth
- Don't modify the design system tokens without explicit approval
- Don't remove the theme editor functionality

## Do
- Read `PROJECT-CONTEXT.md` first for architecture overview
- Check existing components in `components/ui/` before creating new ones
- Follow the established sidebar navigation pattern
- Use the `PlaceholderPage` component for new stub pages
- Commit with `Co-Authored-By: Warp <agent@warp.dev>` when using Warp

## Key Files to Know
| File | Purpose |
|------|---------|
| `components/app-sidebar.tsx` | Navigation structure |
| `components/course-welcome.tsx` | Home page content |
| `components/placeholder-page.tsx` | Template for stub pages |
| `app/globals.css` | Design tokens (oklch) |
| `DESIGN-SYSTEM.md` | Full design system reference |

## Testing Changes
```bash
pnpm dev          # Start dev server
pnpm build        # Check for build errors
pnpm lint         # Run linter
```

## Questions to Ask
When unclear, ask the user about:
- Clinical content accuracy (defer to Kenzie)
- Design/theme preferences
- Priority of features to build next
