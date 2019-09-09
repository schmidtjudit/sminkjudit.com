import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Calendar } from "styled-icons/typicons"

const Template = ({ data }) => {
  const {
    html,
    frontmatter: { title, date, excerpt, cover },
  } = data.markdownRemark
  return (
    <Layout>
      <article className="article">
        <header>
          <h1>{title}</h1>
          <span className="date">
            <Calendar size="18" title={date} />
            {date}
          </span>
          {!!excerpt ? <p className="excerpt">{excerpt}</p> : null}
          {!cover ? <Img fluid={cover.childImageSharp.fluid} /> : null}
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
        cover {
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
