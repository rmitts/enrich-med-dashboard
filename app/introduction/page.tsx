import { PlaceholderPage } from "@/components/placeholder-page"
import { BookOpen } from "lucide-react"

export default function IntroductionPage() {
  return (
    <PlaceholderPage
      title="Introduction"
      description="Welcome to this presentation on lung nodules for primary care management."
      icon={BookOpen}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Introduction" },
      ]}
    />
  )
}
