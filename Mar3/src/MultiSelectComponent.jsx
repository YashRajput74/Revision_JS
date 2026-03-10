import { useState } from "react"

const data = [
    { id: 1, name: "Yash" },
    { id: 2, name: "Sandhya" },
    { id: 3, name: "Kritika" },
    { id: 4, name: "Saloni" }
]

export default function MultiSelectComponent() {
    const [input, setInput] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const filteredUsers = data.filter((user) => (
        user.name.toLowerCase().includes(input.toLowerCase()) && !selectedUsers.some(u=>u.id===user.id)
    ))

    return (
        <div>
            <div>
                <div>
                    {selectedUsers.map((user)=>(
                        <span key={user.id}>
                            {user.name}
                            <button onClick={()=>setSelectedUsers(selectedUsers.filter(u=>u.id!==user.id))}>
                                X
                            </button>
                        </span>
                    ))}
                </div>
                <label htmlFor="input">Enter the user: </label>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="input" placeholder="Type Here" />
                {input.length > 0 && filteredUsers.length > 0 && (
                    <ul>
                        {filteredUsers.map((user)=>(
                            <li key={user.id} onClick={()=>{
                                setSelectedUsers([...selectedUsers,user]);
                                setInput('');
                            }}>
                                {user.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    )
}