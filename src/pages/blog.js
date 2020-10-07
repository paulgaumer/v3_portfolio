import React from "react"
import PropTypes from "prop-types"
import PageTitle from "../components/global/pageTitle"
import SectionIntro from "../components/global/sectionIntro"
import Layout from "../components/layout/layout"
import SectionContainer from "../components/layout/sectionContainer"
import SEO from "../components/seo"
import PostCard from "../components/blog/postCardIndex"

const Blog = ({ data }) => {
  const posts = data.allSanityBlogPost.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title="Blog" />
      <SectionContainer>
        <PageTitle>Blog</PageTitle>
        <SectionIntro>
          <p>
            Mostly short posts explaining discoveries, learnings and programming
            nuggets I'd like to keep in mind while sharing with the community.
          </p>
        </SectionIntro>
        <div className="flex flex-col mt-20 space-y-16">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </SectionContainer>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogPageQuery {
    allSanityBlogPost(sort: { order: DESC, fields: publishedAt }) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          blockDescription {
            children {
              text
            }
          }
          publishedAt
        }
      }
    }
  }
`

Blog.propTypes = {
  data: PropTypes.object,
}
