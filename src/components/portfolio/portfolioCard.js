import React from "react"
import PropTypes from "prop-types"
import ImageHot from "../global/imageHot"
import numberIsEven from "../../utils/numberIsEven"
import Github from "../icons/github"
import ExternalLink from "../icons/externalLink"

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
      className={`lg:flex w-full lg:space-x-14 ${
        numberIsEven(index + 1) ? "lg:flex-row-reverse lg:space-x-reverse" : ""
      }`}
    >
      <div data-name="image-side" className={`flex items-center lg:w-1/2`}>
        <ImageHot
          image={frontImage}
          alt={title}
          customClasses="w-full rounded-lg"
        />
      </div>
      <div
        data-name="description-side"
        className={`flex flex-col items-center justify-center lg:w-1/2 lg:mt-0 mt-8`}
      >
        <h3 className="text-2xl font-semibold text-center text-gray-900 mb-7">
          {title}
        </h3>
        <p className="mb-6 leading-relaxed md:text-lg">{description}</p>
        <div className="flex space-x-3">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-white uppercase bg-gray-700 rounded-lg hover:bg-gray-900"
          >
            <span>
              <ExternalLink color="" />
            </span>{" "}
            <span>website</span>
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-4 space-x-2 text-sm font-bold text-gray-700 uppercase border border-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900"
          >
            <span>
              <Github color="text-gray-700 hover:text-gray-900" />
            </span>{" "}
            <span>Github</span>
          </a>
        </div>
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
