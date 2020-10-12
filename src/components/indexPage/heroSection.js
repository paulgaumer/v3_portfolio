import React, { useState, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import SectionContainer from "../layout/sectionContainer"
import PageTitle from "../global/pageTitle"
import paul from "../../images/paul.jpg"
import ColorWheel from "../global/colorWheel"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/contextProvider"

const HeroSection = () => {
  const dispatch = useContext(GlobalDispatchContext)
  // const { themeColor } = useContext(GlobalStateContext)
  const [currentColor, setCurrentColor] = useState("yellow")

  const changeTheme = () => {
    const newColor = currentColor === "yellow" ? "teal" : "yellow"
    dispatch({
      type: "changeTheme",
      payload: newColor,
    })
    setCurrentColor(newColor)
  }

  return (
    <SectionContainer>
      <AnimatePresence>
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.2 },
          }}
        >
          <PageTitle>
            <span>Hi, I'm Paul!</span>
          </PageTitle>

          <motion.div
            className="mt-8 md:mt-16 xl:mt-24"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.9 },
            }}
          >
            <ColorWheel />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        >
          {/* DESCRIPTION */}
          <p data-testid="hero-bio" className="prose prose-2xl">
            <span className="hidden sm:inline-block">
              My name is Paul Gaumer.
            </span>{" "}
            I am a software developer focusing on creating smooth and accessible
            web experiences.
          </p>
        </motion.div>
      </AnimatePresence>

      {/* IMAGE */}
      <div className="mt-12">
        <div className="relative" style={{ paddingBottom: "66.8317%" }}>
          <div className="absolute inset-0">
            <img
              src={paul}
              alt="Paul Gaumer"
              data-testid="hero-image"
              className="object-cover object-top w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroSection
