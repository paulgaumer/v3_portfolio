import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import NavLink from "./navLink"
import Logo from "../global/logo"

const Header = () => {
  const [pathname, setPathname] = useState("/")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setPathname(window.location.pathname)
    }
  }, [])

  return (
    <header className="pt-4 mb-6 md:pt-6 xl:pt-8">
      <nav className="flex items-center justify-between pb-4 xl:pb-6 md:border-b md:border-gray-200">
        <Link to="/">
          <Logo width="w-10" height="h-10" />
        </Link>
        <ul className="items-center hidden space-x-10 md:flex">
          <li>
            <NavLink href="/#portfolio" linkText="portfolio" />
          </li>
          <li>
            <NavLink href="/about" linkText="about" gatsbyLink={true} />
          </li>
          <li>
            <NavLink href="/blog" linkText="blog" gatsbyLink={true} />
          </li>
          <li>
            <NavLink
              href={`${pathname}${
                pathname === "/" ? "#contact-form" : "/#contact-form"
              }`}
              linkText="contact"
              gatsbyLink={true}
            />
          </li>
        </ul>
        <div className="flex items-center -mr-2 sm:hidden">
          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            aria-label="Main menu"
            aria-expanded="false"
            onClick={handleClick}
          >
            {/* Icon when menu is closed. */}
            {/* <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
            <svg
              className={`block w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Icon when menu is open. */}
            <svg
              className={`block w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
