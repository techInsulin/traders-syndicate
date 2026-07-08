"use client"

import MembershipCard, {
  Details,
  Size,
} from "@/components/cards/MembershipCard"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import splitStringUsingRegex from "@/utils/splitStringUsingRegex"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import React, { useRef } from "react"
import { useEffect } from "react"

const cardOne: Details = {
  name: "Free",
  headline: "Dive Into Trading",
  price: "Free",
  offerings: [
    "3-Day Free Trail",
    "Full Server Access",
    "Expert Guidance",
    "Access Our Resource Library",
    "Live Trading Workshops",
    "Community Networking",
  ],
  buttonText: "Start Your Free Trial",
  size: Size.Small,
}

const cardTwo: Details = {
  name: "Premium",
  headline: "Dive Into Profits",
  price: "$199/mo",
  offerings: [
    "Full Server Access",
    "Direct Expert Sessions",
    "Priority Live Trading Access",
    "Live Trading Workshops",
    "Premium Networking Community",
  ],
  buttonText: "Unlock Your Trading Success",
  size: Size.Large,
}

const cardThree: Details = {
  name: "VIP",
  headline: "Dive Into Syndicate",
  price: "$3499/year",
  offerings: [
    "Exclusive Discord Access",
    "Personalized Expert Sessions",
    "Comprehensive VIP Course",
    "Live Trading Workshops",
    "Elite Community Network",
  ],
  buttonText: "Build With The Syndicate",
  size: Size.Small,
}

const headlineText = "Join The Syndicate"

const Membership = () => {
  useEffect(() => {
    document.title = "Memberships"
  }, [])
  const ref = useRef(null)
  const isInView = useInView(ref)

  const variants = {
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
        staggerChildren: 0.2,
        delayChildren: 2,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  }

  const subheadlineVariants = {
    fadeInTopHidden: {
      opacity: 0,
    },
    fadeInTopShow: {
      opacity: 1,
      transition: {
        delay: 1.2,
        duraiton: 0.4,
      },
    },
  }

  const card = {
    fadeInRightHidden: {
      opacity: 0,
      x: -25,
    },
    fadeInRightShow: {
      opacity: 1,
      x: isInView ? -25 : 0,
    },
  }

  const headlineCharacters = splitStringUsingRegex(headlineText)

  return (
    <div className="w-full">
      <Navbar />
      <div className="h-[300px] md:h-[260px] md:mt-[30px] flex flex-col items-center justify-center space-y-4">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.028 }}
          className="text-white text-6xl md:text-7xl text-center font-medium md:font-semibold tracking-wider"
        >
          {headlineCharacters.map((character: string) => (
            <motion.span
              key={character}
              transition={{ duration: 0.35 }}
              variants={textVariants}
              viewport={{ once: true }}
            >
              {character}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          variants={subheadlineVariants}
          initial="fadeInTopHidden"
          whileInView="fadeInTopShow"
          viewport={{ once: true }}
          className="text-white text-xl text-center"
        >
          Learn to follow the rules that keep you in the trade.
        </motion.h2>
      </div>
      <motion.div
        variants={variants}
        initial="fadeInRightHidden"
        whileInView="fadeInRightShow"
        viewport={{
          once: true,
        }}
        className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-8 pb-12"
      >
        <motion.div variants={card}>
          <MembershipCard
            name={cardOne.name}
            headline={cardOne.headline}
            price={cardOne.price}
            offerings={cardOne.offerings}
            buttonText={cardOne.buttonText}
            size={cardOne.size}
          />
        </motion.div>

        <motion.div variants={card}>
          <MembershipCard
            name={cardTwo.name}
            headline={cardTwo.headline}
            price={cardTwo.price}
            offerings={cardTwo.offerings}
            buttonText={cardTwo.buttonText}
            size={cardTwo.size}
          />
        </motion.div>

        <motion.div variants={card}>
          <MembershipCard
            name={cardThree.name}
            headline={cardThree.headline}
            price={cardThree.price}
            offerings={cardThree.offerings}
            buttonText={cardThree.buttonText}
            size={cardThree.size}
          />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  )
}
export default Membership
