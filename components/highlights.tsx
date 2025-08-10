"use client"

import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import highlightsData from "@/content/highlights.json"

export function Highlights() {
  return (
    <Section id="highlights" title="Highlights" subtitle="Impact snapshots and key outcomes.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlightsData.map((kpi, i) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <Card className="h-full transition-transform hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">{kpi.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{kpi.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
