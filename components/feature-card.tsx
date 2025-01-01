import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="h-12 w-12"
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

