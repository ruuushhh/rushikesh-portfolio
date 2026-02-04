"use client"

import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import projectsData from "@/content/projects.json"

type CaseStudy = {
  title: string
  problem: string
  action: string
  result: string
  tags: string[]
  image?: string
}

const CASE_STUDIES: CaseStudy[] = projectsData as CaseStudy[]

export function Projects() {
  return (
    <Section id="projects" title="Key Initiatives" subtitle="Problems I've solved in production.">
      <div className="space-y-6">
        {CASE_STUDIES.map((study, i) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <Card className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {study.image && (
                  <div className="relative aspect-[16/9] w-full lg:aspect-auto lg:w-64 lg:shrink-0 border-b lg:border-b-0 lg:border-r">
                    <Image
                      src={study.image}
                      alt={`${study.title} illustration`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 256px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {study.tags.map((t) => (
                        <Badge key={t} variant="outline" className="rounded-full text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Problem: </span>
                      <span>{study.problem}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Action: </span>
                      <span>{study.action}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Result: </span>
                      <span>{study.result}</span>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
