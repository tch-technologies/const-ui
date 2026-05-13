"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@thecodinghqs/ui"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@thecodinghqs/ui"
import { Button } from "@thecodinghqs/ui"
import { docsConfig } from "@/config/docs"

export function CommandMenu() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative h-9 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        >
          <span className="hidden lg:inline-flex">Search documentation...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Links">
              {docsConfig.mainNav
                .filter((navitem) => !navitem.external)
                .map((navItem) => (
                  <CommandItem
                    key={navItem.href}
                    value={navItem.title}
                    onSelect={() => {
                      runCommand(() => router.push(navItem.href as string))
                    }}
                  >
                    <div className="mr-2 flex h-4 w-4 items-center justify-center">
                      <Search className="h-3 w-3" />
                    </div>
                    {navItem.title}
                  </CommandItem>
                ))}
            </CommandGroup>
            {docsConfig.sidebarNav.map((group) => (
              <CommandGroup key={group.title} heading={group.title}>
                {group.items.map((navItem) => (
                  <CommandItem
                    key={navItem.href}
                    value={navItem.title}
                    onSelect={() => {
                      runCommand(() => router.push(navItem.href as string))
                    }}
                  >
                    <div className="mr-2 flex h-4 w-4 items-center justify-center">
                      <Search className="h-3 w-3" />
                    </div>
                    {navItem.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
