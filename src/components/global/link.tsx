import React from "react"
import { Link } from "gatsby"

interface CustomLinkProps {
  gatsbyLink?: boolean,
  href: string,
  colors?: string,
  underline?: string,
  target?: boolean,
  customClasses?: string,
  children: React.ReactNode,
}

const CustomLink = ({
  children,
  gatsbyLink=false,
  href,
  target=true,
  colors,
  underline,
  customClasses="",
}: CustomLinkProps) => {
  const defaultColors = `text-blue-600 hover:text-blue-700`
  const defaultUnderline = `no-underline hover:underline`

  if (!gatsbyLink) {
    return (
      <a
        href={href}
        className={`${colors ?? defaultColors} ${
          underline ?? defaultUnderline
        } ${customClasses}`}
        target={target ? "_blank" : ""}
        rel={target ? "noopener noreferrer" : ""}
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link
        to={href}
        className={`${colors ?? defaultColors} ${
          underline ?? defaultUnderline
        } ${customClasses}`}
      >
        {children}
      </Link>
    )
  }
}

export default CustomLink
