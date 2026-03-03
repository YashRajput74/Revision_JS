import FilterCondition from "./FilterCondition";

export default function FilterGroup() {
    return (
        <div>
            <select value={group.conjuction}>
                <option value="AND">AND</option>
                <option value="OR">OR</option>
            </select>
            {group.children.map(child=>(
                child.type==="condition"?(
                    <FilterCondition key={child.id} condition={child} onChange={updated=>handleConditionChange(child.id,updated)}/>
                ):null
            ))}
            <button onClick={addCondition}>+ Add Condition</button>
        </div>
    )
}