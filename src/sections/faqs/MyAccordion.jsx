import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownLine } from "react-icons/ri";

const MyAccordion = (question, answer) => {
  return (
    <>
      <div className="main__heading">
        <h3>{question}</h3>
        <RiArrowUpSLine />
      </div>
    </>
  );
};

export default MyAccordion;
