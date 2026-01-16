// @ts-nocheck
import Document, { Html, Head, Main, NextScript } from 'next/document'

const siteUrl = 'https://mo-kebap.de/'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de" prefix="og: https://ogp.me/ns#">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="google-adsense-account" content="ca-pub-3490607792366389" />
          <meta name="google-adsense-platform-account" content="ca-pub-3490607792366389" />
          <meta name="adsense-lazy-loading" content="enabled" />
          <meta name="adsense-lazy-rootmargin" content="400px 0px" />
          <meta name="adsense-placeholder-minheight-desktop" content="280" />
          <meta name="adsense-placeholder-minheight-mobile" content="200" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
          <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
          <link rel="apple-touch-icon" href="/images/logo.jpg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://tpc.googlesyndication.com" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3490607792366389"
            crossOrigin="anonymous"
          ></script>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                  {
                    '@type': 'Restaurant',
                    '@id': `${siteUrl}#restaurant`,
                    name: 'Mo Kebap Münsingen',
                    image: '/images/logo.jpg',
                    description: 'Türkisches Restaurant in Münsingen – Döner, Kebab, Pizza, Lahmacun und Pide.',
                    url: siteUrl,
                    telephone: '+49 174 9633343',
                    priceRange: '€',
                    servesCuisine: ['Türkisch', 'Pizza', 'Döner', 'Kebab'],
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: 'Hauptstraße',
                      addressLocality: 'Münsingen',
                      addressRegion: 'Baden-Württemberg',
                      postalCode: '72525',
                      addressCountry: 'DE'
                    },
                    geo: {
                      '@type': 'GeoCoordinates',
                      latitude: '48.4098',
                      longitude: '9.4957'
                    },
                    openingHoursSpecification: [
                      {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                        opens: '11:00',
                        closes: '22:00'
                      }
                    ],
                    acceptsReservations: false,
                    hasMenu: `${siteUrl}menu`,
                    menu: `${siteUrl}menu`
                  },
                  {
                    '@type': 'Organization',
                    '@id': `${siteUrl}#organization`,
                    name: 'Mo Kebap Münsingen',
                    url: siteUrl,
                    logo: '/images/logo.jpg',
                    sameAs: ['https://www.facebook.com/', 'https://www.instagram.com/']
                  },
                  {
                    '@type': 'WebSite',
                    '@id': `${siteUrl}#website`,
                    url: siteUrl,
                    name: 'Mo Kebap Münsingen',
                    inLanguage: 'de',
                    potentialAction: {
                      '@type': 'SearchAction',
                      target: `${siteUrl}search?q={search_term_string}`,
                      'query-input': 'required name=search_term_string'
                    }
                  },
                  {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'Start', item: siteUrl }
                      // { '@type': 'ListItem', position: 2, name: 'Speisekarte', item: `${siteUrl}menu` } // menu wyłączone
                    ]
                  }
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
