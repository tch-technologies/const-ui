import { Sidebar } from "@/components/sidebar"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="docs-layout">
      <aside className="docs-sidebar">
        <div className="docs-sidebar-inner">
          <Sidebar />
        </div>
      </aside>
      <main className="docs-main">
        <div className="docs-content">
          {children}
        </div>
      </main>
    </div>
  )
}
