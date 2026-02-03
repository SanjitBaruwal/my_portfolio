import "./Services.css";
import data from "./data";
import Card from "../../components/Card";

const Services = () => {
  return (
    <section id="services">
      <h5>I give you the best in all the services below:</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {data.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
