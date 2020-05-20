import Title from "../components/Title";
import { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };
  return (
    <div className="container relative">
      <section className="contact" id="contact">
        <Title section={3} title="Say Hi" />
        <p className="sub-title">
          I’m Always Intested in hearing about about new projects and
          oppotunities, so if you’d liketo chat please get in touch.
        </p>
        <form onSubmit={handleSubmit} netlify>
          <div className="input-group">
            <input
              type="text"
              required
              placeholder="Type Your Name"
              className="input"
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              required
              placeholder="Type Your Email"
              className="input"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="input-group ">
            <input
              type="text"
              required
              placeholder="Type Your Message"
              className="input full"
              name="message"
              onChange={handleChange}
            />
          </div>
          <div className="center">
            <button className="btn btn-blue" onClick={handleSubmit}>
              Let's Chat
            </button>
          </div>
        </form>
      </section>
      <style jsx>{`
        .contact {
          margin-top: 0px;
          padding: 40px 0 100px;
        }
        .sub-title {
          max-width: 500px;
          font-size: 18px;
          line-height: 2;
          margin-bottom: 40px;
        }
        .input-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 50px 30px;
          margin-bottom: 50px;
        }

        .input {
          border: none;
          border-bottom: 1px solid var(--off-white);
          background-color: transparent;
          padding: 15px 0;
          font-size: 1.6rem;
          outline: none;
          color: #fff;
        }
        .input:focus {
          border-bottom: 2px solid var(--blue);
          transition: all 200ms;
        }
        .full {
          grid-column: 1/-1;
        }
        .center {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Contact;
