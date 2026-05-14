'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Github } from 'lucide-react'
import { Button } from '@const/ui'
import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'
import { CommandMenu } from '@/components/command-menu'

export function SiteHeader() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <MobileNav />
        <MainNav />
        <div className="site-header-actions">
          <CommandMenu />
          <Link href="https://github.com/thecodinghqs/ui" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="theme-toggle h-9 w-9"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            <Sun className="theme-icon-sun" />
            <Moon className="theme-icon-moon" />
          </Button>
        </div>
      </div>
    </header>
  )
}
