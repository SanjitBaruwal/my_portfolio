import "./FloatingNav.css";
import data from "./data";
import { useState } from "react";

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="floating__nav">
      {data.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className={activeNav === `${item.link}` ? "active" : ""}
          onClick={() => setActiveNav(`${item.link}`)}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default FloatingNav;
