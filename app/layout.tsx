import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/DownloadButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dee Pabst - Frontend Developer",
  description: "Frontend developer portfolio showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <span
            id="top"
            className="absolute top-0 opacity-0"
            aria-hidden="true"
          />
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <div className="mr-4 hidden md:flex pl-4">
                <Link className="mr-6 flex items-center space-x-2" href="/">
                  <span className="hidden font-bold sm:inline-block">
                    dee.pabst
                  </span>
                </Link>
                <NavBar />
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <DownloadButton />
              </div>
            </div>
          </header>

          {/* Hot Pink Avatar Banner */}
          <div className="w-full bg-pink-600">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex justify-center">
                <div className="h-48 w-48 rounded-full border-4 border-white overflow-hidden shadow-xl">
                  <img
                    src="/dee_headshot.jpg"
                    alt="Dee Pabst Headshot"
                    className="w-full h-full object-cover"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
            </div>
          </div>

          <main className="min-h-screen">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex min-h-screen flex-col items-center justify-center">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
