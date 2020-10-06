import React from "react"
import PropTypes from "prop-types"

const Chat = ({ width, height, color, customClasses }) => {
  const defaultWidth = `w-4`
  const defaultHeight = `h-4`
  const defaultColor = `text-gray-700`
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`
          ${width ?? defaultWidth} 
          ${height ?? defaultHeight}
          ${color ?? defaultColor}
          ${customClasses}`}
    >
      <path
        fillRule="evenodd"
        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Chat

Chat.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  customClasses: PropTypes.string,
}