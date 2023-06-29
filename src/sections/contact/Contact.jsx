import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  // const [feedback, setFeedback] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handelChange = (e) => {
  //   setFeedback({
  //     ...feedback,
  //     [e.target.name]: [e.target.value],
  //   });
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yv9wbod",
        "template_ozhx25a",
        form.current,
        "pL8siOHAhCly8pLrn"
      )
      .then(
        (result) => {
          // setFeedback({
          //   name: "",
          //   email: "",
          //   message: "",
          // });
          e.target.reset();
          toast.success("Thank you for your feedback", {
            position: "top-center",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Opps!!! something went wrong");
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option_icon" />
            <h4>Email</h4>
            <h6>baruwalsanjit@gmail.com</h6>
            <a href="mailto:baruwalsanjit@gmai.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__option_icon" />
            <h4>Messenger</h4>
            <h6>सन्जित बरुवाल</h6>
            <a href="https://m.me/sanjit.baruwal.1" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option_icon" />
            <h4>Whatsapp</h4>
            <h6>+977-9861716971</h6>
            <a href="https://wa.me/9779861716971" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            // value={feedback.name}
            // onChange={handelChange}
            placeholder="Your Full Name"
            required
          />

          <input
            type="email"
            name="email"
            // value={feedback.email}
            // onChange={handelChange}
            placeholder="Your Email"
            required
          />

          <textarea
            rows="7"
            name="message"
            // value={feedback.message}
            // onChange={handelChange}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn primary">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
