import React from "react"

interface SectionIntroProps {
  children: React.ReactNode,
  customClasses?: string
}

const SectionIntro = ({ children, customClasses }: SectionIntroProps) => {
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
