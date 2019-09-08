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
          marginTop: "0",
          width: "auto",
          marginLeft: "235px",
          maxWidth: "75%",
          float: "left",
          padding: "30px",
          position: "relative",
          display: "block",
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
