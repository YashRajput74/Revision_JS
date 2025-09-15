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

export default function App() {
    const options = ["JS","HTML","CSS","React"];
    return (
        <Education />
    )
}