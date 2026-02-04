"use client"

import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import experienceData from "@/content/experience.json"

type ThemeSection = {
  theme: string
  bullets: string[]
}

type ExperienceItem = {
  company: string
  role: string
  location?: string
  start: string
  end: string
  sections?: ThemeSection[]
  bullets?: string[]
  tags: string[]
}

function getLogo(company: string): string {
  const c = company.toLowerCase()
  if (c.includes('sage') || c.includes('fyle')) return "/sage-logo.png"
  if (c.includes('boongg')) return "/boongg-logo.jpeg"
  if (c.includes('abekus')) return "/abekus-logo.jpeg"
  return "/placeholder.svg?height=48&width=48"
}

function formatDates(start: string, end: string): string {
  const startYear = new Date(start + "-01").getFullYear()
  const endStr = end === "present" ? "Present" : new Date(end + "-01").getFullYear()
  return `${startYear} — ${endStr}`
}

export function Experience() {
  const items = experienceData as ExperienceItem[]
  const mainRole = items[0]
  const otherRoles = items.slice(1)

  return (
    <Section id="experience" title="Experience" subtitle="Production systems, integrations, and backend engineering.">
      <div className="space-y-8">
        {/* Main role with expanded detail */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-xl">{mainRole.role}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {mainRole.company} · {formatDates(mainRole.start, mainRole.end)}
                </p>
              </div>
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src={getLogo(mainRole.company)}
                  alt={`${mainRole.company} logo`}
                  fill
                  sizes="40px"
                  className="rounded"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {mainRole.sections?.map((section) => (
                <div key={section.theme}>
                  <h4 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {section.theme}
                  </h4>
                  <ul className="list-outside list-disc space-y-2 pl-5 text-sm">
                    {section.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {mainRole.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-full">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Previous roles - compact */}
        {otherRoles.length > 0 && (
          <div>
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">Previous Experience</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherRoles.map((item, idx) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
                      <div>
                        <CardTitle className="text-base">{item.role}</CardTitle>
                        <p className="text-xs text-muted-foreground">
                          {item.company} · {formatDates(item.start, item.end)}
                        </p>
                      </div>
                      <div className="relative h-6 w-6 shrink-0">
                        <Image
                          src={getLogo(item.company)}
                          alt={`${item.company} logo`}
                          fill
                          sizes="24px"
                          className="rounded"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="list-outside list-disc space-y-1 pl-4 text-xs text-muted-foreground">
                        {item.bullets?.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
