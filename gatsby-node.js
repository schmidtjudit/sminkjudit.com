/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")
  try {
    const result = await graphql(
      `
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `
    )
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = node.frontmatter.path
      createPage({
        path,
        component: blogPostTemplate,
        context: {
          pathSlug: path,
        },
      })
    })
  } catch (e) {
    // eslint-disable-next-line
    console.error(e)
  }
}
