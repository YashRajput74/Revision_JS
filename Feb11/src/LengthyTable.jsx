import { useState } from "react";

const columns = [{ key: "name", label: "Name" }, { key: "age", label: "Age" }]
const data = [{ id: 1, name: "John", age: 24 }, { id: 2, name: "Abhishek", age: 27 },]


export default function LengthyTable() {
    const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });
    const handleSort = (key) => {
        setSortConfig((prev) => {
            if (!prev || prev.key !== key) return {key,direction:"asc"}
            if (prev.direction==="asc") return {key, direction: "dsc"};
            if (prev.direction==="dsc") return {key, direction: "asc"};
        })
    }
    let sortedData = [...data];
    if (sortConfig) {
        const { key, direction } = sortConfig;
        sortedData.sort((a, b) => {
            if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
            if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
            return 0;
        })
    }
    return (
        <div>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} onClick={() => handleSort(column.key)}>{column.label} {sortConfig?.key === column.key &&
                                (sortConfig.direction === "asc" ? " 🔼" : " 🔽")}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row) => (
                        <tr key={row.id}>
                            {columns.map((column) => (
                                <td key={column.key}>{row[column.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}