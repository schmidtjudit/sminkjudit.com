import React from "react"

import Layout from "../components/layout"
import Post from "../components/post"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return <Post key={frontmatter.path} frontmatter={frontmatter} />
      })}
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
            image {
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
