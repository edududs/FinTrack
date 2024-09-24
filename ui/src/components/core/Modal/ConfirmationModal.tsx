import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogPortal,
  AlertDialogOverlay,
} from "../AlertDialog";

export interface ConfirmationModalProps {
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  extraActionLabel?: string;
  onExtraAction?: () => void;
  autoCloseTimeout?: number;
  setIsOpen?: (isOpen: boolean) => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
  isOpen,
  onClose,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  extraActionLabel,
  onExtraAction,
  autoCloseTimeout,
}) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (autoCloseTimeout && open) {
      const timeoutId = setTimeout(() => {
        setOpen(false);
        if (onClose) onClose();
      }, autoCloseTimeout);

      return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or open change
    }
  }, [autoCloseTimeout, open, onClose]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>{description}</AlertDialogDescription>
          <AlertDialogFooter>
            {onExtraAction && extraActionLabel && (
              <AlertDialogAction onClick={onExtraAction}>
                {extraActionLabel}
              </AlertDialogAction>
            )}
            <AlertDialogAction onClick={onConfirm}>
              {confirmLabel}
            </AlertDialogAction>
            <AlertDialogCancel onClick={onCancel}>
              {cancelLabel}
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};

export default ConfirmationModal;
