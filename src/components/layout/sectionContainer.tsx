import React from "react"

interface SectionContainerProps {
  children: React.ReactNode,
  maxWidth?: string,
  customClasses?: string 
}

const SectionContainer = ({ children, maxWidth="max-w-xl lg:max-w-3xl", customClasses }: SectionContainerProps) => {
  return (
    <section className={`px-6 mx-auto lg:px-0 ${maxWidth} ${customClasses}`}>
      {children}
    </section>
  )
}

export default SectionContainer

