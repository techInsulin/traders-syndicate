"use client"

import FaqQuesiton from "@/components/dropDown/FaqQuesiton"
import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import splitStringUsingRegex from "@/utils/splitStringUsingRegex"
import { motion } from "framer-motion"
import React from "react"

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
            question="Tu pregunta amigo?"
            answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
          />
        </motion.div>

        <motion.div variants={question}>
          <FaqQuesiton
            question="Tu pregunta amigo?"
            answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
          />
        </motion.div>

        <motion.div variants={question}>
          <FaqQuesiton
            question="Tu pregunta amigo?"
            answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
          />
        </motion.div>

        <motion.div variants={question}>
          <FaqQuesiton
            question="Tu pregunta amigo?"
            answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
          />
        </motion.div>

        <motion.div variants={question}>
          <FaqQuesiton
            question="Tu pregunta amigo?"
            answer="Lorizzle ipsizzle dolor sit amizzle, hizzle adipiscing elit. Bow wow wow sapien velizzle, aliquet volutpizzle, suscipit quizzle, gravida vizzle, i'm in the shizzle. Hizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle tortizzle. Nizzle erizzle. Fusce izzle dolizzle dapibus tempizzle break yo neck, yall. Maurizzle pellentesque nibh gizzle turpizzle. I saw beyonces tizzles and my pizzle went crizzle gangster dizzle. Cool you son of a bizzle rhoncizzle shiznit. In hac pot platea dictumst. Ass dapibizzle. Things tellus urna, pretizzle crackalackin, mattizzle ac, eleifend vitae, nunc. Mammasay mammasa mamma oo sa suscipizzle. Integer sempizzle velit sizzle dope."
          />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default Faq
