const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  return graphql(
    `
      {
        allSanityBlogPost {
          edges {
            node {
              id
              slug {
                current
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allSanityBlogPost.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/blog/${edge.node.slug.current}`,
        component: blogPostTemplate,
        context: {
          postId: edge.node.id,
        },
      })
    })
  })
}
