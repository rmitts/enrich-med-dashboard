"use client"

import { PlaceholderPage } from "@/components/placeholder-page"
import { Scan } from "lucide-react"

export default function LDCTGuidelinesPage() {
  return (
    <PlaceholderPage
      title="LDCT Guidelines"
      description="Low-Dose CT lung cancer screening guidelines and protocols."
      icon={Scan}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Screening", href: "/screening/ldct-guidelines" },
        { label: "LDCT Guidelines" },
      ]}
    />
  )
}
