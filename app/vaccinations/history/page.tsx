"use client"

import { Syringe } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function VaccinationHistoryPage() {
  return (
    <PlaceholderPage
      title="Vaccination History"
      description="Complete record of past vaccinations and boosters"
      icon={Syringe}
      breadcrumbs={[
        { label: "Health Records", href: "/" },
        { label: "Vaccinations", href: "/vaccinations/schedule" },
        { label: "History" },
      ]}
    />
  )
}
