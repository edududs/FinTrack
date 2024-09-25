// DefaultAccordion.tsx
import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./AccordionBase";

import { cn } from "src/lib/utils";

export interface CommonAccordionProps {
  trigger?: string | React.ReactNode;
  children?: React.ReactNode;
  collapsible?: boolean;
  noArrow?: boolean;
  disabled?: boolean;
  asChild?: boolean;
  accordionClassName?: string;
  contentClassName?: string;
  triggerClassName?: string;
  style?: React.CSSProperties;
}

export interface DefaultSingleAccordionProps extends CommonAccordionProps {
  type?: "single";
  defaultValue?: string;
  value?: string;
  onValueChange?(value: string): void;
  dir?: "ltr" | "rtl";
  orientation?: "vertical" | "horizontal";
}

export interface DefaultAccordionProps extends CommonAccordionProps {
  type?: "single" | "multiple";
}

export const SingleControllerAccordion: React.FC<
  DefaultSingleAccordionProps
> = ({
  trigger,
  children,
  disabled,
  collapsible,
  type = "single",
  noArrow,
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
      setValue(newValue);
      if (props.onValueChange) {
        props.onValueChange(newValue);
      }
    }
  };

  const triggerClass = cn(
    disabled ? "cursor-not-allowed" : "",
    props.triggerClassName
  );

  return (
    <Accordion
      type="single"
      collapsible={collapsible}
      className={cn("w-full", props.accordionClassName)}
      value={value}
      onValueChange={handleValueChange}
      {...props}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger noArrow={noArrow} className={triggerClass}>
          {trigger}
        </AccordionTrigger>
        <AccordionContent className={props.contentClassName}>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const AccordionDefault: React.FC<DefaultAccordionProps> = ({
  trigger,
  children,
  collapsible = true,
  type = "single",
  noArrow = false,
  disabled = false,
  accordionClassName,
  ...props
}) => {
  return (
    <Accordion
      type={type}
      collapsible={collapsible}
      disabled={disabled}
      className={cn("w-full", accordionClassName)}
      {...props}
    >
      <AccordionItem value="item-1" disabled={disabled}>
        <AccordionTrigger
          noArrow={noArrow}
          disabled={disabled}
          className={props.triggerClassName}
        >
          {trigger}
        </AccordionTrigger>
        <AccordionContent className={props.contentClassName}>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
