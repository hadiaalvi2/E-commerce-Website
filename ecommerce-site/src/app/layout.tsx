import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { CartProvider } from "@/context/CartProvider";

export const metadata: Metadata = {
  title: "ShopHub - Your Premier E-commerce Destination",
  description: "Discover amazing products at great prices. Your one-stop shop for quality items.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}