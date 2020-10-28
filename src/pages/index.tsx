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
    allStrapiProject: {
      edges: {
        node: {
          id: string,
          strapiId: number,
          title: string,
          url: string,
          repoUrl: string
          description: string,
          frontImage: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }
      }[]
    }
  }
}

const IndexPage: React.FC = ({ data }: DataProps) => {
  const projects = data.allStrapiProject.edges.map(({ node }) => node)

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
    allStrapiProject(sort: { order: ASC, fields: created_at }) {
    edges {
      node {
        id
        strapiId
        title
        description
        url
        repoUrl
        frontImage {
          childImageSharp {
            fluid {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  }
`
