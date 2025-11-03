"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const experiences = [
  {
    title: "Développeur web",
    company: "Nathan Compétences Professionnelles - Daesign",
    type: "Contrat en alternance",
    period: "sept. 2024 - aujourd'hui · 6 mois",
    location: "Annecy, Auvergne-Rhône-Alpes, France · Hybride",
  },
  {
    title: "Développeur WordPress",
    company: "La Marketerie - Agence de communication pour entrepreneurs ambitieux",
    type: "Contrat en alternance",
    period: "déc. 2023 - août 2024 · 9 mois",
    location: "Thonon-les-Bains, Auvergne-Rhône-Alpes, France · Hybride",
  },
  {
    title: "Développeur JavaScript",
    company: "HYPERFICTION",
    type: "Stage",
    period: "mai 2023 - juin 2023 · 2 mois",
    location: "Annecy, Auvergne-Rhône-Alpes, France · Sur site",
  },
]

const education = [
  {
    institution: "L'École by CCI Haute-Savoie",
    degree: "Bachelor web et mobile intéractif",
    period: "2023 - 2024",
    location: "Haute-Savoie, France",
  },
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="resume" className="py-16 bg-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="uppercase text-sm tracking-wider text-muted-foreground mb-4">Parcours Professionnel</div>
          <h2 className="section-title">Expérience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-medium mb-8">Expérience Professionnelle</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border-b border-border pb-6"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">{exp.title}</h4>
                  <p className="text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.type}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-medium mb-8">Formation</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                className="border-b border-border pb-6"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-medium">{edu.institution}</h4>
                  <p className="text-primary">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

