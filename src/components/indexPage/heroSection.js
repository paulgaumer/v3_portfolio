import React from "react"
import SectionContainer from "../layout/sectionContainer"
import PageTitle from "../global/pageTitle"
import paul from "../../images/paul.jpg"

const HeroSection = () => {
  return (
    <SectionContainer>
      <PageTitle>Hi, I'm Paul!</PageTitle>
      {/* DESCRIPTION */}
      <p data-testid="hero-bio" className="prose prose-2xl">
        <span className="hidden sm:inline-block">My name is Paul Gaumer.</span>{" "}
        I am a software developer focusing on creating smooth and accessible web
        experiences.
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
