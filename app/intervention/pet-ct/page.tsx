import { PlaceholderPage } from "@/components/placeholder-page"
import { Scissors } from "lucide-react"

export default function PETCTPage() {
  return (
    <PlaceholderPage
      title="PET-CT Evaluation"
      description="When and how to use PET-CT for nodule evaluation and staging."
      icon={Scissors}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Intervention", href: "/intervention/pet-ct" },
        { label: "PET-CT Evaluation" },
      ]}
    />
  )
}
