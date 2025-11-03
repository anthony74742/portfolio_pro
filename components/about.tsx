"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate student developer with a focus on creating impactful digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden"
          >
            <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Professional Background</h3>
            <p className="text-muted-foreground">
              I'm a Computer Science student at University of Technology with a passion for web development and software
              engineering. My journey in tech began when I built my first website at 15, and I've been hooked ever
              since.
            </p>
            <p className="text-muted-foreground">
              Currently in my junior year, I've completed coursework in algorithms, data structures, and full-stack
              development. I've also gained practical experience through internships and personal projects.
            </p>
            <p className="text-muted-foreground">
              My goal is to create software that solves real problems while providing exceptional user experiences. I'm
              particularly interested in web technologies, cloud computing, and artificial intelligence.
            </p>
            <div className="pt-4">
              <a
                href="/resume.pdf"
                className="text-primary font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

