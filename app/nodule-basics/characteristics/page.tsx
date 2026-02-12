import { PlaceholderPage } from "@/components/placeholder-page"
import { CircleDot } from "lucide-react"

export default function CharacteristicsPage() {
  return (
    <PlaceholderPage
      title="Nodule Characteristics"
      description="Size, shape, density, location, and growth rate assessment."
      icon={CircleDot}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Nodule Basics", href: "/nodule-basics/characteristics" },
        { label: "Characteristics" },
      ]}
    />
  )
}
