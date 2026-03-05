import { useState } from "react"

/* 
Build: Reusable Drag‑and‑Drop List Reordering Component
Like Notion blocks / Trello list reordering.

✅ Core Requirements
Render a list of items
Drag an item to reorder the list
Show a placeholder position while dragging
Smooth visual movement
Update order after drop
Example data:
[
  { id: 1, title: "Task A" },
  { id: 2, title: "Task B" },
  { id: 3, title: "Task C" }
]
⚡ Advanced Requirements
Support keyboard reordering
(Arrow keys + modifier key)
Persist order in localStorage
Prevent unnecessary re-renders
Allow custom item rendering
Example:
<SortableList
  items={tasks}
  renderItem={(task) => <TaskCard task={task} />}
/>
*/
const listData = [
    { id: 1, title: "Task A" },
    { id: 2, title: "Task B" },
    { id: 3, title: "Task C" },
    { id: 4, title: "Task D" },
    { id: 5, title: "Task E" },
    { id: 6, title: "Task F" },
    { id: 7, title: "Task G" },
    { id: 8, title: "Task H" },
    { id: 9, title: "Task I" },
    { id: 10, title: "Task J" },
    { id: 11, title: "Task K" },
    { id: 12, title: "Task L" },
]

export default function ReusableDragDropList() {
    const [list, setList] = useState(listData);
    const [selectedItem, setSelectedItem] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleDragStart = (ID) => {
        setSelectedItem(ID);
    }
    const handleDragOver = (ID) => {
        setHoverIndex(ID);
    }
    const handleDrop = () => {
        const newList = [...list];
        const draggedItem = newList.splice(selectedItem, 1)[0];
        newList.splice(hoverIndex, 0, draggedItem);
        setList(newList);
        setSelectedItem(null);
        setHoverIndex(null);
    }

    return (
        <div>
            <ul>
                {list.map((item, index) => {
                    return <>
                        {
                            hoverIndex === index && (
                                <div
                                    style={{
                                        height: "4px",
                                        background: "#d6ebff",
                                        border: "2px dashed #3399ff",
                                        marginBottom: "6px"
                                    }}
                                />
                            )
                        }
                        <li key={item.id} onDragStart={() => handleDragStart(index)} onDragOver={() => handleDragOver(index)} onDragEnd={handleDrop} style={{ cursor: "pointer" }}>{item.title}</li>
                    </>
                })}
            </ul>
        </div>
    )
}