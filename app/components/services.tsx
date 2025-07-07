"use client"

import { motion } from "framer-motion"
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
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight">
            Our <span className="text-gold font-extralight">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Comprehensive creative solutions for all your photography and production needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 hover:border-gold/30 transition-all duration-500 hover:bg-gray-800/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
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
