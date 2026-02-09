import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
    const { state } = useContext(CartContext);
    const { items, totalItems, totalPrice } = state;
    return (
        <div>
            <h3>Cart box</h3>
            {items.length==0 && <p>Cart is empty</p>}
            <ul>
                {items.map((item)=>(
                    <li>{item.name}-{item.price}*{item.quantity}</li>
                ))}
            </ul>
            <p>total items: {totalItems}</p>
            <p>total: {totalPrice}</p>
        </div>
    )
}