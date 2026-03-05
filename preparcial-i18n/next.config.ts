import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
  async rewrites() {
    return [
      {
        source: '/:lang',
        destination: '/:lang',
      },
    ]
  },
}

export default nextConfig