import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./navbar.css"
import { SocialInstagram } from "styled-icons/typicons"

const Navbar = () => {
  const avatar = useStaticQuery(graphql`
    query GetAvatarFile {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(avatar)

  return (
    <aside className="nav">
      <div>
        <Link to="/">
          <Img
            className="avatar"
            fluid={avatar.file.childImageSharp.fluid}
            alt="Avatar"
          />
          <h1>Judit Schmidt</h1>
          <h2>Sikkes - Sminkes - Sikeres</h2>
        </Link>
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
