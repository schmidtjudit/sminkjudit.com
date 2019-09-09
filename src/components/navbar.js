import React from "react"
import { SocialInstagram } from "styled-icons/typicons"

import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => {
  return (
    <aside className="nav">
      <div>
        <h1>Judit Schmidt</h1>
        <h2>Sikkes - Sminkes - Sikeres</h2>
        <nav className="social">
          <a href="https://instagram.com/judit.schmidt">
            <SocialInstagram size="18" title="@judit.schmidt" />
            /judit.schmidt
          </a>
        </nav>
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
