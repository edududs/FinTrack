import React from "react";
import Separator from "../../components/core/Separator";
import { DemoFormSwitches } from "../../../src/components/Examples/DemoFormSwitches";
import { ProfileForm } from "../../components/core/Forms/FormDemo";
import Accordion from "../../components/core/Accordion";
import ButtonDemoToast from "../../../src/components/Examples/DemoToast";
import { DemoModal } from "src/components/Examples/Modals/DemoModals";
import DemoConfirmationModal from "src/components/Examples/Modals/DemoConfirmationModal";
import DropDownMenuDemo from "src/components/core/DropdownMenus/DropDownMenuExample";
import DemoCalendar from "src/components/Examples/DemoCalendar";
import { DialogDemo } from "src/components/Examples/DemoDialog";
import { DialogCloseButton } from "src/components/Examples/DemoDialogShare";
import DialogMenuDemo from "src/components/Examples/DemoDialogMenu";
import DemoCharts from "src/components/Examples/DemoCharts";
import { Component as TooltipDemo } from "src/components/core/Chart/Tooltip/TooltipDemo";
import { Label } from "src/components/core/Label";
import CardDemo from "src/components/Examples/DemoCard";
import { ComboboxForm } from "src/components/core/ComboBox/ComboBoxForm";
import { AspectRatioDefault } from "src/components/core/AspectRatio/AspectRatioDemo";
import {
  AvatarImage,
  Avatar,
  AvatarFallback,
} from "src/components/core/Avatar";
import DemoCarousels from "src/components/Examples/DemoCarousels";

const DemoComponents: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 ">
        <div>
          <Avatar>
            <AvatarImage src="https://cdn-icons-png.flaticon.com/512/5024/5024509.png" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-5xl text-center font-bold mb-4">Hello,</h1>
        <p className="text-center text-xl mb-6">
          Welcome to my component testing environment
        </p>
      </div>
      <Separator />

      <div className="flex space-between flex-1 w-full space-x-12 max-w-[80%]">
        <div className="flex-1 flex flex-col">
          <Accordion triggerText="Toaster">
            <ButtonDemoToast />
          </Accordion>

          <Accordion triggerText="Dropdown Menu">
            <DropDownMenuDemo />
          </Accordion>

          <Accordion triggerText="Modals">
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

          <Accordion triggerText="Calendar">
            <DemoCalendar />
          </Accordion>
        </div>

        <div className="max-h-full">
          <Separator orientation="vertical" />
        </div>

        <div className="flex-1 flex flex-col">
          <Accordion triggerText="Graphs">
            <DemoCharts />
            <Separator className="mt-7 mb-7" />
            <Label className="text-xl justify-center flex mb-3">
              Exemplos de Tooltip
            </Label>
            <TooltipDemo />
          </Accordion>

          <Accordion triggerText="Card">
            <CardDemo />
          </Accordion>

          <Accordion triggerText="ComboBox Form">
            <ComboboxForm />
          </Accordion>

          <Accordion triggerText="Aspect Ratio">
            <Label>With Aspect Ratio</Label>
            <AspectRatioDefault />
          </Accordion>

          <Accordion triggerText="Carousels">
            <DemoCarousels />
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default DemoComponents;
