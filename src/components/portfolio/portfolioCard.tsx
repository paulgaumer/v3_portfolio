import React from "react"
import ImageHot from "../global/imageHot"
import numberIsEven from "../../utils/numberIsEven"
import Github from "../icons/github"
import ExternalLink from "../icons/externalLink"
import PortableText from "@sanity/block-content-to-react"
import { serializers } from "../../utils/portableTextSerializer"
import { FluidObject } from "gatsby-image"

interface PortfolioCardProps {
  index: number,
  title: string,
  url: string,
  repoUrl: string
  blockDescription: object[],
  frontImage: {
    asset: {
      fluid: FluidObject
    }
    hotspot?: {
      x?: number,
      y?: number
    }
  }
}

const PortfolioCard = ({ index, title, url, frontImage, blockDescription, repoUrl }: PortfolioCardProps) => {
  return (
    <div
      data-testid="project-card"
      className={`flex flex-col lg:flex-row w-full lg:space-x-14 ${numberIsEven(index + 1) ? "lg:flex-row-reverse lg:space-x-reverse" : ""
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
        <h3 className="text-2xl font-semibold text-center text-gray-900 font-header mb-7">
          {title}
        </h3>
        <PortableText blocks={blockDescription} serializers={serializers} />
        <div className="flex mt-2 space-x-3">
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
            href={repoUrl}
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
