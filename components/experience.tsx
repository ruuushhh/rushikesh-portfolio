"use client"

import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import experienceData from "@/content/experience.json"

type Item = {
  company: string
  role: string
  location?: string
  start: string
  end: string
  bullets: string[]
  tags: string[]
  logo?: string
}

// Transform the data to match the expected format
const ITEMS: (Item & { dates: string })[] = experienceData.map(item => ({
  ...item,
  dates: `${new Date(item.start + "-01").getFullYear()} — ${item.end === "present" ? "Present" : new Date(item.end + "-01").getFullYear()}`,
  logo: item.company.toLowerCase().includes('sage') || item.company.toLowerCase().includes('fyle') 
    ? "/sage-logo.png" 
    : item.company.toLowerCase().includes('boongg')
    ? "/boongg-logo.jpeg"
    : item.company.toLowerCase().includes('abekus')
    ? "/abekus-logo.jpeg"
    : "/placeholder.svg?height=48&width=48"
}))

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Recent roles and responsibilities.">
      <div className="relative">
        <div className="absolute left-[13px] top-0 h-full w-px bg-border md:left-[15px]" aria-hidden="true" />
        <ul className="space-y-6">
          {ITEMS.map((item, idx) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="relative pl-10 md:pl-12"
            >
              <span
                className="absolute left-0 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border bg-background text-xs font-semibold text-indigo-600 shadow-sm"
                aria-hidden="true"
              >
                {idx + 1}
              </span>
              <Card className="transition-transform hover:-translate-y-0.5 hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle className="text-lg">{item.role}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {item.company} · {item.dates}
                    </p>
                  </div>
                  {item.logo ? (
                    <div className="relative h-8 w-8 shrink-0">
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={`${item.company} logo`}
                        fill
                        sizes="32px"
                        className="rounded"
                      />
                    </div>
                  ) : null}
                </CardHeader>
                <CardContent>
                  <ul className="list-outside list-disc space-y-2 pl-5 text-sm">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-full">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
