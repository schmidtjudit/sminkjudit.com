import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery from "./gallery"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query PortfolioImagesQuery {
      portfolioImages: allFile(
        filter: { sourceInstanceName: { eq: "portfolioImages" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return <Gallery images={data.portfolioImages.edges} />
}

export default Portfolio
