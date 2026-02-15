import { useState } from "react";

const initialItems = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes"
];

export default function DragDropList() {
    const [items, setItems] = useState(initialItems);
    const [dragIndex, setDragIndex] = useState(null);

    const handleDragStart = (index) => {
        setDragIndex(index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    
    const handleDrop = (dropIndex) => {
        if (dragIndex === null) return;

        const updatedItems = [...items];
        const draggedItem = updatedItems[dragIndex];

        updatedItems.splice(dragIndex, 1);

        updatedItems.splice(dropIndex, 0, draggedItem);

        setItems(updatedItems);
        setDragIndex(null);
    };
    return (
        <ul>
            {items.map((item,index) =>
                <li
                    key={item}
                    draggable onDragStart={() => handleDragStart(index)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}>
                    {item}
                </li>)
            }
        </ul>
    )
}