import { useState } from "react";
import ModalBaseDemo from "./CoreComponents/BaseModal";
import ModalConfirmDemo from "./CoreComponents/ConfirmationModal";
import Button from "../../core/Button";

export const DemoModal: React.FC<{ className?: string }> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full"
        variant="secondary"
      >
        Open Base Modal
      </Button>
      <ModalBaseDemo isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export const DemoConfirmationModal: React.FC = () => {
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
        Abrir Modal de Confirmação
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
