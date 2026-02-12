import { promises as fs } from "fs"
import path from "path"
import { MarkdownDocPage } from "@/components/markdown-doc-page"

export default async function AIGuidelinesPage() {
  const filePath = path.join(process.cwd(), "AGENTS.md")
  const content = await fs.readFile(filePath, "utf-8")
  const stats = await fs.stat(filePath)

  return (
    <MarkdownDocPage
      title="AI Guidelines"
      content={content}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Settings", href: "/settings" },
        { label: "Project", href: "/settings/project" },
        { label: "AI Guidelines" },
      ]}
      lastUpdated={stats.mtime.toLocaleDateString()}
    />
  )
}
