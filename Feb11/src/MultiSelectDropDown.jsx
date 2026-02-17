import { useState } from "react";

const initialFruits = [
    { id: 1, label: "Apple", isSelected: false },
    { id: 2, label: "Banana", isSelected: false },
    { id: 3, label: "Orange", isSelected: false },
    { id: 4, label: "Mango", isSelected: false },
    { id: 5, label: "Grapes", isSelected: false },
    { id: 6, label: "Pineapple", isSelected: false },
    { id: 7, label: "Strawberry", isSelected: false },
    { id: 8, label: "Watermelon", isSelected: false }
];

export default function MultiSelectDropDown() {
    const [data, setData] = useState(initialFruits);
    const [isShown, setIsShown] = useState(false);
    const selectedFruits= data.filter(fruit=>fruit.isSelected);
    const toggleFruit = (id)=>{
        setData(prev=>prev.map(fruit=>fruit.id===id?{...fruit, isSelected: !fruit.isSelected}:fruit));
    }

    return (
        <div>
            <button style={{ width: "fit-content", border: "1px solid black" }} onClick={()=>setIsShown(true)}>
                {selectedFruits.length>0 ? selectedFruits.map(fruit=><span style={{border: "1px solid black", margin: "0px 2px"}}>{fruit.label}</span>): "Select fruits"}
            </button>
            {isShown && (
                data.map((fruit)=>(
                    <div key={fruit.id}>
                        <input type="checkbox" name={fruit.label} id={fruit.label} checked={fruit.isSelected} onChange={()=>toggleFruit(fruit.id)}/>
                        <label htmlFor={fruit.label}>{fruit.label}</label>
                    </div>
                ))
            )}
        </div>
    )
}