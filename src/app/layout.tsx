import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cookathon",
  description: "Mantle Network's flagship early-stage builder program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        property="twitter:image"
        content="https://cookathon.dev/opengraph.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Cookathon" />
      <meta
        property="twitter:description"
        content="Mantle Network's flagship early-stage builder program"
      />

      <meta property="og:image" content="https://cookathon.dev/opengraph.png" />
      <meta property="og:site_name" content="Cookathon" />
      <meta property="og:title" content="Cookathon" />
      <meta
        property="og:description"
        content="Mantle Network's flagship early-stage builder program"
      />
      <meta property="og:url" content="https://cookathon.dev"></meta>

      <body className={`${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
