import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Check, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { PricingCard } from "@/components/pricing-card"
import { FeatureSection } from "@/components/feature-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="Kukachat Logo" width={32} height={32} />
            <span className="font-bold">Kukachat</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="#faq" className="text-sm font-medium">
              FAQ
            </Link>
            <Link href="#testimonials" className="text-sm font-medium">
              Testimonials
            </Link>
          </nav>
          <Link href="/login">
            <Button variant="outline">Masuk</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              🔥 BEST AI SUBSCRIPTION DEAL
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Asisten AI Unlimited<br />All-In-One
            </h1>
            <p className="text-2xl font-bold text-primary mt-4">
              Cuma Rp49k/bulan
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="/login">
                <Button variant="default" size="lg">
                  Daftar Sekarang →
                </Button>
              </Link>
            </div>
            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <Image src="/placeholder.svg" alt="ChatGPT" width={120} height={40} className="h-8 object-contain" />
              <Image src="/placeholder.svg" alt="Gemini" width={120} height={40} className="h-8 object-contain" />
              <Image src="/placeholder.svg" alt="Image Generator" width={120} height={40} className="h-8 object-contain" />
              <Image src="/placeholder.svg" alt="Voice" width={120} height={40} className="h-8 object-contain" />
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="container py-12 md:py-24" id="features">
          <h2 className="text-3xl font-bold text-center mb-12">Kenapa Pilih Kukachat?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PricingCard
              title="Kukachat"
              price="Rp 49.000"
              limit="Unlimited"
              features={[
                { name: "ChatGPT 4.0", included: true },
                { name: "Generate Image", included: true },
                { name: "Web Search", included: true },
                { name: "Gemini 1.5", included: true },
                { name: "Transcribe Audio", included: true },
                { name: "Generate Audio", included: true },
              ]}
            />
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">ChatGPT</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Harga per Bulan</span>
                  <span className="font-bold">$20 (± Rp. 320.000)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Limit Chat</span>
                  <span>80 Message/30 Jam</span>
                </div>
                {[
                  "ChatGPT 4.0",
                  "Generate Image",
                  "Web Search",
                  "Gemini 1.5",
                  "Transcribe Audio",
                  "Generate Audio",
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center gap-2">
                    {index < 3 ? (
                      <Check className="text-green-500" />
                    ) : (
                      <X className="text-red-500" />
                    )}
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-12 md:py-24 bg-muted">
          <FeatureSection
            title="Unlimited ChatGPT & Gemini"
            subtitle="CHAT DENGAN AI TANPA BATAS"
            description="Ngobrolain ide atau cari solusi untuk segala kebutuhanmu, tanpa takut kena limit!"
            image="/placeholder.svg"
            imageAlt="Chat Interface"
          />
        </section>

        {/* FAQ Section */}
        <section className="container py-12 md:py-24" id="faq">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Apa saja yang termasuk dalam paket subscription Kukachat?</AccordionTrigger>
              <AccordionContent>
                Paket subscription Kukachat mencakup akses unlimited ke ChatGPT, Gemini, Image Generator, Voice Transcription, dan Text-to-Voice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Apakah history chat saya aman?</AccordionTrigger>
              <AccordionContent>
                Ya, semua history chat Anda terenkripsi dan disimpan dengan aman di server kami.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Bisakah saya membatalkan subscription saya?</AccordionTrigger>
              <AccordionContent>
                Ya, Anda dapat membatalkan subscription kapan saja tanpa biaya tambahan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Testimonials Section */}
        <section className="container py-12 md:py-24 bg-muted" id="testimonials">
          <h2 className="text-3xl font-bold text-center mb-12">Apa Kata Pengguna Kami Tentang Kukachat</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <TestimonialCard
                key={i}
                content="Kukachat sangat membantu dalam pekerjaan saya dan meningkatkan produktivitas saya."
                rating={99}
                author="John Doe"
                company="Tech Corp"
                logo="/placeholder.svg"
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-24">
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold">ARE YOU READY?</p>
            <h2 className="text-3xl font-bold">Get The AI That Works for You</h2>
            <Button size="lg" className="mt-8">
              Daftar Sekarang →
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Image src="/placeholder.svg" alt="Kukachat Logo" width={32} height={32} />
              <span className="font-bold">Kukachat</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Kukachat adalah all-in-one platform yang memberikan asisten dan tools AI tanpa batas untuk meningkatkan
              produktivitas dan kreativitasmu.
            </p>
            <div className="flex gap-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                Ketentuan Layanan
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 Kukachat. Hak cipta dilindungi.
          </div>
        </div>
      </footer>
    </div>
  )
}
