import { useState } from "react";

const data = ["HTML", "CSS", "JavaScript", "React", "Node"];

export default function NewMultiSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const toggleItem = (item)=>{
        setSelectedItems((prev)=>prev.includes(item)?prev.filter((i)=>i!==item):[...prev,item])
    }
    return (
        <div>
            <button onClick={() => setIsOpen((prev) => !prev)}>
                {selectedItems.length>0 ? selectedItems.map((item)=><span style={{margin: "0px 2px"}}>{item}</span>): "Select Skills"}
            </button>
            {isOpen && data.map((item,index) => (
                <div key={`${item}-${index}`}>
                    <input type="checkbox" name={item} id={item} checked={selectedItems.includes(item)} onChange={()=>toggleItem(item)}/>
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
    )
}