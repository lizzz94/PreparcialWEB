import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en", // si no se detecta idioma queda ingles por defecto
        permanent: false,
      },
    ]
  },
}

export default nextConfig