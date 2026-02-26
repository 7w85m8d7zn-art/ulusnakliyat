import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

type GooglePlaceDetailsResponse = {
  result?: {
    reviews?: Array<{
      author_name?: string
      rating?: number
      text?: string
      relative_time_description?: string
      time?: number
    }>
  }
  status?: string
  error_message?: string
}

function normalizeText(s: unknown) {
  return typeof s === 'string' ? s.trim() : ''
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        error: 'Missing env vars',
        details: {
          GOOGLE_PLACES_API_KEY: Boolean(apiKey),
          GOOGLE_PLACE_ID: Boolean(placeId),
        },
      },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  const url =
    'https://maps.googleapis.com/maps/api/place/details/json' +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=${encodeURIComponent('reviews')}` +
    `&language=tr` +
    `&key=${encodeURIComponent(apiKey)}`

  try {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Google Places request failed', status: res.status, statusText: res.statusText },
        { status: 500, headers: { 'Cache-Control': 'no-store' } }
      )
    }

    const json = (await res.json()) as GooglePlaceDetailsResponse

    if (json.status && json.status !== 'OK') {
      return NextResponse.json(
        { error: 'Google Places returned non-OK status', status: json.status, message: json.error_message },
        { status: 500, headers: { 'Cache-Control': 'no-store' } }
      )
    }

    const reviews = Array.isArray(json.result?.reviews) ? json.result!.reviews! : []

    const mapped = reviews
      .map((r) => ({
        author: normalizeText(r.author_name) || 'Google Kullanıcısı',
        rating: typeof r.rating === 'number' ? r.rating : 0,
        text: normalizeText(r.text),
        relativeTime: normalizeText(r.relative_time_description), // "5 ay önce" gibi
        time: typeof r.time === 'number' ? r.time : 0,
      }))
      .sort((a, b) => (b.time || 0) - (a.time || 0)) // yeniler önce
      .slice(0, 10)
      .map(({ time, ...rest }) => rest)

    return NextResponse.json(mapped, { status: 200, headers: { 'Cache-Control': 'no-store' } })
  } catch (e: any) {
    return NextResponse.json(
      { error: 'Server error', message: e?.message || String(e) },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    )
  }
}