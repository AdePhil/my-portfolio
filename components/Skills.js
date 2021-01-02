import { skills } from "./data";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="skills-heading">My skills</h3>
      {skills.map(({ icon, name, id }) => (
        <div className="skill" key={id}>
          <img src={icon} alt={name} className="skill-icon" />
          <h4 className="skill-title">{name}</h4>
        </div>
      ))}
      <style jsx>
        {`
          .skills {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 30px;
          }
          @media (max-width: 750px) {
            .skills {
              grid-gap: 30px 10px;
            }
          }
          .skills-heading {
            grid-column: 1 / -1;
            font-size: 2.5rem;
            font-size: 600;
          }
          .skill {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dark-gray);
            padding: 20px 10px;
          }
          .skill-icon {
            width: 2rem;
            margin-right: 10px;
          }
          .skill-title {
            margin: 0;
            text-transform: capitalize;
          }
        `}
      </style>
    </div>
  );
};

export default Skills;
