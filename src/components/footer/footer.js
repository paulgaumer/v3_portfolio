import React from "react"
import { motion } from "framer-motion"
import Fade from "react-reveal/Fade"
import github from "../../images/github.svg"
import twitter from "../../images/twitter.svg"
import linkedin from "../../images/linkedin.svg"

const Footer = () => {
  return (
    <div data-name="footer-wrapper" className="flex-shrink-0 bg-gray-800 mt-52">
      <footer className="px-10 pt-16 pb-5 mx-auto text-white max-w-7xl">
        <div className="mb-10 text-center md:mb-16">
          <h4 className="antialiased font-header text-yellowPrimary">
            Next step?
          </h4>
          <motion.h3
            data-testid="footer-title"
            className="mt-2 text-3xl uppercase font-header"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            Let's work together!
          </motion.h3>
        </div>
        <div className="flex flex-col items-center mb-20 space-y-8 md:items-start md:space-y-0 md:space-x-16 md:flex-row">
          <div className="text-lg md:w-1/2">
            <Fade left>
              <p className="mb-6" data-testid="footer-description">
                If you'd like to talk about a project or need advice about
                product and ideation , simply drop me a message. I'm currently
                available for development projects, entrepreneurial gigs or
                speaking events.
              </p>
              <div>
                <p className="mb-4">You can also find me on:</p>
                <ul
                  className="flex space-x-6"
                  data-testid="footer-social-links"
                >
                  <li>
                    <a
                      href="https://github.com/paulgaumer"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Github profile"
                    >
                      <img
                        src={github}
                        alt="github icon"
                        className="w-8 h-10"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/paulgaumer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Linkedin profile"
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
                      aria-label="Open Twitter profile"
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
            </Fade>
          </div>
          <div className="w-full md:w-1/2">
            <Fade right>
              <form
                className="w-full"
                data-testid="footer-form"
                method="post"
                id="contact-form"
                name="contact-footer"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact-footer" />
                <div className="flex flex-col space-y-6">
                  <input
                    required
                    aria-label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400"
                  />
                  <textarea
                    required
                    aria-label="Message"
                    name="message"
                    placeholder="How can I help you?"
                    className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400"
                  />
                  <div className="rounded-md shadow">
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-5 py-3 space-x-1 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out border border-transparent rounded-md bg-yellowPrimary hover:bg-yellowSecondary focus:outline-none focus:bg-indigo-400"
                    >
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
                </div>
              </form>
            </Fade>
          </div>
        </div>
        <p className="text-center">© {new Date().getFullYear()}, Paul Gaumer</p>
      </footer>
    </div>
  )
}

export default Footer
