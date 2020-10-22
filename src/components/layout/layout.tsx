import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import "./layout.css"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-base antialiased text-gray-700">
      <div className="flex flex-col flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
