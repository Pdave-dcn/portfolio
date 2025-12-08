import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Inter } from "next/font/google";
import { PageWrapper } from "@/components/layout/PageWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Pdave — Full-Stack Developer",
  description: "Portfolio, projects, and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <PageWrapper>{children}</PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
