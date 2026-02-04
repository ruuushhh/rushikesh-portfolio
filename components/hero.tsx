"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import siteData from "@/content/site.json"

export function Hero() {
  const coreStack = ["Python", "Django", "PostgreSQL", "FastAPI"]
  const integrations = ["NetSuite", "Sage Intacct", "QBO", "Xero", "Business Central"]
  const infra = ["Kubernetes", "Grafana", "Sentry", "Docker"]

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
                {siteData.role} · Backend & Integrations
              </p>
            </div>
          </div>
          <div className="flex w-full items-center gap-2 md:w-auto">
            <Button asChild className="flex-1 bg-indigo-600 text-white hover:bg-indigo-500 md:flex-none md:w-auto">
              <a href="/api/resume" aria-label="Download resume">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="outline" onClick={onContactClick} className="flex-1 bg-transparent md:flex-none md:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-relaxed">
          I build and maintain backend systems that connect enterprise accounting platforms—NetSuite, 
          Sage Intacct, QBO, Xero—to internal products. I own production systems, handle on-call rotations, 
          and debug complex integration failures under pressure. Currently working as a <span className="font-medium">Senior Engineer</span> at <span className="font-medium">Sage</span>.
        </p>

        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <span className="text-xs font-medium text-muted-foreground sm:hidden">Backend</span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="hidden text-xs font-medium text-muted-foreground w-20 sm:inline">Backend</span>
              {coreStack.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-medium text-muted-foreground sm:hidden">Integrations</span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="hidden text-xs font-medium text-muted-foreground w-20 sm:inline">Integrations</span>
              {integrations.map((t) => (
                <Badge key={t} variant="outline" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-medium text-muted-foreground sm:hidden">Infra</span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="hidden text-xs font-medium text-muted-foreground w-20 sm:inline">Infra</span>
              {infra.map((t) => (
                <Badge key={t} variant="outline" className="rounded-full border-dashed">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
