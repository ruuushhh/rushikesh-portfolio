"use client"

import type React from "react"

import Link from "next/link"
import { LogoMark } from "./logo-mark"
import { ThemeToggle } from "./theme-toggle"
import { useCallback } from "react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Initiatives" },
  { href: "#strengths", label: "Strengths" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const onAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget.getAttribute("href") ?? "").trim()
    if (href.startsWith("#")) {
      e.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <LogoMark />
          <span className="hidden text-sm font-semibold sm:inline">Rushikesh Tayade</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onAnchorClick}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 hover:text-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <a
            href="#contact"
            onClick={onAnchorClick}
            className="mr-1 inline-flex rounded-md px-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
