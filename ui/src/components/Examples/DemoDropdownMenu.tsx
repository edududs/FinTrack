import DropdownMenuDemo from "../core/DropdownMenus/DropDownMenuExample";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../core/Accordion";

const DemoDropdownMenu: React.FC = () => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible accordionClassName="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Dropdown Menu</AccordionTrigger>
          <AccordionContent className="flex justify-center">
            <DropdownMenuDemo />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DemoDropdownMenu;
