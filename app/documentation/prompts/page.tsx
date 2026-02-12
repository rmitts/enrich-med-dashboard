import { promises as fs } from "fs"
import path from "path"
import { MarkdownDocPage } from "@/components/markdown-doc-page"

export default async function PromptsPage() {
  const filePath = path.join(process.cwd(), "PROMPTS.md")
  const content = await fs.readFile(filePath, "utf-8")
  const stats = await fs.stat(filePath)

  return (
    <MarkdownDocPage
      title="PROMPTS"
      content={content}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Documentation", href: "/documentation" },
        { label: "PROMPTS" },
      ]}
      lastUpdated={stats.mtime.toLocaleDateString()}
    />
  )
}
