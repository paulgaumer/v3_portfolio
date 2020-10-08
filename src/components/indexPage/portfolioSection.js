import React from "react"
import PropTypes from "prop-types"
import SectionContainer from "../layout/sectionContainer"
import PortfolioCard from "../portfolio/portfolioCard"

const PortfolioSection = ({ projects }) => {
  return (
    <SectionContainer maxWidth="max-w-xl lg:max-w-5xl">
      <div className="mt-20 md:mt-32 lg:mt-40" id="portfolio">
        <h2
          data-testid="portfolio-section-title"
          className="max-w-xl mx-auto mb-8 text-4xl font-semibold leading-tight text-gray-800 md:mb-10 xl:mb-24 md:text-5xl lg:text-6xl lg:font-medium xl:text-7xl lg:max-w-3xl"
        >
          Portfolio
        </h2>
        <div className="mt-16 space-y-32">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              blockDescription={project._rawBlockDescription}
              url={project.url}
              frontImage={project.frontImage}
              backImage={project.backImage}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

export default PortfolioSection

PortfolioSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
}
