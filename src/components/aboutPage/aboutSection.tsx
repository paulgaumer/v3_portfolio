import React from "react"

interface AboutSectionProps {
  children: React.ReactNode,
  customClasses?: string
}

const AboutSection = ({ children, customClasses }: AboutSectionProps) => {
  return (
    <section data-testid="about-section" className={`mt-20 ${customClasses}`}>
      {children}
    </section>
  )
}

export default AboutSection
