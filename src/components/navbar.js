import React from "react"

import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div>Judit Schmidt</div>
      <Link to="/about">About</Link>
      <Link to="/">Posts</Link>
    </nav>
  )
}

export default Navbar
