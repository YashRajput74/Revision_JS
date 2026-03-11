import { useState } from "react";

/* 
JSON Viewer with Expand / Collapse (Like Chrome DevTools)
You will build a component that can render any JSON object in a readable tree format.
✅ Core Requirements
Input example:
{
  "name": "Kritika",
  "role": "Frontend Developer",
  "skills": ["React", "JavaScript", "CSS"],
  "projects": {
    "project1": "Dashboard",
    "project2": "Kanban Board"
  }
}
Features
1️⃣ Render JSON as a Tree
Example view:
{
  name: "Kritika"
  role: "Frontend Developer"
  skills: [...]
  projects: {...}
}
2️⃣ Expand / Collapse Nodes
User can expand:
skills
   0: React
   1: JavaScript
   2: CSS
3️⃣ Different Styling for Types
Show different colors for:
strings
numbers
booleans
arrays
objects

⚡ Advanced Requirements
Copy value button
Collapse / expand all
Show array length
Persist expand state in localStorage
Handle deeply nested JSON (1000+ nodes)
*/
const data = {
    name: "Kritika",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "CSS"],
    projects: {
        project1: "Dashboard",
        project2: "Kanban Board"
    }
};

export default function JSONViewer() {

    return (
        <div>
            <JSONNode data={data} />
        </div>
    )
}

function JSONNode({ data }) {
    const [isExpanded, setIsExpanded] = useState(true);
    const getColor = (value) => {
        if (typeof value === "string") return { color: "green" }
        if (typeof value === "number") return { color: "blue" }
        if (typeof value === "boolean") return { color: "purple" }
    }
    if (typeof data !== 'object' || data == null) {
        return <span style={getColor(data)}>{String(data)}</span>
    }
    const isArray = Array.isArray(data);
    const entries = Object.entries(data);

    return (
        <div>
            <span style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "▼" : "▶"} {isArray ? `Array[${entries.length}]` : `Object{${entries.length}}`}
            </span>
            {isExpanded && (
                entries.map(([key, value]) => (
                    <div key={key} style={{ marginLeft: "10px" }}>
                        <span style={{ color: "#a71d5d" }}>"{key}"</span>:{" "}
                        <JSONNode data={value} />
                    </div>
                ))
            )}
        </div>
    )
}