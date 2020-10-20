import React from "react"
import { Link } from "gatsby"

interface NavLinkProps {
  gatsbyLink?: boolean,
  href: string,
  linkText:string
}

const NavLink = ({ gatsbyLink=false, href, linkText }: NavLinkProps) => {
  const classes = `text-gray-600 border-b border-transparent lg:text-base xl:text-lg hover:text-gray-900 capitalize inline-block antialiased`

  if (!gatsbyLink) {
    return (
      <a href={href} className={classes}>
        {linkText}
      </a>
    )
  } else {
    return (
      <Link to={href} className={classes}>
        {linkText}
      </Link>
    )
  }
}

export default NavLink
