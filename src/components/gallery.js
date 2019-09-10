import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  -ms-grid-template-columns: repeat(4, 1fr);
  -ms-grid-gap: 5px;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    -ms-grid-template-columns: repeat(2, 1fr);
    -ms-grid-gap: 5px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    -ms-grid-template-columns: repeat(3, 1fr);
    -ms-grid-gap: 5px;
  }
`

export default class Gallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  }
  render() {
    const { images } = this.props

    return (
      <Thumbnails>
        {images.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </Thumbnails>
    )
  }
}
