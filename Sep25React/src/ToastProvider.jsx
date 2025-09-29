import { createContext, useContext, useState } from "react";
import toasts from "./data";

const ToastContext = createContext();
export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
    const [currentToasts, setCurrentToasts] = useState(toasts);
    function addToast(obj) {
        let id = Date.now();
        const startTime = id;
        let position;
        if (obj.position) {
            position = obj.position;
        }
        else {
            position = "bottom-right"
        }
        const newToast = {
            id,
            startTime,
            position,
            content: obj.content,
            priority: obj.priority
        }
        setCurrentToasts((prevToasts) => [...prevToasts, newToast]);
    }
    const removeToast = (id) => {
        setCurrentToasts(prev => prev.filter(toast => toast.id !== id));
    };
    return (
        <ToastContext.Provider
            value={{
                addToast,
                removeToast,
                currentToasts
            }}
        >
            {children}
        </ToastContext.Provider>
    )
}