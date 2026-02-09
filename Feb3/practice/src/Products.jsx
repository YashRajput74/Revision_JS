import { useContext } from "react";
import { CartContext } from "./CartContext";

const products = [
    { id: 1, name: "Apple", price: 30 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Orange", price: 20 }
];

export default function Products() {
    const { dispatch } = useContext(CartContext);
    return (
        <div>
            <ul>

                {products.map((product) => (
                    <li>{product.name}-{product.price}
                        <button onClick={() => dispatch({ type: "Add_item", payload: product })}>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}