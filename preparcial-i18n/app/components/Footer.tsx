interface FooterProps {
  happ: string
  autor: string
}

export default function Footer({ happ, autor }: FooterProps) {
  return (
    <footer className="w-full bg-[#BBCCBB] flex justify-between items-center px-6 py-3 text-sm text-gray-700">
      <span>{happ}</span>
      <span>{autor}</span>
    </footer>
  )
}
