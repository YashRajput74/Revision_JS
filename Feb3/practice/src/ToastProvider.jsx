import { useState } from "react";
import { ToastContext } from "./ToastContext";
import Toast from "./Toast";

let id = 0;
export default function ToastProvider({ children }) {
    const [toast, setToast] = useState([]);

    const showToast = ({ message, type = 'info' }) => {
        const toastId = id;
        id++;
        setToast(prev => [...prev, { id: toastId, message, type }])
        setTimeout(() => {
            setToast(prev => prev.filter(t => t.id !== toastId))
        }, 3000);
    }

    const removeToast = (toastId) => {
        setToast((prev) => prev.filter(t => t.id != toastId));
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast toast={toast} onClose={removeToast} />
        </ToastContext.Provider>
    )
}