"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@thecodinghqs/ui"
import { Sidebar } from "./sidebar"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {/* Hamburger — hidden on desktop via .mobile-hamburger CSS class */}
      <div className="mobile-hamburger">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-in panel */}
      <aside
        data-state={open ? "open" : "closed"}
        className="mobile-sheet"
        aria-label="Site navigation"
      >
        <div className="mobile-sheet-header">
          <Link
            href="/"
            className="site-logo"
            onClick={() => setOpen(false)}
          >
            <span className="site-logo-icon">TC</span>
            <span style={{ fontWeight: 600 }}>TheCodingHQs UI</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="mobile-sheet-body">
          <Sidebar onClick={() => setOpen(false)} />
        </div>
      </aside>
    </>
  )
}
