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
  SheetSideDemo,
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
  AccordionDefault as Accordion,
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
  Input,
  Slider,
  Skeleton,
  CommonSheet,
} from "src/components/core";
import { SingleControllerAccordion } from "src/components/core/Accordion/AccordionDefault";
import { DataTableDemo } from "src/components/Examples/Table/DataTable/DataTableDemo";
import { DemoToastSonner } from "src/components/Examples/DemoToastSonner";

// Função que renderiza cada Accordion e seus conteúdos
const renderAccordion = (title: string, content: JSX.Element) => (
  <Accordion trigger={title}>{content}</Accordion>
);

// Lista com os dados dos componentes e seus títulos
const accordionLeftColumnData = [
  {
    title: "Toaster",
    content: (
      <div className="flex gap-2 justify-center items-center">
        <ButtonDemoToast />
        <DemoToastSonner />
      </div>
    ),
  },
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
  {
    title: "Sheets",
    content: (
      <>
        <div className="mb-2">
          <SheetSideDemo />
        </div>
        <div className="w-full justify-center flex">
          <div className="text-center text-xl w-[99%]">
            <CommonSheet
              trigger={
                <Button variant="outline" className="w-full">
                  Customized
                </Button>
              }
              triggerClassName="w-[90%]"
              title="Edit Profile"
              description="Customize your profile settings."
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="John Doe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@johndoe"
                    className="col-span-3"
                  />
                </div>
              </div>
            </CommonSheet>
          </div>
        </div>
      </>
    ),
  },
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
        {renderAccordion("Data Table", <DataTableDemo />)}
      </>
    ),
  },
  {
    title: "Skeleton",
    content: (
      <>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-gray-200" />
            <Skeleton className="h-4 w-[200px] bg-gray-200" />
          </div>
        </div>
        <Separator className="mt-7 mb-7" />
        <Label className="text-lg flex mb-3">Card</Label>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-200" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-gray-200" />
            <Skeleton className="h-4 w-[200px] bg-gray-200" />
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Slider",
    content: (

        <Slider
          defaultValue={[50]}
          max={100}
          step={0.1}
          className="p-3"
        />

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
