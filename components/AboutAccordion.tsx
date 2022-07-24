import { Accordion } from "flowbite-react";
import React from "react";
import AccordionItem from "./AccordionItem";

const AboutAccordion = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Test1</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            deserunt facere saepe debitis autem voluptates adipisci
            reprehenderit nesciunt maxime ut.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Test2</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor
            consectetur tempore assumenda aperiam iste itaque atque, repellat
            dolores nihil.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Test3</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2">Lorem20</p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AboutAccordion;
