import React from "react"
import SectionContainer from "../layout/sectionContainer"
import paul from "../../images/paul.jpg"

const HeroSection = () => {
  return (
    <SectionContainer>
      {/* TITLE */}
      <h1
        data-testid="hero-title"
        className="mt-8 mb-6 text-5xl font-semibold leading-tight text-gray-800 md:mb-10 xl:mb-16 md:text-6xl lg:text-7xl lg:font-medium xl:text-8xl md:mt-16 xl:mt-24"
      >
        Hi, I'm Paul!
      </h1>
      {/* DESCRIPTION */}
      <p
        data-testid="hero-bio"
        className="mt-6 text-lg antialiased text-gray-700 md:text-xl lg:text-2xl"
      >
        My name is Paul Gaumer. I am a software developer focusing on creating
        accessible and smooth web experiences.
      </p>
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
