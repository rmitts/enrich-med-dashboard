"use client"

import { Bell } from "lucide-react"
import { PlaceholderPage } from "@/components/placeholder-page"

export default function NotificationsPage() {
  return (
    <PlaceholderPage
      title="Notifications"
      description="Alerts, reminders, and updates about your pet's health"
      icon={Bell}
      breadcrumbs={[
        { label: "PawHealth", href: "/" },
        { label: "Notifications" },
      ]}
    />
  )
}
