"use client"

import { PlaceholderPage } from "@/components/placeholder-page"
import { ClipboardList } from "lucide-react"

export default function FleischnerPage() {
  return (
    <PlaceholderPage
      title="Fleischner Guidelines"
      description="2017 Fleischner Society guidelines for incidental pulmonary nodule management."
      icon={ClipboardList}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Management", href: "/management/fleischner" },
        { label: "Fleischner Guidelines" },
      ]}
    />
  )
}
