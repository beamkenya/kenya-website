import NavigationBar from "../components/NavigationBar";
import MainHero from "../assets/images/new/hreo.png";
import AboutImage from "../assets/images/new/about.png";
import Gallary2 from "../assets/images/people5.png";
import Hero2 from "../assets/images/people1.png";
import Hero3 from "../assets/images/people2.png";
import Hero4 from "../assets/images/people3.png";
import Hero1 from "../assets/images/people4.png";
import UlrichPic from "../assets/images/speakers/peter-ullrich.jpeg";
import RajPic from "../assets/images/speakers/raj-rajhans.png";
import Session1 from "../assets/images/sessions/ulrich.png";
import Session2 from "../assets/images/sessions/njoki.png";
import Session3 from "../assets/images/sessions/tracey.jpeg";
import TraceyPic from "../assets/images/speakers/tracey.jpeg";
import NjokiPic from "../assets/images/speakers/njoki.jpeg";
import PodiiLogo from "../assets/images/Podii_logo.png";
import { motion, useScroll, useSpring } from "framer-motion";
import Marquee from "react-fast-marquee";

import "../App.css";
import Cards from "../components/Cards";
import CardsAlternate from "../components/CardsAlternate";
import ExpandImages from "../components/ExpandImages";
import BlogCards from "../components/BlogCards";
import { Footer } from "../components/Footer";
import Testimonials from "../components/Testimonials";
import { useState } from "react";

