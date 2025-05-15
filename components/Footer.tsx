import { getDictionary } from '../lib/dictionary';
import { Locale } from '../i18n-config';

export default async function Footer({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>{dictionary.footer.text}</p>
      <p>
        <a href="mailto:info@premium-numbers.by" className="underline">
          {dictionary.footer.contact}
        </a>
      </p>
    </footer>
  );
}