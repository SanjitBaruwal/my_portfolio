import "./About.css";
import AboutImg from "../../assets/PURWANCHAL CAMPUS.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import CV from "../../assets/cv.pdf";
import Card from "../../components/Card";
import data from "../../components/data";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImg} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects my clients love have always been my passion. Being
            in the web development industry for over 1.5 years and serving more
            than 40 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Sanjit Baruwal from Dhading, Nepal. I'm a full-stack
            web developer with a Bachelor degree in Computer Engineering. My top
            priority is to get your business online the right way, giving you
            industry-standard design and all the functionality you need to
            operate smoothly online. Get in touch today with the details of your
            project let's get started! Check Out my resume below!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <AiOutlineDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
