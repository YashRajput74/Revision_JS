import { useState } from "react";

const pageData = [
    "Apple", "Banana", "Mango", "Orange", "Pineapple",
    "Grapes", "Papaya", "Kiwi", "Strawberry", "Cherry",
    "Peach", "Watermelon", "Guava", "Plum", "Pear"
];

export default function PaginationComponent({ itemsPerPage = 5 }) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(pageData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = startIndex + itemsPerPage;
    const currentItems = pageData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    function PreviousPage() {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    }
    function NextPage() {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1)
        }
    }
    return (
        <div>
            <ul>
                {currentItems.map((data, index) => (
                    <li key={startIndex + index}>{data}</li>
                ))}
            </ul>
            <div>
                <button onClick={PreviousPage} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={NextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    )
}