import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lab99.com.br"),
  title: {
    default: "Lab99 — Software que entende sua empresa",
    template: "%s | Lab99",
  },
  description:
    "Estúdio brasileiro de software que cria CRM personalizado, CRM Hub, automações, agentes de IA e integrações sob medida.",
  keywords: [
    "software personalizado",
    "CRM personalizado",
    "automação",
    "agentes de IA",
    "integrações",
    "Selfware",
  ],
  authors: [{ name: "Lab99" }],
  creator: "Lab99",
  icons: {
    icon: "/assets/lab99/logo-mono.jpg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Lab99",
    title: "Lab99 — Software que entende sua empresa",
    description:
      "Selfware para empresas que não cabem em software de prateleira.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
