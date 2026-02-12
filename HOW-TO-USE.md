# How to Use This Documentation

This project uses a **single source of truth** pattern: markdown files in the repository root are automatically rendered in the dashboard. Edit the `.md` files, and changes appear on the website.

## For AI Assistants (Claude, Warp, Cursor, etc.)

### Starting a New Session

When beginning work on this project, provide the AI with context by:

1. **Point to AGENTS.md first** - Contains code patterns, styling rules, and project constraints
2. **Share the live URL** if the AI can browse:
   - https://enrich-med-dashboard.vercel.app/documentation/agents

### Recommended Context Order

```
1. AGENTS.md          → Development guidelines and code patterns
2. PROJECT-CONTEXT.md → Architecture, tech stack, project status
3. CHANGELOG.md       → Recent changes and decisions made
```

### Quick Copy for AI Prompts

```
Read the following files for project context:
- /AGENTS.md (development guidelines)
- /PROJECT-CONTEXT.md (architecture overview)
- /CHANGELOG.md (recent changes)
```

## Documentation Files

| File | Purpose | Dashboard URL |
|------|---------|---------------|
| `PROJECT-CONTEXT.md` | Project overview, architecture, tech stack | `/documentation/project-context` |
| `AGENTS.md` | AI development guidelines, code patterns | `/documentation/agents` |
| `CHANGELOG.md` | Version history, session notes | `/documentation/changelog` |
| `PROMPTS.md` | AI starter prompts library | `/documentation/prompts` |
| `HOW-TO-USE.md` | This guide | `/documentation` |
| `DESIGN-SYSTEM.md` | Full design system reference | `/design-system/guides` |

> **Tip**: See [PROMPTS](/documentation/prompts) for copy-paste starter prompts for common tasks.

## Live URLs

**Production Dashboard:**
- Home: https://enrich-med-dashboard.vercel.app
- Documentation: https://enrich-med-dashboard.vercel.app/documentation
- AI Guidelines: https://enrich-med-dashboard.vercel.app/documentation/agents
- Design System: https://enrich-med-dashboard.vercel.app/design-system

**Repository:**
- GitHub: https://github.com/rmitts/enrich-med-dashboard

## Editing Documentation

### Local Development
```bash
# Edit any markdown file
code PROJECT-CONTEXT.md

# Changes render automatically on next build/deploy
git add . && git commit -m "Update docs" && git push
```

### Supported Markdown Features (GFM)
- ✅ Tables
- ✅ Task lists (checkboxes)
- ✅ Fenced code blocks with syntax highlighting
- ✅ Blockquotes
- ✅ Links (internal and external)
- ✅ Headings with anchor links

## Adding New Documentation

1. Create a new `.md` file in the repo root
2. Create a corresponding page in `app/documentation/[name]/page.tsx`
3. Add the route to the sidebar in `components/app-sidebar.tsx`
4. Update this file's table

### Page Template
```tsx
import { promises as fs } from "fs"
import path from "path"
import { MarkdownDocPage } from "@/components/markdown-doc-page"

export default async function MyNewDocPage() {
  const filePath = path.join(process.cwd(), "MY-NEW-DOC.md")
  const content = await fs.readFile(filePath, "utf-8")
  const stats = await fs.stat(filePath)

  return (
    <MarkdownDocPage
      title="My New Doc"
      content={content}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Documentation", href: "/documentation" },
        { label: "My New Doc" },
      ]}
      lastUpdated={stats.mtime.toLocaleDateString()}
    />
  )
}
```

## Workflow Best Practices

### Before Starting Development
1. Read `AGENTS.md` for code patterns
2. Check `CHANGELOG.md` for recent context
3. Run `pnpm dev` to start local server

### After Making Changes
1. Update `CHANGELOG.md` with what you changed
2. Commit with descriptive message
3. Include `Co-Authored-By: Warp <agent@warp.dev>` if using Warp

### Session Handoff
When ending a session, update `CHANGELOG.md` with:
- What was built/changed
- Decisions made and why
- Any open questions or next steps
