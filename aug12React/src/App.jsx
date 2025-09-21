/* 
Create a Multi-Select Dropdown Component in React without using any third-party UI libraries.

Requirements:

The dropdown should display a list of options passed as props.

Users should be able to select multiple items.

The selected items should be shown above the dropdown as tags/chips.

Each tag should have a small "x" button to remove it from the selection.

The parent component should be able to access the currently selected values.

The component should close the dropdown when clicked out
Expected Behavior:

Clicking an option adds it to the selected list (if not already selected).

Clicking the "x" on a tag removes it from the selected list.

Clicking outside the dropdown closes it.
*/

import Dropdown from "./Dropdown";
import Education from "./Education";

const skills = {
    label: "Skills",
    renderType: "unordered",//ordered
    items: [
        {
            label: "Languages",
            renderType: "bars",
            items: [
                { label: "JavaScript", value: 95 },
                { label: "Java", value: 75 },
                { label: "HTML5", value: 90 },
                { label: "CSS3", value: 85 },
            ],
        },
        {
            label: "Frontend",
            renderType: "unordered",
            items: [
                {
                    label: "React.js",
                    renderType: "ordered",
                    items: ["useState", "useEffect", "useHooks"],
                },
                "Responsive Web Design",
                "SPA Architecture",
                "API Integration",
                "DOM Manipulation",
            ],
        },
        {
            label: "Tools",
            renderType: "unordered",
            items: ["Git & GitHub", "npm", "Chrome DevTools", "VS Code"],
        },
        {
            label: "Concepts",
            renderType: "unordered",
            items: [
                "Object-Oriented Programming",
                "State Management (React Hooks)",
                "Component Reusability",
                "Async Programming",
            ],
        },
        /* 
        {
            label: "Concepts",
            renderType: "chart",
            items: [
                { label: "Object-Oriented Programming", value: 25 },
                { label: "State Management (React Hooks)", value: 30 },
                { label: "Component Reusability", value: 20 },
                { label: "Async Programming", value: 25 },
            ],
        }
        */
    ],
};

export default function App() {
    const options = ["JS","HTML","CSS","React"];
    return (
        <Education />
    )
}