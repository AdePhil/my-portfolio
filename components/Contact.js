import Title from "../components/Title";
import { useState, useRef, useEffect } from "react";
import Spinner from "../assets/svgs/spinner.svg";
import CheckMark from "../assets/svgs/checkmark.svg";

export const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export const PASSWORD_REGEX = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
    if (value) {
      const errorEntries = Object.entries(errors).filter(
        ([errorName]) => errorName !== name
      );
      setErrors(Object.fromEntries(errorEntries));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = isFormValid();
    setErrors(errs);
    if (Object.values(errs).some((err) => err !== "")) {
      return;
    }

    const formDom = e.target;
    setLoading(true);
    fetch(formDom.action, {
      method: formDom.method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: encode({ ...form }),
    })
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => setStatus("error"))
      .finally(() => setLoading(false));
  };

  const isFormValid = () => {
    const errs = {};
    if (!form.name) {
      errs.name = "Please enter a name";
    }

    if (!form.email || !EMAIL_REGEX.test(form.email)) {
      errs.email = "Please enter a valid email";
    }

    if (!form.message) {
      errs.message = "Please enter a valid message";
    }

    return errs;
  };

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        setStatus("");
      }, 1500);
    }
  }, [status]);
  return (
    <div className="container relative">
      <section className="contact" id="contact">
        <Title section={3} title="Say Hi" />
        <p className="sub-title">
          I’m Always Intested in hearing about about new projects and
          oppotunities, so if you’d liketo chat please get in touch.
        </p>
        <form
          action="https://formspree.io/xoqkjydo"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <div>
              <input
                type="text"
                placeholder="Type Your Name"
                className="input"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Type Your Email"
                className="input"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
          </div>
          <div className="input-group ">
            <div className="full">
              <input
                type="text"
                placeholder="Type Your Message"
                className="input "
                name="message"
                onChange={handleChange}
                value={form.message}
              />
              {errors.message && <div className="error">{errors.message}</div>}
            </div>
          </div>
          <div className="center">
            <button className="btn btn-blue btn-submit" onSubmit={handleSubmit}>
              {loading && (
                <img src={Spinner} alt="spinner" className="spinner" />
              )}
              {status === "success" && (
                <img src={CheckMark} alt="check" className="spinner" />
              )}
              {status === "success" ? "Message Sent" : "Let's Chat"}
            </button>
          </div>
        </form>
      </section>
      <style jsx>{`
        .error {
          font-size: 12px;
          color: orange;
          margin-top: 5px;
        }
        .spinner {
          width: 18px;
          margin-right: 10px;
        }
        .btn-submit {
          display: flex;
          align-items: center;
        }
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

        @media (max-width: 900px) {
          .input-group {
            grid-template-columns: 1fr;
          }
        }

        .input {
          border: none;
          border-bottom: 1px solid var(--off-white);
          background-color: transparent;
          padding: 15px 0;
          font-size: 1.6rem;
          outline: none;
          color: #fff;
          width: 100%;
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
