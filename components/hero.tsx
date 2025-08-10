"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import siteData from "@/content/site.json"

export function Hero() {
  const tech = [
    "Python",
    "Django",
    "DRF",
    "PostgreSQL",
    "Redis",
    "Celery",
    "OAuth2",
    "NetSuite",
    "Sage Intacct",
    "Xero",
    "QBO",
  ]

  const onContactClick = () => {
    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="scroll-mt-24 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className={cn("relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-colors sm:p-8")}
      >
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 ring-1 ring-black/5 dark:ring-white/10">
              <AvatarImage src="/profile-photo.jpeg" alt={`${siteData.name} avatar`} />
              <AvatarFallback>{siteData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{siteData.name}</h1>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {siteData.role} — Python • Django • SQL
              </p>
            </div>
          </div>
          <div className="flex w-full items-center gap-2 md:w-auto">
            <Button asChild className="w-full bg-indigo-600 text-white hover:bg-indigo-500 md:w-auto">
              <a href="/api/resume" aria-label="Download resume">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" onClick={onContactClick} className="w-full md:w-auto bg-transparent">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-base text-muted-foreground">
          I build reliable financial integrations and backend systems that scale — from Sage Intacct to QBO — with clean
          APIs, resilient data pipelines, and observability-first engineering.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full">
              {t}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
