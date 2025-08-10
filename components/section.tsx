"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-12 sm:py-16", className)} aria-labelledby={`${id}-title`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{subtitle}</p> : null}
      </motion.div>
      {children}
    </section>
  )
}
