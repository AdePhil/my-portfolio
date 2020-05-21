const Header = () => {
  return (
    <div className="container relative" style={{ zIndex: 3 }}>
      <header className="header">
        <h2 className="logo">
          <span>AHM</span>
          <span className="dot1">.</span>
          <span className="dot2">.</span>
          <span className="dot3">.</span>
        </h2>
        <nav className="nav">
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
        <style jsx>{`
          .dot {
            display: inline-block;
          }
          .header {
            display: flex;
            padding: 3rem 0;
            align-items: center;
          }
          .logo {
            margin: 0;
            margin-right: 40px;
            font-family: "Montserrat", sans-serif;
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
        `}</style>
      </header>
    </div>
  );
};

export default Header;
