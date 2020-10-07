import React from "react"
import Link from "../components/global/link"

/**
 * Used to transcribe and style Sanity's Portable Text format
 */
export const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h2":
          return (
            <h2 className="mt-20 mb-10 text-3xl text-gray-700">
              {props.children}
            </h2>
          )
        case "h3":
          return (
            <h3 className="my-10 text-2xl text-gray-700">{props.children}</h3>
          )
        case "h4":
          return (
            <h4 className="mt-8 mb-6 text-xl text-gray-700">
              {props.children}
            </h4>
          )
        default:
          return (
            <p className="mb-6 leading-relaxed tracking-wide">
              {props.children}
            </p>
          )
      }
    },
  },
  marks: {
    link: ({ children, mark }) => <Link href={mark.href}>{children}</Link>,
    strong: ({ children }) => <span className="font-bold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
  },
  listItem: props => {
    switch (props.node.listItem) {
      case "bullet": {
        return (
          <li className="text-lg list-disc list-inside">{props.children}</li>
        )
      }
      case "number": {
        return (
          <li className="text-lg list-decimal list-inside">{props.children}</li>
        )
      }
      default: {
        return (
          <li className="text-lg list-disc list-inside">{props.children}</li>
        )
      }
    }
  },
}
