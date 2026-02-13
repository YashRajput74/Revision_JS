import { useState } from "react"

const tasksProvided = [
    { id: 1, taskName: 'Filter Water', isCompleted: false },
    { id: 2, taskName: 'Water Plants', isCompleted: true },
    { id: 3, taskName: 'Drink Water', isCompleted: false },
    { id: 4, taskName: 'Dive in Water', isCompleted: true },
]

export default function Todo() {
    const [tasks, setCurrentTasks] = useState(tasksProvided);
    const [input, setInput] = useState('');
    /* 
    add, delete, mark as completed
    */
    function handleTaskToggle(task) {
        setCurrentTasks(tasks.map((t) => t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t))
    }
    function handleAddTask() {
        const newTask = {
            id: Date.now(),
            taskName: input,
            isCompleted: false
        }
        setCurrentTasks([...tasks, newTask]);
    }
    function deleteTask(task){
        setCurrentTasks(tasks.filter((t)=>t.id!==task.id))
    }
    return (
        <div>
            <div>
                <label htmlFor="input field">Enter task: </label>
                <input value={input} id='input field' onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}><span style={{ textDecoration: `${task.isCompleted ? 'line-through' : 'none'}` }}>{task.taskName}</span> <input type="checkbox" checked={task.isCompleted} onChange={() => handleTaskToggle(task)} />
                    <button onClick={()=>deleteTask(task)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}