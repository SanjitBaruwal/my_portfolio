import "./Experiences.css";
import { BsPatchCheckFill } from "react-icons/bs";
import data_frontend from "./frontend_data";
import data_backend from "./backend_data";
const Experiences = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            {data_frontend.map((item) => (
              <div>
                <article key={item.id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.language}</h4>
                    <small className="color-light">{item.level}</small>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            {data_backend.map((item) => (
              <article key={item.id} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{item.language}</h4>
                  <small className="color-light">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
