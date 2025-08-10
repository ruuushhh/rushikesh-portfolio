"use client"

import { Section } from "./section"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import projectsData from "@/content/projects.json"

type Project = {
  title: string
  description: string
  tags: string[]
  image?: string
  github?: string
  live?: string
  details: string
}

const PROJECTS: Project[] = projectsData.map(project => ({
  title: project.title,
  description: project.summary,
  details: project.details,
  tags: project.tags,
  github: project.links.github,
  live: project.links.live,
  image: project.image || "/placeholder.svg?height=240&width=480"
}))

export function Projects() {
  return (
    <Section id="projects" title="Key Initiative & Contributions" subtitle="Notable projects and impactful work.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <Card className="group h-full overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-md">
              {p.image ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.title} cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ) : null}
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      Read more
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>{p.title}</DialogTitle>
                      <DialogDescription>{p.description}</DialogDescription>
                    </DialogHeader>
                    <p className="text-sm">{p.details}</p>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
