import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import { SITE_URL, SITE_NAME } from "./lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title =
  "Rufino Baterias | Baterias Automotivas em Vespasiano com Entrega no Mesmo Dia";
const description =
  "Loja de baterias automotivas em Vespasiano (MG). Moura, Heliar e Zetta para carro, moto e caminhão. Entrega e instalação no mesmo dia, com garantia de fábrica. Peça pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "bateria automotiva Vespasiano",
    "loja de bateria Vespasiano",
    "troca de bateria Vespasiano",
    "bateria de carro Vespasiano",
    "bateria de moto Vespasiano",
    "bateria de caminhão Vespasiano",
    "bateria Moura",
    "bateria Heliar",
    "bateria Zetta",
    "entrega de bateria Vespasiano",
    "instalação de bateria a domicílio",
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: "/backmob1.png",
        width: 941,
        height: 1672,
        alt: "Mascote da Rufino Baterias ao lado de baterias Moura, Heliar e Zetta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/backmob1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: SITE_NAME,
  description,
  url: SITE_URL,
  image: `${SITE_URL}/backmob1.png`,
  priceRange: "$$",
  openingHours: "Mo-Sa 08:00-18:00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vespasiano",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  areaServed: [
    "Vespasiano",
    "São José da Lapa",
    "Ribeirão das Neves",
    "Santa Luzia",
    "Belo Horizonte",
  ],
  brand: [
    { "@type": "Brand", name: "Moura" },
    { "@type": "Brand", name: "Heliar" },
    { "@type": "Brand", name: "Zetta" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18423645002"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18423645002');
          `}
        </Script>
        <Script id="gtag-report-conversion" strategy="afterInteractive">
          {`
            window.gtag_report_conversion = function(url) {
              gtag('event', 'conversion', {
                'send_to': 'AW-18423645002/908ECNKmnuwcEMqGitFE',
                'value': 1.0,
                'currency': 'BRL'
              });
              return true;
            };
          `}
        </Script>
        <Header />
        {children}
      </body>
    </html>
  );
}
