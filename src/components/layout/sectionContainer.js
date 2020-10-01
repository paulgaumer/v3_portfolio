import React from "react"
import PropTypes from "prop-types"

const SectionContainer = ({ children }) => {
  return (
    <section class="max-w-xl px-6 mx-auto lg:max-w-3xl lg:px-0">
      {children}
    </section>
  )
}

export default SectionContainer

SectionContainer.propTypes = {
  children: PropTypes.node,
}
