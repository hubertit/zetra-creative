"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gold">Zetta Creative</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                At Zetta Creative, we believe every moment tells a story worth preserving. Our passion for photography
                and production drives us to capture the essence of life's most precious moments with artistic vision and
                technical excellence.
              </p>
              <p>
                From intimate family portraits to grand wedding celebrations, from corporate events to creative
                photoshoots, we bring years of experience and a fresh perspective to every project.
              </p>
              <p>
                Our state-of-the-art studio and professional equipment ensure that every image we create meets the
                highest standards of quality and creativity.
              </p>
            </div>
            <motion.div className="mt-8" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <div className="inline-block bg-gold/10 border border-gold/30 rounded-lg p-6">
                <p className="text-gold font-semibold text-lg">"Creating memories that last a lifetime"</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Zetta Creative Studio"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gold text-black p-6 rounded-2xl font-bold text-xl"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              10+ Years
              <br />
              Experience
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
