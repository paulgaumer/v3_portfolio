import React from "react"

interface Props {
  width?: string,
  height?: string,
  color?: string,
  customClasses?: string
}

const Mic = ({ width, height, color, customClasses }: Props) => {
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
        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Mic
