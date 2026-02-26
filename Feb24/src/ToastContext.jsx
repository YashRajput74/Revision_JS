import { createContext, useContext, useReducer, useState } from "react";

const ToastContext = createContext();

function toastReducer(state,action){
    switch (action.type){
        case "Add_Notification": {
            const newNotification={
                id:1,
                read:false,
                createdAt: Date.now(),
                ...action.payload
            }
        }
    }
}

export default function ToastProvider({ children }) {
    const [state, dispatch] = useReducer();
    return (
        <ToastContext.Provider value>
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext);