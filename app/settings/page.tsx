"use client"

import { Settings } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function SettingsPage() {
  return (
    <PlaceholderPage
      title="Settings"
      description="Manage your account, preferences, and pet profiles"
      icon={Settings}
      breadcrumbs={[
        { label: "PawHealth", href: "/" },
        { label: "Settings" },
      ]}
    />
  )
}
