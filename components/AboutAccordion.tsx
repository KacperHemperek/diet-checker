import { Accordion } from "flowbite-react";
import React from "react";
import AccordionItem from "./AccordionItem";

const AboutAccordion = () => {
  return (
    <Accordion>
      <AccordionItem title="cos" paragraph="dadas" />
      <AccordionItem title="cs2" paragraph="dadas1" />
      <AccordionItem title="cos3" paragraph="dadas3" />
    </Accordion>
  );
};

export default AboutAccordion;
