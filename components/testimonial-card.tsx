import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface TestimonialCardProps {
  content: string
  rating: number
  author: string
  company: string
  logo: string
}

export function TestimonialCard({
  content,
  rating,
  author,
  company,
  logo,
}: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4">
          <Badge variant="secondary">{rating}</Badge>
        </div>
        <p className="text-muted-foreground mb-6">{content}</p>
        <div className="flex items-center gap-4">
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
          <Image
            src={logo}
            alt={company}
            width={100}
            height={40}
            className="h-8 object-contain ml-auto"
          />
        </div>
      </CardContent>
    </Card>
  )
}

