import BasicModal, { BasicModalProps } from "../../../core/Modal/Base/Modal";
import Button from "../../../core/Button";
import { Input } from "../../../core/Input";

const ModalBaseDemo: React.FC<BasicModalProps> = ({
  isOpen,
  onClose,
  setIsOpen,
}) => {
  const handleCancel = () => {
    console.log("Cancelled");
    if (setIsOpen) setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      <BasicModal
        title="My Custom Modal"
        isOpen={isOpen}
        onClose={handleCancel}
        footerButtons={
          <>
            <Button
              variant="outline"
              onClick={() => console.log("Custom Button Clicked")}
            >
              Custom Action
            </Button>
            <Button onClick={handleCancel}>Close</Button>
          </>
        }
      >
        <div className="flex flex-col items-center">
          <p>This is a custom form element inside the modal.</p>
          <div className="w-[30%]">
            <Input type="text" placeholder="Type something..." />
          </div>
        </div>
      </BasicModal>
    </>
  );
};

export default ModalBaseDemo;
