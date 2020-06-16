import Header from "../components/Header.js";
import Intro from "../components/Intro.js";
import Socials from "../components/Socials";
import About from "../components/About";
import Box from "../components/Box";
import image from "../public/me.png";
import polygon from "../assets/polygon.svg";
import Contact from "../components/Contact";
import dynamic from "next/dynamic";
import Works from "../components/Works";
import Skills from "../components/Skills";

import { useEffect, useRef, useState } from "react";

const Home = () => {
  const boxCoverRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 750) {
      const { TimelineMax, Power1, Power2, Power3, Power4 } = require("gsap");
      const ScrollMagic = require("scrollmagic");
      const { ScrollMagicPluginGsap } = require("scrollmagic-plugin-gsap");
      ScrollMagicPluginGsap(ScrollMagic, TimelineMax);

      const boxCover = boxCoverRef.current;

      const tl = new TimelineMax();

      // setIsFixed(true);

      tl.to("#intro-cover", 0.5, { x: 0, y: "-150%", ease: Power1.easeIn });
      tl.to("#box1", 0.5, { x: 0, y: "-150%", ease: Power1.easeIn }, "-=0.4");
      tl.to("#box2", 0.2, { x: 0, y: "-150%", ease: Power1.easeIn }, "-=0.2");
      tl.to("#box3", 0.2, { x: 0, y: "-150%", ease: Power1.easeIn }, "-=0.2");

      tl.eventCallback("onComplete", function () {});

      const controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        triggerElement: "#intro-group",
        triggerHook: "onLeave",
        duration: "100%",
      })
        .setPin("#intro-group")
        .setTween(tl)
        .addTo(controller);
    }
  }, []);

  let homeRef = useRef(null);
  let aboutRef = useRef(null);
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const {
      TimelineMax,
      TweenMax,
      Power1,
      Power2,
      Power3,
      Power4,
      Sine,
    } = require("gsap");
    TweenMax.to(homeRef, 0, {
      css: {
        visibility: "visible",
        height: "100vh",
        overflow: "hidden",
      },
    });
    TweenMax.to(aboutRef, 0, {
      css: { visibility: "hidden" },
    });

    const tl = new TimelineMax();

    tl.from(
      ".my-img",
      0.3,
      {
        opacity: 0,
        ease: Power3.easeIn,
      },
      1
    ).from(".intro-text1", 0.5, { x: -20, opacity: 0 }, "intro");

    tl.staggerFrom(
      [".intro-text2", ".intro-text3"],
      1,
      {
        y: 150,
        opacity: 0,
        ease: Power3.easeInOut,
        delay: 0.6,
      },
      0.1,
      "intro-=0.3"
    );

    tl.from(".button-group", 0.5, { opacity: 0 }, "buttons")
      .from(
        ".socials",
        0.5,
        {
          opacity: 0,
          delay: 0.3,
        },
        "buttons-=0.1"
      )
      .from(
        ".h-container",
        0.5,
        {
          opacity: 0,
          delay: 0.3,
        },
        "buttons-=0.1"
      );

    tl.staggerFrom(
      ["#box1", "#box2", "#box3"],
      1,
      {
        x: "-100%",
        opacity: 0,
        ease: Power3.easeInOut,
        delay: 0.6,
      },
      0.5,
      "intro-=1"
    );

    tl.eventCallback("onComplete", function () {
      TweenMax.to(homeRef, 0, {
        css: { height: "100%", overflow: "scroll" },
      });
      TweenMax.to(aboutRef, 0, {
        css: { visibility: "visible", position: "relative" },
      });
    });
  }, []);
  return (
    <div id="index" ref={(el) => (homeRef = el)}>
      <div className="image-container">
        <img src={image} alt="Me" className="my-img" />
        {/* <img src={polygon} alt="polygon" className="polygon top" />
        <img src={polygon} alt="polygon" className="polygon bottom" /> */}
      </div>

      <Header />
      <section className="intro-group" id="intro-group">
        <div className="intro-cover" id="intro-cover">
          <Intro />
        </div>
        <Box bg="#221149" id="box1" className="box" />
        <Box bg="#1C0E3C" id="box2" className="box" />
        <Box bg="#190D35" id="box3" className="box" />
        <div className="about-wrapper" ref={(el) => (aboutRef = el)}>
          <About />
        </div>
      </section>
      <Works />
      <Contact />

      <style jsx>
        {`
          #index {
            visibility: hidden;
          }
          .intro-group {
            min-height: 100vh;
            overflow: hidden;
          }
          .intro-cover {
            background-color: #000;
            position: absolute;
            z-index: 6;
            height: calc(100vh - 200px);
            top: 0;
            width: 100%;
          }
          @media (max-width: 750px) {
            .intro-cover {
              position: relative;
              min-height: 90vh;
              height: auto;
              margin-top: 90px;
            }
          }
          @media (max-width: 459px) {
            .intro-cover {
              // background: linear-gradient(
              //     rgba(0, 0, 0, 0.5) 10%,
              //     rgba(0, 0, 0, 1) 60%
              //   ),
              //   url("me1.png");
              width: 100%;
              background-repeat: no-repeat;
              background-size: 80%;
              background-position: 190% 0px;
              background-size: contain;
              background-position: -250% -30px;
            }
          }
          .about-wrapper {
            position: relative;
            top: 20;
            width: 100%;
            height: 100%;
            padding-top: 20px;
            visibility: hidden;
          }
          @media (max-width: 750px) {
            .about-wrapper {
              position: relative !important;
            }
          }
          .box {
            position: absolute;
            height: 100vh;
          }

          .image-container {
            position: absolute;
            width: 40%;
            height: 90%;
            right: 0;
            top: 0;
            margin-left: auto;
            overflow: hidden;
          }
          @media (max-width: 1149px) {
            .image-container {
              display: none;
            }
          }
          .my-img {
            position: absolute;
            z-index: 10;
            height: 100%;
            object-fit: cover;
            right: 0;
          }
          .polygon {
            position: absolute;
            z-index: 9;
          }
          .polygon.top {
            top: 0;
            left: -50px;
          }
          .polygon.bottom {
            bottom: 5px;
            right: 5px;
          }
        `}
      </style>
      <style jsx global>{`
        :root {
          --black: #030404;
          --blue: #241663;
          --dark-gray: rgba(53, 47, 68, 0.6);
          --purple: #7350c1;
          --off-white: #fafafa;
        }
        html {
          font-size: 62.5%;
          scroll-behavior: smooth;
        }

        @media (max-width: 750px) {
          html {
            font-size: 60%;
          }
        }

        @media (max-width: 650px) {
          html {
            font-size: 60%;
          }
        }

        @media (max-width: 750px) {
          p {
            font-size: 15px;
          }
          h2 {
            font-size: 2rem;
          }
        }

        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          font-size: 1.6rem;
          line-height: 1.6;
          background-color: var(--black);
          min-height: 100vh;
          color: #fff;
          font-family: "Nunito", sans-serif;
        }
        img {
          max-width: 100%;
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
        .container {
          max-width: 1350px;
          margin: 0 auto;
          padding: 0 2em;
        }
        .btn {
          background-color: transparent;
          border: none;
          outline: none;
          padding: 16px 30px;
          font-size: 1.8rem;
          color: #fff;
          font-family: "Montserrat", sans-serif;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-blue {
          background-color: var(--blue);
          box-shadow: 0px 4px 10px #411e8f;
          transition: box-shadow 200ms ease;
        }

        .btn-blue:hover {
          box-shadow: 0px 4px 50px #411e8f;
        }
        .btn-outline {
          border: 1px solid #fff;
          transition: background-color 200ms ease;
        }
        .btn-outline:hover {
          border: 1px solid #fff;
          background-color: #fff;
          color: var(--black);
        }
        .relative {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Home;
