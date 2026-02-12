"use client"

import { Syringe } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function VaccinationSchedulePage() {
  return (
    <PlaceholderPage
      title="Vaccination Schedule"
      description="View upcoming and overdue vaccinations"
      icon={Syringe}
      breadcrumbs={[
        { label: "Health Records", href: "/" },
        { label: "Vaccinations", href: "/vaccinations/schedule" },
        { label: "Schedule" },
      ]}
    />
  )
}
