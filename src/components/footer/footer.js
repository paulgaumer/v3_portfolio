import React from "react"
import github from "../../images/github.svg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"

const Footer = () => {
  return (
    <div data-name="footer-wrapper" className="mt-20 bg-bluePrimary">
      <footer className="px-4 pt-16 pb-5 mx-auto text-white max-w-7xl">
        <div className="mb-16 text-center">
          <h4 className="antialiased text-yellowPrimary">Next step?</h4>
          <h3 data-testid="footer-title" className="mt-2 text-3xl uppercase">
            Let's work together!
          </h3>
        </div>
        <div className="flex mb-20 space-x-16">
          <div className="w-1/2 md:text-lg">
            <p className="mb-6" data-testid="footer-description">
              If you'd like to talk about a project or need advice about product
              and ideation , simply drop me a message. I'm currently available
              for development projects, entrepreneurial gigs or speaking events.
            </p>
            <div>
              <p className="mb-4">You can also find me on:</p>
              <ul className="flex space-x-6" data-testid="footer-social-links">
                <li>
                  <a
                    href="https://github.com/paulgaumer"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Open Github profile"
                  >
                    <img src={github} alt="github icon" className="w-8 h-10" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/paulgaumer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Open Linkedin profile"
                  >
                    <img
                      src={linkedin}
                      alt="linkedin icon"
                      className="w-8 h-10"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/PaulGaumer"
                    target="_blank"
                    rel="noopener noreferrer"
                    ariaLabel="Open Twitter profile"
                  >
                    <img
                      src={twitter}
                      alt="twitter icon"
                      className="w-8 h-10"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <form
              className="flex flex-col w-full space-y-6"
              data-testid="footer-form"
            >
              <input
                aria-label="Email address"
                required
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400"
              />
              <textarea
                aria-label="Email address"
                required
                placeholder="How can I help you?"
                className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400"
              />
              <div className="rounded-md shadow">
                <button className="flex items-center justify-center w-full px-5 py-3 space-x-1 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out border border-transparent rounded-md bg-yellowPrimary hover:bg-yellowSecondary focus:outline-none focus:bg-indigo-400">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>Send A Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="text-center">© {new Date().getFullYear()}, Paul Gaumer</p>
      </footer>
    </div>
  )
}

export default Footer
