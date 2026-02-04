import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Highlights />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
