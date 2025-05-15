import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { i18n, Locale } from '../i18n-config';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'Premium Phone Numbers - Exclusive 666-99-00 Belarus',
  description: 'Own the exclusive 666-99-00 phone number set from all three Belarusian operators. Perfect for business, prestige, or gifting.',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="alternate" hrefLang="ru" href="/ru" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="zh" href="/zh" />
        <link rel="alternate" hrefLang="ar" href="/ar" />
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}