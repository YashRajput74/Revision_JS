/* export default function FilterCondition(){
    return (
        <div>
            <select value={condition.field}>
                <option value="Status">Status</option>
                <option value="Priority">Priority</option>
                <option value="Assignee">Assignee</option>
                <option value="Salary">Salary</option>
                <option value="JoiningDate">JoiningDate</option>
            </select>
            <select value={condition.operator}>
                <option value="equals">equals</option>
                <option value=">">{">"}</option>
                <option value="<">{"<"}</option>
            </select>
            <input type="text" value={condition.value} />
        </div>
    )
} */

export default function FilterCondition(){
    return (
        <div>
            {fieldMeta[condition.field]?.type==="select" && (
                <select value={condition.value} onChange={e=>onChange()}>
                    {fieldMeta[condition.field].options.map(opt=>(
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            )}
            {fieldMeta[condition.field]?.type==="text"&& (
                <input type="text" value={condition.value}  onChange={e=>onChange()}/>
            )}
            {fieldMeta[condition.field]?.type==="number"&& (
                <input type="number" value={condition.value}  onChange={e=>onChange()}/>
            )}
            {fieldMeta[condition.field]?.type==="date"&& (
                <input type="date" value={condition.value}  onChange={e=>onChange()}/>
            )}
        </div>
    )
}