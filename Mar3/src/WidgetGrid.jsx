/* 
 Dynamic Dashboard Layout Builder (Like Notion / Grafana Widgets)
This is high-quality product-level question.

✅ Core Requirements
Grid-based layout
Add widgets dynamically (Chart, Table, Stats Card, etc.)
Drag to reposition widgets
Resize widgets (width + height)
Persist layout in localStorage

⚡ Advanced Requirements
Responsive grid (different layout for mobile)
Prevent overlapping while dragging
Snap to grid system
Minimum & maximum size constraints
Maintain widget internal state after reposition

🚀 Edge Cases
Fast drag + resize
Window resize handling
Deleting widget
Adding many widgets (20+)
Avoid layout reflow issues

🏗 Architecture Expectations
Normalize layout state
Separate:
Grid engine logic
Drag/resize logic
Widget registry
Avoid unnecessary full dashboard re-renders
Efficient collision detection
*/

import { useState } from "react"
import { initialWidgetData } from './data';
import './WidgetGrid.css'
let id = 5;
export default function WidgetGrid() {
    const [widgetsData, setWidgetsData] = useState(initialWidgetData);
    const [inputData, setInputData] = useState('');
    const [widgetType, setWidgetType] = useState('table');

    const handleDrag = (e, widgetId) => {
        e.preventDefault();
        let startX = e.clientX;
        let startY = e.clientY;
        function onMove(ev) {
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            if (dx !== 0 || dy !== 0) {
                setWidgetsData((prev) => ({
                    ...prev,
                    [widgetId]: {
                        ...prev[widgetId],
                        x: prev[widgetId].x + dx,
                        y: prev[widgetId].y + dy
                    }
                }))
            }
            startX = ev.clientX;
            startY = ev.clientY;
        }
        function onUp() {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        }
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    }

    const handleClick = () => {
        const newId = String(id++);
        const newWidget = {
            id: newId,
            label: inputData,
            widgetType: widgetType,
            x: 0,
            y: 0,
            w: 100,
            h: 100
        }
        setWidgetsData((prev) => ({
            ...prev,
            [newId]: newWidget
        }));
    }

    return (
        <>
            <div style={{ width: "100vw", height: "10vh" }}>
                <label htmlFor="widgetName">Widget Label: </label>
                <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <select id="widgetType" value={widgetType} onChange={(e) => setWidgetType(e.target.value)}>
                    <option value="table">Table</option>
                    <option value="chart">Chart</option>
                    <option value="card">Card</option>
                </select>
                <button onClick={handleClick}>
                    Add
                </button>
            </div>
            <div className="widget-grid" style={{ width: "100vw", height: "90vh", position: "relative" }}>
                {Object.values(widgetsData).map((widget) => (
                    <div key={widget.id} style={{ position: "absolute", width: widget.w, height: widget.h, transform: `translate(${widget.x}px,${widget.y}px)`, border: "1px solid black" }} onMouseDown={(e) => handleDrag(e, widget.id)}>
                        <p>{widget.label}</p>
                        <p style={{ color: "red" }}>{widget.widgetType}</p>
                    </div>
                ))}
            </div>
        </>
    )
}