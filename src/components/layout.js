import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"
import Navbar from "./navbar"

import "./layout.css"
import "typeface-satisfy"
import "typeface-roboto"
import "typeface-pacifico"

const Container = styled.main`
  position: relative;
  display: block;
  padding: 5px;
  float: left;

  @media (min-width: 768px) {
    margin-top: 0;
    width: auto;
    margin-left: 235px;
    max-width: 75%;
    padding: 30px;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
