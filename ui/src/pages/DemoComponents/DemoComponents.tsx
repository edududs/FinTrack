import React from "react";
import Separator from "../../components/Separator";
import { DemoFormSwitches } from "../../../src/components/Examples/DemoFormSwitches";
import { ProfileForm } from "../../components/Forms/FormDemo";
import Accordion from "../../../src/components/Accordion";
import ButtonDemoToast from "../../../src/components/Examples/DemoToast";
import { DemoModal } from "src/components/Examples/Modals/DemoModals";
import DemoConfirmationModal from "src/components/Examples/Modals/DemoConfirmationModal";
import DropDownMenuDemo from "src/components/DropdownMenus/DropDownMenuExample";
import DemoCalendar from "src/components/Examples/DemoCalendar";
import { DialogDemo } from "src/components/Examples/DemoDialog";
import { DialogCloseButton } from "src/components/Examples/DemoDialogShare";
import DialogMenuDemo from "src/components/Examples/DemoDialogMenu";
import DemoChart from "src/components/Examples/DemoChart";

const DemoComponents: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[50%] gap-4 ">
      <h1 className="text-5xl text-center">Olá,</h1>
      <p className="text-center text-xl">
        seja bem vindo ao meu ambiente de teste de componentes
      </p>
      <Separator />
      <Accordion triggerText="Toaster">
        <ButtonDemoToast />
      </Accordion>

      <Accordion triggerText="Dropdown Menu">
        <DropDownMenuDemo />
      </Accordion>

      <Accordion triggerText="Modais">
        <div className="flex flex-wrap gap-3">
          <DemoConfirmationModal />
          <DemoModal />
          <DialogDemo />
          <DialogCloseButton />
          <DialogMenuDemo />
        </div>
      </Accordion>

      <Accordion triggerText="Form Switches">
        <DemoFormSwitches />
      </Accordion>

      <Accordion triggerText="Input">
        <ProfileForm />
      </Accordion>

      <Accordion triggerText="Calendário">
        <DemoCalendar />
      </Accordion>

      <Accordion triggerText="Gráfico">
        <DemoChart />
      </Accordion>
    </div>
  );
};

export default DemoComponents;
