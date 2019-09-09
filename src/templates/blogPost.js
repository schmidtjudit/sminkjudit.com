import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Template = ({ data }) => {
  const {
    html,
    frontmatter: { title, date, excerpt, image },
  } = data.markdownRemark
  return (
    <Layout>
      <article className="article">
        <header>
          <h1>{title}</h1>
          <span className="date">{date}</span>
          {!!excerpt ? <p className="excerpt">{excerpt}</p> : null}
          {!image ? <Img fluid={image.childImageSharp.fluid} /> : null}
        </header>
        <section>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
        <footer></footer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        excerpt
        date(formatString: "DD MMMM, YYYY", locale: "hu")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Template
