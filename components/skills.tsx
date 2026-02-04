"use client"

import { Section } from "./section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import skillsData from "@/content/skills.json"

type SkillGroup = {
  label: string
  items: string[]
}

const GROUPS: SkillGroup[] = [
  skillsData.backend,
  skillsData.infrastructure,
  skillsData.integrations,
  skillsData.practices,
]

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="What I work with daily.">
      <div className="grid gap-4 sm:grid-cols-2">
        {GROUPS.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  {group.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge 
                      key={item} 
                      variant="secondary" 
                      className="rounded-full text-sm"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
