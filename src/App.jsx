import React, { useEffect, useState } from "react";
import Navbar from "../src/sections/navbar/Navbar";
import Header from "../src/sections/header/Header";
import About from "../src/sections/about/About";
import Services from "../src/sections/services/Services";
import Experience from "./sections/experience/Experience";
import Testimonials from "../src/sections/testimonials/Testimonials";
import FAQs from "../src/sections/faqs/FAQs";
import Contact from "../src/sections/contact/Contact";
import Footer from "../src/sections/footer/Footer";
import Portfolio from "./portfolio/Portfolio";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Assuming tablet width is 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={{ overflowX: "hidden" }}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
