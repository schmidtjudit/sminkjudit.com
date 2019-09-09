import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./navbar.css"
import styled from "styled-components"
import { Tag, SocialInstagram } from "styled-icons/typicons"

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

  return (
    <aside className="nav">
      <div>
        <Link to="/">
          <Img
            className="avatar"
            fluid={avatar.file.childImageSharp.fluid}
            alt="Avatar"
          />
          <h1>Schmidt Judit</h1>
          <h2>Sikkes - Sminkes - Sikeres</h2>
        </Link>
        <nav className="social">
          <a href="https://instagram.com/judit.schmidt">
            <InstagramIcon size="20" title="@judit.schmidt" />
            /judit.schmidt
          </a>
        </nav>
      </div>
      <nav>
        <Link to="/" activeClassName="active">
          Blog
        </Link>
        <Link to="/sikkes" activeClassName="active" className="sublink">
          <RedTag size="16" />
          Sikkes
        </Link>
        <Link to="/sminkes" activeClassName="active" className="sublink">
          <BlueTag size="16" />
          Sminkes
        </Link>
        <Link to="/sikeres" activeClassName="active" className="sublink">
          <PurpleTag size="16" />
          Sikeres
        </Link>
        <Link to="/kapcsolat" activeClassName="active">
          Kapcsolat
        </Link>
      </nav>
    </aside>
  )
}

export const InstagramIcon = styled(SocialInstagram)`
  vertical-align: bottom;
`
export const RedTag = styled(Tag)`
  color: lightsalmon;
  margin-right: 3px;
  vertical-align: text-bottom;
`
export const BlueTag = styled(Tag)`
  color: lightblue;
  margin-right: 3px;
  vertical-align: text-bottom;
`
export const PurpleTag = styled(Tag)`
  color: plum;
  margin-right: 3px;
  vertical-align: text-bottom;
`

export default Navbar
