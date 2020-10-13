import React, { useState, useContext } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/contextProvider"

const Container = styled.div`
  .wheel {
    position: relative;
    width: 60px;
    height: 60px;
    /* border: 2px solid red; */
    &:hover {
      cursor: pointer;
    }
  }
  .colorLeaf {
    width: 20px;
    height: 20px;
    border-radius: 0 100%;
    opacity: 0.8;
    position: absolute;
    top: 8px;
    left: 9px;
    transform-origin: 100% 100%;
    -webkit-animation: intro 2s;
    animation: intro 2.5s;
    mix-blend-mode: hard-light;
  }

  .colorLeaf:nth-child(1) {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    background: #f1b53b;
  }
  .colorLeaf:nth-child(2) {
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    background: #ea6e32;
  }
  .colorLeaf:nth-child(3) {
    transform: rotate(40deg);
    -webkit-transform: rotate(40deg);
    background: #e02425;
  }
  .colorLeaf:nth-child(4) {
    transform: rotate(60deg);
    -webkit-transform: rotate(60deg);
    background: #e12766;
  }
  .colorLeaf:nth-child(5) {
    transform: rotate(80deg);
    -webkit-transform: rotate(80deg);
    background: #e329a6;
  }
  .colorLeaf:nth-child(6) {
    transform: rotate(100deg);
    -webkit-transform: rotate(100deg);
    background: #e42ae3;
  }
  .colorLeaf:nth-child(7) {
    transform: rotate(120deg);
    -webkit-transform: rotate(120deg);
    background: #a226e0;
  }
  .colorLeaf:nth-child(8) {
    transform: rotate(140deg);
    -webkit-transform: rotate(140deg);
    background: #5d1fdc;
  }
  .colorLeaf:nth-child(9) {
    transform: rotate(160deg);
    -webkit-transform: rotate(160deg);
    background: #1918d8;
  }
  .colorLeaf:nth-child(10) {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    background: #2363df;
  }
  .colorLeaf:nth-child(11) {
    transform: rotate(200deg);
    -webkit-transform: rotate(200deg);
    background: #31abea;
  }
  .colorLeaf:nth-child(12) {
    transform: rotate(220deg);
    -webkit-transform: rotate(220deg);
    background: #3df1f2;
  }
  .colorLeaf:nth-child(13) {
    transform: rotate(240deg);
    -webkit-transform: rotate(240deg);
    background: #3af0b3;
  }
  .colorLeaf:nth-child(14) {
    transform: rotate(260deg);
    -webkit-transform: rotate(260deg);
    background: #38ee75;
  }
  .colorLeaf:nth-child(15) {
    transform: rotate(280deg);
    -webkit-transform: rotate(280deg);
    background: #36ec37;
  }
  .colorLeaf:nth-child(16) {
    transform: rotate(300deg);
    -webkit-transform: rotate(300deg);
    background: #78f13c;
  }
  .colorLeaf:nth-child(17) {
    transform: rotate(320deg);
    -webkit-transform: rotate(320deg);
    background: #b4f43c;
  }
  .colorLeaf:nth-child(18) {
    transform: rotate(340deg);
    -webkit-transform: rotate(340deg);
    background: #fbfa48;
  }

  @keyframes intro {
    0% {
      transform: rotate(-10deg);
    }
  }
  @-webkit-keyframes intro {
    0% {
      -webkit-transform: rotate(-10deg);
    }
  }
`

const ColorWheel = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const { themes } = useContext(GlobalStateContext)
  const colorOptions = Object.keys(themes)

  const [isClicked, setIsClicked] = useState(false)
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)

  /**
   * Define the new theme color based on the current index in the theme list
   */
  const changeTheme = () => {
    const newIndex =
      currentThemeIndex + 1 >= colorOptions.length ? 0 : currentThemeIndex + 1

    const newColor = colorOptions[newIndex]
    dispatch({
      type: "changeTheme",
      payload: newColor,
    })
    setCurrentThemeIndex(newIndex)
  }

  /**
   * Activate the rotate animation and set the updated theme
   */
  const handleClick = () => {
    setIsClicked(true)
    changeTheme()
  }

  /**
   * Stop the rotate animation
   */
  const handleAnimationComplete = () => {
    setIsClicked(false)
  }

  /**
   * The pulse animation duration is defined as 8s.
   * I want the pulse to last 1s and appear every 8s (1/8 of duration)
   * I defined the pause to be 7/8 of duration
   */
  const pulseKeyframes = [1, 1.1, 1, 1.2, 1, 1]
  const animationLength = pulseKeyframes.length
  const pauseKeyframes = Array(7 * animationLength).fill(1)

  return (
    <Container>
      <motion.div
        animate={isClicked ? null : "pulse"}
        variants={{
          pulse: {
            scale: [...pauseKeyframes, ...pulseKeyframes],
            transition: {
              duration: 8,
              ease: "easeOut",
              loop: Infinity,
            },
          },
        }}
      >
        <motion.div
          animate={isClicked ? "clicked" : null}
          variants={{
            clicked: {
              rotate: [-360, 0],
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            },
          }}
          onAnimationComplete={handleAnimationComplete}
          onClick={handleClick}
          className="wheel"
        >
          {/* Generate the needed number of divs to create the color leaves */}
          {[...Array(19)].map((e, i) => (
            <div className="colorLeaf" key={i} />
          ))}
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default ColorWheel
