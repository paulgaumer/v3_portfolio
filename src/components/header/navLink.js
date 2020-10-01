import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const NavLink = ({ gatsbyLink, href, linkText }) => {
  const classes = `pb-4 ml-6 text-gray-500 border-b border-transparent xl:pb-6 lg:ml-8 lg:text-base xl:text-lg hover:text-gray-900 capitalize inline-block antialiased`

  if (gatsbyLink) {
    return (
      <a href={href} className={classes}>
        {linkText}
      </a>
    )
  } else {
    return (
      <Link to={href} className={classes}>
        {linkText}
      </Link>
    )
  }
}

export default NavLink

NavLink.propTypes = {
  gatsbyLink: PropTypes.bool,
  href: PropTypes.string,
  linkText: PropTypes.string,
}

NavLink.defaultProps = {
  gatsbyLink: false,
}
