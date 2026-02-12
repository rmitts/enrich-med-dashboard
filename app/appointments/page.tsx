"use client"

import { Calendar } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function AppointmentsPage() {
  return (
    <PlaceholderPage
      title="Appointments"
      description="Manage and schedule veterinary appointments"
      icon={Calendar}
      breadcrumbs={[
        { label: "PawHealth", href: "/" },
        { label: "Appointments" },
      ]}
    />
  )
}
