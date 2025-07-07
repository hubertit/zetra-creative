"use client"

import { useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const portfolioItems = [
  { id: 1, category: "Kids", image: "/placeholder.svg?height=400&width=400", title: "Kids Portrait" },
  { id: 2, category: "Family", image: "/placeholder.svg?height=400&width=400", title: "Family Session" },
  { id: 3, category: "Photoshoots", image: "/placeholder.svg?height=400&width=400", title: "Professional Shoot" },
  { id: 4, category: "Kids", image: "/placeholder.svg?height=400&width=400", title: "Children Photography" },
  { id: 5, category: "Family", image: "/placeholder.svg?height=400&width=400", title: "Family Moments" },
  { id: 6, category: "Photoshoots", image: "/placeholder.svg?height=400&width=400", title: "Studio Session" },
  { id: 7, category: "Kids", image: "/placeholder.svg?height=400&width=400", title: "Kids Fun" },
  { id: 8, category: "Family", image: "/placeholder.svg?height=400&width=400", title: "Family Love" },
  { id: 9, category: "Photoshoots", image: "/placeholder.svg?height=400&width=400", title: "Portrait Session" },
]

const categories = ["All", "Kids", "Family", "Photoshoots"]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section ref={ref} id="portfolio" className="py-24 px-6 bg-gray-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div className="absolute top-40 left-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" style={{ y }} />

      <div className="container mx-auto px-6 relative z-10">
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
            Our <span className="text-gold font-extralight">Portfolio</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our collection of stunning photography and creative work
          </motion.p>

          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium tracking-wide ${
                  activeCategory === category
                    ? "bg-gold text-black"
                    : "bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-center">
                    <motion.h3
                      className="text-xl font-medium text-white mb-2 tracking-wide"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-gold font-light tracking-wide"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.category}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
