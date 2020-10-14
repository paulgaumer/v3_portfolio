import React, { useState } from "react"
import { motion } from "framer-motion"
import SectionContainer from "../layout/sectionContainer"
import PageTitle from "../global/pageTitle"
import HeroPortrait from "./heroPortrait"
import ColorWheel from "../global/colorWheel"

const HeroSection = () => {
  const [pulseOnce, setPulseOnce] = useState(false)
  return (
    <SectionContainer>
      {/* Slide from left on page load */}
      <motion.div
        className="flex items-center sm:space-x-10 md:space-x-0"
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

        <div className="flex-grow hidden mt-8 sm:justify-start md:justify-center sm:flex sm:mt-4 md:mt-8 lg:mt-10 xl:mt-14">
          {/* Fade in on page load */}
          <motion.div
            className=""
            variants={{
              hidden: {
                opacity: 0,
                scale: 1.3,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.8,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setPulseOnce(true)}
          >
            {/* Pulse once after page loaded */}
            <motion.div
              variants={{
                pulse: {
                  scale: [1, 1.1, 1, 1.2, 1, 1],
                  transition: {
                    delay: 1,
                  },
                },
              }}
              animate={pulseOnce ? "pulse" : "null"}
              onAnimationComplete={() => setPulseOnce(false)}
              whileHover={{ scale: 1.2 }}
            >
              <ColorWheel />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide from left on page load */}
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

      {/* IMAGE */}
      <div className="mt-12">
        <div className="relative" style={{ paddingBottom: "66.8317%" }}>
          <div className="absolute inset-0">
            <HeroPortrait />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default HeroSection
