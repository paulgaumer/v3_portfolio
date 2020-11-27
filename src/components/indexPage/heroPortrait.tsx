import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/contextProvider"
import paulYellow from "../../images/paul-yellow.jpg"

interface PortraitProps {
  sourceDefault: string,
  sourceWebp: string
}

const Portrait = ({ sourceDefault, sourceWebp }: PortraitProps) => {
  return (
    <picture>
      <source srcSet={sourceWebp} type="image/webp" />
      <source srcSet={sourceDefault} type="image/jpeg" />
      <img
        src={sourceDefault}
        alt="Paul Gaumer"
        data-testid="hero-image"
        className="object-cover object-top w-full h-full rounded-lg"
      />
    </picture>
  )
}

const HeroPortrait = () => {
  const { themeColor } = useContext(GlobalStateContext)

  switch (themeColor) {
    case "yellow":
      return (
        // <Portrait
        //   sourceDefault="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-yellow_v7hgb2.jpg"
        //   sourceWebp="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-yellow_v7hgb2.webp"
        // />
        <Portrait
          sourceDefault={paulYellow}
          sourceWebp={paulYellow}
        />
      )
    // case "red":
    //   return (
    //     <Portrait
    //       sourceDefault="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-red_femalv.jpg"
    //       sourceWebp="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-red_femalv.webp"
    //     />
    //   )
    // case "blue":
    //   return (
    //     <Portrait
    //       sourceDefault="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-blue_qlum3k.jpg"
    //       sourceWebp="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-blue_qlum3k.webp"
    //     />
    //   )
    // case "green":
    //   return (
    //     <Portrait
    //       sourceDefault="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-green_swmecm.jpg"
    //       sourceWebp="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-green_swmecm.webp"
    //     />
    //   )
    default:
      return (
        // <Portrait
        //   sourceDefault="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-yellow_v7hgb2.jpg"
        //   sourceWebp="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-yellow_v7hgb2.webp"
        // />
        <Portrait
          sourceDefault={paulYellow}
          sourceWebp={paulYellow}
        />
      )
  }
}

export default HeroPortrait
