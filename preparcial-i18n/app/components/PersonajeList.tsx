import PersonajeCard from "./PersonajeCard"

interface Personaje {
  id: string
  nombre: string
  imagen: string
  casa: string
}

async function getPrimeros12(): Promise<Personaje[]> {
  const res = await fetch("https://hp-api.onrender.com/api/characters", {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return []
  const data = await res.json()
  return data.slice(0, 12)
}

interface ListaPersonajes {
  lang: string
}

export default async function PersonajeList({ lang }: ListaPersonajes) {
  const personajes = await getPrimeros12()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {personajes.map((personaje) => (
        <PersonajeCard key={personaje.id} personaje={personaje} lang={lang} />
      ))}
    </div>
  )
}
