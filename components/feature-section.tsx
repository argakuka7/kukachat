import Image from "next/image"

interface FeatureSectionProps {
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  reversed?: boolean
}

export function FeatureSection({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <div className="container py-12 md:py-24">
      <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:grid-flow-dense' : ''}`}>
        <div className={reversed ? 'md:col-start-2' : ''}>
          <h2 className="text-2xl font-bold mb-4">{subtitle}</h2>
          <h3 className="text-3xl font-bold mb-6">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

