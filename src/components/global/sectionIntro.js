import React from "react"
import PropTypes from "prop-types"

const SectionIntro = ({ children, customClasses }) => {
  const defaultClasses = "prose md:prose-xl"
  return (
    <div
      data-testid="section-intro"
      className={`${customClasses ?? defaultClasses}`}
    >
      {children}
    </div>
  )
}

export default SectionIntro

SectionIntro.propTypes = {
  children: PropTypes.node,
  customClasses: PropTypes.string,
}
