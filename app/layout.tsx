import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Inter } from "next/font/google";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { getServerLanguage } from "@/lib/i18n/getServerLanguage";
import { LanguageProvider } from "@/components/providers/language-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "David Providence - Full-Stack Web Developer",
  description:
    "Full-stack developer crafting intuitive interfaces and performant, production-ready software.",
  alternates: {
    canonical: "https://pdaaave.vercel.app",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverLang = await getServerLanguage();

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          value={{
            light: "light",
            dark: "dark",
            neon: "neon",
            tech: "tech",
            sunset: "sunset",
          }}
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider serverLang={serverLang}>
            <PageWrapper>{children}</PageWrapper>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
