import React from "react"

interface Props {
  width?: string,
  height?: string,
  color?: string,
  customClasses?: string
}

const Calendar = ({ width, height, color, customClasses }: Props) => {
  const defaultWidth = `w-4`
  const defaultHeight = `h-4`
  const defaultColor = `text-gray-700`
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
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
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )
}

export default Calendar
