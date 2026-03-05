import { Metadata } from "next"
import { getDictionary } from "../../lib/dictionaries/getDictionary"
import CharacterList from "../../components/CharacterList"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return {
    title: "Listado de personajes - HarryPotterApp",
    description: dict.charactersDesc,
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-[#FDB608] mb-2">
        {dict.characters}
      </h1>
      <p className="text-center text-gray-600 text-sm mb-6">
        {dict.charactersDesc}
      </p>
      <CharacterList lang={lang} />
    </div>
  )
}
