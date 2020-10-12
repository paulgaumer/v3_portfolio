// Allows us to keep the state given by React Context on page change. Element represents our site's root
const React = require("react")
const GlobalContextProvider = require("./src/context/contextProvider").default

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
