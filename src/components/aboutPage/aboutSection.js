import React from "react"
import PropTypes from "prop-types"

const AboutSection = ({ children }) => {
  return <section className="mt-10">{children}</section>
}

export default AboutSection

AboutSection.propTypes = {
  children: PropTypes.element,
}
