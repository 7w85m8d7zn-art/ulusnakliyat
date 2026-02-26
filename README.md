# Su Perisi Güzellik Salonu — Admin Panel Setup

## ⚠️ Güvenlik Notu
Gerçek API key, secret key veya database şifreleri README içine yazılmaz.
Bu dosyada sadece placeholder kullanılmalıdır.
Gerçek bilgiler sadece `.env.local` dosyasında tutulur.

---

## ENV Kurulumu (.env.local)

Aşağıdaki değişkenleri `.env.local` dosyasına ekleyin:

```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLIC_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SECRET_KEY
DATABASE_PASSWORD=YOUR_DATABASE_PASSWORD
```

---

## Supabase Kullanım Kuralları

- Publishable key → frontend tarafında kullanılabilir.
- Service role key → SADECE server-side (API routes / server actions).
- Secret key hiçbir zaman React component içine yazılmaz.

---

## Admin Panel Routes

- /admin/login
- /admin
- /admin/pages
- /admin/filters
- /admin/appointments

---

## Antigravity Başlatma Prompt

Aşağıdaki prompt'u Antigravity AI içerisine yapıştır:

```
Project already contains a Next.js App Router structure.
DO NOT recreate project from scratch.
Modify existing routes and components.

Create an admin panel with:
- Login page (/admin/login)
- Dashboard (/admin)
- Page editor (/admin/pages)
- Filter manager (/admin/filters)
- Appointment manager (/admin/appointments)

Use Supabase integration with:
- browser client for frontend
- service role client for admin API routes

All site content (Header, Footer, Homepage, About, Booking page) must be editable via admin panel using a settings table (key/value jsonb).

Implement UPSERT logic for settings API to prevent duplicate key errors.
```

---

## Not
Gerçek anahtarlar sadece `.env.local` içinde tutulmalı ve git'e push edilmemelidir.
