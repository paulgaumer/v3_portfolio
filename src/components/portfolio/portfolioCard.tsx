import React from "react"
import Img, { FluidObject } from "gatsby-image"
import styled from "styled-components"
import tw from "twin.macro"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import numberIsEven from "../../utils/numberIsEven"
import Github from "../icons/github"
import ExternalLink from "../icons/externalLink"

// STYLES
const MarkdownContainer = styled.div`
  p {
    ${tw`mb-6 leading-relaxed tracking-wide`}
  }
  a {
    ${tw`text-blue-600 no-underline hover:text-blue-700 hover:underline`}
  }
`

// TYPES
interface PortfolioCardProps {
  index: number,
  title: string,
  url: string,
  repoUrl: string
  blockDescription: string,
  frontImage: {
    childImageSharp: {
      fluid: FluidObject
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
        <Img
          fluid={frontImage.childImageSharp.fluid}
          alt={title}
          className="w-full rounded-lg"
        />

      </div>
      <div
        data-name="description-side"
        className={`flex flex-col items-center justify-center lg:w-1/2 lg:mt-0 mt-8`}
      >
        <h3 className="text-2xl font-semibold text-center text-gray-900 font-header mb-7">
          {title}
        </h3>
        <MarkdownContainer>
          <ReactMarkdown plugins={[gfm]} children={blockDescription} />
        </MarkdownContainer>
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
