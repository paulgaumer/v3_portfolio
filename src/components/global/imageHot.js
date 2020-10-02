import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const ImageHot = ({ image, alt, customClasses }) => {
  const hotspot =
    image.hotspot != null
      ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
      : "center"

  const style = { objectPosition: hotspot }

  return (
    <Img
      fluid={image.asset.fluid}
      alt={alt}
      className={`object-cover ${customClasses}`}
      imgStyle={style}
    />
  )
}

export default ImageHot

ImageHot.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string,
  customClasses: PropTypes.string,
}
