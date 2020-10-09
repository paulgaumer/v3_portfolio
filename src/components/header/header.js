import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import NavLink from "./navLink"
import Logo from "../global/logo"

const Header = () => {
  const [pathname, setPathname] = useState("/")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setPathname(window.location.pathname)
    }
  }, [])

  return (
    <header className="pt-4 mb-6 md:pt-6 xl:pt-8">
      <nav className="flex items-center justify-between pb-4 xl:pb-6 sm:border-b sm:border-gray-200">
        <Link to="/">
          <Logo width="w-10" height="h-10" />
        </Link>
        <ul className="items-center hidden space-x-10 sm:flex">
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
        {/* Mobile menu button Start */}
        <div className="flex items-center mr-2 sm:hidden">
          <button
            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            aria-label="Main menu"
            aria-expanded="false"
            onClick={handleClick}
          >
            {/* Icon when menu is closed. */}
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
        {/* Mobile menu button Off */}
      </nav>
      {/* MOBILE MENU BODY START */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden"`}>
        <div className="pt-2 pb-3 shadow">
          <Link
            to="/portfolio"
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
          >
            Blog
          </Link>
          <Link
            to={`${pathname}${
              pathname === "/" ? "#contact-form" : "/#contact-form"
            }`}
            className="block py-2 pl-3 pr-4 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 "
          >
            Contact
          </Link>
        </div>
      </div>
      {/* MOBILE MENU BODY OFF */}
    </header>
  )
}

export default Header
