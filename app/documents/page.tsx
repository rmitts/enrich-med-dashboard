"use client"

import { FileText } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function DocumentsPage() {
  return (
    <PlaceholderPage
      title="Documents"
      description="Uploaded vet records, lab reports, and other files"
      icon={FileText}
      breadcrumbs={[
        { label: "PawHealth", href: "/" },
        { label: "Documents" },
      ]}
    />
  )
}
