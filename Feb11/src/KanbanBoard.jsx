/* 
🧠 Machine Coding Question
Build a Kanban Board (Mini Trello)
Requirements:
You need to build a board with:

1️⃣ Columns:
Todo
In Progress
Done

2️⃣ Features:
Add a new task to any column
Edit task title (inline editing)
Delete task
Drag and drop tasks between columns
Persist data in localStorage
Tasks should maintain order inside column
While dragging:
Show visual placeholder
Maintain smooth UX

⚙️ Constraints
No external drag-drop library (like dnd-kit or react-beautiful-dnd)
Use native HTML5 drag and drop
Functional components only
Clean folder structure
No global state libraries (Redux not allowed)
Must handle re-renders efficiently
*/

import { useState } from "react";
import Column from "./Column";

const initialData = {
    columns: {
        todo: {
            id: "todo",
            title: "Todo",
            taskIds: ["t1", "t2"]
        },
        inprogress: {
            id: "inprogress",
            title: "In Progress",
            taskIds: []
        },
        done: {
            id: "done",
            title: "Done",
            taskIds: []
        }
    },
    tasks: {
        t1: { id: "t1", title: "Build UI" },
        t2: { id: "t2", title: "Connect localStorage" }
    }
}
let newId=1000;
export default function KanbanBoard() {
    const [data, setData] = useState(initialData);
    const [newTitle, setNewTitle] = useState("");
    const [selectedColumn, setSelectedColumn] = useState("todo");
    function handleAdd() {
        const id = `t${newId++}`;
        setData(prev => ({
            ...prev,
            tasks: {
                ...prev.tasks,
                [id]: {
                    id: id,
                    title: newTitle
                }
            },
            columns:{
                ...prev.columns,
                [selectedColumn]:{
                    ...prev.columns[selectedColumn],
                    taskIds: [
                        ...prev.columns[selectedColumn].taskIds,
                        id
                    ]
                }
            }
        }))
        setNewTitle("");
    }
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div>
                <label htmlFor="title">Add task</label>
                <input value={newTitle} id="title" onChange={(e) => setNewTitle(e.target.value)} placeholder="Enter task ttle" />
                <select id="select column" value={selectedColumn} onChange={(e) => setSelectedColumn(e.target.value)}>
                    {Object.values(data.columns).map((column) => (
                        <option key={column.id} value={column.id}>{column.title}</option>
                    ))}
                </select>
                <button onClick={handleAdd}>Add task</button>
            </div>

            {Object.values(data.columns).map((column) => {
                const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
                return (
                    <Column key={column.id} column={column} tasks={tasks} />
                )
            })}
        </div>
    )
}