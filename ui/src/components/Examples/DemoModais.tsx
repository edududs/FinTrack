import React from "react";
import Accordion from "../Accordion";
import DemoConfirmationModal from "./Modals/DemoConfirmationModal";
import { DemoModal } from "./Modals/DemoModals";


const AccordionModais: React.FC = () => {
  return (
    <>
      <Accordion triggerText="Modais">
        <div className="w-full flex flex-col gap-3">
          <DemoConfirmationModal />
          <DemoModal />
        </div>
      </Accordion>
    </>
  );
}

export default AccordionModais;