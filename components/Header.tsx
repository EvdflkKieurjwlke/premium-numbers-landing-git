import Link from 'next/link';
import { getDictionary } from '../lib/dictionary';
import { Locale } from '../i18n-config';

export default async function Header({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{dictionary.header.title}</h1>
        <ul className="flex space-x-4">
          {['ru', 'en', 'zh', 'ar'].map((locale) => (
            <li key={locale}>
              <Link href={`/${locale}`} className="hover:underline">
                {dictionary.header.languages[locale]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}