import { PlaceholderPage } from "@/components/placeholder-page"
import { FileText } from "lucide-react"

export default function ReferencesPage() {
  return (
    <PlaceholderPage
      title="References"
      description="Clinical guidelines, journal articles, and additional resources."
      icon={FileText}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "References" },
      ]}
    />
  )
}
