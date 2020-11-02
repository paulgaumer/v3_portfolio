import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

// TYPES
interface CodeHighlighterProps {
  content: {
    language: string,
    code: any
  }
}

const CodeHighlighter = ({ content }: CodeHighlighterProps) => {
  if (!content || !content.code) {
    return null
  }
  const { language, code } = content

  return (
    <SyntaxHighlighter
      language={language || "text"}
      showLineNumbers={true}
      style={dracula}
      customStyle={{ fontSize: "16px" }}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeHighlighter
