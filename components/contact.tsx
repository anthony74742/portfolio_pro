"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="py-16 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-background p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tighter">
              Need help with professional support? Let's work together!
            </h2>
            <p className="text-muted-foreground mb-8">info@domain.com</p>
            <a
              href="mailto:info@domain.com"
              className="inline-block border border-primary px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tighter">What Are Clients Saying?</h2>
            <p className="text-muted-foreground mb-8">
              Duis tristique magna magna semper odipbus felis neca diam nisi. Pellentesque habitant morbi tristique
              senectus et netus malesuada fames ac turpis egestas. Nullam nisi metus ultricies misi in libero dictum.
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=48&width=48" alt="Emily Brown" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-medium">Emily Brown</h3>
                <p className="text-sm text-muted-foreground">Project Owner</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

