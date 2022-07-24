import React from "react";
import { Accordion } from "flowbite-react";

type Props = {
  title: string;
  paragraph: string;
};

const AccordionItem = ({ title, paragraph }: Props) => {
  return (
    <Accordion.Panel>
      <Accordion.Title>{title}</Accordion.Title>
      <Accordion.Content>
        <p className="mb-2 text-gray-500">{paragraph}</p>
      </Accordion.Content>
    </Accordion.Panel>
  );
};

export default AccordionItem;
