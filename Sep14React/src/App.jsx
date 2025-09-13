import { ProductTable } from "./ProductTable";
import './App.css'
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    return (
        <div className="app">
            <Dropdown category={setSelectedCategory}/>
            <ProductTable selectedCategory={selectedCategory}/>
        </div>
    )
}