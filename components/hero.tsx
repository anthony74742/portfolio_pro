"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import profile from "@/public/src/image/profile.jpg"

export default function Hero() {
  return (
    <section id="about" className="pt-24 pb-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="uppercase text-sm tracking-wider text-muted-foreground">À Propos</div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">Développeur Web & Mobile</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Étudiant en Bachelor web et mobile intéractif à l'École by CCI. Passionné par le développement web et
                les nouvelles technologies.
              </p>
              <p>
                Actuellement en alternance chez Nathan Compétences Professionnelles - Daesign en tant que développeur
                web.
              </p>
            </div>
            <div className="pt-4">
              <a href="mailto:contact@anthonypelaz.fr" className="text-primary hover:underline">
                contact@anthonypelaz.fr
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <Image
              src={profile}
              alt="Anthony Pelaz"
              width={500}
              height={500}
              className="object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

