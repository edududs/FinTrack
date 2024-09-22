// DefaultAccordion.tsx
import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./AccordionBase";

interface DefaultAccordionProps {
  triggerText: string; // Texto que aparece no botão do Accordion
  children: React.ReactNode; // O conteúdo dentro do Accordion
  collapsible?: boolean; // Define se o Accordion pode colapsar
  type?: "single" | "multiple"; // Define se é um Accordion de seleção única ou múltipla
}

const AccordionDefault: React.FC<DefaultAccordionProps> = ({
  triggerText,
  children,
  collapsible = true,
  type = "single",
}) => {
  return (
    <Accordion type={type} collapsible={collapsible} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{triggerText}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionDefault;
