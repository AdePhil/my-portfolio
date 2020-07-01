import { useEffect, useRef, useState } from "react";
import Title from "../components/Title";

const projects = [
  {
    id: 1,
    projectName: "Productly",
    date: "22/02/2020",
    tech: "React/Scss",
    role: "Sole Developer",
    img: "/productly.jpg",
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
    img: "/tams.jpg",
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
    img: "/prospa.jpg",
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
    img: "/neya.jpg",
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
    img: "/securetech.jpg",
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
    img: "/gify.jpg",
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
    img: "/transmonitor.jpg",
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
    img: "/agency.jpg",
    link: "https://creativeagency.netlify.com/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam ipsam exercitationem fugiat fuga sequi quasi officiadoloremque placeat laudantium.",
  },
];

const Works = () => {
  const ref = useRef(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 750) {
      const { TimelineMax, Power1, Power2, Power3, Power4 } = require("gsap");
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
    }
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
                      <p>{projectName}</p>
                      <p>{date}</p>
                      <p>{tech}</p>
                      <p>{role}</p>
                    </div>
                    {/* <div className="project-details-group">
                      <p>{projectName}</p>
                      <p>{date}</p>
                      <p>{tech}</p>
                      <p>{role}</p>
                    </div> */}
                    {/* <p>{description}</p> */}
                  </div>
                </div>
              );
            }
          )}
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
            background-color: var(--black);
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
            background-color: var(--black);
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

          @media (max-width: 750px) {
            .swiper-wrapper,
            .swiper-group {
              height: 100%;
              width: 100% !important;
            }
            .swiper-slid {
              height: auto !important;
              float: none;
              width: 100% !important;
              padding: 0 30px;
            }
            .swiper-slid .project {
              margin-top: 20px;
              margin-bottom: 50px;
              min-height: auto;
            }

            .project-details-group {
              padding-top: 10px;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 0px 20px;
            }
            .project-details-group h2,
            .project-details-group p {
              margin-top: 0;
            }
            .project-details-group P:nth-of-type(1) {
              grid-row: 2;
              grid-column: 1;
            }
            .project-details-group P:nth-of-type(2) {
              grid-row: 2;
              grid-column: 2;
            }
          }
        `}
      </style>
      <style jsx global>{``}</style>
    </section>
  );
};

export default Works;
