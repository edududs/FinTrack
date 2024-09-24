import { useState } from "react";
import Button from "../../core/Button";
import ModalConfirmDemo from "./CoreComponents/ConfirmationModal";

const DemoConfirmationModal: React.FC = ({}) => {
  // Estado para controlar o modal
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // Função que abre o modal, garantindo que o botão controle o modal, não o acordeão
  const handleOpenModal = (event: React.MouseEvent) => {
    event.stopPropagation(); // Evita que o clique no botão propague para o acordeão
    setIsConfirmationOpen(true);
  };

  // Função que fecha o modal
  const handleCloseModal = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal} className="w-full">
        Open Confirmation Modal
      </Button>
      {/* Modal é renderizado apenas quando isConfirmationOpen é true */}
      {isConfirmationOpen && (
        <ModalConfirmDemo
          isOpen={isConfirmationOpen}
          onClose={handleCloseModal}
          setIsOpen={setIsConfirmationOpen} // Função para fechar o modal
        />
      )}
    </>
  );
};

export default DemoConfirmationModal;
