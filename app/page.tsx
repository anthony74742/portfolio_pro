import Hero from "@/components/hero"
import Resume from "@/components/resume"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}

