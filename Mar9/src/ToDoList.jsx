import { useState } from "react";

const initialTasks = {
    tasks: {
        "task1": {
            id: "task1",
            content: "Start the coding round",
            createdAt: "2026-03-09T10:30:00Z",
            createdBy: "user1"
        },
        "task3": {
            id: "task3",
            content: "Start the coding compilation",
            createdAt: "2026-03-09T10:30:00Z",
            createdBy: "user1"
        },
    },
    columns: {
        pending: {
            id: "pending",
            title: "Pending",
            taskIds: ["task3"]
        },
        completed: {
            id: "completed",
            title: "Completed",
            taskIds: ["task1"]
        }
    }
}
export default function ToDoList() {
    const [data, setData] = useState(initialTasks);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (!taskInput.trim()) return;

        const newId = "task" + Date.now();

        const newTask = {
            id: newId,
            content: taskInput,
            createdAt: new Date().toISOString(),
            createdBy: "user1"
        };

        setData(prev => ({
            tasks: {
                ...prev.tasks,
                [newId]: newTask
            },
            columns: {
                ...prev.columns,
                pending: {
                    ...prev.columns.pending,
                    taskIds: [...prev.columns.pending.taskIds, newId]
                }
            }
        }));

        setTaskInput("");
    };

    const deleteTask = (taskId) => {
        const newTasks = { ...data.tasks };
        delete newTasks[taskId];

        const newPending = data.columns.pending.taskIds.filter(id => id !== taskId);
        const newCompleted = data.columns.completed.taskIds.filter(id => id !== taskId);

        setData({
            tasks: newTasks,
            columns: {
                pending: { ...data.columns.pending, taskIds: newPending },
                completed: { ...data.columns.completed, taskIds: newCompleted }
            }
        });
    };
    
    const markAsCompleted = (taskId) => {
        const newPending = data.columns.pending.taskIds.filter(id => id !== taskId);

        setData({
            ...data,
            columns: {
                pending: { ...data.columns.pending, taskIds: newPending },
                completed: {
                    ...data.columns.completed,
                    taskIds: [...data.columns.completed.taskIds, taskId]
                }
            }
        });
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>ToDo List</h2>

            <input
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Enter new task"
            />
            <button onClick={addTask}>Add Task</button>

            <div style={{ display: "flex", gap: "40px", marginTop: "30px" }}>

                <div>
                    <h3>Pending</h3>
                    {data.columns.pending.taskIds.map((taskId) => {
                        const task = data.tasks[taskId];

                        return (
                            <div key={task.id} style={{ marginBottom: "10px" }}>
                                <span>{task.content}</span>
                                <button onClick={() => markAsCompleted(task.id)} style={{ marginLeft: "10px" }}>
                                    Complete
                                </button>
                                <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "5px" }}>
                                    Delete
                                </button>
                            </div>
                        );
                    })}
                </div>

                <div>
                    <h3>Completed</h3>
                    {data.columns.completed.taskIds.map((taskId) => {
                        const task = data.tasks[taskId];

                        return (
                            <div key={task.id} style={{ marginBottom: "10px" }}>
                                <span>{task.content}</span>
                                <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>
                                    Delete
                                </button>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}