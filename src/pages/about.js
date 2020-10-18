import React from "react"
import { motion } from "framer-motion"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SectionContainer from "../components/layout/sectionContainer"
import AboutSection from "../components/aboutPage/aboutSection"
import SectionIntro from "../components/global/sectionIntro"
import Link from "../components/global/link"
import PageTitle from "../components/global/pageTitle"
import ArrowRight from "../components/icons/arrowRight"
import Pen from "../components/icons/pen"
import Mic from "../components/icons/mic"
import Academy from "../components/icons/academy"
import Chat from "../components/icons/chat"
import { Helmet } from "react-helmet"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <SectionContainer>
        <PageTitle>About</PageTitle>
        <motion.div
          data-testid="hero-bio"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        >
          <SectionIntro>
            <p>
              My name is Paul Gaumer and I am a French developer currently
              living in{" "}
              <Link href="https://www.tourisme.destination-angers.com/en">
                Angers
              </Link>{" "}
              (France).
            </p>

            <p>
              After spending 10 years in Japan, my family and I came back to
              France during summer 2019 to help my son discover another side of
              his biculturality.
            </p>

            <p>
              I am now developing web services for a wide range of businesses
              and supporting startups in their growth.
            </p>

            <p>
              I am open to local and remote projects.{" "}
              <Link href="/about/#contact-form" gatsbyLink={true}>
                Let's talk!
              </Link>
            </p>
          </SectionIntro>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        >
          <AboutSection customClasses="prose md:prose-lg">
            <h2 data-testid="about-section-title" className="">
              Startups in Japan
            </h2>
            <p>
              I moved to Japan in 2010 where I started my career in sales and
              marketing. My mission was to help foreign companies succeed in
              Japan through talent acquisition, product development focused on
              the Japanese market and the launch of IoT products (
              <Link href="http://ja.babolatplay.com/">Babolat Play</Link>
              ).
            </p>
            <h3>Learning how to code</h3>
            <p>
              After failing the launch of my first startup and interacting with
              an increasing number of developers, I decided to learn how to code
              by attending Le Wagon Coding Bootcamp in 2016 ( ->{" "}
              <Link href="https://medium.com/@Paul_Gaumer/how-i-challenged-myself-by-learning-how-to-code-2497e8096aac#.dqvy49888">
                full story here
              </Link>
              ).
            </p>
            <p>
              As no similar learning experience existed in Japan at the time, I
              jumped in 2016 into the recent awakening of the Tokyo startup
              scene by co-founding and leading Japan’s very first English coding
              bootcamp:{" "}
              <Link href="https://www.lewagon.com/tokyo">Le Wagon Japan</Link>
            </p>
            <p>Our missions were to:</p>
            <div>
              <ul className="">
                <li className="flex items-start space-x-2">
                  <span>
                    <span>
                      <ArrowRight customClasses="mt-2" />
                    </span>
                  </span>
                  <span>Teach programming to creatives and entrepreneurs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>
                    <span>
                      <ArrowRight customClasses="mt-2" />
                    </span>
                  </span>
                  <span>
                    Provide a pool of talents to the growing startup community
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>
                    <span>
                      <ArrowRight customClasses="mt-2" />
                    </span>
                  </span>
                  <span>
                    Support the development of innovative solutions
                    post-bootcamp
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>
                    <span>
                      <ArrowRight customClasses="mt-2" />
                    </span>
                  </span>
                  <span>
                    Educate the Japanese market to alternative education and
                    lifestyle models
                  </span>
                </li>
              </ul>
            </div>

            <p>
              After 3 years of activity and opening two locations (Tokyo &
              Kyoto), Le Wagon Japan had trained over 150 students from 30+
              nationalities, now working as software developers, UX designers,
              product managers or startup founders.
            </p>

            <h3>Lessons</h3>
            <div>
              <ul className="">
                <li className="flex items-start space-x-2">
                  <span>
                    <Pen customClasses="mt-2" />
                  </span>
                  <span>
                    <i>"You know nothing, Jon Snow"</i>. I have been fortunate
                    to meet amazing mentors and always seek an opportunity to
                    dive into a new topic. There is no end to the learning
                    process.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>
                    <Pen customClasses="mt-2" />
                  </span>

                  <span>
                    Programming requires a heavy dose of human skills, even more
                    in a remote context. Communication, open mindedness and
                    empathy go a long way in seeing a team succeed.
                  </span>
                </li>
              </ul>
            </div>
          </AboutSection>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        >
          <AboutSection customClasses="prose md:prose-lg">
            <h2 data-testid="about-section-title" className="">
              Talks
            </h2>
            <p>
              Founded{" "}
              <Link href="https://www.meetup.com/Le-Wagon-Tokyo-Coding-Station/">
                Le Wagon Tokyo
              </Link>{" "}
              and{" "}
              <Link href="https://www.meetup.com/fr-FR/Code-In-Angers/">
                Code In Angers
              </Link>{" "}
              Meetup groups. I love sharing topics I'm passionate about and
              regularly run workshops or join events. Past ones include:
            </p>
            <div className="">
              <div>
                <h3>Guest Speaker</h3>
                <ul className="">
                  <li className="flex items-center space-x-2">
                    <span>
                      <Mic />
                    </span>
                    <span>
                      Tokyo Fintech - Careers in Fintech & Recruitment
                    </span>
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
                    <span>JAMStack and Gatsby.js</span>
                  </li>
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        >
          <AboutSection customClasses="prose md:prose-lg">
            <h2 data-testid="about-section-title" className="">
              Podcasting
            </h2>
            <p>
              I launched the{" "}
              <Link href="https://japanlifestories.com/">
                Japan Life Stories
              </Link>{" "}
              podcast in 2019 to share stories of foreigners who built a life
              and career in Japan. The initial motivation was to share the
              insights I would have liked to get during my first year in the
              country: how to find a job, grow your career, build a network,
              start a business... It turned out to be a fantastic way to stay
              connected to the local ecosystem and exchange with amazing people.
            </p>
            <div id="buzzsprout-player-3536647"></div>
            <Helmet>
              <script
                src="https://www.buzzsprout.com/740042/3536647-09-connecting-cultures-through-business-innovation-with-fariza-abidova.js?container_id=buzzsprout-player-3536647&player=small"
                type="text/javascript"
                charset="utf-8"
              ></script>
            </Helmet>
          </AboutSection>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
        >
          <AboutSection customClasses="prose md:prose-lg">
            <h2
              data-testid="about-section-title"
              className="text-2xl font-semibold text-gray-900 capitalize md:text-2xl lg:text-2-5xl"
            >
              Press & Interviews
            </h2>
            <div>
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
            </div>
          </AboutSection>
        </motion.div>
      </SectionContainer>
    </Layout>
  )
}

export default About
