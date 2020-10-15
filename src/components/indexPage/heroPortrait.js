import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/contextProvider"

const Portrait = ({ source }) => {
  return (
    <img
      src={source}
      alt="Paul Gaumer"
      data-testid="hero-image"
      className="object-cover object-top w-full h-full rounded-lg"
    />
  )
}

const HeroPortrait = () => {
  const { themeColor } = useContext(GlobalStateContext)

  switch (themeColor) {
    case "yellow":
      return (
        <Portrait source="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-yellow_v7hgb2.jpg" />
      )
    case "red":
      return (
        <Portrait source="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-red_femalv.jpg" />
      )
    case "blue":
      return (
        <Portrait source="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-blue_qlum3k.jpg" />
      )
    case "green":
      return (
        <Portrait source="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-green_swmecm.jpg" />
      )
    default:
      return (
        <Portrait source="https://res.cloudinary.com/dujnmeiiu/image/upload/v1602745429/paul-yellow_v7hgb2.jpg" />
      )
  }
}

export default HeroPortrait
