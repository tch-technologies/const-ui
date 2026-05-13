"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { docsConfig } from "@/config/docs"

type SidebarProps = {
  onClick?: () => void
}

export function Sidebar({ onClick }: SidebarProps) {
  const pathname = usePathname()

  return (
    <nav className="sidebar-nav">
      {docsConfig.sidebarNav.map((section, i) => (
        <div key={i} className="sidebar-section">
          <p className="sidebar-section-title">{section.title}</p>
          {section.items?.length ? (
            <div className="sidebar-items">
              {section.items.map((item, j) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={j}
                    href={item.href!}
                    onClick={onClick}
                    className={`sidebar-item${isActive ? " active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.title}
                    {item.label && (
                      <span className="sidebar-badge">{item.label}</span>
                    )}
                  </Link>
                )
              })}
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  )
}
