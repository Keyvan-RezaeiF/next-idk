/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'fa'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
