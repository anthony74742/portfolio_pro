"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "TechStart Inc.",
    period: "May 2023 - August 2023",
    description:
      "Developed and maintained features for a React-based web application. Collaborated with the design team to implement responsive UI components. Participated in code reviews and agile development processes.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    title: "Web Development Intern",
    company: "Digital Solutions Agency",
    period: "June 2022 - August 2022",
    description:
      "Built responsive websites for clients using modern web technologies. Implemented designs from Figma mockups. Optimized website performance and accessibility.",
    technologies: ["HTML/CSS", "JavaScript", "WordPress", "Figma"],
  },
  {
    title: "Research Assistant",
    company: "University of Technology",
    period: "January 2022 - May 2022",
    description:
      "Assisted in research on machine learning algorithms for natural language processing. Implemented and tested various models. Contributed to a research paper that was published in a peer-reviewed journal.",
    technologies: ["Python", "TensorFlow", "NLP", "Data Analysis"],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2021 - Present",
    description:
      "Designed and developed websites for small businesses and individuals. Managed client relationships and project timelines. Provided ongoing maintenance and support.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and work experience</p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <p className="text-muted-foreground mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

