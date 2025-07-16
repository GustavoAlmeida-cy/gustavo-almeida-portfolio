import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Almeida | Desenvolvedor Front-end",
  description:
    "Portfólio de Gustavo Almeida, desenvolvedor front-end focado em interfaces modernas, acessíveis e performáticas usando React, Next.js e tecnologias web de ponta.",
  authors: [{ name: "Gustavo Almeida", url: "https://seusite.dev" }],
  creator: "Gustavo Almeida",
  keywords: [
    "Desenvolvedor Front-end",
    "Portfólio",
    "Gustavo Almeida",
    "React",
    "Next.js",
    "JavaScript",
    "UI/UX",
    "Web Developer",
  ],
  openGraph: {
    title: "Gustavo Almeida | Desenvolvedor",
    description:
      "Explore o portfólio de Gustavo Almeida e descubra projetos de alta qualidade com foco em performance, usabilidade e design moderno.",
    url: "https://seusite.dev",
    siteName: "Gustavo Almeida",
    locale: "pt_BR",
    type: "website",
  },
  metadataBase: new URL("https://seusite.dev"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className="w-screen h-screen p-0 m-0 overflow-x-clip!"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
