import { promises as fs } from "fs"
import path from "path"
import { MarkdownDocPage } from "@/components/markdown-doc-page"

export default async function AgentsPage() {
  const filePath = path.join(process.cwd(), "AGENTS.md")
  const content = await fs.readFile(filePath, "utf-8")
  const stats = await fs.stat(filePath)

  return (
    <MarkdownDocPage
      title="AGENTS"
      content={content}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Documentation", href: "/documentation" },
        { label: "AGENTS" },
      ]}
      lastUpdated={stats.mtime.toLocaleDateString()}
    />
  )
}
