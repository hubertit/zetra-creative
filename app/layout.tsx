import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Zetta Creative - Photography & Production Studio",
  description: "Professional photography and production studio creating memories that last a lifetime. Specializing in portrait photography, event coverage, and creative production services.",
  keywords: "photography, production studio, portrait photography, event photography, creative studio, professional photographer, photo studio, video production",
  authors: [{ name: "Zetta Creative" }],
  creator: "Zetta Creative",
  publisher: "Zetta Creative",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zetta-creative.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zetta-creative.com',
    siteName: 'Zetta Creative',
    title: 'Zetta Creative - Photography & Production Studio',
    description: 'Professional photography and production studio creating memories that last a lifetime. Specializing in portrait photography, event coverage, and creative production services.',
    images: [
      {
        url: '/assets/img/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Zetta Creative Photography Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zetta Creative - Photography & Production Studio',
    description: 'Professional photography and production studio creating memories that last a lifetime.',
    images: ['/assets/img/hero.jpg'],
    creator: '@zetta_creative',
    site: '@zetta_creative',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'photography',
  classification: 'photography studio',
  other: {
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Zetta Creative',
    'application-name': 'Zetta Creative',
    'msapplication-config': '/assets/img/favicon/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/img/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/assets/img/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="shortcut icon" href="/assets/img/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/assets/img/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
