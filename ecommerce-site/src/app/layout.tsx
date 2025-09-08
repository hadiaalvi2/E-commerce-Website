import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { CartProvider } from "@/context/CartProvider";

export const metadata: Metadata = {
  title: {
    default: "Shopie - Your Premier E-commerce Destination",
    template: "%s | Shopie"
  },
  description: "Discover amazing products at unbeatable prices. Your premium shopping destination with curated collections, exclusive deals, and exceptional customer service.",
  keywords: ["e-commerce", "online shopping", "deals", "electronics", "fashion", "home", "garden", "premium products"],
  authors: [{ name: "Shopie Team" }],
  creator: "Shopie",
  publisher: "Shopie",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Shopie.com',
    title: 'Shopie - Your Premier E-commerce Destination',
    description: 'Discover amazing products at unbeatable prices. Premium shopping with exclusive deals.',
    siteName: 'Shopie',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopie - Premier E-commerce Destination',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopie - Your Premier E-commerce Destination',
    description: 'Discover amazing products at unbeatable prices. Premium shopping with exclusive deals.',
    images: ['/twitter-image.jpg'],
    creator: '@Shopie',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ec4899' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'e-commerce',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Shopie",
              "url": "https://Shopie.com",
              "description": "Your premier e-commerce destination for quality products at amazing prices",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://Shopie.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shopie",
              "url": "https://Shopie.com",
              "logo": "https://Shopie.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/Shopie",
                "https://www.twitter.com/Shopie",
                "https://www.instagram.com/Shopie"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </head>
      <body 
        suppressHydrationWarning
        className="font-inter antialiased"
      >
        <ThemeProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              {children}
            </div>
          </CartProvider>
        </ThemeProvider>
        
        {/* Loading script for theme to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('Shopie');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}