import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { CartProvider } from "@/context/CartProvider";
import ServiceWorkerRegistrar from '@/components/ServiceWorkerRegistrar'; 

export const metadata: Metadata = {
  title: {
    default: "Shopie - Your Premier E-commerce Destination",
    template: "%s | Shopie",
  },
  description:
    "Discover amazing products at unbeatable prices. Your premium shopping destination with curated collections, exclusive deals, and exceptional customer service.",
  keywords: [
    "e-commerce",
    "online shopping",
    "deals",
    "electronics",
    "fashion",
    "home",
    "garden",
    "premium products",
  ],
  authors: [{ name: "Shopie Team" }],
  creator: "Shopie",
  publisher: "Shopie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shopie.com",
    title: "Shopie - Your Premier E-commerce Destination",
    description:
      "Discover amazing products at unbeatable prices. Premium shopping with exclusive deals.",
    siteName: "Shopie",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shopie - Premier E-commerce Destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopie - Your Premier E-commerce Destination",
    description:
      "Discover amazing products at unbeatable prices. Premium shopping with exclusive deals.",
    images: ["/twitter-image.jpg"],
    creator: "@Shopie",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-196.png", sizes: "196x196", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#ec4899" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "e-commerce",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  colorScheme: "light dark",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Windows / Microsoft tiles */}
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* iOS splash (include representative, others optional) */}
        <link
          rel="apple-touch-startup-image"
          href="/icons/apple-splash-2048-2732.jpg"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Shopie",
              url: "https://shopie.com",
              description:
                "Your premier e-commerce destination for quality products at amazing prices",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://shopie.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shopie",
              url: "https://shopie.com",
              logo: "https://shopie.com/logo.png",
              sameAs: [
                "https://www.facebook.com/Shopie",
                "https://www.twitter.com/Shopie",
                "https://www.instagram.com/Shopie",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-inter antialiased">
        <ThemeProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">{children}</div>
            <ServiceWorkerRegistrar /> 
          </CartProvider>
        </ThemeProvider>

       
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
