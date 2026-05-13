import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "TheCodingHQs UI",
    template: "%s | TheCodingHQs UI",
  },
  description: "A beautiful, accessible, and performant React UI component library.",
  openGraph: {
    title: "TheCodingHQs UI",
    description: "A beautiful, accessible, and performant React UI component library.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Noise overlay behind everything */}
          <div className="bg-noise pointer-events-none fixed inset-0 z-[-1]" aria-hidden="true" />

          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
