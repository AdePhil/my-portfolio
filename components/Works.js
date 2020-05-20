import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import Title from "../components/Title";
import { TimelineMax, Power1, Power2, Power3, Power4 } from "gsap";

const projects = [
  {
    id: 1,
    projectName: "Productly",
    date: "22/02/2020",
    tech: "React/Scss",
    role: "Sole Developer",
    img: "/productly.png",
    link: "https://productly.netlify.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam ipsam exercitationem fugiat fuga sequi quasi officiadoloremque placeat laudantium.",
  },
  {
    id: 8,
    projectName: "TAMS",
    date: "22/02/2020",
    tech: "Vue/Vuex/Scss",
    role: "Frontend Lead Developer",
    img: "/tams.png",
    link: "https://app.tams.com.ng/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam ipsam exercitationem fugiat fuga sequi quasi officiadoloremque placeat laudantium.",
  },
  {
    id: 2,
    projectName: "Prospa Dashboard UI",
    date: "22/02/2020",
    tech: "React/Scss",
    role: "Sole Developer",
    img: "/prospa.png",
    link: "https://prospa.netlify.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam ipsam exercitationem fugiat fuga sequi quasi officiadoloremque placeat laudantium.",
  },
  {
    id: 3,
    projectName: "Neya",
    date: "22/02/2020",
    tech: "Nuxt/Scss",
    role: "Sole Developer",
    img: "/neya.png",
    link: "https://neya.tams.com.ng/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam ipsam exercitationem fugiat fuga sequi quasi officiadoloremque placeat laudantium.",
  },
  {
    id: 4,
    projectName: "Securetech STE",
    date: "22/02/2020",
    tech: "Nuxt/Scss",
    role: "Sole Developer",
    img: "/securetech.png",
    link: "https://www.securetech.com.ng/ste/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam ipsam exercitationem fugiat fuga sequi quasi officiadoloremque placeat laudantium.",
  },
  {
    id: 5,
    projectName: "Gify",
    date: "22/02/2020",
    tech: "React/Scss",
    role: "Sole Developer",
    img: "/gify.png",
    link: "https://gify.netlify.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam ipsam exercitationem fugiat fuga sequi quasi officiadoloremque placeat laudantium.",
  },
  {
    id: 6,
    projectName: "Transmonitor Dashboard UI",
    date: "22/02/2020",
    tech: "React/Scss",
    role: "Sole Developer",
    img: "/transmonitor.png",
    link: "https://transmonitorx.netlify.app/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam ipsam exercitationem fugiat fuga sequi quasi officiadoloremque placeat laudantium.",
  },
  {
    id: 7,
    projectName: "Agency",
    date: "22/02/2020",
    tech: "React/Scss",
    role: "Sole Developer",
    img: "/agency.png",
    link: "https://creativeagency.netlify.com/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam ipsam exercitationem fugiat fuga sequi quasi officiadoloremque placeat laudantium.",
  },
];

const Works = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ScrollMagic = require("scrollmagic");
    const { ScrollMagicPluginGsap } = require("scrollmagic-plugin-gsap");
    ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
    const controller = new ScrollMagic.Controller();
    const tl = new TimelineMax();
    tl.set("#swiper-g", { x: "0%", y: "0%" });
    tl.to("#swiper-g", 1, { x: 0, y: 0, z: -150, ease: Power1.easeIn });
    const projectlength = projects.length;
    projects.forEach((project, i) => {
      if (i !== projectlength - 1) {
        tl.to("#swiper-g", 1, {
          x: `-${(100.0 / projectlength) * (i + 1)}%`,
          y: 0,
          z: -150,
          ease: Power1.easeIn,
        });
        tl.to("#swiper-g", 1, {
          x: `-${(100.0 / projectlength) * (i + 1)}%`,
          y: 0,
          z: 0,
          ease: Power1.easeIn,
        });
        tl.to("#swiper-g", 1, {
          x: `-${(100.0 / projectlength) * (i + 1)}%`,
          y: 0,
          z: -150,
          ease: Power1.easeIn,
        });
      }
    });
    new ScrollMagic.Scene({
      triggerElement: "#swiper-wrapper",
      triggerHook: "onLeave",
      duration: "400%",
    })
      .setPin("#swiper-wrapper")
      .setTween(tl)
      .addTo(controller);
  }, []);

  return (
    <section className="works" id="works">
      <div className="container">
        <Title section={2} title="Some Things I have Built" className="title" />
      </div>
      <div className="swiper-wrapper" id="swiper-wrapper" ref={ref}>
        <div
          className="swiper-group"
          id="swiper-g"
          style={{ width: `${projects.length * 100}%` }}
        >
          {projects.map(
            ({ id, img, description, projectName, date, tech, role, link }) => {
              return (
                <div
                  className="swiper-slid s1"
                  key={id}
                  style={{ width: `calc(100% / ${projects.length})` }}
                >
                  <div className="project">
                    <a href={link}>
                      <img src={img} alt={projectName} />
                    </a>

                    <div className="project-details-group">
                      <h2>Project Name</h2>
                      <h2>Date</h2>
                      <h2>Tech</h2>
                      <h2>Role</h2>
                    </div>
                    <div className="project-details-group">
                      <p>{projectName}</p>
                      <p>{date}</p>
                      <p>{tech}</p>
                      <p>{role}</p>
                    </div>
                    <p>{description}</p>
                  </div>
                </div>
              );
            }
          )}
          {/* <div className="swiper-slid s1">
            <div className="project">
              <img src="/prospa.png" alt="project name" />
              <div className="project-details-group">
                <h2>Project Name</h2>
                <h2>Date</h2>
                <h2>Tech</h2>
                <h2>Role</h2>
              </div>
              <div className="project-details-group">
                <p>Prospa Dashboard UI</p>
                <p>22/02/2019</p>
                <p>React/Scss</p>
                <p>Sole Developer</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                quisquam ipsam exercitationem fugiat fuga sequi quasi officia
                doloremque placeat laudantium.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <style jsx>
        {`
          .works {
            margin-top: 100px;
            padding: 0px 0 30px;
          }
          .title {
            margin-top: 20px;
          }
          .swiper-wrapper {
            width: 100%;
            height: 100vh;
            overflow: hidden;
            background-color: #000;
            perspective: 1000;
          }
          .swiper-slid {
            height: 700px !important;
            height: 100%;

            float: left;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #000;
            padding: 0 50px;
          }
          .swiper-slid .project {
            max-width: 1100px;
            width: 100%;
            margin-top: 200px;
            min-height: 450px;
          }
          .project-details-group {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 20px 10px;
          }
          .project-details-group h2 {
            margin-bottom: 0;
          }
          .swiper-group {
            height: 100%;
          }
        `}
      </style>
      <style jsx global>{``}</style>
    </section>
  );
};

export default Works;
