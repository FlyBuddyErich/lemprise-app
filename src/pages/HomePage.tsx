"use client"

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import me from '../assets/img1.jpg'
import femmeFatale from '../assets/FF BLACKFRONT.png'
import femmeFataleBack from '../assets/FF BLACKBACK.png'

const HomePage = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribed:", email)
    setEmail("")
  }

  // Анимации
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-7xl font-bold mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lemprise
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to the revolution of clothing
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-4">About Us</h2>
              <h3 className="text-xl text-gray-600 mb-6">We started new journey</h3>
              <h4 className="font-medium mb-6">Lemprise: Where Urban Edge Meets Timeless Style</h4>
              <div className="space-y-6 text-gray-800">
                <p>
                  Lemprise is more than just a clothing brand—it's a movement. Born from the raw energy of the streets
                  and the relentless pursuit of self-expression, Lemprise redefines urban fashion with a bold,
                  unapologetic attitude. Our designs blend gritty streetwear aesthetics with refined, timeless details,
                  creating pieces that speak to the rebels, the dreamers, and the trendsetters.
                </p>
                <p>
                  Every stitch, every print, and every cut is a statement. Lemprise is for those who dare to stand out,
                  who wear their individuality like armor, and who turn the city into their runway. From oversized
                  hoodies that scream confidence to sleek, minimalist jackets that whisper sophistication, our
                  collections are crafted for the modern nomad navigating the concrete jungle.
                </p>
                <p>
                  Lemprise isn't just clothing—it's a lifestyle. It's the pulse of the city, the echo of footsteps in an
                  alleyway, the glow of neon lights on a rainy night. This is streetwear reimagined. This is Lemprise.
                </p>
                <p className="font-medium underline">Own the streets. Own your style.</p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={me}
                alt="Author"
                className="w-full object-cover brightness-75 contrast-125"
              />
              <span className="absolute bottom-4 right-4 text-xs text-gray-400">Ph: Victoria Bers</span>
            </motion.div>
          </div>
          <motion.div
            className="text-center mt-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/shop"
              className="px-10 py-3 cursor-pointer bg-[#E3E3E3] rounded-xl text-[#2C2C2C] hover:bg-[#CDCDCD] transition-colors border border-[#CDCDCD]"
            >
              STORE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-xl mb-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Femme Fatale collection coming soon!
          </motion.h2>
          <motion.p
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Follow us to get all news about new collections now!
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-16 flex gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="rounded-2xl p-1 px-4 border w-sm border-border text-sm border-gray-200 focus:border-gray-400 focus:outline-none"
              required
            />
            <button type="submit" className="rounded-xl text-white bg-[#2C2C2C] hover:bg-[#1E1E1E] py-3 px-6 transition-colors cursor-pointer">
              Submit
            </button>
          </motion.form>

          <motion.div
            className="grid grid-cols-2 gap-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <img src={femmeFatale} alt="Femme Fatale T-Shirt Front" className="w-full"/>
            </div>
            <div>
              <img src={femmeFataleBack} alt="Femme Fatale T-Shirt Back" className="w-full"/>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage