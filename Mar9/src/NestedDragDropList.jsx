import { useState } from "react"

const initialTasks = [
    {
        id: 1,
        text: "Project Alpha",
        children: [
            { id: 2, text: "Design" },
            {
                id: 3,
                text: "Development",
                children: [
                    { id: 4, text: "Frontend" },
                    {
                        id: 5,
                        text: "Backend",
                        children: [
                            { id: 6, text: "API" },
                            { id: 7, text: "Database" }
                        ]
                    }
                ]
            },
            { id: 8, text: "Testing" }
        ]
    },
    {
        id: 9,
        text: "Project Beta",
        children: [
            { id: 10, text: "Research" },
            { id: 11, text: "Implementation" },
            { id: 12, text: "Deployment" }
        ]
    },
    {
        id: 13,
        text: "Project Gamma",
        children: [
            {
                id: 14,
                text: "Phase 1",
                children: [
                    { id: 15, text: "Task A" },
                    { id: 16, text: "Task B" }
                ]
            },
            { id: 17, text: "Phase 2" }
        ]
    }
];

export default function NestedDragDrop() {
    const [tasks, setTasks] = useState(initialTasks);
    const [draggingItem, setDraggingItem] = useState(null);
    const [dropTarget, setDropTarget] = useState(null);
    return (
        <div>
            <RenderList nestedList={tasks} tasks={tasks}
                setTasks={setTasks}
                draggingItem={draggingItem}
                setDraggingItem={setDraggingItem} />
        </div>
    )
}
function moveItem(tree, draggedId, targetId) {
    let draggedItem = null;
    const removeItem = (items) => {
        return items.filter(item => {
            if (item.id === draggedId) {
                draggedItem = item;
                return false;
            }
            if (item.children) item.children = removeItem(item.children);
            return true;
        })
    }
    const newTree = removeItem(tree);
    const insertItem = (items) => {
        return items.map(item => {
            if (item.id === targetId) {
                item.children = item.children ? [...item.children, draggedItem] : [draggedItem];
            }
            else if (item.children) {
                item.children = insertItem(item.children);
            }
            return item;
        })
    }
    return insertItem(newTree);
}
function RenderList({ nestedList, tasks, setTasks, draggingItem, setDraggingItem }) {
    const handleDrop = (targetItem) => {
        if (!draggingItem || draggingItem.id === targetItem.id) return;
        const newTasks = moveItem(tasks, draggingItem.id, targetItem.id);
        setTasks(newTasks);
        setDraggingItem(null);
    }
    return (
        <ul style={{ marginLeft: "15px" }}>
            {nestedList.map(item => (
                <li key={item.id} draggable onDragStart={() => setDraggingItem(item)} onDragOver={(e) => e.preventDefault()} onDrop={() => handleDrop(item)}>{item.text}
                    {item.children && <RenderList nestedList={item.children} tasks={tasks}
                        setTasks={setTasks}
                        draggingItem={draggingItem}
                        setDraggingItem={setDraggingItem} />}
                </li>
            ))}
        </ul>
    )
}