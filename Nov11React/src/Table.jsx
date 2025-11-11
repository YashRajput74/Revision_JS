import { useState } from "react";
import TableHeadings from "./TableHeadings";

export default function Table({ data }) {
    const [sortedData, setSortedData] = useState(data);

    const handleSort = (colIndex, direction) => {
        const sorted = [...data];
        const keys = ["id", "name", "email", "age", "country", "joined"];

        if (colIndex === 0) {
            setSortedData(data);
            return;
        }

        const key = keys[colIndex];
        sorted.sort((a, b) => {
            if (a[key] < b[key]) return direction === 0 ? -1 : 1;
            if (a[key] > b[key]) return direction === 0 ? 1 : -1;
            return 0;
        });

        setSortedData(sorted);
    };

    return (
        <table>
            <thead>
                <TableHeadings onSort={handleSort} />
            </thead>
            <tbody>
                {sortedData.map((entry, index) => (
                    <tr key={entry.id}>
                        <td>{index + 1}</td>
                        <td>{entry.name}</td>
                        <td>{entry.email}</td>
                        <td>{entry.age}</td>
                        <td>{entry.country}</td>
                        <td>{entry.joined}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
