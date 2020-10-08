import React from "react"
import PropTypes from "prop-types"

const AboutSection = ({ children, customClasses }) => {
  return (
    <section data-testid="about-section" className={`mt-20 ${customClasses}`}>
      {children}
    </section>
  )
}

export default AboutSection

AboutSection.propTypes = {
  children: PropTypes.node,
  customClasses: PropTypes.string,
}
