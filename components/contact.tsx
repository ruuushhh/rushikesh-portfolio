"use client"

import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import siteData from "@/content/site.json"

const EMAIL = siteData.email
const PHONE = siteData.phone
const GITHUB = siteData.social.github
const LINKEDIN = siteData.social.linkedin

export function Contact() {
  const { toast } = useToast()
  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(PHONE)
      toast({ title: "Copied phone", description: PHONE })
    } catch {
      toast({ title: "Copy failed", description: "Unable to copy to clipboard" })
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="Open to backend, integrations, and reliability-focused roles.">
      <Card className="transition-shadow hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Let’s work together</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Prefer email. I reply within 12–24 hours.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500">
              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <Mail className="mr-2 h-4 w-4" />
                {EMAIL}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" onClick={copyPhone} aria-label="Copy phone">
              <Phone className="mr-2 h-4 w-4" />
              {PHONE}
              <Copy className="ml-2 h-3.5 w-3.5 opacity-70" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}
