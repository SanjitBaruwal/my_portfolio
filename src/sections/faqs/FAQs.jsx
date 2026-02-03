import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQs.css";

import questions from "./data";

const FAQs = () => {
  return (
    <section id="faqs">
      <h5>
        Peoples may have following queries.Click to toggle the answer and if you
        still have some more question, shoot me a message from the contact
        section.
      </h5>
      <h2>Frequently Asked Questions</h2>
      <div className="container faq__container">
        {questions.map((item) => (
          <Accordion
            key={item.id}
            sx={{
              backgroundColor: "#f0eff0",
              boxShadow: "none",
              height: "max-content",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6>{item.question}</h6>
            </AccordionSummary>
            <AccordionDetails className="accordion__details">
              <p>{item.answer}</p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
