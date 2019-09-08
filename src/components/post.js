import React from "react"

import { Link } from "gatsby"
import Img from "gatsby-image"
import "./post.css"

const Post = ({ frontmatter }) => {
  return (
    <div className="card">
      <Link to={frontmatter.path}>
        <Img fluid={frontmatter.image.childImageSharp.fluid} />
        <div className="date">{frontmatter.date}</div>
        <h2>{frontmatter.title}</h2>
      </Link>
    </div>
  )
}

export default Post
