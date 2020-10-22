import React from "react"
import Img, { FluidObject } from "gatsby-image"

interface ImageHotProps {
  image: {
    asset: {
      fluid: FluidObject
    }
    hotspot?: {
      x?:number,
      y?:number
    }
  },
  alt: string,
  customClasses?:string
}

const ImageHot = ({ image, alt, customClasses }: ImageHotProps) => {
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
