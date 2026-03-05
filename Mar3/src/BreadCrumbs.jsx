import { useState } from "react"

/* 
Build: Advanced Breadcrumb Navigation with Dynamic Routing
Like what you see in Google Drive / VS Code Explorer.

✅ Core Requirements
Render breadcrumb from a given path:
Example:
Home / Projects / React / Kanban Board
Input example:
"/projects/react/kanban-board"
Features
Each breadcrumb item clickable
Clicking navigates to that level
Highlight current page
Proper separator (/ or >)

⚡ Advanced Requirements
Support dynamic labels
Example:
/users/123/profile
Should display:
Home / Users / John Doe / Profile
(Mock API for resolving 123 → John Doe)

🚀 UX Expectations
Truncate long breadcrumb paths
Tooltip on hover for full path
Responsive behavior (collapse middle items on small screen)
Example:
Home / ... / React / Kanban
*/
const breadcrumbData = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "React", path: "/projects/react" },
    { label: "Kanban Board", path: "/projects/react/kanban-board" }
]

export default function BreadCrumbs() {
    const [currentPath, setCurrentPath] = useState('/projects/react/kanban-board');
    const visibleBreadCrumbs=breadcrumbData.filter((item)=>item.path==='/'||currentPath.startsWith(item.path))
    return (
        <div className="breadcrumbs">

            {visibleBreadCrumbs.map((item, index) => (
                <span key={item.path}>
                    <a href={item.path} className={item.path === currentPath? "current" : ""} onClick={(e)=>{
                        e.preventDefault();
                        setCurrentPath(item.path);
                    }}>{item.label}</a>
                    {index < visibleBreadCrumbs.length - 1 && <span> / </span>}
                </span>
            ))}
        </div>
    )
}