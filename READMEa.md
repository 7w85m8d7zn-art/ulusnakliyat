# Marlenqa Couture - Kurulum Talimatları

## Projeyi Başlatma

### 1. Bağımlılıkları Yükle
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlat
```bash
npm run dev
```

Tarayıcıda açın: `http://localhost:3000`

### 3. Üretim İçin Build Et
```bash
npm run build
npm start
```

## Teknoloji Stack

- **Next.js 14** - App Router
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasyonlar

## Proje Yapısı

```
/app                 # Next.js App Router sayfaları
├── layout.tsx       # Root layout
├── page.tsx         # Ana sayfa
├── koleksiyonlar/   # Koleksiyon sayfası
├── urun/[slug]/     # Ürün detay sayfası

└── globals.css      # Global stiller

/src
├── components/      # React bileşenleri
├── data/           # Mock veri
└── lib/            # Utility fonksiyonları
```

## Öne Çıkan Sayfalar

- **Ana Sayfa** - Hero, öne çıkan ürünler, neden biz, showroom bilgisi
- **Koleksiyon Sayfası** - Filtreleme, arama, sıralama
- **Ürün Detay** - Galeri, özellikleri, CTA butonları
- **Mobil Sticky Buttons** - WhatsApp ve Randevu butonları

## Özelleştirme

### WhatsApp Numarası Güncelleme
`Header.tsx`, `Footer.tsx`, `StickyButtons.tsx` ve `ShowroomSection.tsx` dosyalarında `905xxxxxxxxx` yerine gerçek numarayı yazın.

### Renk Özelleştirmesi
`tailwind.config.ts` dosyasında tema renklerini değiştirin.

### Ürün Verileri
`src/data/products.ts` dosyasında ürünleri yönetin.
