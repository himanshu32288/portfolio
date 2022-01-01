import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import emailjs from "@emailjs/browser";
import { useRef, useState} from "react";
import { MdDoneOutline } from "react-icons/md";
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_756tkdj",
        "template_muw40no",
        formRef.current,
        "user_apipMUBgH5vyUpo3Oxpv8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8810682679
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              himanshukumar_2k19co159@dtu.ac.in
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              // style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              // style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              // style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              // style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && (
              <p className="done">
                <MdDoneOutline />
                Thank you...
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