function Landing() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const initialText =
    "What sets us apart is our commitment to knowledge sharing and collaboration. We host a variety of engaging events to facilitate learning and networking. Join us for our monthly webinars, where industry experts share insights, best practices, and the latest developments in the Elixir ecosystem. Dive deep into discussions, problem-solving, and live coding at our Monday meetups, part of our Live View series";

  const [displayText, setDisplayText] = useState(initialText);
  const [isFullTextDisplayed, setIsFullTextDisplayed] = useState(false);

  const toggleText = () => {
    setIsFullTextDisplayed(!isFullTextDisplayed);
    setDisplayText(isFullTextDisplayed ? initialText : "");
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 h-4 bg-gradient-to-r from-[#2a242e] to-purple-600 bg-black origin-[0%] z-50"
        style={{ scaleX }}
      />

      <div className="text-gray-100" style={{ fontFamily: "Roboto" }}>
        <div className="">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={MainHero}
            alt=""
            className="object-cover w-full  h-full absolute -z-10"
          />
        </div>
        <NavigationBar />
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:my-10">
          {/* <h1 className=" uppercase font-semibold py-4 text-[#79628C] lg:mt-10 ">
            Elixir KENYA COMMUNITY
          </h1> */}
          <p className="text-4xl text-white font-extrabold lg:text-[68px] lg:leading-[74px] lg:w-2/3 ">
            Join our vibrant community to elevate your Elixir journey
          </p>
          <p className="text-[#D9D9D9] lg:w-2/3 mt-8">
            Embark on a journey to amplify Elixir's impact in Kenya through our
            thriving community. Join us to elevate your skills and experiences,
            as we unite passionate Elixir enthusiasts, foster innovation, and
            drive the advancement of technology in the heart of Kenya.
          </p>
          <div className="my-8">
            <div className="flex gap-10">
              <a
                href="https://t.me/elixirkenya"
                className="lg:text-xl py-3 px-6 bg-[#79628C] text-white hover:bg-[#9d68c9] font-semibold"
              >
                {" "}
                Let's Rock 🔥
              </a>
              <div className="flex justify-center lg:justify-normal items-center mt-4 space-x-4 sm:mt-0">
                <a
                  href="https://www.youtube.com/@elixirkenya"
                  className="text-gray-300 hover:text-gray-500"
                >
                  <i className="fa fa-youtube text-2xl"></i>
                </a>
                <a
                  href="https://twitter.com/ElixirKenya"
                  className="text-gray-300 hover:text-gray-500"
                >
                  <i className="fa fa-twitter text-2xl"></i>
                </a>
                <a
                  href="https://t.me/elixirkenya"
                  className="text-gray-300 hover:text-gray-500"
                >
                  <i className="fa fa-telegram text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/showcase/elixirkenya/"
                  className="text-gray-300 hover:text-gray-500"
                >
                  <i className="fa fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#171717]">
          <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div>
                <img src={AboutImage} alt="" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-[36px] font-extrabold text-white pb-8">
                  About Us
                </h1>
                <p className="mb-2 text-[#D9D9D9]">
                  Welcome to Elixir Kenya, your hub for all things Elixir
                  programming language in the heart of Africa. At Elixir Kenya,
                  we're passionate about fostering a vibrant community of Elixir
                  enthusiasts, developers, and learners. Our mission is to
                  promote the adoption and understanding of Elixir among tech
                  enthusiasts across Kenya and beyond.
                </p>
                <p className="mb-2 hidden lg:block text-[#D9D9D9]">
                  What sets us apart is our commitment to knowledge sharing and
                  collaboration. We host a variety of engaging events to
                  facilitate learning and networking. Join us for our monthly
                  webinars, where industry experts share insights, best
                  practices, and the latest developments in the Elixir
                  ecosystem. Dive deep into discussions, problem-solving, and
                  live coding at our Monday meetups, part of our Live View
                  series
                </p>
                <p className="block lg:hidden">{displayText}</p>
                <button
                  onClick={toggleText}
                  className="font-bold block lg:hidden"
                >
                  {isFullTextDisplayed ? "Read More" : "Read Less"}
                </button>
              </div>
            </div>
          </section>

          <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
            <h1 className="text-2xl lg:text-[36px] font-extrabold text-[#79628C] pb-8 text-center lg:mb-8">
              Our Webinars
            </h1>
            <Cards
              images={Hero2}
              heading={"Monthly Webinars"}
              description={
                "Our webinars feature a rich tapestry of speakers from various backgrounds, each sharing their invaluable insights and expertise. Catering to a diverse audience, ranging from novices to seasoned developers, these talks are thoughtfully designed to resonate with attendees of all levels. "
              }
            />
            <div className="py-8"></div>
            <CardsAlternate
              images={Hero3}
              heading={"Monday Meetups"}
              description={
                "Get ready to put your coding hats on because the Monday meetups are back and better than ever! Starting from April 17th, we'll be diving deep into the world of Phoenix liveview and building a real-life chat app project together!"
              }
            />
          </section>

          <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-24 items-center">
              <div>
                <p className="text-5xl lg:text-8xl font-bold leading-none text-center lg:text-left">
                  Explore,<br></br>
                  <span className="text-purple-800">Create & </span> <br></br>
                  Connect
                </p>
                <p className="py-4 lg:py-8 text-xl text-center lg:text-left">
                  Dive deep into the latest tools and techniques with
                  interactive, practical
                  <span className="uppercase font-semibold text-orange-500">
                    {" "}
                    workshops
                  </span>
                  , connecting with fellow
                  <span className="uppercase font-semibold text-yellow-500">
                    {" "}
                    elixir developers
                  </span>
                  , potential collaborators, and
                  <span className="uppercase font-semibold text-green-500">
                    {" "}
                    mentors
                  </span>{" "}
                  who can shape your career.
                </p>
                <div className="mt-4 flex justify-center lg:block">
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 8px rgba(255,255,255)",
                    }}
                    href="https://t.me/elixirkenya"
                    className="lg:text-2xl py-3 px-6 border text-white bg-gradient-to-r from-[#492e5f] to-[#131313]"
                  >
                    Our Community 😃
                  </motion.a>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src="https://images.unsplash.com/photo-1574786199573-a22c93a95aaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2077&q=80"
                  alt=""
                  className="rounded-xl border-gray-100 border-2 hidden lg:block"
                />
              </div>
            </div>
          </section>

          <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-32">
            <div className="grid lg:grid-cols-6 lg:gap-4 grid-cols-2">
              <ExpandImages image={Hero3} />
              <ExpandImages image={Hero2} />
              <ExpandImages image={Hero4} />
              <ExpandImages image={Hero3} />
              <ExpandImages image={Hero1} />
              <ExpandImages image={Gallary2} />
            </div>
          </section>

          <section>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-32">
              <div>
                <div>
                  <p className="text-5xl lg:text-8xl font-bold">
                    What our <span className="text-purple-800"> speakers </span>{" "}
                    have to say,
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 mt-16 gap-10">
                  <Testimonials
                    image={UlrichPic}
                    description={
                      "“Going to Elixir Kenya is always the most wonderful experience. This is where Africa's smartest and kindest people come together. It is the most welcoming community I've ever encountered.”"
                    }
                    name={"Peter Ulrich"}
                  />
                  <Testimonials
                    image={TraceyPic}
                    description={
                      "“I loved that I could schedule time with the organizer a day before the event to plan and prepare for the event together. This helped me to calm down and know how the itinerary would be.”"
                    }
                    name={"Tracey Onim"}
                  />
                  <Testimonials
                    image={NjokiPic}
                    description={
                      "“I had a great experience presenting the topic - Building Your MVP with Elixir -  to the Elixir Kenya community. The engagement and enthusiasm from the audience of Elixir enthusiasts were truly inspiring.”"
                    }
                    name={"Njoki Kiarie"}
                  />
                  <Testimonials
                    image={RajPic}
                    description={
                      "“The thoughtful questions and lively discussions that followed my presentation were a testament to the vibrant and passionate community you have cultivated”"
                    }
                    name={"Raj Rajhans"}
                  />
                </div>
                <div className="pt-16 flex justify-center">
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 8px rgba(255,255,255)",
                    }}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfYdGiYQ5qHg4bIazOB0bSouFKvpxN5J3k6N7o1RpppmyiafA/viewform"
                    className="lg:text-2xl py-3 px-6 border text-purple-800 bg-gray-100 font-semibold"
                  >
                    Become Speaker 🎙️
                  </motion.a>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-32">
            <div className="bg-[#131313] p-6 lg:p-12 rounded-xl shadow-lg">
              <p className="text-center pb-8 uppercase">Upcoming Event</p>
              <div className="text-5xl lg:text-[5.2rem] leading-none font-bold lg:font-black text-center">
                🤯Get ready to put your coding hats at{" "}
                <span className="text-purple-500">
                  ElixirConf Africa 2024 !
                </span>
              </div>
              <div className="flex justify-center mt-12">
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgba(255,255,255)",
                  }}
                  href="https://elixirconf.africa/"
                  className="lg:text-2xl py-3 px-6 border text-white border-gradient-to-r to-[#00D68E] from-[#6941C6] hover:bg-gray-900"
                >
                  {" "}
                  Get Tickets 🎫
                </motion.a>
              </div>
            </div>

            <div className="text-center bg-purple-800 py-4 rounded-b-xl">
              <Marquee className="overflow-hidden">
                <p className="text-4xl">
                  {" - "}
                  ElixirConf Africa 2024 - ElixirConf Africa 2024 - ElixirConf
                  Africa 2024
                </p>
              </Marquee>
            </div>
          </section>

          <section className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-16">
            <div>
              <div className="lg:flex justify-between items-end">
                <h3 className="text-5xl lg:text-8xl font-bold mb-4 lg:mb-0">
                  Watch our <br></br>Webinars
                </h3>
                <a
                  href="https://www.youtube.com/watch?v=EQ-ZRP5FKZ8&list=PLed5yhS5IfIBXD02laL3EidyebWWECxsi"
                  className="underline text-lg text-purple-500 hover:text-white"
                >
                  Explore All Videos <span className="text-2xl">{">"}</span>
                </a>
              </div>
              <div className="grid lg:grid-cols-3 mt-8 gap-10">
                <BlogCards
                  images={Session1}
                  heading={"Monolith vs Microservices."}
                  date={"24 February, 2023"}
                  link="https://www.youtube.com/watch?v=ptSttJit91U"
                />
                <BlogCards
                  images={Session2}
                  heading={"From Idea to MVP with Elixir."}
                  date={"31 March, 2023"}
                  link="https://www.youtube.com/watch?v=SkeQ6IEJZdo"
                />
                <BlogCards
                  images={Session3}
                  heading={"Handling external requests with elixir."}
                  date={"25 August, 2022"}
                  link="https://www.youtube.com/watch?v=EQ-ZRP5FKZ8"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
              <div>
                <h3 className="text-5xl lg:text-8xl font-bold mb-4 lg:mb-0">
                  Supporters &<br></br>Enablers
                </h3>
                <img
                  src={PodiiLogo}
                  alt=""
                  className="lg:mt-16 mt-8 lg:w-1/5"
                />
              </div>
            </div>
          </section>
          <section>
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}

export default Landing;
