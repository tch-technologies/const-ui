export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Documentation", href: "/docs" },
    { title: "Components", href: "/docs/components/accordion" },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs", items: [] },
      ],
    },
    {
      title: "Components",
      items: [
        { title: "Accordion",    href: "/docs/components/accordion",    items: [] },
        { title: "Badge",        href: "/docs/components/badge",        items: [] },
        { title: "Button",       href: "/docs/components/button",       items: [] },
        { title: "Button Group", href: "/docs/components/button-group", items: [] },
        { title: "Card",         href: "/docs/components/card",         items: [] },
        { title: "Combobox",     href: "/docs/components/combobox",     items: [] },
        { title: "Context Menu", href: "/docs/components/context-menu", items: [] },
        { title: "Dialog",       href: "/docs/components/dialog",       items: [] },
        { title: "Image Zoom",   href: "/docs/components/image-zoom",   items: [] },
        { title: "Popover",      href: "/docs/components/popover",      items: [] },
        { title: "Progress",     href: "/docs/components/progress",     items: [] },
        { title: "Radio Group",  href: "/docs/components/radio-group",  items: [] },
        { title: "Select",       href: "/docs/components/select",       items: [] },
        { title: "Switch",       href: "/docs/components/switch",       items: [] },
        { title: "Tabs",         href: "/docs/components/tabs",         items: [] },
      ],
    },
  ],
}
