import Header from "../components/Header.js";
import Intro from "../components/Intro.js";
import Socials from "../components/Socials";
import About from "../components/About";
import Box from "../components/Box";
import image from "../assets/me.png";
import polygon from "../assets/polygon.svg";
import Contact from "../components/Contact";
import Works from "../components/Works";
import { useEffect, useRef, useState } from "react";
import { TimelineMax, Power1, Power2, Power3, Power4 } from "gsap";

const Home = () => {
  const boxCoverRef = useRef(null);
  const [isFixed, setIsFixed] = useState(true);
  useEffect(() => {
    const ScrollMagic = require("scrollmagic");
    const { ScrollMagicPluginGsap } = require("scrollmagic-plugin-gsap");
    ScrollMagicPluginGsap(ScrollMagic, TimelineMax);

    const boxCover = boxCoverRef.current;

    const tl = new TimelineMax();

    setIsFixed(true);
    tl.to("#intro-cover", 0.5, { x: 0, y: "-150%", ease: Power1.easeIn });
    tl.to("#box1", 0.5, { x: 0, y: "-150%", ease: Power1.easeIn }, "-=0.4");
    tl.to("#box2", 0.2, { x: 0, y: "-150%", ease: Power1.easeIn }, "-=0.2");
    tl.to("#box3", 0.2, { x: 0, y: "-150%", ease: Power1.easeIn }, "-=0.2");
    // tl.to("#box1", 1.5, { x: 0, y: "-170%", ease: Power1.easeIn });

    tl.eventCallback("onComplete", function () {
      setTimeout(() => {
        setIsFixed(false);
      }, 500);
    });

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: "#intro-group",
      triggerHook: "onLeave",
      duration: "100%",
    })
      .setPin("#intro-group")
      .setTween(tl)
      .addTo(controller);
  }, []);
  return (
    <div id="index">
      <div className="image-container">
        <img src={image} alt="Me" className="my-img" />
        <img src={polygon} alt="polygon" className="polygon top" />
        <img src={polygon} alt="polygon" className="polygon bottom" />
      </div>

      <Header />
      <section className="intro-group" id="intro-group">
        <div className="intro-cover" id="intro-cover">
          <Intro />
        </div>
        <Box bg="#221149" id="box1" className="box" />
        <Box bg="#1C0E3C" id="box2" className="box" />
        <Box bg="#190D35" id="box3" className="box" />
        <div
          className="about-wrapper"
          style={{ position: isFixed ? "fixed" : "absolute" }}
        >
          <About />
        </div>
      </section>
      {/* <Box bg="#0F0920" /> */}

      <Works />
      <Contact />

      <style jsx>
        {`
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
          .about-wrapper {
            position: sticky;
            top: 0;
            width: 100%;
            height: 100%;
            padding-top: 20px;
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
          font-size: 18px;
          color: #fff;
          font-family: "Montserrat", sans-serif;
          cursor: pointer;
        }

        .btn-blue {
          background-color: var(--blue);
          box-shadow: 0px 4px 10px #411e8f;
          transition: box-shadow 200ms ease;
        }

        .btn-blue:hover {
          box-shadow: 0px 4px 25px #411e8f;
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
