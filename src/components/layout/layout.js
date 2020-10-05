import React from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Footer from "../footer/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-base antialiased">
      <div className="flex flex-col w-full min-h-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
