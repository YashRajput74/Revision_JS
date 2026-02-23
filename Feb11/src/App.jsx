import { useEffect, useState } from "react";
import Todo from "./Todo";
import CustomDropdown from "./CustomDropdown";
import NewComponent from "./NewComponent";
import BasicComponent from "./BasicComponent";
import DragDropList from "./DragDropList";
import MultiSelectDropDown from "./MultiSelectDropDown";
import DebounceSearch from "./DebounceSearch";
import NewMultiSelect from "./NewMultiSelect";
import KanbanBoard from "./KanbanBoard";
import LengthyTable from "./LengthyTable";
import ModalProvider, { useModal } from "./ModalContext";
import SplitPane from "./SplitPane";
import CommandPallete from "./CommandPallete";

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
    return (
        <ModalProvider>
            <AppContent />
        </ModalProvider>
    )
}
export function AppContent() {
    const [currentFilter, setCurrentFilter] = useState('');
    const { open, close } = useModal();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
    const openModal = () => {
        open(
            <div>
                <h2>This is a modal</h2>
                <p>Modal close karne ke liye button dabayein</p>
                <button onClick={close}>Close</button>
            </div>
        )
    }
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
            <MultiSelectDropDown />
            <br /><br /><br /><br /><br />
            <DebounceSearch />
            <br /><br /><br /><br /><br />
            <NewMultiSelect />
            <KanbanBoard />
            <LengthyTable />
            <button onClick={openModal}>Open Modal</button>
            <br /><br /><br /><br /><br />
            <SplitPane />
            <br /><br /><br /><br /><br />
            {isOpen && <CommandPallete isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </div>
    )
}