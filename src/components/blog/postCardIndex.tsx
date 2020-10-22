import React, { useContext } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { format } from "date-fns"
import ArrowRight from "../icons/arrowRight"
import Link from "../global/link"
import { excerpt } from "../../utils/excerpt"
import { GlobalStateContext } from "../../context/contextProvider"

// STYLES
const Card = styled.div`
  h2 {
    ${tw`mt-0! mb-2! font-header!`}
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
// TYPES
interface PostCardIndexProps {
  post: {
    id: string
    title: string
    slug: {
      current: string
    }
    summary: string
    publishedAt: string
  }
}

const PostCardIndex = ({ post }: PostCardIndexProps) => {
  const title = post.title
  const slug = post.slug.current
  const date = format(new Date(post.publishedAt), "MMMM d, yyyy")
  const description = excerpt(post.summary)
  const { themeColor, themes } = useContext(GlobalStateContext)

  const getThemeBackground = (): string => {
    return themes[themeColor].bg
  }

  return (
    <Card data-testid="post-card" className="prose">
      <Link
        href={`/blog/${slug}`}
        gatsbyLink={true}
        customClasses="group"
        colors=""
        underline="no-underline hover:no-underline"
      >
        <div
          className="relative inline-block"
          style={{ position: "relative !important" as "relative" }}
        >
          <h2
            className="relative z-10"
            style={{
              position: "relative !important" as "relative",
              marginTop: "0 !important",
              marginBottom: "0.5rem !important",
            }}
          >
            {title}
          </h2>
          <div
            className={`absolute left-0 right-0 z-0 hidden h-2 bottom-3 group-hover:block ${getThemeBackground()}`}
            style={{ position: "absolute !important" as "absolute" }}
          />
        </div>
        <p
          data-name="card-date"
          data-testid="card-date"
          className="text-xs text-gray-500 font-header"
          style={{ marginTop: "0 !important" }}
        >
          - {date}
        </p>
        <p
          data-name="card-description"
          data-testid="card-description"
          style={{ marginBottom: "0.5rem !important" }}
        >
          {description}
        </p>
        <button className="flex items-center space-x-2 text-sm font-bold">
          <span>Read More</span>
          <span className="hidden mt-1 group-hover:inline-block">
            <ArrowRight />
          </span>
        </button>
      </Link>
    </Card>
  )
}

export default PostCardIndex
