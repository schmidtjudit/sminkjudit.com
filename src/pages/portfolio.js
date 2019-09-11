import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import SEO from "../components/seo"
import styled from "styled-components"

const GalleryPage = styled.div`
  min-width: 97vw;
  @media (min-width: 768px) {
    min-width: 62vw;
  }
`

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfólió" />
    <GalleryPage className="article">
      <header>
        <h1>Portfólió</h1>
      </header>
      <section>
        <Portfolio />
      </section>
    </GalleryPage>
  </Layout>
)

export default PortfolioPage
