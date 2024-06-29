import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code With Credo",
  description: "Generated by create next app",
  keywords: ["Frontend", "Developer", "Frontend Developer", "Szakacs Tamas"],
  icons: {
    icon: "/images/og-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
