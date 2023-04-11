import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

const modalEmptyState = {
  isOpen: false,
  modalTitle: "",
  children: "",
}

const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState(modalEmptyState);

  const openModal = (modalTitle, children) => {
    setModalState({
      isOpen: true,
      modalTitle,
      children,
    })
  }

  const closeModal = () => {
    setModalState(modalEmptyState);
  };

  return (
    <ModalContext.Provider value={{ modalState, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
