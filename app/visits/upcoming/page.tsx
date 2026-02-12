"use client"

import { Stethoscope } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function UpcomingVisitsPage() {
  return (
    <PlaceholderPage
      title="Upcoming Visits"
      description="Scheduled appointments and check-ups"
      icon={Stethoscope}
      breadcrumbs={[
        { label: "Health Records", href: "/" },
        { label: "Visits", href: "/visits/upcoming" },
        { label: "Upcoming" },
      ]}
    />
  )
}
