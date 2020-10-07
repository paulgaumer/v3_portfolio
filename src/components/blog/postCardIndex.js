import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "twin.macro"
import { format } from "date-fns"
import ArrowRight from "../icons/arrowRight"
import Link from "../global/link"
import { excerpt } from "../../utils/excerpt"

const Card = styled.div`
  h2 {
    ${tw`mt-0! mb-2!`}
  }
  a {
    ${tw`hover:no-underline! text-gray-700! hover:text-gray-700!`}
  }

  [data-name="card-date"] {
    ${tw`mt-0!`}
  }
  [data-name="card-description"] {
    ${tw`mb-2!`}
  }
`

const PostCardIndex = ({ post }) => {
  const title = post.title
  const slug = post.slug.current
  const date = format(new Date(post.publishedAt), "MMMM d, yyyy")
  const description = excerpt(post.blockDescription[0]?.children[0]?.text)

  return (
    <Card className="prose">
      <Link href={`/blog/${slug}`} gatsbyLink={true} customClasses="group">
        <div className="relative inline-block">
          <h2 className="relative z-10">{title}</h2>
          <div className="absolute left-0 right-0 z-0 hidden h-2 bottom-3 group-hover:block bg-yellowSecondary" />
        </div>
        <p data-name="card-date" className="text-xs text-gray-500">
          - {date}
        </p>
        <p data-name="card-description">{description}</p>
        <button className="flex items-center space-x-2 text-sm font-bold">
          <span>Read More</span>
          <span className="hidden group-hover:inline-block">
            <ArrowRight />
          </span>
        </button>
      </Link>
    </Card>
  )
}

export default PostCardIndex

PostCardIndex.propTypes = {
  post: PropTypes.object.isRequired,
}
