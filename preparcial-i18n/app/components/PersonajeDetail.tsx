import Image from "next/image"

const BorderColorHouses: Record<string, string> = {
  Gryffindor: "border-[#740001]",
  Slytherin: "border-[#1A472A]",
  Ravenclaw: "border-[#0E1A40]",
  Hufflepuff: "border-[#FFD800]",
  NoHouse: "border-[#D1D5DB]",
}

interface Varita {
  madera: string
  nucleo: string
  largo: number | null
}

interface Personaje {
  nombre: string
  imagen: string
  casa: string
  genero: string
  varia: Varita
}

interface PersonajeDetail {
  character: Personaje
  dict: Record<string, string>
}

