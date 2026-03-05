import { redirect } from "next/navigation"
import { headers, cookies } from "next/headers"

const supportedLocales = ["en", "es"]
const defaultLocale = "en"

function getPreferredLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale

  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, q] = lang.trim().split(";q=")
      return {
        code: code.split("-")[0].toLowerCase(),
        priority: q ? parseFloat(q) : 1.0,
      }
    })
    .sort((a, b) => b.priority - a.priority)

  for (const lang of languages) {
    if (supportedLocales.includes(lang.code)) {
      return lang.code
    }
  }

  return defaultLocale
}

export default async function RootPage() {
  const cookieStore = await cookies()
  const savedLocale = cookieStore.get("NEXT_LOCALE")?.value

  if (savedLocale && supportedLocales.includes(savedLocale)) {
    redirect(`/${savedLocale}`)
  }

  const headersList = await headers()
  const acceptLanguage = headersList.get("accept-language")
  const locale = getPreferredLocale(acceptLanguage)

  redirect(`/${locale}`)
}
