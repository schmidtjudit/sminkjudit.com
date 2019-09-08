import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Navbar from "./navbar"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 0 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main className="container">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
