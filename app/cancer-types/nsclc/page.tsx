"use client"

import { PlaceholderPage } from "@/components/placeholder-page"
import { Activity } from "lucide-react"

export default function NSCLCPage() {
  return (
    <PlaceholderPage
      title="Non-Small Cell Lung Cancer (NSCLC)"
      description="Adenocarcinoma, squamous cell carcinoma, and large cell carcinoma overview."
      icon={Activity}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Cancer Types", href: "/cancer-types/nsclc" },
        { label: "NSCLC" },
      ]}
    />
  )
}
