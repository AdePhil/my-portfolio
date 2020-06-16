import Socials from "../components/Socials";

const Intro = () => {
  return (
    <div className="container intro-wrapper" id="intro-wrapper">
      <main className="intro">
        <div className="intro-text">
          <p className="intro-text1">I am,</p>
          <div class="intro-text-height">
            <h1 className="intro-text2">Adebisi Ahmed Philip</h1>
          </div>
          <div>
            <h2 className="intro-text3">A front end developer</h2>
          </div>

          <div className="button-group">
            {/* <button className="btn btn-blue hire-btn">Hire Me</button> */}
            <a href="#contact" className="btn btn-blue hire-btn">
              Hire Me
            </a>
            <a
              href="/ahmed-cv.pdf"
              className="btn btn-outline cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <a
              href="/ahmed-cv.pdf"
              className="btn btn-outline cv-mobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>
        </div>

        <Socials />
      </main>
      <style jsx>{`
        .intro-text-height {
          overflow: hidden;
          margin-top: -30px;
          height: 90px;
        }
        .intro {
          display: flex;
          height: 100%;
        }

        .intro-wrapper {
          position: relative !important;
          height: 100%;
        }
        .intro-text {
          margin-top: 10rem;
        }

        @media (max-width: 459px) {
          .intro-text {
            margin-top: 4rem;
          }
        }

        .intro-text1 {
          margin-bottom: 0;
          font-size: 3.2rem;
        }
        .intro-text2 {
          font-weight: 600;
          font-size: 6.2rem;
          margin: 0px 0;
        }

        .intro-text3 {
          margin-top: 0;
          font-weight: 600;
          font-size: 4.2rem;
        }

        @media (max-width: 492px) {
          .intro-text2 {
            font-size: 5rem;
            line-height: 1.2;
            margin: 30px 0;
          }

          .intro-text3 {
            font-size: 2.5rem;
          }
        }

        .hire-btn {
          margin-right: 30px;
        }
        .cv-mobile {
          display: none;
        }
        @media (max-width: 459px) {
          .cv {
            display: none;
          }
          .cv-mobile {
            display: inline-block;
            padding: 15px 35px;
          }
        }
      `}</style>
    </div>
  );
};

export default Intro;
