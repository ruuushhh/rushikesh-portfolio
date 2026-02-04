"use client"

import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import highlightsData from "@/content/highlights.json"

export function Highlights() {
  return (
    <Section id="strengths" title="What I'm Known For" subtitle="How I approach engineering work.">
      <div className="grid gap-4 sm:grid-cols-2">
        {highlightsData.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <Card className="h-full border-l-2 border-l-indigo-600/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
