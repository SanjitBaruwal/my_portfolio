import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icons">
        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://whatsapp.com">
            <BsWhatsapp />
          </a>
        </li>
      </ul>

      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <small>
        {" "}
        © {new Date().getFullYear()} Baruwal Sanjit | All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
