import React, { useState } from "react"
import { motion } from "framer-motion"
import ColorWheel from "../global/colorWheel"

const AnimatedColorWheel = () => {
  const [pulseOnce, setPulseOnce] = useState(false)
  return (
    <motion.div
      // Fade on page load
      variants={{
        hidden: {
          opacity: 0,
          scale: 1.3,
        },
        visible: {
          opacity: 0.8,
          transition: {
            delay: 0.8,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => setPulseOnce(true)}
    >
      {/* Pulse once after page loaded */}
      <motion.div
        variants={{
          pulse: {
            scale: [1, 1.1, 1, 1.2, 1, 1],
            transition: {
              delay: 1,
            },
          },
        }}
        animate={pulseOnce ? "pulse" : "null"}
        onAnimationComplete={() => setPulseOnce(false)}
        whileHover={{ scale: 1.2 }}
      >
        <ColorWheel />
      </motion.div>
    </motion.div>
  )
}

export default AnimatedColorWheel
