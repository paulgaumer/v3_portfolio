import React, { useContext } from "react"
import yellow from "../../images/paul-yellow.jpg"
import red from "../../images/paul-red.jpg"
import blue from "../../images/paul-blue.jpg"
import green from "../../images/paul-green.jpg"
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
      return <Portrait source={yellow} />
    case "red":
      return <Portrait source={red} />
    case "blue":
      return <Portrait source={blue} />
    case "green":
      return <Portrait source={green} />
    default:
      return <Portrait source={yellow} />
  }
}

export default HeroPortrait
