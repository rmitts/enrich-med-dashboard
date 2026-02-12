"use client"

import { Weight } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function WeightTrackerPage() {
  return (
    <PlaceholderPage
      title="Weight Tracker"
      description="Track weight changes over time"
      icon={Weight}
      breadcrumbs={[
        { label: "PawHealth", href: "/" },
        { label: "Weight Tracker" },
      ]}
    />
  )
}
