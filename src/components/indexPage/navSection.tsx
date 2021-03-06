import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { AnimatePresence, motion } from "framer-motion"
import SectionContainer from "../layout/sectionContainer"
import Link from "../global/link"

// STYLE
const Title = styled.h2`
  ${tw`mb-2! lg:mb-5! font-header!`}
`

// TYPES
interface NavItemProps {
  href: string,
  title: string,
  children: React.ReactNode,
  gatsbyLink?: boolean
}


const NavItem = ({ href, title, children, gatsbyLink = true }: NavItemProps) => {
  return (
    <div className="prose">
      <Title className="flex items-center space-x-2 capitalize">
        <Link
          href={href}
          gatsbyLink={gatsbyLink}
          target={gatsbyLink}
          colors={"text-gray-900! hover:text-gray-900!"}
        >
          {title}
        </Link>
        <span className="mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </Title>
      <div className="mt-2 md:mt-4 lg:mt-6 md:prose-lg">{children}</div>
    </div>
  )
}

const NavSection: React.FC = () => {
  return (
    <SectionContainer>
      <ul
        data-testid="nav-section"
        className="grid mt-16 gap-y-4 md:text-lg lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16"
      >
        <AnimatePresence>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          >
            <NavItem href="#portfolio" title="portfolio" gatsbyLink={false}>
              <p>
                A few of the projects I've developed and collaborated on. I
                currently work as a freelance developer specialized in React,
                JavaScript and all things{" "}
                <Link href="https://jamstack.org/">JAMStack</Link>.
              </p>
            </NavItem>
          </motion.li>
        </AnimatePresence>
        <AnimatePresence>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          >
            <NavItem href="/about" title="about">
              <p>
                A brief overview of my past experiences and most recent
                activities, including{" "}
                <Link href="https://japanlifestories.com/">podcasting</Link>,
                workshop teaching and press.
              </p>
            </NavItem>
          </motion.li>
        </AnimatePresence>
        <AnimatePresence>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          >
            <NavItem href="/blog" title="blog">
              <p>
                Discoveries, learnings and programming nuggets I stumbled upon.
                Opinions and bugs are my own.
              </p>
            </NavItem>
          </motion.li>
        </AnimatePresence>
      </ul>
    </SectionContainer>
  )
}

export default NavSection
