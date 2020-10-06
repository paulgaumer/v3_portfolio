import React from "react"
// import PropTypes from "prop-types"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SectionContainer from "../components/layout/sectionContainer"
import AboutSection from "../components/aboutPage/aboutSection"
import SectionIntro from "../components/global/sectionIntro"
import Link from "../components/global/link"
import ArrowRight from "../components/icons/arrowRight"
import Pen from "../components/icons/pen"
import Mic from "../components/icons/mic"
import Academy from "../components/icons/academy"
import Chat from "../components/icons/chat"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <SectionContainer>
        <div></div>
        <h1
          data-testid="page-title"
          className="mt-8 mb-6 text-5xl font-semibold leading-tight text-gray-800 md:mb-10 xl:mb-16 md:text-6xl lg:text-7xl lg:font-medium xl:text-8xl md:mt-16 xl:mt-24"
        >
          About
        </h1>
        {/* DESCRIPTION */}
        <div data-testid="hero-bio">
          <SectionIntro>
            <p>
              My name is Paul Gaumer and I am a French developer and startup
              consultant currently living in Angers (France).
            </p>

            <p>
              After spending 10 years in Japan, my family and I came back to
              France during Summer 2019 to help my son discover another side of
              his biculturality. I am now developing web services for a wide
              range of businesses and supporting startups in their growth.
            </p>

            <p>
              I am now developing web services for a wide range of businesses
              and supporting startups in their growth.
            </p>

            <p>
              I am open to local and remote projects.{" "}
              <Link href="/about/#contact" gatsbyLink={true}>
                Let's talk!
              </Link>
            </p>
          </SectionIntro>
        </div>

        <AboutSection>
          <h2 className="">Startups in Japan</h2>
          <p>
            I spent the past 10 years living in Japan where I've been blessed to
            experience many roles, starting with a first career in sales and
            marketing. To help foreign companies succeed in Japan was my mission
            through talent acquisition, product development tailored to the
            japanese market and the launch of IoT products (
            <Link href="http://ja.babolatplay.com/">Babolat Play</Link>
            ).
          </p>
          <p>
            Discovering a passion for code and design, I jumped into the recent
            awakening of the Tokyo startup scene by creating Japan’s very first
            coding bootcamp:{" "}
            <Link href="https://www.lewagon.com/tokyo">Le Wagon</Link>
          </p>
          <p>Our missions were to:</p>
          <ul>
            <li className="flex items-center space-x-2">
              <span>
                <ArrowRight />
              </span>
              <span>Bring technical skills to creatives and entrepreneurs</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <ArrowRight />
              </span>
              <span>
                Provide a pool a talents to the growing startup community
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <ArrowRight />
              </span>
              <span>
                Support the development of innovative solutions post-bootcamp
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <ArrowRight />
              </span>
              <span>
                Educate the Japanese market to alternative education and
                lifestyle models
              </span>
            </li>
          </ul>

          <p>
            After 3 years of activity and opening two locations (Tokyo & Kyoto),
            Le Wagon Japan trained over 150 students from 30+ nationalities, now
            woking as founders, developers, UX designers, product managers or
            digital marketers.
          </p>

          <h3>Fun facts</h3>
          <ul className="no-bullet">
            <li className="flex items-start space-x-2">
              <span>
                <Pen customClasses="mt-2" />
              </span>
              <span>
                Previous students now work at Facebook, Apple, Amazon as well as
                boutique agencies and blue chips.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span>
                <Pen customClasses="mt-2" />
              </span>
              <div>
                Some of them founded companies, raising significant amounts of
                capital (<Link href="https://www.preface.ai/">Preface</Link>) or
                disrupting various markets (
                <Link href="https://www.aoiship.com/">AoiShip</Link>)
              </div>
            </li>
          </ul>
        </AboutSection>
        <AboutSection>
          <h2 className="text-2xl font-semibold text-gray-900 capitalize md:text-2xl lg:text-2-5xl">
            Talks
          </h2>
          <p>
            I have been fortunate to run numerous workshops and to be invited to
            events and panels as a speaker, including:
          </p>
          <div className="">
            <div>
              <h3>Guest Speaker</h3>
              <ul className="">
                <li className="flex items-center space-x-2">
                  <span>
                    <Mic />
                  </span>
                  <span>Tokyo Fintech - Careers in Finch & Recruitment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Mic />
                  </span>
                  <span>
                    Venture Cafe - How to start a business in Japan, from visa
                    to strategy
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Mic />
                  </span>
                  <span>
                    Sekai Creator Entrepreneurship Contest - Judge panel
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Mic />
                  </span>
                  <span>BeyondLab - How to get started in Japan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Mic />
                  </span>
                  <span>Tokyo Tech Startups - Entrepreneurship 101</span>
                </li>
              </ul>
            </div>

            <div>
              <h3>Workshops</h3>
              <ul className="">
                <li className="flex items-center space-x-2">
                  <span>
                    <Academy />
                  </span>
                  <span>
                    Ideathon: Come with an idea, leave with a prototype
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Academy />
                  </span>
                  <span>How to build a landing page in 2 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Academy />
                  </span>
                  <span>Introduction to UX design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Academy />
                  </span>
                  <span>Build your first React application</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Academy />
                  </span>
                  <span>APIs for beginners</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Academy />
                  </span>
                  <span>Technical workflow in Startups</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>
                    <Academy />
                  </span>
                  <span>Introduction to Ruby and Javascript</span>
                </li>
              </ul>
            </div>
          </div>
        </AboutSection>
        <AboutSection>
          <h2 className="text-2xl font-semibold text-gray-900 capitalize md:text-2xl lg:text-2-5xl">
            Press & Interviews
          </h2>
          <ul className="grid grid-cols-2">
            <li className="flex items-center space-x-2">
              <span>
                <Chat />
              </span>
              <Link href="https://r.nikkei.com/article/DGXMZO33502780X20C18A7FFR000?s=3">
                <span> Nikkei</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <Chat />
              </span>
              <Link href="https://jp.techcrunch.com/2017/01/27/le-wagon-tokyo-launch/">
                <span> TechCrunch</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <Chat />
              </span>
              <Link href="https://thebridge.jp/2017/12/announcing-le-wagon-tokyo-2018">
                <span> The Bridge</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <Chat />
              </span>
              <Link href="https://www.reuters.com/article/us-japan-coding-bootcamp/silicon-valley-style-coding-boot-camp-seeks-to-reset-japan-inc-idUSKBN1JF32A">
                <span> Reuters</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <Chat />
              </span>
              <Link href="http://www.workers-u.com/le-wagon-tokyo/">
                <span> Workers University</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <Chat />
              </span>
              <Link href="https://vivreatokyo.com/paul-gaumer-podcasts-japan-life-stories.html">
                <span> Vivre à Tokyo</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>
                <Chat />
              </span>
              <Link href="http://radio-g.fr/internet/index.php?numarticle=1416">
                <span> Radio Nippon</span>
              </Link>
            </li>
          </ul>
        </AboutSection>
      </SectionContainer>
    </Layout>
  )
}

export default About
