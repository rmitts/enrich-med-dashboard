"use client"

import { Pill } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function MedicationHistoryPage() {
  return (
    <PlaceholderPage
      title="Medication History"
      description="Past prescriptions and discontinued medications"
      icon={Pill}
      breadcrumbs={[
        { label: "Health Records", href: "/" },
        { label: "Medications", href: "/medications/current" },
        { label: "History" },
      ]}
    />
  )
}
