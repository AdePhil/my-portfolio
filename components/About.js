import Title from "./Title";
import { skills } from "./data";
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
              I currently work at SB Telecoms and Devices as a frontend
              developer and I work on xzy products. In my spare time I write
              articles on medium, watch sci-fi movies and argue about football
              with friends.
            </p>
            <p>
              I currently work at SB Telecoms and Devices as a frontend
              developer and I work on xzy products. In my spare time I write
              articles on medium, watch sci-fi movies and argue about football
              with friends.
            </p>
          </div>
          <div className="stat">
            <div className="stat-item">
              <h3 className="stat-item-heading">5</h3>
              <span className="stat-item-title">Projects</span>
            </div>
            <div className="stat-item">
              <h3 className="stat-item-heading">5</h3>
              <span className="stat-item-title">Commits</span>
            </div>
            <div className="stat-item">
              <h3 className="stat-item-heading">300</h3>
              <span className="stat-item-title">Content</span>
            </div>
            <div className="stat-item">
              <h3 className="stat-item-heading">500</h3>
              <span className="stat-item-title">Stars</span>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3 className="skills-heading">My skills</h3>
          {skills.map(({ icon, name, id }) => (
            <div className="skill" key={id}>
              <img src={icon} alt={name} className="skill-icon" />
              <h4 className="skill-title">{name}</h4>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
      .skills{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-gap: 30px;
      }
      .skills-heading {
        grid-column: 1 / -1;
        font-size: 2.5rem;
        font-size: 600;
      }
      .skill {
        display: flex;
        align-items: center;
        justify-content:  center;
        background-color: var(--dark-gray);
        padding: 20px 10px;
      }
      .skill-icon {
        width: 2rem;
        margin-right: 10px;

      }
      .skill-title{
        margin: 0;
        text-transform: capitalize;
      }
      
        .about {
          padding: 40px 0 0;
          min-height: 500px;
          
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
          color: var(--purple);
          t
        }
      `}</style>
    </div>
  );
};

export default About;
