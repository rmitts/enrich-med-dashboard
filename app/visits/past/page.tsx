"use client"

import { Stethoscope } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function PastVisitsPage() {
  return (
    <PlaceholderPage
      title="Past Visits"
      description="Complete history of veterinary visits and notes"
      icon={Stethoscope}
      breadcrumbs={[
        { label: "Health Records", href: "/" },
        { label: "Visits", href: "/visits/upcoming" },
        { label: "Past Visits" },
      ]}
    />
  )
}
