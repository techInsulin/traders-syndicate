"use client"

import FaqQuesiton from "@/components/dropDown/FaqQuesiton"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import splitStringUsingRegex from "@/utils/splitStringUsingRegex"
import { motion } from "framer-motion"
import React from "react"
import { useEffect } from "react"

const textVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
}

const faqVariants = {
  hidden: {
    opacity: 0,
    transition: { type: "easeInOut", duration: 0.8 },
  },
  reveal: {
    opacity: 1,
    transition: { delay: 1.8, type: "easeIn", duration: 0.4 },
  },
  fadeInRightHidden: { opacity: 0, x: -25 },
  fadeInRightShow: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        duration: 0.7,
      },
      staggerChildren: 0.14,
      delayChildren: 0.7,
    },
  },
}

const question = {
  fadeInRightHidden: {
    opacity: 0,
    x: -25,
  },
  fadeInRightShow: {
    opacity: 1,
    x: 0,
  },
}

const headlinetext = "FAQ"

const Faq = () => {
  useEffect(() => {
    document.title = "FAQs"
  }, [])
  const headlineCharacters = splitStringUsingRegex(headlinetext)

  return (
    <div className="w-full">
      <Navbar />
      <div className="h-[300px] md:h-[320px] flex items-center justify-center">
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.12 }}
          className="text-white text-6xl md:text-7xl text-center font-medium md:font-semibold tracking-wider"
        >
          {headlineCharacters.map((character: string) => (
            <motion.span
              key={character}
              transition={{ duration: 0.5 }}
              variants={textVariants}
            >
              {character}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <motion.div
        variants={faqVariants}
        initial="fadeInRightHidden"
        whileInView="fadeInRightShow"
        viewport={{ once: true }}
        className="flex flex-col space-y-9 md:space-y-11 pb-12"
      >
        <motion.div variants={question}>
          <FaqQuesiton
            question="What is Traders Syndicate?"
            answer="Traders Syndicate is a small trading-focused project built to share market ideas, tools, and resources in a simple, accessible way."
          />
        </motion.div>

        <motion.div variants={question}>
          <FaqQuesiton
            question="Is this financial advice?"
            answer="No. The content on this site is for educational and informational purposes only. Always do your own research before making any trading or investing decisions."
          />
        </motion.div>

        <motion.div variants={question}>
          <FaqQuesiton
            question="How can I stay updated?"
            answer="Updates will be added to the site as the project grows. Check back for new resources, market notes, and future improvements."
          />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default Faq
