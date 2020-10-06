import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  /* p {
    ${tw`mb-6`}
  } */
`

const SectionIntro = ({ children }) => {
  return (
    // <Container className="mt-6 text-lg antialiased text-gray-700 md:text-xl lg:text-2xl">
    <Container className="">{children}</Container>
  )
}

export default SectionIntro

SectionIntro.propTypes = {
  children: PropTypes.node,
}
