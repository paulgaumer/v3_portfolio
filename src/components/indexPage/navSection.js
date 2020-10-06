import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"
import SectionContainer from "../layout/sectionContainer"
import Link from "../global/link"

const Title = styled.h2`
  a {
    ${tw`text-gray-900! hover:text-gray-900!`}
  }
`

const NavItem = ({ href, title, description }) => {
  return (
    <div className="prose">
      <Title className="flex items-center space-x-2 capitalize">
        <Link href={href} gatsbyLink={true}>
          {title}
        </Link>
        <span className="mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </Title>
      <p className="mt-2 md:mt-4 lg:mt-6 md:prose-lg">{description}</p>
    </div>
  )
}

const NavSection = () => {
  return (
    <SectionContainer>
      <ul
        data-testid="nav-section"
        className="flex flex-col mt-16 space-y-12 lg:space-y-0 md:text-lg lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16"
      >
        <li>
          <NavItem
            href="#portfolio"
            title="portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        suscipit ducimus quasi distinctio? Ipsum animi a mollitia voluptatum
        optio, nam perspiciatis expedita tempore doloremque pariatur cumque aut
        velit sapiente culpa!"
          />
        </li>
        <li>
          <NavItem
            href="/about"
            title="about"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        suscipit ducimus quasi distinctio? Ipsum animi a mollitia voluptatum
        optio, nam perspiciatis expedita tempore doloremque pariatur cumque aut
        velit sapiente culpa!"
          />
        </li>
        <li>
          <NavItem
            href="/blog"
            title="blog"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        suscipit ducimus quasi distinctio? Ipsum animi a mollitia voluptatum
        optio, nam perspiciatis expedita tempore doloremque pariatur cumque aut
        velit sapiente culpa!"
          />
        </li>
      </ul>
    </SectionContainer>
  )
}

export default NavSection

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
