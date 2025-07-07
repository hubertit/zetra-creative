"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const quickLinks = ["Home", "Services", "Portfolio", "About", "Contact"]
  const services = ["Photography", "Videography", "Wedding Coverage", "Kids Studio", "Studio Rental"]
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ]

  return (
    <footer className="bg-black/95 backdrop-blur-sm border-t border-gray-800/50 py-12 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-4">
              <img
                src="/assets/img/logo.png"
                alt="Zetta Creative"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Professional photography and<br />
              production studio creating<br />
              memories that last a<br />
              lifetime.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gold/20 rounded-full flex items-center justify-center text-gray-400 hover:text-gold transition-all duration-300 border border-gray-700/50 hover:border-gold/30"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <motion.a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-gold transition-all duration-300 text-sm inline-block hover:translate-x-1"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:zettacreatives250@gmail.com" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  zettacreatives250@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+250788532153" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  +250 788 532 153
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+250788789090" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  +250 788 789 090
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-gray-400 text-sm">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-gray-400 text-sm">Mon - Sat: 9AM - 6PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800/50 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Zetta Creative. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
