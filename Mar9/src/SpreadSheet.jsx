import { useState } from "react";

const initialGrid = Array.from({ length: 20 }, (_, rowIndex) => {
    const row = {};
    for (let col = 0; col < 10; col++) {
        const colLabel = String.fromCharCode(65 + col);
        row[colLabel] = "";
    }
    return row;
});

export default function SpreadSheet() {
    const [currentGrid, setCurrentGrid] = useState(initialGrid);
    const [editingCell, setEditingCell] = useState(null);
    const columns = Object.keys(initialGrid[0]);
    function updateCell(rowIndex, columnIndex, value) {
        setCurrentGrid(prevGrid => {
            const newGrid = [...prevGrid];
            newGrid[rowIndex] = { ...newGrid[rowIndex], [columnIndex]: value };
            return newGrid;
        })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th style={{ padding: "10px", width: "150px", border: "1px solid black" }}></th>
                        {columns.map(col => <th key={col} style={{ padding: "10px", width: "150px", border: "1px solid black" }}>{col}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {currentGrid.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <th style={{ padding: "10px", border: "1px solid black" }}>{rowIndex + 1}</th>
                            {columns.map(col => (
                                <td key={col} style={{ padding: "10px", width: "150px", border: "1px solid black" }} onClick={() => setEditingCell({ row: rowIndex, col })}>
                                    {editingCell?.row === rowIndex && editingCell.col === col ? (
                                        <input type="text" style={{width: "150px", height: "100%"}} value={currentGrid[rowIndex][col]} onChange={(e) => updateCell(rowIndex, col, e.target.value)} onBlur={() => setEditingCell(null)} onKeyDown={(e) => {
                                            if (e.key === "Enter") setEditingCell(null);
                                        }} />
                                    ) : row[col]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}