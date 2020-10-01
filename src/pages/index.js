import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HeroSection from "../components/indexPage/heroSection"
import NavSection from "../components/indexPage/navSection"
import PortfolioSection from "../components/indexPage/portfolioSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <NavSection />
    <PortfolioSection />
  </Layout>
)

export default IndexPage
