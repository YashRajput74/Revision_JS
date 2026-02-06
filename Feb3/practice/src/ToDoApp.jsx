/* 
Create a single Todo item component that can be added to a list. Each item should support:

Displaying text
Editing text
Marking as completed
*/

import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const toDoData = [
    { id: 1, text: 'Build a todo app', completed: false },
    { id: 2, text: 'Deploy a todo app', completed: true }
]

export default function ToDoApp() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [tasks, setTasks] = useState(toDoData);
    const toggleTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }
    return (
        <div>
            <button onClick={toggleTheme} style={{color: `${theme==='light'?"red":"blue"}`}}>Theme</button>
            <ul>
                {tasks.map((task) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</li>
                            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}