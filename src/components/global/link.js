import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const CustomLink = ({
  children,
  gatsbyLink,
  href,
  target,
  colors,
  underline,
  customClasses,
}) => {
  const defaultColors = `text-blue-600 hover:text-blue-700`
  const defaultUnderline = `no-underline hover:underline`

  if (!gatsbyLink) {
    return (
      <a
        href={href}
        className={`${colors ?? defaultColors} ${
          underline ?? defaultUnderline
        } ${customClasses}`}
        target={target ? "_blank" : ""}
        rel={target ? "noopener noreferrer" : ""}
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link
        to={href}
        className={`${colors ?? defaultColors} ${
          underline ?? defaultUnderline
        } ${customClasses}`}
      >
        {children}
      </Link>
    )
  }
}

export default CustomLink

CustomLink.propTypes = {
  gatsbyLink: PropTypes.bool,
  href: PropTypes.string,
  colors: PropTypes.string,
  underline: PropTypes.string,
  target: PropTypes.bool,
  customClasses: PropTypes.string,
  children: PropTypes.node,
}

CustomLink.defaultProps = {
  gatsbyLink: false,
  target: true,
  customClasses: "",
}
