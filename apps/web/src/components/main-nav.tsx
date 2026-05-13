"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="main-nav">
      <Link href="/" className="site-logo">
        <span className="site-logo-icon">TC</span>
        <span className="site-logo-text">TheCodingHQs UI</span>
      </Link>
      <nav className="desktop-nav">
        <Link
          href="/docs"
          className={`desktop-nav-link${pathname?.startsWith("/docs") && !pathname?.startsWith("/docs/components") ? " active" : ""}`}
        >
          Docs
        </Link>
        <Link
          href="/docs/components/accordion"
          className={`desktop-nav-link${pathname?.startsWith("/docs/components") ? " active" : ""}`}
        >
          Components
        </Link>
      </nav>
    </div>
  )
}
