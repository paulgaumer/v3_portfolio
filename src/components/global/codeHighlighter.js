import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

const Syntax = styled(SyntaxHighlighter)`
  code::before {
    content: none !important;
  }
  code::after {
    content: none !important;
  }
`

const CodeHighlighter = ({ content }) => {
  if (!content || !content.code) {
    return null
  }
  const { language, code } = content

  return (
    <Syntax
      language={language || "text"}
      showLineNumbers={true}
      wrapLongLines={true}
      style={dracula}
    >
      {code}
    </Syntax>
  )
}

export default CodeHighlighter

CodeHighlighter.propTypes = {
  content: PropTypes.object,
}
