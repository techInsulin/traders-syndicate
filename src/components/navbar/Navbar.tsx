"use client"

import Image from "next/image"
import Link from "next/link"
import PrimaryButton, { ButtonType } from "../buttons/PrimaryButton"
import HamburgerButton from "../buttons/HamburgerButton"
import { AnimatePresence, MotionConfig, motion, useCycle } from "framer-motion"

const Navbar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true)

  return (
    <nav className="sticky top-0 inset-x-0 h-16 z-50">
      <div className="w-full bg-black flex items-center justify-between py-5">
        <div>
          <Link href="/">
            <Image
              src="https://techinsulin.github.io/traders-syndicate/trade-syndicate-logo.svg"
              width={50}
              height={50}
              alt="Traders Syndicate logo"
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-12">
          <div className="flex items-center space-x-11">
            <Link
              className="text-white font-semibold text-lg hover:text-red-orange-500"
              href="/"
            >
              Home
            </Link>
            {/* <Link
              className="text-white font-semibold text-lg hover:text-red-orange-500"
              href="/"
            >
              About Us
            </Link> */}
            <Link
              className="text-white font-semibold text-lg hover:text-red-orange-500"
              href="/faq"
            >
              FAQ
            </Link>
            <Link
              className="text-white font-semibold text-lg hover:text-red-orange-500"
              href="/memberships"
            >
              Memberships
            </Link>
          </div>

          <div className="flex space-x-4">
            <PrimaryButton buttonColor={ButtonType.secondary} text="Login" />
            <PrimaryButton buttonColor={ButtonType.primary} text="Sign Up" />
          </div>
        </div>

        <div
          onClick={() => toggleMobileNav()}
          className="md:hidden relative z-20"
        >
          <HamburgerButton />
        </div>
      </div>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.15,
              duration: 0.5,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: "-0%",
                  transition: {
                    type: "spring",
                    bounce: 0.15,
                    when: "beforeChildren",
                    duration: 0.6,
                  },
                },
                closed: {
                  x: "100%",
                  transition: { when: "afterChildren", duration: 0.14 },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-[#28282B] p-8 container mx-auto space-y-12 flex flex-col justify-center items-center z-10"
            >
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "-25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="flex flex-col space-y-6 text-center">
                  <li>
                    <Link className="text-3xl font-bold text-white" href="/">
                      Home
                    </Link>
                  </li>
                  {/* <li>
                    <a href="#" className="text-3xl font-bold text-white">
                      About Us
                    </a>
                  </li> */}
                  <li>
                    <Link className="text-3xl font-bold text-white" href="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-3xl font-bold text-white"
                      href="/memberships"
                    >
                      Memberships
                    </Link>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "-25%",
                    opacity: 0,
                  },
                }}
                className="w-full bg-white h-px"
              />

              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "-25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="flex items-center space-x-5">
                  <li>
                    <div className="w-10 h-10 round-lg bg-gray-200 rounded-lg"></div>
                  </li>

                  <li>
                    <div className="w-10 h-10 round-lg bg-gray-200 rounded-lg"></div>
                  </li>

                  <li>
                    <div className="w-10 h-10 round-lg bg-gray-200 rounded-lg"></div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
