/* 
Machine Coding Challenge
Build: Advanced Mention / Tagging Input (Like Twitter / Slack @mentions)
This is a very common real interview component.

✅ Core Requirements
Textarea input
Typing @ opens suggestion list
Filter users as you type
Keyboard navigation (↑ ↓ Enter Esc)
Insert selected user into text
Highlight mentions visually

⚡ Advanced Requirements
Support multiple mentions in same text
Maintain correct cursor position after insertion
Handle editing inside mention
Prevent breaking mention format
Persist text in localStorage

🚀 Edge Cases
Fast typing
Deleting partial mention
Pasting text with mentions
Cursor in middle of sentence
Long text (performance)

🏗 Architecture Expectations
Separate:
Mention detection logic
Suggestion dropdown logic
Text parsing / rendering logic
Avoid re-rendering whole text on every keystroke
Clean state structure
*/

import { useState } from "react"
const users=[
    {id:1,name:"Sandhya"},
    {id:2,name:"Saloni"},
    {id:3,name:"Sriman"},
    {id:4,name:"Saraswati"},
]
export default function TaggingInput() {
    const [inputData, setInputData] = useState('');
    const [isMentioning, setIsMentioning] = useState(false);
    const [mentionQuery, setMentionQuery] = useState('');
    const handleChange = (e) => {
        const text = e.target.value;
        const cursorPos=e.target.selectionStart;
        const beforeCursor = text.slice(0, cursorPos);
        const atIndex = beforeCursor.lastIndexOf("@");
        if (atIndex >= 0) {
            const query = beforeCursor.slice(atIndex + 1);
            setMentionQuery(query);
            setIsMentioning(true);
        }
        else {
            setIsMentioning(false);
            setMentionQuery('');
        }
        setInputData(text);
    }
    const filteredUsers=users.filter(u=>
        u.name.toLowerCase().startsWith(mentionQuery.toLowerCase())
    )
    return (
        <div>
            <label htmlFor="inputTag">Mention the tags: </label>
            <textarea value={inputData} onChange={(e) => handleChange(e)} id="inputTag" rows={4} cols={50} />
            {isMentioning && filteredUsers.length>0 && (
                <ul className="suggestion-list">
                    {filteredUsers.map(user=>(
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}