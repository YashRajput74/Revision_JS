import { createContext, useContext, useState } from "react";
import Modal from "./Modal";

export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState(null);

    const open = (modalContent) => {
        setContent(modalContent);
        setIsOpen(true);
    }

    const close = () => {
        setIsOpen(false);
        setContent(null);
    }

    return (
        <ModalContext.Provider value={{ open, close }}>
            {children}
            <Modal isOpen={isOpen} onClose={close}>
                {content}
            </Modal>
        </ModalContext.Provider>
    )
};