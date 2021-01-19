import Title from "./Title";
import Skills from "../components/Skills";
import Box from "../components/Box";
const About = () => {
  return (
    <div className="container  ">
      <section className="about" id="about">
        <Title section={1} title="About" />
        <div className="about-container">
          <div className="about-text">
            <p>
              My name is Adebisi Ahmed, I’m a software engineer based in Lagos,
              Nigeria. I care deeply about user experience and I am passionate
              about building excellent software. I create beautiful, functional
              and usable websites, web Apps and mobile apps.
            </p>
            <p>
              In my spare time I write articles on medium, watch sci-fi movies
              and argue about football with friends.
            </p>
          </div>
          <div className="stat">
            <div className="stat-item">
              <h3 className="stat-item-heading">15</h3>
              <span className="stat-item-title">Projects</span>
            </div>
            <div className="stat-item">
              <h3 className="stat-item-heading">2k</h3>
              <span className="stat-item-title">Commits</span>
            </div>
            <div className="stat-item">
              <h3 className="stat-item-heading">300</h3>
              <span className="stat-item-title">Content</span>
            </div>
            <div className="stat-item">
              <h3 className="stat-item-heading">17</h3>
              <span className="stat-item-title">Stars</span>
            </div>
          </div>
        </div>
        <Skills />
      </section>
      <style jsx>{`
      
        .about {
          padding: 40px 0 0;
          min-height: 500px;
        }
         @media (max-width: 750px) {
           .about {
             padding-top: 0;
           }
         }
         @media (max-width: 459px) {
            .about {
              padding-top: 50px;
            }
          }
        .about-text {
          font-size: 1.8rem;
          line-height: 2;
        }
        .about-container {
          display: grid;
          grid-template-columns: 1fr 400px;
          grid-gap: 40px 100px;
          padding-top: 30px;
        }
         @media (max-width: 1149px) {
           .about-container {
            grid-template-columns: 1fr;
           }
         }
        .stat {
          background-color: var(--dark-gray);
          min-height: 300px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        }
        .stat-item:nth-child(odd) {
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--purple);
        }
        .stat-item:nth-child(1), .stat-item:nth-child(2)  {
          border-bottom: 1px solid var(--purple);
        }
         .stat-item:nth-child(3), .stat-item:nth-child(4)  {
         }
        .stat-item-heading {
          font-size: 4.6rem;
          text-align: center;
          font-weight: 500;
          margin: 0;
        }
        .stat-item-title {
          display: block;
          font-size: 1.2rem;
          text-align: center;
          color: var(--white);
          t
        }
      `}</style>
    </div>
  );
};

export default About;
