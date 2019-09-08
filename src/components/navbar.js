import React from "react"

import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => {
  return (
    <aside className="nav">
      <div>
        <h1>Judit Schmidt</h1>
        <h2>Sikkes - Sminkes - Sikeres</h2>
      </div>
      <nav>
        <Link to="/" activeClassName="active">
          Blog
        </Link>
        <Link to="/kapcsolat" activeClassName="active">
          Kapcsolat
        </Link>
      </nav>
    </aside>
  )
}

export default Navbar
