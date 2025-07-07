"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Explore our collection of stunning photography and creative work
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-black font-semibold"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gold">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
