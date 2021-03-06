import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/layout/layout"
import SectionContainer from "../components/layout/sectionContainer"
import SEO from "../components/seo"
import PostTitle from "../components/blog/postTitle"
import { serializers } from "../utils/blogPostsSerializer"

interface BlogPostProps {
  data: {
    sanityBlogPost: {
      title: string
      _rawBlockDescription: object[],
      publishedAt: string
    }
  }
}

const BlogPost = ({ data }: BlogPostProps) => {
  const { title, _rawBlockDescription, publishedAt } = data.sanityBlogPost
  return (
    <Layout>
      <SEO title={title} />
      <SectionContainer>
        <article>
          <PostTitle publishedAt={publishedAt}>{title}</PostTitle>
          <div data-testid="post-content" className="prose prose-lg">
            <PortableText
              blocks={_rawBlockDescription}
              serializers={serializers}
            />
          </div>
        </article>
      </SectionContainer>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($postId: String!) {
    sanityBlogPost(id: { eq: $postId }) {
      title
      _rawBlockDescription
      publishedAt
    }
  }
`
