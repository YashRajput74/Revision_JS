import { useState } from "react"

const initialState = {
    columns: {
        todo: { id: "todo", title: "Todo", taskIds: ["1", "2", "3"] },
        inProgress: { id: "inProgress", title: "In Progress", taskIds: ["4", "5"] },
        done: { id: "done", title: "Done", taskIds: ["6"] }
    },

    tasks: {
        "1": { id: "1", content: "Start coding" },
        "2": { id: "2", content: "Practice DSA" },
        "3": { id: "3", content: "Read system design" },
        "4": { id: "4", content: "Build Kanban UI" },
        "5": { id: "5", content: "Implement drag & drop" },
        "6": { id: "6", content: "Deploy project" }
    }
}
let id = 7;
export default function MemoryKanban() {
    const [data, setData] = useState(initialState);
    const [taskInput, setTaskInput] = useState('');
    const [select, setSelect] = useState('todo');
    const handleClick = () => {
        newId = String(id++);
        const newTask = {
            id: newId,
            content: taskInput
        }
        setData((prev) => ({
            columns: {
                ...prev.columns,
                [select]: {
                    ...prev.columns[select],
                    taskIds: [...prev.columns[select].taskIds, newId]
                }
            },
            tasks: {
                ...prev.tasks,
                [newId]: newTask
            }
        }))
        setTaskInput('')
    }
    const handleEdit = (taskId, newContent) => {
        setData((prev) => ({
            ...prev,
            tasks: {
                ...prev.tasks,
                [taskId]: {
                    ...prev.tasks[taskId],
                    content: newContent
                }
            }
        }));
    };
    const handleDelete = (taskId, columnId) => {
        setData((prev) => ({
            ...prev,
            tasks: Object.fromEntries(
                Object.entries(prev.tasks).filter(([id]) => id !== taskId)
            ),
            columns: {
                ...prev.columns,
                [columnId]: {
                    ...prev.columns[columnId],
                    taskIds: prev.columns[columnId].taskIds.filter((id) => id !== taskId)
                }
            }
        }));
    };
    return (
        <div>
            <div>
                <label htmlFor="input">Add task: </label>
                <input type="text" id="input" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="add a task" />
                <select id="columns-select" onChange={(e) => setSelect(e.target.value)}>
                    {Object.values(data.columns).map((column) => (
                        <option key={column.id} value={column.id}>{column.title}</option>
                    ))}
                </select>
                <button onClick={handleClick}>Add</button>
            </div>
            <div className="columns" style={{ display: "flex" }}>
                {Object.values(data.columns).map((column) => (
                    <div style={{ padding: "auto 20px", border: "1px solid black" }} key={column.id}>
                        <h4>{column.title}</h4>
                        {column.taskIds.map((task) => (
                            <p key={task}>{data.tasks[task].content}
                                <button onClick={() => handleEdit(task, prompt("New content"))}>Edit</button>
                                <button onClick={() => handleDelete(task, column.id)}>Delete</button>
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}