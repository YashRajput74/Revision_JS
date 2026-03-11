import { useState } from "react"

/* 
Build: Schema‑Driven Dynamic Table (Like Airtable / Admin Panels)
You will receive a schema + data, and your table should render dynamically.
Example Schema
const schema = [
  { key: "name", label: "Name", type: "text" },
  { key: "age", label: "Age", type: "number" },
  { key: "role", label: "Role", type: "select", options: ["FE", "BE", "FS"] }
]
Example Data
[
  { id: 1, name: "Yash", age: 25, role: "FE" },
  { id: 2, name: "Kritika", age: 24, role: "FE" }
]
✅ Core Requirements
1️⃣ Render table dynamically from schema
2️⃣ Inline cell editing
Click cell → edit mode
Input type based on schema type
3️⃣ Save on blur / Enter
4️⃣ Add new row
5️⃣ Delete row

⚡ Advanced Requirements
Column sorting
Column filtering
Persist data in localStorage
Avoid full table re‑render on single cell edit
Handle 1000+ rows smoothly
*/
const schema = [
    { key: "name", label: "Name", type: "text" },
    { key: "age", label: "Age", type: "number" },
    { key: "role", label: "Role", type: "select", options: ["FE", "BE", "FS"] }
]

const data = [
    { id: 1, name: "Yash", age: 25, role: "FE" },
    { id: 2, name: "Kritika", age: 24, role: "FE" }
]

export default function SchemaDrivenTable() {
    const [currentData, setCurrentData] = useState(data);
    const [editingCell, setEditingCell] = useState(null);
    const handleChange=(rowIndex,key,value)=>{
        const updated=[...currentData];
        updated[rowIndex]={
            ...updated[rowIndex],
            [key]:value
        }
        setCurrentData(updated)
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "80px", border: "1px solid black" }}>S.no.</th>
                        {schema.map(entry => (
                            <th key={entry.key} style={{ width: "80px", border: "1px solid black" }}>{entry.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row, rowIndex) => (
                        <tr key={row.id}>
                            <td style={{ width: "80px", border: "1px solid black" }}>
                                {rowIndex + 1}
                            </td>
                            {schema.map((col, colIndex) => {
                                const isEditing = editingCell?.row === rowIndex && editingCell?.col === colIndex
                                return (
                                    <td key={colIndex} onClick={() => setEditingCell({ row: rowIndex, col: colIndex })}>
                                        {isEditing ? (col.type === "select" ? (
                                            <select value={row[col.key]} onChange={(e) => handleChange(rowIndex, col.key, e.target.value)} onBlur={() => setEditingCell(null)}>
                                                {col.options.map(opt => (
                                                    <option key={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input type={col.type} value={row[col.key]} onBlur={() => setEditingCell(null)} onChange={(e) => handleChange(rowIndex, col.key, e.target.value)} />
                                        )) : (row[col.key])}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}