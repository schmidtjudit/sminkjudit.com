import React from "react"

import Layout from "../components/layout"
import Post from "../components/post"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="flex">
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return <Post key={frontmatter.path} frontmatter={frontmatter} />
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostListQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD MMMM, YYYY", locale: "hu")
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 275) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
