import { promises as fs } from "fs"
import path from "path"
import { MarkdownDocPage } from "@/components/markdown-doc-page"

export default async function ProjectContextPage() {
  const filePath = path.join(process.cwd(), "PROJECT-CONTEXT.md")
  const content = await fs.readFile(filePath, "utf-8")
  const stats = await fs.stat(filePath)

  return (
    <MarkdownDocPage
      title="PROJECT-CONTEXT"
      content={content}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Documentation", href: "/documentation" },
        { label: "PROJECT-CONTEXT" },
      ]}
      lastUpdated={stats.mtime.toLocaleDateString()}
    />
  )
}
