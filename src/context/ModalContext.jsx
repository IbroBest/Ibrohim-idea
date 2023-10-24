import { createContext, useState } from "react";
export const ModalContext = createContext(null);
export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [parOpen,setParOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const openParModal = () => {
    setParOpen(true);
    closeModal(true)
  };
  const closeParModal = () => {
    setParOpen(false);
  };
  const closeAllModal = () => {
    setParOpen(false);
    setOpen(false)
  };
  return (
    <ModalContext.Provider value={{ open, openModal, closeModal,openParModal,closeParModal ,closeAllModal,parOpen}}>
      {children}
    </ModalContext.Provider>
  );
};
