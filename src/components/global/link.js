import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CustomLink = ({ children, gatsbyLink, href, target, customClasses }) => {
  const defaultClasses = `text-blue-600 hover:text-blue-700`

  if (!gatsbyLink) {
    return (
      <a
        href={href}
        className={`${defaultClasses} ${customClasses}`}
        target={target ? "_blank" : ""}
        rel={target ? "noopener noreferrer" : ""}
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link to={href} className={`${defaultClasses} ${customClasses}`}>
        {children}
      </Link>
    )
  }
}

export default CustomLink

CustomLink.propTypes = {
  gatsbyLink: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.bool,
  customClasses: PropTypes.string,
  children: PropTypes.node,
}

CustomLink.defaultProps = {
  gatsbyLink: false,
  target: true,
  customClasses: "",
}
