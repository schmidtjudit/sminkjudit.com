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
        <p>
          Itaque nihil placeat quibusdam voluptas. Praesentium suscipit nostrum
          sit et quia eligendi. Dolorem doloremque rerum velit est omnis quasi
          deleniti voluptates. Nihil eveniet et fugiat qui et perspiciatis.
          Architecto culpa velit officia.
        </p>
        <Portfolio />
      </section>
    </div>
  </Layout>
)

export default PortfolioPage
