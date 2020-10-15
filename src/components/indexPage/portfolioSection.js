import React from "react"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"
import SectionContainer from "../layout/sectionContainer"
import PortfolioCard from "../portfolio/portfolioCard"
import TechTag from "./techTag"

const PortfolioSection = ({ projects }) => {
  const technologies = [
    "React.js",
    "Gatsby.js",
    "Next.js",
    "Sanity CMS",
    "Tailwind CSS",
    "Framer Motion",
    "Cypress",
    "Jest",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "a11y",
    "Ruby On Rails",
  ]

  return (
    <SectionContainer maxWidth="max-w-xl lg:max-w-5xl">
      <div className="mt-20 md:mt-32 lg:mt-40" id="portfolio">
        <h2
          data-testid="portfolio-section-title"
          className="max-w-xl mx-auto mb-8 text-4xl font-semibold leading-tight text-gray-800 font-header md:mb-10 xl:mb-24 md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl lg:max-w-3xl"
        >
          Portfolio
        </h2>
        <div className="mt-10 lg:mt-16">
          <div className="max-w-xl mx-auto mb-16 lg:mb-28 lg:max-w-3xl">
            <h3 className="mb-2 text-lg text-center text-gray-400 sm:text-xl md:text-2xl font-header">
              THINGS I ENJOY WORKING WITH
            </h3>
            <ul className="flex flex-wrap justify-center">
              {/* <ul className="grid grid-flow-col-dense"> */}
              {technologies.map(tech => {
                return <TechTag content={tech} key={tech} />
              })}
            </ul>
          </div>
          <div className="space-y-32">
            {projects.map((project, index) => (
              <Fade bottom key={project.id}>
                <PortfolioCard
                  index={index}
                  title={project.title}
                  description={project.description}
                  blockDescription={project._rawBlockDescription}
                  url={project.url}
                  frontImage={project.frontImage}
                  backImage={project.backImage}
                />
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default PortfolioSection

PortfolioSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
}
