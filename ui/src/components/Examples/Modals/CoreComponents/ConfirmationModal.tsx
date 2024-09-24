import { ConfirmationModal } from "../../../core/Modal";
import { ConfirmationModalProps } from "../../../core/Modal";

const ModalConfirmDemo: React.FC<ConfirmationModalProps> = ({
  isOpen = false,
  onClose,
  onConfirm,
  onCancel,
  onExtraAction,
  extraActionLabel,
  autoCloseTimeout,
  title = "Confirmation Modal",
  description = "Are you sure you want to proceed?",
  setIsOpen,
}) => {
  const handleConfirm = () => {
    console.log("Confirmed!");
    if (setIsOpen) setIsOpen(false);
    if (onConfirm) onConfirm();
  };

  const handleCancel = () => {
    console.log("Cancelled");
    if (setIsOpen) setIsOpen(false);
    if (onCancel) onCancel();
  };

  const handleExtraAction = () => {
    console.log("Extra Action triggered");
    if (setIsOpen) setIsOpen(false);
    if (onExtraAction) onExtraAction();
  };
  return (
    <>
      <ConfirmationModal
        title={title}
        description={description}
        isOpen={isOpen}
        onClose={() => {
          if (setIsOpen) setIsOpen(false);
          if (onClose) onClose();
        }}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onExtraAction={handleExtraAction}
        extraActionLabel={extraActionLabel}
        autoCloseTimeout={autoCloseTimeout}
      />
    </>
  );
};

export default ModalConfirmDemo;
