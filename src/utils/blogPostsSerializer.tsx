import React from "react"
import Link from "../components/global/link"
import CodeHighlighter from "../components/global/codeHighlighter"
// import urlBuilder from "@sanity/image-url"
// import getYoutubeId from "get-youtube-id"

// Custom component styled to spread full width while retaining a correct height
// const YoutubeContainer = styled.div`
//   position: relative;
//   padding-bottom: 56.25%; /* 16:9 */
//   height: 0;

//   & > .yVideo {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
// `

// const urlFor = source =>
//   urlBuilder({
//     projectId: process.env.GATSBY_SANITY_PROJECT_ID,
//     dataset: "production",
//   }).image(source)

/**
 * Used to transcribe and style Sanity's Portable Text format
 * Custom for blog posts
 */
export const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h2":
          return <h2>{props.children}</h2>
        case "h3":
          return <h3>{props.children}</h3>
        case "h4":
          return <h4>{props.children}</h4>
        default:
          return <p>{props.children}</p>
      }
    },
    code: props => {
      return <CodeHighlighter content={props.node} />
    },
    // youtube(props) {
    //   const id = getYoutubeId(props.node.url)
    //   const url = `https://www.youtube.com/embed/${id}`
    //   return (
    //     <YoutubeContainer className="flex justify-center my-20">
    //       <iframe
    //         title="Youtube Preview"
    //         className="yVideo"
    //         src={url}
    //         frameborder="0"
    //         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
    //         allowFullScreen
    //       />
    //     </YoutubeContainer>
    //   )
    // },
    // mainImage(props) {
    //   return (
    //     <figure className="flex flex-col items-center justify-center my-10">
    //       <img
    //         src={urlFor(props.node.asset).url()}
    //         alt={`${props.node.alt ? props.node.alt : "illustration"}`}
    //         className="w-full rounded-sm md:w-1/2"
    //       />
    //       {props.node.caption && (
    //         <figcaption className="pt-4 text-sm italic text-gray-600">
    //           - {props.node.caption} -
    //         </figcaption>
    //       )}
    //     </figure>
    //   )
    // },
  },
  marks: {
    link: ({ children, mark }) => <Link href={mark.href}>{children}</Link>,
    strong: ({ children }) => <span className="font-bold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
    code: ({ children }) => (
      <span className="px-2 py-1 text-red-500 bg-gray-100 rounded">
        {children}
      </span>
    ),
  },
  listItem: props => {
    switch (props.node.listItem) {
      case "bullet": {
        return <li>{props.children}</li>
      }
      case "number": {
        return <li>{props.children}</li>
      }
      default: {
        return <li>{props.children}</li>
      }
    }
  },
}
