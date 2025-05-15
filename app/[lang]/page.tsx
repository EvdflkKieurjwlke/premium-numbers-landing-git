import { getDictionary } from '../../lib/dictionary';
import { Locale } from '../../i18n-config';
import Image from 'next/image';
import Script from 'next/script';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await validatingDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{dictionary.hero.title}</h1>
        <p className="text-lg md:text-xl mb-6">{dictionary.hero.subtitle}</p>
        <Image
          src="/numbers-image.webp"
          alt={dictionary.hero.imageAlt}
          width={600}
          height={400}
          className="mx-auto rounded-lg shadow-lg"
          priority
        />
      </section>

      <section className="mb-12" itemScope itemType="http://schema.org/Product">
        <h2 className="text-3xl font-semibold mb-4">{dictionary.offer.title}</h2>
        <p className="mb-4" itemProp="description">{dictionary.offer.description}</p>
        <meta itemProp="name" content={dictionary.offer.title} />
        <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
          <meta itemProp="priceCurrency" content="BYN" />
          <meta itemProp="price" content="Contact for pricing" />
          <link itemProp="availability" href="http://schema.org/InStock" />
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">{dictionary.cta.title}</h2>
        <p className="mb-6">{dictionary.cta.description}</p>
        <a
          href={`mailto:info@premium-numbers.by?subject=${encodeURIComponent(dictionary.cta.subject)}`}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          aria-label={dictionary.cta.button}
        >
          {dictionary.cta.button}
        </a>
      </section>

      <Script type="application/ld+json">
        {JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'Product',
          name: dictionary.offer.title,
          description: dictionary.offer.description,
          offers: {
            '@type': 'Offer',
            priceCurrency: 'BYN',
            price: 'Contact for pricing',
            availability: 'http://schema.org/InStock',
          },
        })}
      </Script>
    </div>
  );
}