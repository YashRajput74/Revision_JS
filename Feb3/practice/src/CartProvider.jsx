import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { CartReducer, initialCartState } from "./cartReducer";

export default function CartProvider({ children }) {
    const [state, dispatch] = useReducer(CartReducer, initialCartState);
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}