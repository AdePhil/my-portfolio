import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import bitbucket from "../assets/bitbucket.svg";
import github from "../assets/github.svg";

const Socials = () => {
  return (
    <section className="socials">
      <a href="https://www.instagram.com/ade_phil/" className="social-link">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://github.com/AdePhil" className="social-link">
        <img src={github} alt="github" />
      </a>
      <a href="https://twitter.com/Ade_phil" className="social-link">
        <img src={twitter} alt="Twitter" />
      </a>
      <a href="https://bitbucket.org/Adephil/" className="social-link">
        <img src={bitbucket} alt="bitbucket" />
      </a>
      <style jsx>{`
        .socials {
          display: flex;
          position: absolute;
          bottom: 100px;
        }
        @media (max-width: 750px) {
          .socials {
            bottom: -200px;
          }
        }
        @media (max-width: 459px) {
          .socials {
            bottom: -170px;
          }
        }
        .socials > *:not(:last-child) {
          margin-right: 40px;
        }
        .social-link {
          transition: 200ms ease;
        }
        .social-link:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default Socials;
