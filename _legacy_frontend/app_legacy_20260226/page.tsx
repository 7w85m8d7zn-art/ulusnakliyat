'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { FeaturedGrid } from '@/components/FeaturedGrid'
import { WhyUsSection } from '@/components/WhyUsSection'
import { ShowroomSection } from '@/components/ShowroomSection'
import { StickyButtons } from '@/components/StickyButtons'
import { products } from '@/data/products'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedGrid products={products} />
        <WhyUsSection />
        <ShowroomSection />
      </main>
      <Footer />
      <StickyButtons />
    </>
  )
}
