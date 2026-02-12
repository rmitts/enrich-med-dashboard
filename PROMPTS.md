# AI Prompts Library

A collection of starter prompts and instructions for AI sessions. Copy these to quickly onboard AI assistants to specific tasks.

---

## 🚀 Getting Started

### New Session - Full Context
```
Read these files for project context:
- /AGENTS.md (development guidelines)
- /PROJECT-CONTEXT.md (architecture)
- /CHANGELOG.md (recent changes)

I'm working on the Enrich Med Dashboard - a medical education platform for pulmonary nodules.
```

### New Session - Quick Start
```
Read /AGENTS.md first, then help me with [YOUR TASK].
```

---

## 📝 Content Development

### Populate Content Pages from Markdown
```
Read these files for project context:
- /AGENTS.md (development guidelines)  
- /PROJECT-CONTEXT.md (architecture)

Then help me populate content pages from the source markdown at:
/Users/ryanmitts/Obsidian Local Vaults/Kenzie cleanup theme/Enrich Med Project/Slides - Outline, Overviews, Markdown/Kenzie's Slide Content Files/Pulmonary nodules. Markdown_Formatted.md

The content should be converted into React components following the patterns in AGENTS.md.
```

### Add New Course Section
```
Read /AGENTS.md for code patterns.

Help me add a new course section called "[SECTION NAME]" with the following content:
[PASTE CONTENT]

Follow the existing patterns in components/placeholder-page.tsx and app-sidebar.tsx.
```

---

## 🎨 Design & Styling

### Customize Theme Colors
```
Read /DESIGN-SYSTEM.md and /app/globals.css for the current theme.

Help me update the color palette to [DESCRIBE DESIRED LOOK].
Use oklch() color format and update the CSS variables.
```

### Add New Component
```
Read /AGENTS.md for styling rules.

Create a new component for [DESCRIBE COMPONENT].
- Use semantic tokens (bg-card, text-foreground, etc.)
- Follow shadcn/ui patterns
- Add "use client" if using icons or interactivity
```

---

## 🔧 Technical Tasks

### Fix Build Errors
```
Read /AGENTS.md for code patterns.

I'm getting this build error:
[PASTE ERROR]

Help me fix it following the project conventions.
```

### Add New Documentation Page
```
Read /HOW-TO-USE.md for the documentation system.

Help me add a new documentation page called [NAME].md that covers:
[DESCRIBE CONTENT]

Create both the .md file and the corresponding route in app/documentation/[name]/page.tsx.
```

### Update Sidebar Navigation
```
Read /components/app-sidebar.tsx for the current structure.

Help me add/modify the sidebar to include:
[DESCRIBE CHANGES]
```

---

## 📊 Data & Tables

### Create Clinical Data Table
```
Read /AGENTS.md for styling patterns.

Create a table component for [TABLE NAME] with this data:
[PASTE DATA OR DESCRIBE COLUMNS]

Use the design system's table styling and status colors for any indicators.
```

### Add Lung-RADS Categories Table
```
Read the Lung-RADS section from the source markdown at:
/Users/ryanmitts/Obsidian Local Vaults/Kenzie cleanup theme/Enrich Med Project/Slides - Outline, Overviews, Markdown/Kenzie's Slide Content Files/Pulmonary nodules. Markdown_Formatted.md

Create an interactive table component showing the Lung-RADS categories with:
- Category number and name
- Description
- Cancer risk percentage
- Management recommendation
- Color-coded risk indicators using status tokens
```

---

## 🚢 Deployment

### Deploy Changes
```
Help me commit and deploy my changes.

Changes made:
[DESCRIBE WHAT YOU CHANGED]

Use the commit message format with Co-Authored-By: Warp <agent@warp.dev>
```

### Check Build Before Deploy
```
Run pnpm build to check for errors, then help me fix any issues before deploying.
```

---

## 📋 Adding New Prompts

To add a new prompt to this library:

1. Edit `PROMPTS.md` in the repo root
2. Add your prompt under the appropriate section (or create a new section)
3. Use the code fence format for easy copying:
   ```
   Your prompt text here
   ```
4. Commit and push - it will automatically appear on the dashboard

### Prompt Template
```markdown
### [Prompt Name]
Brief description of when to use this prompt.

\`\`\`
Your prompt text here.
Include any placeholders in [BRACKETS] for customization.
\`\`\`
```
