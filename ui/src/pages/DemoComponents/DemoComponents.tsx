import React, { useState } from "react";
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
import { AdaptiveTooltip } from "src/components/core/Tooltip";
import Button from "src/components/core/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/core/Dialog";
import { SingleControllerAccordion } from "src/components/core/Accordion/AccordionDefault";
import { HoverCardDemo } from "src/components/Examples/DemoHoverCard";
import { TabsDemo } from "src/components/Examples/DemoTabs";

const DemoComponents: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Função para fechar o Dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

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
          <Accordion trigger="Toaster">
            <ButtonDemoToast />
          </Accordion>

          <Accordion trigger="Dropdown Menu">
            <DropDownMenuDemo />
          </Accordion>

          <Accordion trigger="Modals">
            <div className="flex flex-wrap gap-3">
              <DemoConfirmationModal />
              <DemoModal />
              <DialogDemo />
              <DialogCloseButton />
              <DialogMenuDemo />
            </div>
          </Accordion>

          <Accordion trigger="Form Switches">
            <DemoFormSwitches />
          </Accordion>

          <Accordion trigger="Input">
            <ProfileForm />
          </Accordion>

          <AdaptiveTooltip
            content="Disabled for technical reasons"
            side="bottom"
            sticky="always"
            arrow
          >
            <div>
              {/* Elemento externo para capturar cliques e abrir o dialog */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <SingleControllerAccordion
                    trigger="Calendar"
                    collapsible
                    disabled
                  >
                    <DemoCalendar />
                  </SingleControllerAccordion>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-center">Ooow</DialogTitle>
                    <DialogDescription className="text-center">
                      Aff
                    </DialogDescription>
                  </DialogHeader>
                  <div className="text-lg text-center">
                    Eu não avisei no tooltip que o Calendário está inativo por
                    motivos técnicos, caralho?
                    <p>Sai fora!</p>
                  </div>
                  <p className="text-muted-foreground text-sm">Babaca</p>
                  <DialogFooter>
                    <Button onClick={closeDialog}>Ok, ok, entendi</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </AdaptiveTooltip>

          <Accordion trigger="Tabs">
            <TabsDemo />
          </Accordion>
        </div>

        <div className="max-h-full">
          <Separator orientation="vertical" />
        </div>

        <div className="flex-1 flex flex-col">
          <Accordion trigger="Graphs">
            <DemoCharts />
            <Separator className="mt-7 mb-7" />
            <Label className="text-xl justify-center flex mb-3">
              Exemplos de Tooltip
            </Label>
            <TooltipDemo />
          </Accordion>

          <Accordion trigger="Card">
            <CardDemo />
          </Accordion>

          <Accordion trigger="ComboBox Form">
            <ComboboxForm />
          </Accordion>

          <Accordion trigger="Aspect Ratio">
            <Label>With Aspect Ratio</Label>
            <AspectRatioDefault />
          </Accordion>

          <Accordion trigger="Carousels">
            <DemoCarousels />
          </Accordion>

          <Accordion trigger="Hover Card">
            <HoverCardDemo />
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default DemoComponents;
