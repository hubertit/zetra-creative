"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const quickLinks = ["Home", "Services", "Portfolio", "About", "Contact"]
  const services = ["Photography", "Videography", "Wedding Coverage", "Kids Studio", "Studio Rental"]

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gold mb-4">ZETTA CREATIVE</h3>
            <p className="text-gray-400 mb-4">
              Professional photography and production studio creating memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-gold transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current"></div>
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
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-gold transition-colors">
                    {link}
                  </a>
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
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
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
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>zettacreatives250@gmail.com</p>
              <p>+250 XXX XXX XXX</p>
              <p>Kigali, Rwanda</p>
              <p>Mon - Sat: 9AM - 6PM</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">© {new Date().getFullYear()} Zetta Creative. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
