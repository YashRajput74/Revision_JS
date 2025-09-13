import { useEffect, useState } from "react";
import { categories, products } from "./data";

/* export function ProductTable() {
    return (
        <div className="table">
            {products.map((product,index)=>(
                <div className="card" key={index}>
                    {Object.entries(product).map(([key,value],idx)=>(
                        <p key={idx}>
                            {key}: {value}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
} */

export function ProductTable({ selectedCategory }) {
    const [availableProducts, setAvailableProducts] = useState([]);

    useEffect(() => {
        const productIds = categories[selectedCategory];
        const productObjects=productIds.map(id=>products[id]);
        setAvailableProducts(productObjects)
    }, [selectedCategory]);

    return (
        <div className="table">
            {availableProducts.map((value, index) => (
                <div className="card" key={index}>
                    {Object.entries(value).map(([k, val], idx) => (
                        <p key={idx}>
                            {k}: {val}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}