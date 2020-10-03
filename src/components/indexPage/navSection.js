import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import SectionContainer from "../layout/sectionContainer"

const NavItem = ({ href, title, description }) => {
  return (
    <div>
      <Link
        to={href}
        className="text-2xl font-semibold text-gray-900 capitalize md:text-2xl lg:text-2-5xl"
      >
        <h3>{title}</h3>
      </Link>
      <p className="mt-2 md:mt-4 lg:mt-6">{description}</p>
    </div>
  )
}

const NavSection = () => {
  return (
    <SectionContainer>
      <ul
        data-testid="nav-section"
        className="mt-16 md:text-lg lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16"
      >
        <li className="">
          <NavItem
            href="#portfolio"
            title="portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        suscipit ducimus quasi distinctio? Ipsum animi a mollitia voluptatum
        optio, nam perspiciatis expedita tempore doloremque pariatur cumque aut
        velit sapiente culpa!"
          />
        </li>
        <li className="">
          <NavItem
            href="/about"
            title="about"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        suscipit ducimus quasi distinctio? Ipsum animi a mollitia voluptatum
        optio, nam perspiciatis expedita tempore doloremque pariatur cumque aut
        velit sapiente culpa!"
          />
        </li>
        <li className="">
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
