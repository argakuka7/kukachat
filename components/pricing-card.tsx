import { Check, X } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface PricingFeature {
  name: string
  included: boolean
}

interface PricingCardProps {
  title: string
  price: string
  features: PricingFeature[]
  limit: string
}

export function PricingCard({ title, price, features, limit }: PricingCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Harga per Bulan</span>
            <span className="font-bold">{price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Limit Chat</span>
            <span>{limit}</span>
          </div>
          {features.map((feature) => (
            <div key={feature.name} className="flex items-center gap-2">
              {feature.included ? (
                <Check className="text-green-500" />
              ) : (
                <X className="text-red-500" />
              )}
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

