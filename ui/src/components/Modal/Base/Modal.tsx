import React from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogPortal,
  AlertDialogFooter,
} from "../../AlertDialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { AlertDialogHeader } from "../../AlertDialog";

export interface BasicModalProps {
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  footerButtons?: React.ReactNode;
  showCloseButton?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const BasicModal: React.FC<BasicModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
  footerButtons,
  showCloseButton = true,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        {/* Pode ser estilizado */}
        <AlertDialogContent>
          {/* Cabeçalho do Modal */}
          <AlertDialogHeader>
            <div className="flex flex-row justify-between">
              <AlertDialogTitle>{title}</AlertDialogTitle>
              {showCloseButton && (
                <button onClick={onClose}>
                  <Cross2Icon />
                </button>
              )}
            </div>
          </AlertDialogHeader>

          {/* Descrição, caso fornecida */}
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}

          {/* Conteúdo Dinâmico no corpo do modal */}
          <>{children}</>

          {/* Rodapé com botões */}
          <AlertDialogFooter>
            {footerButtons ? (
              footerButtons
            ) : (
              <>
                <AlertDialogAction>Confirm</AlertDialogAction>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};

export default BasicModal;
