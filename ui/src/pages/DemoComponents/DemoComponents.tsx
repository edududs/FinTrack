import React, { useState } from "react";
import {
  DemoFormSwitches,
  ButtonDemoToast,
  TabsDemo,
  TableDemo,
  HoverCardDemo,
  DemoConfirmationModal,
  DemoModal,
  DialogDemo,
  DialogCloseButton,
  DialogMenuDemo,
  DemoCalendar,
  DemoCharts,
  CardDemo,
  DemoCarousels,
} from "src/components/Examples";
import { ProfileForm } from "src/components/core/Forms/FormDemo";
import DropDownMenuDemo from "src/components/core/DropdownMenus/DropDownMenuExample";
import { Component as TooltipDemo } from "src/components/core/Chart/Tooltip/TooltipDemo";
import { ComboboxForm } from "src/components/Examples/ComboBox/DemoComboBoxForm";
import { AspectRatioDefault } from "src/components/core/AspectRatio/AspectRatioDemo";
import {
  AvatarImage,
  Avatar,
  AvatarFallback,
  Separator,
  Accordion,
  Label,
  AdaptiveTooltip,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from "src/components/core";
import { SingleControllerAccordion } from "src/components/core/Accordion/AccordionDefault";

// Função que renderiza cada Accordion e seus conteúdos
const renderAccordion = (title: string, content: JSX.Element) => (
  <Accordion trigger={title}>{content}</Accordion>
);

// Lista com os dados dos componentes e seus títulos
const accordionLeftColumnData = [
  { title: "Toaster", content: <ButtonDemoToast /> },
  { title: "Dropdown Menu", content: <DropDownMenuDemo /> },
  {
    title: "Modals",
    content: (
      <div className="flex flex-wrap gap-3">
        <DemoConfirmationModal />
        <DemoModal />
        <DialogDemo />
        <DialogCloseButton />
        <DialogMenuDemo />
      </div>
    ),
  },
  { title: "Form Switches", content: <DemoFormSwitches /> },
  { title: "Input", content: <ProfileForm /> },
  { title: "Tabs", content: <TabsDemo /> },
  { title: "Graphs", content: <DemoCharts /> },
];

const accordionRightColumnData = [
  {
    title: "Graphs",
    content: (
      <>
        <DemoCharts />
        <Separator className="mt-7 mb-7" />
        <Label className="text-xl justify-center flex mb-3">
          Exemplos de Tooltip
        </Label>
        <TooltipDemo />
      </>
    ),
  },
  { title: "Card", content: <CardDemo /> },
  { title: "ComboBox Form", content: <ComboboxForm /> },
  { title: "Aspect Ratio", content: <AspectRatioDefault /> },
  { title: "Carousels", content: <DemoCarousels /> },
  { title: "Hover Card", content: <HoverCardDemo /> },
  {
    title: "Tables",
    content: (
      <>
        {renderAccordion("Simple Table", <TableDemo />)}
        {renderAccordion(
          "Data Table",
          <>Conteúdo que irei criar do datatable</>
        )}
      </>
    ),
  },
];

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
          {/* Map que gera os accordions dinamicamente */}
          {accordionLeftColumnData.map(({ title, content }, index) =>
            renderAccordion(title, content)
          )}

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
        </div>

        <div className="max-h-full">
          <Separator orientation="vertical" />
        </div>

        <div className="flex-1 flex flex-col">
          {accordionRightColumnData.map(({ title, content }) =>
            renderAccordion(title, content)
          )}
        </div>
      </div>
    </>
  );
};

export default DemoComponents;
