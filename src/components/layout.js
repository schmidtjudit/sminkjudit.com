import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
