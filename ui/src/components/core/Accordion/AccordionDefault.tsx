// DefaultAccordion.tsx
import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./AccordionBase";

interface DefaultSingleAccordionProps {
  type?: "single";
  trigger: string | React.ReactNode;
  children: React.ReactNode;
  collapsible?: boolean;
  noArrow?: boolean;
  disabled?: boolean;
  asChild?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?(value: string): void;
  dir?: "ltr" | "rtl";
  orientation?: "vertical" | "horizontal";
}

interface DefaultAccordionProps {
  trigger?: string | React.ReactNode;
  children: React.ReactNode;
  collapsible?: boolean;
  type?: "single" | "multiple";
  noArrow?: boolean;
  disabled?: boolean;
  asChild?: boolean;
}
export const SingleControllerAccordion: React.FC<
  DefaultSingleAccordionProps
> = ({
  trigger,
  children,
  disabled,
  collapsible,
  type = "single",
  ...props
}) => {
  const [value, setValue] = React.useState(props.value ?? props.defaultValue);
  React.useEffect(() => {
    if (disabled) {
      setValue("");
    }
  }, [disabled]);

  const handleValueChange = (newValue: string) => {
    if (!disabled) {
      // Só muda o valor se não estiver desabilitado
      setValue(newValue);
      if (props.onValueChange) {
        props.onValueChange(newValue);
      }
    }
  };

  const triggerClass = disabled ? "cursor-not-allowed" : "";

  return (
    <Accordion
      type="single"
      collapsible={collapsible}
      className="w-full"
      value={value}
      onValueChange={handleValueChange}
      {...props}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger noArrow={props.noArrow} className={triggerClass}>
          {trigger}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const AccordionDefault: React.FC<DefaultAccordionProps> = ({
  trigger,
  children,
  collapsible = true,
  type = "single",
  noArrow = false,
  disabled = false,
  ...props
}) => {
  return (
    <Accordion
      type={type}
      collapsible={collapsible}
      disabled={disabled}
      className="w-full"
      {...props}
    >
      <AccordionItem value="item-1" disabled={disabled}>
        <AccordionTrigger noArrow={noArrow} disabled={disabled}>
          {trigger}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionDefault;
