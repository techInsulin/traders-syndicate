"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"

const FaqQuesiton = ({
  question,
  answer,
}: {
  question: string
  answer: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="flex flex-col px-6 py-8 min-h-24 w-full bg-shark-900 rounded space-y-6"
      initial={{ height: 96 }}
      exit={{
        height: "96px",
        transition: {
          height: {
            duration: 0.4,
          },
        },
      }}
      animate={{
        height: "auto",
        transition: {
          height: {
            duration: 0.4,
          },
        },
      }}
    >
      <div
        className="
      flex justify-between h-full grow items-start"
      >
        <h2 className="text-xl font-semibold text-red-orange-500 uppercase">
          {question}
        </h2>
        <motion.div
          className="cursor-pointer"
          variants={{
            pointDown: {
              rotate: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.4,
              },
            },
            pointUp: {
              rotate: -180,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.4,
              },
            },
          }}
          animate={!isOpen ? "pointDown" : "pointUp"}
          onClick={() => {
            setIsOpen(!isOpen)
            console.log(setIsOpen)
          }}
        >
          <Image
            src={
              "https://techinsulin.github.io/traders-syndicate/icons/down-arrow.svg"
            }
            width={30}
            height={30}
            alt="icon of a downward facing arrow"
          />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.2,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.2,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.2,
                  delay: 0.15,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <p className="text-white text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FaqQuesiton
