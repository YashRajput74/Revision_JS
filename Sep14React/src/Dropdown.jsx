import { categories } from "./data";

export default function Dropdown({ category }) {

    return (
        <div className="dropdown">
            <label htmlFor="categoryDropdown">Choose Category </label>
            <select name="categoryDropdown" id="categoryDropdown" onChange={(e) => category(e.target.value)}>
                {Object.entries(categories).map(([key, value], index) => (
                    <option value={key} key={index} >{key}</option>
                ))}
            </select>
        </div>
    )
}