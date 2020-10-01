import { Link } from "gatsby"
import React from "react"
import NavLink from "./navLink"

const Header = () => (
  <header className="pt-4 mb-6 md:pt-6 xl:pt-8">
    <nav className="flex justify-between pb-4 md:pb-0 md:border-b md:border-gray-200">
      <Link to="/">
        <h2>PG</h2>
      </Link>
      <ul className="flex space-x-10">
        <li>
          <NavLink href="/#portfolio" linkText="portfolio" />
        </li>
        <li>
          <NavLink href="/about" linkText="about" gatsbyLink={true} />
        </li>
        <li>
          <NavLink href="/blog" linkText="blog" gatsbyLink={true} />
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
