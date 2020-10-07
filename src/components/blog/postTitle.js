import React from "react"
import PropTypes from "prop-types"
import { format } from "date-fns"
import Calendar from "../icons/calendar"

const PostTitle = ({ children, publishedAt }) => {
  const date = format(new Date(publishedAt), "MMMM d, yyyy")
  return (
    <header className="mt-8 mb-6 md:mb-10 xl:mb-16 md:mt-16 xl:mt-24">
      <h1
        data-testid="post-title"
        className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl lg:font-medium "
      >
        {children}
      </h1>
      <p className="flex items-center mt-2 space-x-2 text-gray-500">
        <span>
          <Calendar color="text-gray-500" />
        </span>{" "}
        <span>{date}</span>
      </p>
    </header>
  )
}

export default PostTitle

PostTitle.propTypes = {
  children: PropTypes.node,
}
