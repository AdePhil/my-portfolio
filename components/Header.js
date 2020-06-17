import { useState, useEffect } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [hideText, setHideText] = useState(false);
  const toggleMenu = () => {
    setMobile((m) => !m);
  };

  useEffect(() => {
    const scrollAnimation = () => {
      const windowWidth = window.innerWidth;
      let scrollHeight = window.pageYOffset;
      if (windowWidth > 750) return;
      if (scrollHeight > 80) {
        setHideText(true);
      } else {
        setHideText(false);
      }
    };
    window.addEventListener("scroll", scrollAnimation);
    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, []);
  return (
    <div className="h-container  container relative ">
      <header className="header">
        <h2 className="logo">
          <span className="blue">&lt;</span>
          <span>A</span>
          <span
            className={`${
              hideText ? "hide letter-to-disappear" : "letter-to-disappear"
            }`}
          >
            H
          </span>
          <span>M</span>
          <span
            className={`${
              hideText ? "hide letter-to-disappear" : "letter-to-disappear"
            }`}
          >
            E
          </span>
          <span>D</span>
          <span className="blue">/&gt;</span>
          {/* <span className="dot1">.</span>
          <span className="dot2">.</span>
          <span className="dot3">.</span> */}
        </h2>
        <nav className={mobile ? "mobile nav" : "nav"}>
          <a href="#" className="nav-item">
            Home
          </a>
          <a href="#about" className="nav-item">
            About
          </a>
          <a href="#works" className="nav-item">
            Work
          </a>
          <a href="#contact" className="nav-item">
            Contact
          </a>
        </nav>
        <button onClick={toggleMenu} className="mobile-container">
          <div className={mobile ? "animate mobile-menu" : "mobile-menu"}></div>
        </button>
      </header>
      <style jsx>{`
        .dot {
          display: inline-block;
        }
        .header {
          display: flex;
          padding: 3rem 0;
          align-items: center;
        }
        .letter-to-disappear {
          display: inline-block;
          opacity: 1;
          transition: opacity 250ms ease-out 0s, margin 250ms ease-in-out 0s;
        }

        .letter-to-disappear.hide {
          opacity: 0;
          margin-right: -0.5em;
          transition: opacity 250ms ease-out 0s, margin 250ms ease-in-out 0s;
        }

        @media (max-width: 750px) {
          .h-container {
            background-color: #000;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 20;
          }
          .header {
            padding: 2rem 0;
          }
        }
        .logo {
          margin: 0;
          margin-right: 40px;
          font-family: "Fira Code", monospace;
          font-size: 2.3rem;
          margin-top: -5px;
        }
        .nav {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.8rem;
        }

        .nav-item {
          color: #fff;
          text-decoration: none;
        }
        .nav > *:not(:last-child) {
          margin-right: 30px;
        }

        .mobile-menu,
        .mobile-menu:after,
        .mobile-menu:before {
          width: 30px;
          height: 3px;
          border: none;
          outline: none;
        }

        .mobile-menu:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 8px;
          background: rgba(255, 255, 255, 1);
          transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .mobile-menu:after {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          background: rgba(255, 255, 255, 1);
          transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .mobile-menu {
          transform: translateY(8px);
          background: rgba(255, 255, 255, 1);
          transition: all 0ms 300ms;
          top: 0;
          left: 0;
          position: absolute;
        }
        .mobile-menu.animate {
          background: rgba(255, 255, 255, 0);
        }

        .mobile-menu.animate:after {
          top: 0;
          transform: rotate(45deg);
          transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .mobile-menu.animate:before {
          bottom: 0;
          transform: rotate(-45deg);
          transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .mobile-container {
          display: none;
          background: transparent;
          position: relative;
          width: 30px;
          height: 25px;
          outline: none;
          border: none;
          z-index: 100;
          // position: fixed;
          // right: 30px;
          // top: 30px;
        }

        @media (max-width: 459px) {
          .mobile-container {
            display: inline-block;
          }
          .header {
            justify-content: space-between;
            align-items: center;
          }
          .nav {
            position: fixed;
            right: 0;
            width: 60vw;
            height: 100vh;
            bottom: 0;
            flex-direction: column;
            background-color: var(--blue);
            z-index: 10;
            align-items: center;
            // padding-top: 200px;
            transform: translateX(100%);
            transition: transform 200ms ease;
          }
          .nav > *:not(:last-child) {
            margin: 0;
            margin-bottom: 20px;
          }
          .nav.mobile {
            transform: translateX(0);
          }
          .nav-item {
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
