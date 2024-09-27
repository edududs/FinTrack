import * as React from "react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "src/components/core";

import { cn } from "src/lib/utils";


interface CommonSheetProps {
  trigger: React.ReactNode | string;
  title: string;
  description: string;
  children?: React.ReactNode;
  onCancel?: () => void;
  onSave?: () => void;
  cancelText?: string;
  saveText?: string;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
  headerClassName?: string;
  footerClassName?: string;
  titleClassName?: string;
  footer?: React.ReactNode | string;
  closeTrigger?: React.ReactNode;
  triggerClassName?: string;
}

export const CommonSheet: React.FC<CommonSheetProps> = ({
  trigger,
  title,
  description,
  children,
  onCancel,
  onSave,
  cancelText = "Cancel",
  saveText = "Save",
  side = "right",
  className,
  triggerClassName,
  headerClassName,
  footerClassName,
  titleClassName,
  footer,
  closeTrigger,
}) => {
  return (
    <Sheet>
      <SheetTrigger className={cn(triggerClassName)}>{trigger}</SheetTrigger>
      <SheetContent side={side} className={cn(className)}>
        <SheetHeader className={cn(headerClassName)}>
          <SheetTitle className={cn(titleClassName)}>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        {children && <div className="p-4">{children}</div>}
        {footer ? (
          <SheetFooter className={cn(footerClassName)}>
            <SheetClose asChild>{footer}</SheetClose>
          </SheetFooter>
        ) : (
          <SheetFooter className={cn(footerClassName)}>
            <SheetClose asChild>
              <Button variant="outline" onClick={onCancel}>
                {cancelText}
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button onClick={onSave}>{saveText}</Button>
            </SheetClose>
          </SheetFooter>
        )}

        {closeTrigger && <SheetClose asChild>{closeTrigger}</SheetClose>}
      </SheetContent>
    </Sheet>
  );
};