import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const Template = ({ data }) => {
  const {
    html,
    frontmatter: { title, date },
  } = data.markdownRemark
  return (
    <Layout>
      <main>
        <h1>{title}</h1>
        <div>{date}</div>
        <section>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY", locale: "hu")
      }
    }
  }
`

export default Template
