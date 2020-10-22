import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HeroSection from "../components/indexPage/heroSection"
import NavSection from "../components/indexPage/navSection"
import PortfolioSection from "../components/indexPage/portfolioSection"
import { FluidObject } from "gatsby-image"

interface DataProps extends PageProps {
  data: {
    allSanityProject: {
      edges: {
        node: {
          id: string,
          title: string,
          url: string,
          repoUrl: string
          _rawBlockDescription: object[],
          frontImage: {
            asset: {
              fluid: FluidObject
            }
            hotspot?: {
              x?: number,
              y?: number
            }
          }
        }
      }[]
    }
  }
}

const IndexPage: React.FC = ({ data }: DataProps) => {
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
          repoUrl
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
