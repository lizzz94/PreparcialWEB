import Image from "next/image"
import Link from "next/link"
import PersonajeList from "./PersonajeList"

const BgColorHouses: Record<string, string> = {
  Gryffindor: "bg-[#740001]",
  Slytherin: "bg-[#1A472A]",
  Ravenclaw: "bg-[#0E1A40]",
  Hufflepuff: "bg-[#FFD800]",
  SinCasa: "bg-[#D1D5DB]",
}

interface Personaje {
  id: string
  nombre: string
  imagen: string
  casa: string
}

interface PersonajeCardP {
  personaje: Personaje
  lang: string
}

export default function PersonajeCard({ personaje, lang }: PersonajeCardP) {
  const casa = personaje.casa || "Sin casa"
  const bgColor = BgColorHouses[casa] ?? BgColorHouses.NoHouse

  return (
    <Link href={`/${lang}/character/${personaje.id}`}>
      <div className={`${bgColor} rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 shadow-lg`}>
        <div className="relative w-full h-56">
          {personaje.imagen ? (
            <Image
              src={personaje.imagen}
              alt={personaje.nombre}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-400">
              <span className="text-white text-4xl"></span>
            </div>
          )}
        </div>
        <div className="p-2 text-center">
          <p className={`font-bold text-sm ${casa === "Hufflepuff" ? "text-gray-900" : "text-white"}`}>
            {personaje.nombre}
          </p>
        </div>
      </div>
    </Link>
  )
}
