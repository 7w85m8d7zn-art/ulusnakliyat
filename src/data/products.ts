export interface Product {
  id: string
  slug: string
  name: string
  category: 'populer' | 'uzman-uygulama'
  priceFrom: number
  images: string[]
  colors: string[]
  sizes: string[]
  tags: string[]
  description: string
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'evden-eve-nakliyat',
    name: 'Evden Eve Nakliyat',
    category: 'populer',
    priceFrom: 8500,
    images: [
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&auto=format&fit=crop&q=80',
    ],
    colors: ['Ekonomik Paket', 'Standart Paket', 'Premium Paket'],
    sizes: ['1+1', '2+1', '3+1', '4+1+'],
    tags: ['Sigortalı Taşıma', 'Sözleşmeli', 'Asansörlü Nakliyat'],
    description:
      'Eşyalarınızı demonte, paketleme, taşıma ve montaj dahil uçtan uca planlı şekilde taşıyoruz.',
  },
  {
    id: '2',
    slug: 'sehirlerarasi-nakliyat',
    name: 'Şehirler Arası Nakliyat',
    category: 'uzman-uygulama',
    priceFrom: 15000,
    images: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592805144716-feeccccef40d?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&auto=format&fit=crop&q=80',
    ],
    colors: ['Ekspres', 'Planlı', 'Konsolide'],
    sizes: ['Parça Eşya', '1+1 - 2+1', '3+1+'],
    tags: ['Takipli Sevkiyat', 'Planlı Teslimat', 'Uzun Mesafe'],
    description:
      'Uzun mesafeli taşınmalarda rota planlama, zamanında teslim ve güvenli sevkiyat süreçlerini yönetiyoruz.',
  },
  {
    id: '3',
    slug: 'ofis-ve-isyeri-tasima',
    name: 'Ofis ve İşyeri Taşıma',
    category: 'uzman-uygulama',
    priceFrom: 12000,
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&auto=format&fit=crop&q=80',
    ],
    colors: ['Mesai Dışı', 'Hafta Sonu', 'Kademeli Geçiş'],
    sizes: ['Küçük Ofis', 'Orta Ofis', 'Kurumsal Kat'],
    tags: ['Kurumsal Taşıma', 'Minimum Kesinti', 'IT Ekipman'],
    description:
      'İş sürekliliğini kesmeden masa, arşiv, sunucu ve ekipman taşıma operasyonlarını profesyonelce yürütüyoruz.',
  },
  {
    id: '4',
    slug: 'parca-esya-tasima',
    name: 'Parça Eşya Taşıma',
    category: 'populer',
    priceFrom: 3500,
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560440021-33f9b867899d?w=1400&auto=format&fit=crop&q=80',
    ],
    colors: ['Kapıdan Kapıya', 'Depo Aktarmalı', 'Ekspres'],
    sizes: ['1-5 Parça', '6-15 Parça', 'Beyaz Eşya Seti'],
    tags: ['Ekonomik Çözüm', 'Hızlı Planlama', 'Güvenli Paketleme'],
    description:
      'Az hacimli eşyalar için bütçe dostu, hızlı ve güvenli taşıma hizmeti sunuyoruz.',
  },
  {
    id: '5',
    slug: 'asansorlu-nakliyat',
    name: 'Asansörlü Nakliyat',
    category: 'populer',
    priceFrom: 9000,
    images: [
      'https://images.unsplash.com/photo-1521540216272-a50305cd4421?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1400&auto=format&fit=crop&q=80',
    ],
    colors: ['7. Kata Kadar', '10. Kata Kadar', 'Yüksek Kat Çözümü'],
    sizes: ['Daire Taşıma', 'Ağır Eşya', 'Piyano/Kasa'],
    tags: ['Hızlı Yükleme', 'Hasar Riskini Azaltır', 'Dar Merdiven Çözümü'],
    description:
      'Yüksek katlarda hızlı ve güvenli taşıma için dış cephe asansörü ile kontrollü yükleme yapıyoruz.',
  },
  {
    id: '6',
    slug: 'esya-depolama',
    name: 'Eşya Depolama',
    category: 'uzman-uygulama',
    priceFrom: 2500,
    images: [
      'https://images.unsplash.com/photo-1586528116493-8dd0f21fd6a3?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1400&auto=format&fit=crop&q=80',
    ],
    colors: ['Aylık', 'Sezonluk', 'Uzun Süreli'],
    sizes: ['Mini Oda', 'Standart Oda', 'Büyük Oda'],
    tags: ['Kamera Sistemli', 'Nem Kontrollü', 'Sigortalı Depo'],
    description:
      'Taşınma arası bekleme dönemlerinde eşyalarınızı güvenli ve takipli depolama alanlarında koruyoruz.',
  },
  {
    id: '7',
    slug: 'paketleme-ve-montaj',
    name: 'Paketleme ve Montaj',
    category: 'populer',
    priceFrom: 3000,
    images: [
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&auto=format&fit=crop&q=80',
    ],
    colors: ['Standart Ambalaj', 'Kırılabilir Eşya', 'Premium Koruma'],
    sizes: ['Sadece Paketleme', 'Paketleme + Montaj'],
    tags: ['Uzman Ekip', 'Dayanıklı Malzeme', 'Etiketli Kolileme'],
    description:
      'Kırılabilir, elektronik ve özel eşyalar için profesyonel ambalaj, söküm ve montaj desteği sağlıyoruz.',
  },
  {
    id: '8',
    slug: 'kurumsal-lojistik-destek',
    name: 'Kurumsal Lojistik Destek',
    category: 'uzman-uygulama',
    priceFrom: 18000,
    images: [
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&auto=format&fit=crop&q=80',
    ],
    colors: ['Aylık Plan', 'Proje Bazlı', 'Süreç Yönetimi'],
    sizes: ['Tek Lokasyon', 'Çoklu Lokasyon'],
    tags: ['Kurumsal SLA', 'Raporlama', 'Düzenli Operasyon'],
    description:
      'Şube açılış, mağaza devir ve çoklu lokasyon taşıma operasyonlarında proje bazlı lojistik desteği veriyoruz.',
  },
]
