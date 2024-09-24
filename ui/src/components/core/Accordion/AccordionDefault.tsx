// DefaultAccordion.tsx
import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./AccordionBase";

interface DefaultAccordionProps {
  triggerText: string;
  children: React.ReactNode;
  collapsible?: boolean;
  type?: "single" | "multiple";
  noArrow?: boolean;
}

const AccordionDefault: React.FC<DefaultAccordionProps> = ({
  triggerText,
  children,
  collapsible = true,
  type = "single",
  noArrow=false,
}) => {
  return (
    <Accordion type={type} collapsible={collapsible} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger noArrow={noArrow}>{triggerText}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionDefault;
