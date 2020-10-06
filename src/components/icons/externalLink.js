import React from "react"
import PropTypes from "prop-types"

const ExternalLink = ({ width, height, color, customClasses }) => {
  const defaultWidth = `w-4`
  const defaultHeight = `h-4`
  const defaultColor = `text-gray-700`
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`
          ${width ?? defaultWidth} 
          ${height ?? defaultHeight}
          ${color ?? defaultColor}
          ${customClasses}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

export default ExternalLink

ExternalLink.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  customClasses: PropTypes.string,
}
