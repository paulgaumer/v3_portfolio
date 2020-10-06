import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.section`
  ${tw`md:text-lg`}
  h2 {
    ${tw`mb-6 text-2xl font-semibold text-gray-900 capitalize md:text-3xl`}
  }
  h3 {
    ${tw`mb-6 text-xl font-medium text-gray-700 capitalize md:text-xl`}
  }
  p {
    ${tw`mb-6`}
  }
  ul {
    ${tw`flex flex-col mb-8 -mt-4 space-y-4`}
  }
  li {
    ${tw`pl-10`}
  }
`

const AboutSection = ({ children }) => {
  return <Container className="mt-20">{children}</Container>
}

export default AboutSection

AboutSection.propTypes = {
  children: PropTypes.node,
}
