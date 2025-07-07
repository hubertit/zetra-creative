"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to create something amazing? Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a
                      href="mailto:zettacreatives250@gmail.com"
                      className="text-white hover:text-gold transition-colors"
                    >
                      zettacreatives250@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gray-300">Reservations</p>
                    <p className="text-white">+250 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gray-300">WhatsApp</p>
                    <p className="text-white">+250 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gray-300">Hours</p>
                    <p className="text-white">Mon - Sat: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gold">Follow Us</h4>
              <div className="flex space-x-4">
                {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="bg-gray-800 hover:bg-gold hover:text-black p-3 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6"></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">First Name</label>
                  <Input
                    className="bg-gray-900/50 border-gray-600 focus:border-gold text-white"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Last Name</label>
                  <Input
                    className="bg-gray-900/50 border-gray-600 focus:border-gold text-white"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <Input
                  type="email"
                  className="bg-gray-900/50 border-gray-600 focus:border-gold text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Service</label>
                <select className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-white focus:border-gold focus:outline-none">
                  <option>Photography</option>
                  <option>Videography</option>
                  <option>Wedding Coverage</option>
                  <option>Kids Studio</option>
                  <option>Studio Rental</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <Textarea
                  className="bg-gray-900/50 border-gray-600 focus:border-gold text-white min-h-[120px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold text-black hover:bg-gold/90 font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
