import { getDictionary } from "../../lib/dictionaries/getDictionary"
import LanguageSwitcher from "../components/LanguageSwitcher"

export default async function HomePage({
  params
}: {
  params: Promise<{ lang: "en" | "es" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  if (!dict) {
    return <div>Error al cargar las traducciones.</div>
  }

  return (
    <main>
      <header>
        <LanguageSwitcher currentLang={lang} />
      </header>
      <h1>{dict.welcome}</h1>
      <p>{dict.profile}</p>
    </main>
  )
}
