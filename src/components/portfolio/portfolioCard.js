import React from "react"
import PropTypes from "prop-types"
import ImageHot from "../global/imageHot"
import numberIsEven from "../../utils/numberIsEven"

const PortfolioCard = ({
  index,
  title,
  description,
  url,
  frontImage,
  // backImage,
}) => {
  return (
    <div
      data-testid="project-card"
      className={`flex w-full space-x-14 ${
        numberIsEven(index + 1) ? "flex-row-reverse space-x-reverse" : ""
      }`}
    >
      <div data-name="image-side" className={`flex items-center w-1/2`}>
        <ImageHot
          image={frontImage}
          alt={title}
          customClasses="w-full rounded"
        />
      </div>
      <div
        data-name="description-side"
        className={`flex flex-col items-center justify-center w-1/2`}
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
  // backImage: PropTypes.object.isRequired,
}
