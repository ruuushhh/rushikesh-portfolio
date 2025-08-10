"use client"

import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const POSTS = [
  {
    title: "Designing idempotent financial integrations",
    href: "#",
    summary: "Patterns for exactly-once semantics with outbox, dedupe keys, and retry safety.",
  },
  {
    title: "From flaky to dependable: stabilizing third‑party APIs",
    href: "#",
    summary: "Backoff strategies, circuit breakers, and telemetry to drive down error budgets.",
  },
]

export function Writing() {
  return (
    <Section id="writing" title="Writing" subtitle="Occasional notes on integrations and backend reliability.">
      <div className="grid gap-4 md:grid-cols-2">
        {POSTS.map((post) => (
          <Card key={post.title} className="transition-transform hover:-translate-y-0.5 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-base">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">{post.summary}</p>
              <a
                href={post.href}
                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                Read article
                <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
