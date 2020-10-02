import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PortfolioCard = ({
  index,
  title,
  description,
  url,
  frontImage,
  backImage,
}) => {
  return (
    <div
      data-testid="project-card"
      className="grid w-full grid-cols-12 grid-rows-1 gap-14"
    >
      <div data-name="image-side" className="flex items-center col-span-6">
        <Img fluid={frontImage} alt={title} className="w-full rounded" />
      </div>
      <div
        data-name="description-side"
        className="flex flex-col items-center justify-center w-full col-span-6"
      >
        <h3 className="text-2xl font-semibold text-center text-gray-900 mb-7">
          {title}
        </h3>
        <p className="mb-6 md:text-lg">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-4 text-sm font-bold text-gray-900 uppercase rounded bg-yellowPrimary hover:bg-yellowSecondary"
        >
          Live Website
        </a>
      </div>
    </div>
  )
}

export default PortfolioCard

PortfolioCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  frontImage: PropTypes.object.isRequired,
  backImage: PropTypes.object.isRequired,
}
