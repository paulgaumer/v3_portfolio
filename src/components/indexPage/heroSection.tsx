import React from "react"
import { motion } from "framer-motion"
import SectionContainer from "../layout/sectionContainer"
import PageTitle from "../global/pageTitle"
import HeroPortrait from "./heroPortrait"
import AnimatedColorWheel from "../global/animatedColorWheel"

const HeroSection: React.FC = () => {
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

        <div className="flex-grow hidden mt-8 sm:justify-start md:justify-center sm:flex sm:mt-4 md:mt-9 lg:mt-10 xl:mt-14">
          <AnimatedColorWheel />
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
          I am a software developer focusing on crafting smooth and accessible
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
