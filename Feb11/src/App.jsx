import { useState } from "react";
import Todo from "./Todo";
import CustomDropdown from "./CustomDropdown";
import NewComponent from "./NewComponent";
import BasicComponent from "./BasicComponent";
import DragDropList from "./DragDropList";

/* 
Data Table Component (Very Powerful for Interviews)
Features:
Sorting
Filtering
Pagination
Column configuration
Custom renderers
Loading states
Empty states
*/
const students = [
    { id: 1, name: 'Yash', rollno: '20002' },
    { id: 2, name: 'Abhishek', rollno: '20003' },
    { id: 3, name: 'Kritika', rollno: '20004' },
    { id: 4, name: 'Sandhya', rollno: '20005' },
    { id: 5, name: 'Saloni', rollno: '20006' },
]

export default function App() {
    const [currentFilter, setCurrentFilter] = useState('');

    const filteredData = students.filter((student) => (
        student.name.toLowerCase().includes(currentFilter.toLowerCase())
    ));

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="names">Filter: </label>
                <input id="names" value={currentFilter} placeholder="Filter by name" onChange={(e) => setCurrentFilter(e.target.value)} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Roll no.</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((student) => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.rollno}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Todo />
            <CustomDropdown />
            <NewComponent />
            <BasicComponent />
            <DragDropList />
        </div>
    )
}