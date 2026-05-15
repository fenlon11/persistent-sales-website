import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Persistent Sales — a modern sales workflow for small teams. Coming soon. Built by Persistent Momentum.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sales.persistentmomentum.com"),
  title: {
    default: "Persistent Sales — Coming soon",
    template: "%s",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "Persistent Sales",
    title: "Persistent Sales — Coming soon",
    description,
    url: "https://sales.persistentmomentum.com",
    images: [{ url: "/logo.png", width: 762, height: 720, alt: "Persistent Sales" }],
  },
  twitter: {
    card: "summary",
    title: "Persistent Sales",
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
