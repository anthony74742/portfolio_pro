"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  { name: "AngularJS" },
  { name: "Angular Material" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "WordPress" },
  { name: "PHP" },
  { name: "Vue.js" },
  { name: "JavaScript" },
  { name: "CSS" },
  { name: "HTML5" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="uppercase text-sm tracking-wider text-muted-foreground mb-4">Mes Compétences</div>
          <h2 className="section-title">Technologies.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-muted-foreground"
          >
            <p>
              Spécialisé dans le développement web moderne avec une expertise particulière en frameworks JavaScript et
              technologies front-end.
            </p>
            <p>Expérience pratique dans le développement d'applications web responsives et performantes.</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                className="p-4 rounded-lg bg-card hover:bg-accent transition-colors"
              >
                <h3 className="text-lg font-medium text-center">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

