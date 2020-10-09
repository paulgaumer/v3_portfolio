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
        <ul className="flex items-center space-x-10">
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
      </nav>
    </header>
  )
}

export default Header
