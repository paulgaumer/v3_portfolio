import "typeface-poppins"
import "./src/components/layout/layout.css"
// import "tailwindcss/dist/base.min.css"

// Allows us to keep the state given by React Context on page change. Element represents our site's root
import GlobalContextProvider from "./src/context/contextProvider"
const React = require("react")

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
