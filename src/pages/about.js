import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SectionContainer from "../components/layout/sectionContainer"
import AboutSection from "../components/aboutPage/aboutSection"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <SectionContainer>
        <h1
          data-testid="page-title"
          className="mt-8 mb-6 text-5xl font-semibold leading-tight text-gray-800 md:mb-10 xl:mb-16 md:text-6xl lg:text-7xl lg:font-medium xl:text-8xl md:mt-16 xl:mt-24"
        >
          Who am I?
        </h1>
        {/* DESCRIPTION */}
        <p
          data-testid="hero-bio"
          className="mt-6 text-lg antialiased text-gray-700 md:text-xl lg:text-2xl"
        >
          My name is Paul Gaumer and I am a French developer and startup
          consultant currently living in Angers (France) with my wife and son.
        </p>

        <AboutSection>
          <h3 className="text-2xl font-semibold text-gray-900 capitalize md:text-2xl lg:text-2-5xl">
            Startups in Japan
          </h3>
          <p>
            I spent the past 10 years living in Japan where I was lucky enough
            to have many lives, starting by a first career in sales and
            marketing. Helping foreign companies succeed in Japan was my mission
            through talent acquisition, product development tailored to the
            local market and the launch of innovative products (
            <a
              href="http://ja.babolatplay.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about Babolat Play"
            >
              Babolat Play
            </a>
            )
          </p>
          <p>
            Discovering a passion for code and design, I jumped into the recent
            awakening of the Tokyo startup scene by creating Japan’s very first
            coding bootcamp:{" "}
            <a
              href="https://www.lewagon.com/tokyo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read more about Le Wagon"
            >
              Le Wagon
            </a>
          </p>
        </AboutSection>
      </SectionContainer>
    </Layout>
  )
}

export default About
