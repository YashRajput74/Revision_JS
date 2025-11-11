import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function TableHeadings({ onSort }) {
    const [sorting, setSorting] = useState([-1, -1, -1, -1, -1, -1]);

    const handleSort = (index) => {
        if (index === 0) return;

        setSorting((prev) => {
            const newSort = [-1, -1, -1, -1, -1, -1];
            newSort[index] = prev[index] === 0 ? 1 : 0; 
            onSort(index, newSort[index]);
            return newSort;
        });
    };

    const columns = ["S.no.", "Name", "Email", "Age", "Country", "Joined Date"];

    const getIcon = (index) => {
        if (index === 0) return null;
        if (sorting[index] === 0) return faArrowUp;
        if (sorting[index] === 1) return faArrowDown;
        return faArrowUp;
    };

    return (
        <tr>
            {columns.map((col, index) => (
                <th
                    key={index}
                    onClick={() => handleSort(index)}
                    style={{ cursor: index === 0 ? "default" : "pointer" }}
                >
                    {col}{" "}
                    {index !== 0 && (
                        <>
                            <FontAwesomeIcon
                                icon={getIcon(index)}
                                style={{ opacity: sorting[index] === -1 ? 0.5 : 1 }}
                            />{" "}
                            <FontAwesomeIcon icon={faFilter} />
                        </>
                    )}
                </th>
            ))}
        </tr>
    );
}
