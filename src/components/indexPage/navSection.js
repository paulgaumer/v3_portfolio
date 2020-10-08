import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"
import SectionContainer from "../layout/sectionContainer"
import Link from "../global/link"
// import { Link } from "gatsby"

const Title = styled.h2`
  ${tw`mb-2! lg:mb-5! font-header!`}
`

const NavItem = ({ href, title, children }) => {
  return (
    <div className="prose">
      <Title className="flex items-center space-x-2 capitalize">
        <Link
          href={href}
          gatsbyLink={true}
          colors={"text-gray-900! hover:text-gray-900!"}
        >
          {title}
        </Link>
        {/* <Link to={href}>{title}</Link> */}
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
      <div className="mt-2 md:mt-4 lg:mt-6 md:prose-lg">{children}</div>
    </div>
  )
}

const NavSection = () => {
  return (
    <SectionContainer>
      <ul
        data-testid="nav-section"
        className="grid mt-16 space-y-12 lg:space-y-0 md:text-lg lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16"
      >
        <li>
          <NavItem href="#portfolio" title="portfolio">
            <p>
              A few of the projects I've worked and collaborated on. I currently
              work as a freelance developer specialized in React and all things{" "}
              <Link href="https://jamstack.org/">JAMStack</Link>.
            </p>
          </NavItem>
        </li>
        <li>
          <NavItem href="/about" title="about">
            <p>
              A brief overview of my past experiences and most recent
              activities, including podcasting, workshop teaching and media
              appearances.
            </p>
          </NavItem>
        </li>
        <li>
          <NavItem href="/blog" title="blog">
            <p>
              Discoveries, learnings and programming nuggets I'd like to keep in
              mind while sharing with the community.
            </p>
          </NavItem>
        </li>
      </ul>
    </SectionContainer>
  )
}

export default NavSection

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
