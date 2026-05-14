import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@const-ui/react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 relative">
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <Link
          href="/docs"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          ?? <div className="mx-2 h-4 w-[1px] bg-border" />
          Introducing TheCodingHQs UI
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Build your component library.
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          Beautifully designed components that you can copy and paste into your apps. Accessible.
          Customizable. Open Source.
        </p>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Link href="/docs">
            <Button>Get Started</Button>
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://github.com/thecodinghqs/ui">
            <Button variant="outline">GitHub</Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto space-y-6 bg-slate-50 dark:bg-transparent py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This UI library is a fully-featured component system built with Radix UI and Tailwind
            CSS.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-left shadow-sm">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Accessible</h3>
                <p className="text-sm text-muted-foreground">
                  Components are accessible by default, following WAI-ARIA guidelines.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-left shadow-sm">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Customizable</h3>
                <p className="text-sm text-muted-foreground">
                  Tailwind CSS allows you to easily override and customize the components.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-left shadow-sm">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Dark Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Native support for dark mode, using CSS variables and next-themes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
