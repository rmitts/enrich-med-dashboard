"use client"

import { Pill } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function CurrentMedicationsPage() {
  return (
    <PlaceholderPage
      title="Current Medications"
      description="Active prescriptions and supplements"
      icon={Pill}
      breadcrumbs={[
        { label: "Health Records", href: "/" },
        { label: "Medications", href: "/medications/current" },
        { label: "Current" },
      ]}
    />
  )
}
