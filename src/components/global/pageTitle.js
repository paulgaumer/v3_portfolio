import React from "react"
import PropTypes from "prop-types"

const PageTitle = ({ children }) => {
  return (
    <h1
      data-testid="page-title"
      className="mt-8 mb-6 text-5xl font-semibold leading-tight text-gray-800 font-header md:mb-10 xl:mb-16 md:text-6xl lg:text-7xl lg:font-medium xl:text-8xl md:mt-16 xl:mt-24"
    >
      {children}
    </h1>
  )
}

export default PageTitle

PageTitle.propTypes = {
  children: PropTypes.node,
}
