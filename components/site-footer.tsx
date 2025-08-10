"use client"

import Link from "next/link"
import siteData from "@/content/site.json"

const links = [
  { href: "/api/resume", label: "Resume" },
  { href: siteData.social.github, label: "GitHub", external: true },
  { href: siteData.social.linkedin, label: "LinkedIn", external: true },
]

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between gap-3 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-3">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded px-2 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="rounded px-2 py-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <p className="text-center">© {new Date().getFullYear()} {siteData.name} · Built with ❤️</p>
      </div>
    </footer>
  )
}
