import React from "react"
import SectionContainer from "../layout/sectionContainer"

const HeroSection = () => {
  return (
    <SectionContainer>
      <h1
        data-testid="hero-title"
        className="mt-8 mb-6 text-5xl font-semibold leading-tight text-gray-800 md:mb-10 xl:mb-16 md:text-6xl lg:text-7xl lg:font-medium xl:text-8xl md:mt-16 xl:mt-24"
      >
        Hi, I'm Paul!
      </h1>
      <p
        data-testid="hero-bio"
        className="mt-6 text-lg antialiased text-gray-700 md:text-xl lg:text-2xl"
      >
        My name is Paul Gaumer. I am a software developer focusing on creating
        accessible and smooth web experiences.
      </p>
      <img
        src="https://via.placeholder.com/150"
        alt="Paul Gaumer"
        data-testid="hero-image"
        className="mt-12 rounded-lg"
      />
    </SectionContainer>
  )
}

export default HeroSection
