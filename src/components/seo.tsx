import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description: string,
  lang: string,
  meta: object[],
  title: string,
}

function SEO({ description="", lang="en", meta=[], title }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: "https://paulgaumer.com/seo.png",
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: "https://paulgaumer.com/seo.png",
        },
        {
          name: "keywords",
          content:
            "Software Developer, Web Developer, Front End Developer, Front-End Developer, React, React.js, JavaScript, JAMStack, Gatsby, Gatsby.js, Next, Next.js, Tailwind, Tailwind CSS, Sanity, Netlify, CSS, HTML, Landing Page, Lighthouse, Coding, Programming, Teaching, Web Design, Angers, Loire Atlantique, Japan, Tokyo",
        },
        ...meta
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
