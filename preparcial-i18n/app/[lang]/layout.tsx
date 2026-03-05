import { ReactNode } from "react"
import { getDictionary } from "../../lib/dictionaries/getDictionary"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: "en" | "es" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className="flex flex-col min-h-screen">
        <Header lang={lang} />
        <main className="flex-1 bg-[#e0e0e0]">
          {children}
        </main>
        <Footer happ={dict.happ} autor={dict.autor} />
      </body> 
    </html>
  )
}
