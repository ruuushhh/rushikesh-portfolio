"use client"

import { Section } from "./section"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import skillsData from "@/content/skills.json"

const GROUPS: { name: string; items: string[] }[] = [
  { name: "Languages", items: skillsData.languages },
  { name: "Frameworks", items: skillsData.frameworks },
  { name: "Databases", items: skillsData.databases },
  { name: "Platforms", items: skillsData.platforms },
  { name: "Integrations", items: skillsData.integrations },
  { name: "Tools", items: skillsData.tools },
  { name: "Domains", items: skillsData.domains },
]

const PROFICIENCY: { label: string; level: number }[] = [
  { label: "Python", level: 92 },
  { label: "Django / DRF", level: 90 },
  { label: "SQL / PostgreSQL", level: 88 },
  { label: "Celery / Async", level: 86 },
  { label: "OAuth2 / Webhooks", level: 84 },
  { label: "NetSuite / Xero / QBO", level: 82 },
]

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Tools and platforms I use to ship reliable systems.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border p-4">
          <h3 className="mb-3 text-base font-semibold">Skill groups</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {GROUPS.map((g) => (
              <div key={g.name}>
                <p className="mb-2 text-sm font-medium text-muted-foreground">{g.name}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Badge key={i} variant="secondary" className="rounded-full">
                      {i}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border p-4">
          <h3 className="mb-3 text-base font-semibold">Proficiency</h3>
          <ul className="space-y-3">
            {PROFICIENCY.map((p) => (
              <li key={p.label}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span>{p.label}</span>
                  <span className="text-muted-foreground">{p.level}%</span>
                </div>
                <div
                  className={cn("h-2 w-full rounded-full bg-muted")}
                  role="progressbar"
                  aria-valuenow={p.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${p.label} proficiency`}
                >
                  <div
                    className="h-2 rounded-full bg-indigo-600 transition-[width] duration-700 ease-out"
                    style={{ width: `${p.level}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
