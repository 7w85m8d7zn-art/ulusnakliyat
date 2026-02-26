'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AboutSection } from '@/components/AboutSection'
import { FAQSection } from '@/components/FAQSection'
import { StickyButtons } from '@/components/StickyButtons'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        <AboutSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyButtons />
    </>
  )
}
