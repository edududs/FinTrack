import DropdownMenuDemo from "../core/DropdownMenus/DropDownMenuExample";
import {
  BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../core/Accordion";

const DemoDropdownMenu: React.FC = () => {
  return (
    <div className="w-full">
      <BaseAccordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Dropdown Menu</AccordionTrigger>
          <AccordionContent className="flex justify-center">
            <DropdownMenuDemo />
          </AccordionContent>
        </AccordionItem>
      </BaseAccordion>
    </div>
  );
};

export default DemoDropdownMenu;
