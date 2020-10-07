import React from "react"
import PropTypes from "prop-types"

const SectionContainer = ({ children, maxWidth, customClasses }) => {
  return (
    <section className={`px-6 mx-auto lg:px-0 ${maxWidth} ${customClasses}`}>
      {children}
    </section>
  )
}

export default SectionContainer

SectionContainer.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.string.isRequired,
  customClasses: PropTypes.string,
}
SectionContainer.defaultProps = {
  maxWidth: "max-w-xl lg:max-w-3xl",
  customClasses: "",
}
