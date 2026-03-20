/* 
Drag & Drop Form Builder (Like Google Forms UI)
🎯 Goal
Create a UI where users can build forms by dragging fields.

✅ Core Requirements
1️⃣ Field Palette
Left side:

Text Input
Number Input
Dropdown
Checkbox
2️⃣ Drag & Drop
User drags a field → drops into form area

👉 Field should get added to form

3️⃣ Render Form
Form area shows:

[Text Input]
[Dropdown]
Based on added fields.

4️⃣ Edit Field
Click field → edit properties:

label

placeholder

options (for dropdown)

⚡ Advanced Requirements
5️⃣ Reorder Fields
Drag to rearrange:

Field 1
Field 2  → move above
Field 3
6️⃣ Delete Field
Remove from form

7️⃣ Persist Schema
Save form structure in:

localStorage
🚀 Edge Cases
Drag outside drop area

Fast drag/drop

Duplicate fields

Editing while reordering

Large forms (20–30 fields)

🏗 Expected Structure
FormBuilder
   ├── FieldPalette
   ├── Canvas (drop area)
   ├── FieldRenderer
   └── Schema state
*/

import { useState } from "react"

const initialFields = [
   { type: "text", label: "Text Input", placeholder: "Enter text" },
   { type: "number", label: "Number Input", placeholder: "Enter number" },
   { type: "dropdown", label: "Dropdown", options: ["Option 1", "Option 2"] },
   { type: "checkbox", label: "Checkbox" },
];

export default function FormBuilder() {
   const [feilds, setFeilds] = useState([]);
   const [selectedId, setSelectedId] = useState(null);
   function handleDrag(e, type) {
      e.dataTransfer.setData("type", type)
   }
   function handleDrop(e) {
      const type = e.dataTransfer.getData("type");
      const newFeild = {
         id: Date.now(),
         type,
         label: type.toUpperCase(),
         placeholder: "",
         options: ["option1", "option2", "option3"]
      }
      setFeilds((prev) => [...prev, newFeild]);
   }
   function handleDragOver(e) {
      e.preventDefault();
   }
   return (
      <div>
         <section className="sidebar" style={{ border: "1px solid black" }}>
            {initialFields.map((feild, index) => (
               <div style={{ padding: "5px" }}>
                  <div key={`${feild, index}`} draggable onDragStart={(e) => handleDrag(e, feild.type)}>{feild.label}</div>
               </div>
            ))}
         </section>
         <main onDrop={handleDrop} onDragOver={handleDragOver} style={{border: "1px solid black", width: "100%", height: "500px"}}>
            {feilds.map((feild) => (
               <div>
                  <label>{feild.label}</label>
                  {feild.type === "text" && <input type="text" placeholder={feild.placeholder}/>}
                  {feild.type === "number" && <input type="number" placeholder={feild.placeholder}/>}
                  {feild.type === "dropdown" && (
                     <select>
                        {feild.options.map((opt,index)=>(
                           <option value={opt} key={index}>{opt}</option>
                        ))}
                     </select>
                  )}
                  {feild.type==="checkbox" && <input type="checkbox"/>}

               </div>
            ))}
         </main>
      </div>
   )
}