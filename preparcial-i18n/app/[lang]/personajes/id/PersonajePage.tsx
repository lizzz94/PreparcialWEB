import { Metadata } from "next"
import { getDictionary } from "../../../../lib/dictionaries/getDictionary"



import Link from "next/link"

async function getPersonaje(id: string) {
  const enlace = await fetch(`https://hp-api.onrender.com/api/character/${id}`, {
    next: { revalidate: 3600 },
  })
  if (!enlace.ok) return null
  const data = await enlace.json()
  return data[0] ?? null
}

export async function generararMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "es"; id: string }>
}): Promise<Metadata> {
  const { id, lang } = await params
  const personaje = await getPersonaje(id)
  const dict = await getDictionary(lang)
  return {
    title: `Detalle de ${personaje?.nombre ?? "Personaje"} - HarryPotterApp`,
    description: dict.detailDesc,
  }
}

