import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 data-testid="hero-title">Hi, I'm Paul</h1>
    <p data-testid="hero-bio">
      My name is Paul Gaumer. I am a software developer focusing on creating
      accessible and smooth web experiences.
    </p>
    <img
      src="https://via.placeholder.com/150"
      alt="hero-image"
      data-testid="hero-image"
    />
    <a href="#portfolio">Portfolio</a>
    <div id="portfolio">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi
      reiciendis vitae non voluptatibus eveniet quod cumque numquam sunt, qui,
      cupiditate laborum praesentium, eius velit corrupti soluta assumenda
      similique maxime.
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
