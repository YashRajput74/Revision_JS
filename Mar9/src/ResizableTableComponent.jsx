import { useEffect, useState } from "react";

const dataSet = [
    { name: "Sandhya", role: "Frontend", experience: 2 },
    { name: "Yash", role: "Backend", experience: 3 },
    { name: "Abhishek", role: "Fullstack", experience: 4 }
];

export default function ResizableTableComponent() {
    const [columnWidth, setColumnWidth] = useState({});
    const [resizingColumn, setResizingColumn] = useState(null);
    const [startX, setStartX] = useState(0);
    const [startWidth, setStartWidth] = useState(0);
    const columns = Object.keys(dataSet[0]);
    const handleResizeStart = (e, column) => {
        setResizingColumn(column);
        setStartX(e.clientX);
        setStartWidth(columnWidth[column] || 150)
    }
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!resizingColumn) return;
            const diff = e.clientX - startX;
            setColumnWidth(prev => ({
                ...prev,
                [resizingColumn]: Math.max(startWidth + diff, 80)
            }))
        }
        const handleMouseUp = () => {
            setResizingColumn(null);
        }
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
    }, [resizingColumn, startX, startWidth]);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column} style={{ padding: "4px", border: "1px solid black", width: `${columnWidth[column] || 150}px`, position: "relative" }}>
                                {column}
                                <div onMouseDown={(e) => handleResizeStart(e, column)} style={{ position: "absolute", right: "0", top: "0", width: "6px", height: "100%", cursor: "col-resize" }}>

                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSet.map((row, index) => (
                        <tr key={index}>
                            {columns.map(column => (
                                <td key={column} style={{ padding: "4px", border: "1px solid black" }}>
                                    {row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}