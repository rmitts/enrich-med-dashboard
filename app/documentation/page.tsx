import { promises as fs } from "fs"
import path from "path"
import { MarkdownDocPage } from "@/components/markdown-doc-page"

export default async function DocumentationPage() {
  const filePath = path.join(process.cwd(), "HOW-TO-USE.md")
  const content = await fs.readFile(filePath, "utf-8")
  const stats = await fs.stat(filePath)

  return (
    <MarkdownDocPage
      title="Documentation"
      content={content}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Documentation" },
      ]}
      lastUpdated={stats.mtime.toLocaleDateString()}
    />
  )
}
