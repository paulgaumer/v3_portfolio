import { PageProps } from "gatsby"
import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/contextProvider"

interface TechTagProps extends PageProps {
  content: string
}

const TechTag: React.FC = ({ content }: TechTagProps) => {
  const { themeColor, themes } = useContext(GlobalStateContext)
  
  const getThemeBackground = (): string => {
    return themes[themeColor].tag.bg
  }
  const getThemeText = (): string => {
    return themes[themeColor].tag.text
  }

  return (
    <li>
      <span
        className={`inline-flex items-center px-3 py-0.5 lg:py-1 lg:px-4 rounded-full text-sm lg:text-base leading-5 mt-4 mx-2 ${getThemeBackground()} ${getThemeText()}`}
      >
        {content}
      </span>
    </li>
  )
}

export default TechTag
