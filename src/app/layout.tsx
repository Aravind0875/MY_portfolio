import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import SpotlightGrid from "@/components/SpotlightGrid";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamma Aravind - Software Developer",
  description: "Portfolio of Gamma Aravind, a Software Developer and Data Analyst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 min-h-screen relative overflow-x-hidden`}>
        <SpotlightGrid />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
