import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HeroSection from "../components/indexPage/heroSection"
import NavSection from "../components/indexPage/navSection"
import PortfolioSection from "../components/indexPage/portfolioSection"

const IndexPage = ({ data }) => {
  const projects = data.allSanityProject.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <NavSection />
      <PortfolioSection projects={projects} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allSanityProject(sort: { order: DESC, fields: publishedAt }) {
      edges {
        node {
          id
          title
          url
          _rawBlockDescription
          frontImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              x
              y
            }
          }
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object,
}
