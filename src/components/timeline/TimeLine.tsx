"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import React, { useRef } from "react"

const TimeLine = () => {
  const contentOne = useRef(null)
  const contentTwo = useRef(null)
  const contentThree = useRef(null)

  const contentOneMobile = useRef(null)
  const contentTwoMobile = useRef(null)
  const contentThreeMobile = useRef(null)

  const introAnimationSettings = { margin: "-300px", once: true }
  const baseAnimationSettings = { margin: "-200px", once: true }

  const isInViewOne = useInView(contentOne, introAnimationSettings)
  const isInViewTwo = useInView(contentTwo, baseAnimationSettings)
  const isInViewThree = useInView(contentThree, baseAnimationSettings)

  const isInViewOneMobile = useInView(contentOneMobile, baseAnimationSettings)
  const isInViewTwoMobile = useInView(contentTwoMobile, baseAnimationSettings)
  const isInViewThreeMobile = useInView(
    contentThreeMobile,
    baseAnimationSettings,
  )

  return (
    <div className="my-28">
      <div className="flex md:justify-center space-x-8 md:space-x-60">
        <div
          id="desktop-left-content"
          className="hidden md:flex flex-col justify-between h-auto"
        >
          <div className="hidden md:flex w-full justify-center mb-24 md:mb-0">
            <Image
              src="https://techinsulin.github.io/traders-syndicate/images/particle-sphere-no-padding.webp"
              width={200}
              height={200}
              alt="image of a sphere made of white particles"
              loading="lazy"
            />
          </div>

          <motion.div
            ref={contentTwo}
            animate={{
              x: isInViewTwo ? 0 : -20,
              opacity: isInViewTwo ? 1 : 0,
              transition: { duration: 0.25 },
            }}
            className="md:w-[300px]"
          >
            <p className="text-xl text-red-orange-500 uppercase font-light">
              Second
            </p>
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </motion.div>

          <div className="hidden md:flex w-full justify-center mb-24 md:mb-0">
            <Image
              src="https://techinsulin.github.io/traders-syndicate/images/particle-sphere-no-padding.webp"
              width={200}
              height={200}
              alt="image of a sphere made of white particles"
              loading="lazy"
            />
          </div>
        </div>

        <div id="timeline" className="flex flex-col items-center py-4">
          <div className="relative">
            <div
              id="circle1"
              className="items-center justify-center text-black text-2xl font-semibold rounded-full bg-[#e5e5e5] h-16 w-16 inline-flex"
            >
              1
            </div>
          </div>

          <div
            id="timeline2"
            className="h-[120px] md:h-[270px] w-[5px] bg-[#e5e5e5]"
          />
          <div className="relative">
            <div
              id="circle2"
              className="items-center justify-center text-black text-2xl font-semibold rounded-full bg-[#e5e5e5] h-16 w-16 inline-flex"
            >
              2
            </div>
          </div>

          <div
            id="timeline3"
            className="h-[120px] md:h-[270px] w-[5px] bg-[#e5e5e5]"
          />
          <div className="relative">
            <div
              id="circle3"
              className="items-center justify-center text-black text-2xl font-semibold rounded-full bg-[#e5e5e5] h-16 w-16 inline-flex"
            >
              3
            </div>
          </div>
        </div>

        <div
          id="desktop-right-content"
          className="hidden md:flex flex-col justify-between h-auto"
        >
          <motion.div
            ref={contentOne}
            animate={{
              x: isInViewOne ? 0 : 20,
              opacity: isInViewOne ? 1 : 0,
              transition: { duration: 0.25 },
            }}
            className="md:w-[300px]"
          >
            <p className="text-xl text-red-orange-500 uppercase font-light">
              First
            </p>
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </motion.div>

          <div className="hidden md:flex w-full justify-center mb-24 md:mb-0">
            <Image
              src="https://techinsulin.github.io/traders-syndicate/images/particle-sphere-no-padding.webp"
              width={200}
              height={200}
              alt="image of a sphere made of white particles"
              loading="lazy"
            />
          </div>

          <motion.div
            ref={contentThree}
            animate={{
              x: isInViewThree ? 0 : 20,
              opacity: isInViewThree ? 1 : 0,
              transition: { duration: 0.25 },
            }}
            className="md:w-[300px]"
          >
            <p className="text-xl text-red-orange-500 uppercase font-light">
              Third
            </p>
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </motion.div>
        </div>

        <div
          id="mobile-timeline-content"
          className="md:hidden flex flex-col justify-between h-auto"
        >
          <motion.div
            ref={contentOneMobile}
            animate={{
              opacity: isInViewOneMobile ? 1 : 0,
              x: isInViewOneMobile ? 0 : -20,
              transition: { duration: 0.25 },
            }}
          >
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </motion.div>

          <motion.div
            ref={contentTwoMobile}
            animate={{
              opacity: isInViewTwoMobile ? 1 : 0,
              x: isInViewTwoMobile ? 0 : -20,
              transition: { duration: 0.25 },
            }}
          >
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </motion.div>

          <motion.div
            ref={contentThreeMobile}
            animate={{
              opacity: isInViewThreeMobile ? 1 : 0,
              x: isInViewThreeMobile ? 0 : -20,
              transition: { duration: 0.25 },
            }}
          >
            <h3 className="text-lg font-bold uppercase">porttitor auctor</h3>
            <p>
              praesent tristique magna sit amet purus gravida quis blandit
              turpis cursus in hac
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
