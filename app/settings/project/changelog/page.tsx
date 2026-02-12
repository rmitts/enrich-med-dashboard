import { promises as fs } from "fs"
import path from "path"
import { MarkdownDocPage } from "@/components/markdown-doc-page"

export default async function ChangelogPage() {
  const filePath = path.join(process.cwd(), "CHANGELOG.md")
  const content = await fs.readFile(filePath, "utf-8")
  const stats = await fs.stat(filePath)

  return (
    <MarkdownDocPage
      title="Changelog"
      content={content}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Settings", href: "/settings" },
        { label: "Project", href: "/settings/project" },
        { label: "Changelog" },
      ]}
      lastUpdated={stats.mtime.toLocaleDateString()}
    />
  )
}
