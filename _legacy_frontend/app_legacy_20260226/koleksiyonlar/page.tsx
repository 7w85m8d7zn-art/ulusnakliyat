'use client'

import { useState, useMemo, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { products } from '@/data/products'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StickyButtons } from '@/components/StickyButtons'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest'

export default function KoleksiyonPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'populer' | 'uzman-uygulama'>('all')  
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Get unique values for filters
  const allTags = Array.from(new Set(products.flatMap(p => p.tags)))
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes)))

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                           product.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesTag = !selectedTag || product.tags.includes(selectedTag)
      const matchesSize = !selectedSize || product.sizes.includes(selectedSize)

      return matchesSearch && matchesCategory && matchesTag && matchesSize
    })

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.priceFrom - b.priceFrom)
        break
      case 'price-high':
        result.sort((a, b) => b.priceFrom - a.priceFrom)
        break
      case 'newest':
        result.reverse()
        break
      case 'featured':
      default:
        break
    }

    return result
  }, [search, selectedCategory, selectedTag, selectedSize, sortBy])

  useEffect(() => {
    if (!isFilterOpen) return

    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
    }
  }, [isFilterOpen])

  const activeFilterCount =
    (search ? 1 : 0) +
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedTag ? 1 : 0) +
    (selectedSize ? 1 : 0)

  const clearFilters = () => {
    setSearch('')
    setSelectedCategory('all')
    setSelectedTag(null)
    setSelectedSize(null)
  }

  const FiltersContent = (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="block text-sm font-semibold mb-3">Hizmet Ara</label>
        <input
          type="text"
          placeholder="Hizmet adı..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose"
        />
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-semibold mb-3">Kategori</label>
        <div className="space-y-2">
          {(['all', 'populer', 'uzman-uygulama'] as const).map((cat) => (
            <label key={cat} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                className="w-4 h-4 text-rose"
              />
              <span className="ml-3 text-sm">
                {cat === 'all' ? 'Tümü' : cat === 'populer' ? 'Popüler' : 'Uzman Uygulama'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Tag Filter */}
      <div>
        <label className="block text-sm font-semibold mb-3">Etiket</label>
        <div className="space-y-2">
          {allTags.map((tag) => (
            <label key={tag} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTag === tag}
                onChange={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className="w-4 h-4 text-rose"
              />
              <span className="ml-3 text-sm">{tag}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <label className="block text-sm font-semibold mb-3">Seans / Paket</label>
        <div className="space-y-2">
          {allSizes.map((size) => (
            <label key={size} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedSize === size}
                onChange={() => setSelectedSize(selectedSize === size ? null : size)}
                className="w-4 h-4 text-rose"
              />
              <span className="ml-3 text-sm">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full text-center text-sm text-rose hover:text-rose/80 font-medium transition-colors"
      >
        Filtreleri Temizle
      </button>
    </div>
  )

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-3 md:mb-4">Hizmetler</h1>
            <p className="text-gray-600 text-lg">
              {filteredProducts.length} hizmet bulundu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1 hidden lg:block"
            >
              <div className="bg-white p-6 rounded-lg sticky top-24">
                {FiltersContent}
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {/* Mobile Toolbar (Filter + Sort) */}
              <div className="mb-6 flex items-center gap-3 lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium"
                >
                  Filtrele
                  {activeFilterCount > 0 && (
                    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-900 px-2 text-xs font-semibold text-white">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rose text-sm"
                >
                  <option value="featured">Öne Çıkanlar</option>
                  <option value="price-low">En Düşük Fiyat</option>
                  <option value="price-high">En Yüksek Fiyat</option>
                  <option value="newest">En Yeni</option>
                </select>
              </div>

              {/* Desktop Sort */}
              <div className="mb-8 hidden lg:flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium">Sırala:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose"
                  >
                    <option value="featured">Öne Çıkanlar</option>
                    <option value="price-low">En Düşük Fiyat</option>
                    <option value="price-high">En Yüksek Fiyat</option>
                    <option value="newest">En Yeni</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <Link href={`/urun/${product.slug}`}>
                        <div className="group cursor-pointer">
                          {/* Image */}
                          <div className="relative h-96 overflow-hidden rounded-lg mb-4 bg-gray-100">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-xs font-semibold">
                              {product.category === 'populer' ? 'Popüler' : 'Uzman Uygulama'}
                            </div>
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-rose transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {product.description.substring(0, 60)}...
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-800"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-end justify-between">
                            <div>
                              <p className="text-gray-500 text-sm">Seans başlangıç</p>
                              <p className="text-2xl font-serif font-bold">₺{product.priceFrom.toLocaleString('tr-TR')}</p>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center"
                            >
                              →
                            </motion.button>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-600 text-lg">Arama kriterlerinize uygun hizmet bulunamadı.</p>
                  <button
                    onClick={() => {
                      setSearch('')
                      setSelectedCategory('all')
                      setSelectedTag(null)
                      setSelectedSize(null)
                    }}
                    className="mt-4 text-rose hover:text-rose/80 font-medium transition-colors"
                  >
                    Filtreleri Sıfırla
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <>
                <motion.div
                  className="fixed left-0 top-0 w-screen h-screen z-[70] bg-black/50 lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsFilterOpen(false)}
                />

                <motion.div
                  className="fixed left-0 right-0 bottom-0 z-[80] lg:hidden bg-white rounded-t-2xl shadow-2xl"
                  initial={{ y: 32, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 32, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-5 pt-5 pb-6 max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold">Filtreler</h2>
                      <button
                        type="button"
                        onClick={() => setIsFilterOpen(false)}
                        className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-2"
                        aria-label="Filtreleri kapat"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M6 6l12 12M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>

                    {FiltersContent}

                    <div className="mt-6 flex gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          clearFilters()
                        }}
                        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium"
                      >
                        Temizle
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFilterOpen(false)}
                        className="flex-1 rounded-lg bg-gray-900 text-white px-4 py-3 text-sm font-medium"
                      >
                        Uygula
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
      <StickyButtons />
    </>
  )
}
