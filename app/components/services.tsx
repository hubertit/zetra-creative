"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  Camera,
  Video,
  Baby,
  FileText,
  Heart,
  GraduationCap,
  Palette,
  Mic,
  Building,
  Users,
  UserCheck,
  ImageIcon,
} from "lucide-react"

const services = [
  { icon: Camera, title: "Photography", description: "Professional photo sessions for all occasions" },
  { icon: Video, title: "Videography", description: "Cinematic video production and editing" },
  { icon: Baby, title: "Kids Studio", description: "Specialized photography for children" },
  { icon: FileText, title: "Documentary", description: "Documentary-style storytelling" },
  { icon: Heart, title: "Wedding Coverage", description: "Complete wedding photography and videography" },
  { icon: GraduationCap, title: "Production Academy", description: "Learn photography and production skills" },
  { icon: Palette, title: "Graphics Design", description: "Creative visual design solutions" },
  { icon: Mic, title: "Podcast Space", description: "Professional podcast recording studio" },
  { icon: Building, title: "Studio Rental", description: "Rent our professional studio space" },
  { icon: Users, title: "Kids Moments", description: "Capturing precious childhood memories" },
  { icon: UserCheck, title: "Family Moments", description: "Beautiful family photography sessions" },
  { icon: ImageIcon, title: "Photoshoots", description: "Professional portrait and commercial shoots" },
]

export default function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" style={{ y }} />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-gold font-extralight">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive creative solutions for all your photography and production needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-gold/30 transition-all duration-500 hover:bg-gray-800/30"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="mb-6 p-4 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-gold" />
                </motion.div>
                <h3 className="text-xl font-medium mb-3 group-hover:text-gold transition-colors duration-300 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light tracking-wide">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
