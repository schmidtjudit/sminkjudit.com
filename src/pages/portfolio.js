import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfólió" />
    <div className="article">
      <header>
        <h1>Portfólió</h1>
      </header>
      <section>
        <Portfolio />
      </section>
    </div>
  </Layout>
)

export default PortfolioPage
