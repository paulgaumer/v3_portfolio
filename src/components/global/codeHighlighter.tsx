import React from "react"
import styled from "styled-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

// STYLES
const Syntax = styled(SyntaxHighlighter)`
  code::before {
    content: none !important;
  }
  code::after {
    content: none !important;
  }
`

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
    <Syntax
      language={language || "text"}
      showLineNumbers={true}
      wrapLines={true}
      wrapLongLines={true}
      style={dracula}
      customStyle={{ fontSize: "14px" }}
    >
      {code}
    </Syntax>
  )
}

export default CodeHighlighter
