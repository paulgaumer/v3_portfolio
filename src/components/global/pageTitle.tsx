import React, { useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { GlobalStateContext } from "../../context/contextProvider"

interface PageTitleProps {
  children: React.ReactNode
}

const PageTitle = ({ children }: PageTitleProps) => {
  const { themeColor, themes } = useContext(GlobalStateContext)

  const getThemeBackground = (): string => {
    return themes[themeColor].bg
  }

  return (
    <div className="relative inline-block mb-6 md:mb-10 xl:mb-16">
      <h1
        data-testid="page-title"
        className="relative z-10 mt-8 text-5xl font-semibold leading-tight text-gray-800 font-header md:text-6xl lg:text-7xl lg:font-medium xl:text-8xl md:mt-16 xl:mt-24"
      >
        {children}
      </h1>
      <AnimatePresence>
        <motion.div
          className={`absolute left-0 z-0 w-full h-4 md:h-6 xl:h-10 lg:h-8 bottom-2 ${getThemeBackground()}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3 },
          }}
        ></motion.div>
      </AnimatePresence>
    </div>
  )
}

export default PageTitle
