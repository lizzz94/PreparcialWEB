import Image from "next/image"
import Link from "next/link"
import LanguageSwitcher from "./LanguageSwitcher"

interface HeaderHa {
  lang: "en" | "es"
}

export default function Header({ lang }: HeaderHa) {
  return (
    <header className="w-full bg-[#FDB608] flex flex-col items-center py-3 shadow-md">
      <Link href={`/${lang}`}>
        <Image
          src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
          alt="voldemort Harry Potter Logo - Go to Home"
          width={180}
          height={70}
          className="object-contain"
          priority
        />
      </Link>
      <div className="mt-1">
        <LanguageSwitcher currentLang={lang} />
      </div>
    </header>
  )
}
