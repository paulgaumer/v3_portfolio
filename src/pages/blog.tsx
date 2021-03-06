import React from "react"
import {graphql} from "gatsby"
import { motion } from "framer-motion"
import PageTitle from "../components/global/pageTitle"
import SectionIntro from "../components/global/sectionIntro"
import Layout from "../components/layout/layout"
import SectionContainer from "../components/layout/sectionContainer"
import SEO from "../components/seo"
import PostCard from "../components/blog/postCardIndex"

interface BlogProps {
  data: {
    allSanityBlogPost: {
      edges: {
        node: {
          id: string
          title: string
          slug: {
            current: string
          }
          summary: string
          publishedAt: string
        }
      }[]
    }
  }
}

const Blog = ({ data }: BlogProps) => {
  const posts = data.allSanityBlogPost.edges.map(({ node }) => node)

  return (
    <Layout>
      <SEO title="Blog" />
      <SectionContainer>
        <PageTitle>Blog</PageTitle>
        <SectionIntro>
          <p>
            A series of short posts explaining discoveries, learnings and
            programming nuggets I stumbled upon. Opinions and bugs are my own.
          </p>
        </SectionIntro>
        <ul className="flex flex-col mt-20 space-y-16">
          {posts.map((post, i) => (
            <motion.li
              variants={{
                hidden: i => ({
                  opacity: 0,
                  y: -50 * i,
                }),
                visible: i => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.05,
                  },
                }),
              }}
              initial="hidden"
              animate="visible"
              custom={i}
              key={`post-${i}`}
            >
              <PostCard key={post.id} post={post} />
            </motion.li>
          ))}
        </ul>
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
          summary
          publishedAt
        }
      }
    }
  }
`
