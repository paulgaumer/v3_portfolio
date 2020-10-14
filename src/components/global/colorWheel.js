import React, { useState, useContext } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/contextProvider"
import colorWheelStyles from "./colorWheel.module.css"

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
        className={colorWheelStyles.wheel}
      >
        {/* Generate the needed number of divs to create the color leaves */}
        {[...Array(19)].map((e, i) => (
          <div className={colorWheelStyles.colorLeaf} key={i} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default ColorWheel
