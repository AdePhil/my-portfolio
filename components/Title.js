const Title = ({ section, title, ...rest }) => {
  return (
    <div className="title" {...rest}>
      <div className="hexagon">{section}</div>
      <h2 className="title-text">{title}</h2>
      <div className="line"></div>
      <style jsx>{`
        .title {
          display: flex;
          align-items: center;
        }
        .title-text {
          font-size: 3.5rem;
          font-weight: 600;
          padding-left: 30px;
        }
        @media (max-width: 750px) {
          .title-text {
            font-size: 2.5rem;
          }
        }
        .line {
          background-color: var(--dark-gray);
          height: 7px;
          width: 50%;
          min-width: 100px;
          max-width: 400px;
          margin-left: 30px;
        }

        @media (max-width: 620px) {
          .line {
            display: none;
          }
        }

        .hexagon {
          width: 100px;
          height: 55px;
          background: var(--dark-gray);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          font-weight: 600;
        }
        .hexagon:before {
          content: "";
          position: absolute;
          top: -25px;
          left: 0;
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-bottom: 25px solid var(--dark-gray);
        }
        .hexagon:after {
          content: "";
          position: absolute;
          bottom: -25px;
          left: 0;
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-top: 25px solid var(--dark-gray);
        }
      `}</style>
    </div>
  );
};

export default Title;
