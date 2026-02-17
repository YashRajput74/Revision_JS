import { useEffect, useState } from "react";

const users = ["Rahul", "Amit", "Neha", "Simran", "Karan", "Pooja"];

export default function DebounceSearch() {
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearch(input);
            setIsLoading(false);
        }, 500)
        return () => clearTimeout(timeout);
    }, [input]);
    const filteredUsers = users.filter((user) => user.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <label htmlFor="users">Select Users: </label>
            <input value={input} onChange={(e) => { setInput(e.target.value); setIsLoading(true) }} id="users" />
            {isLoading ? <div>Searching...</div> : <ul>
                {filteredUsers.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>}

        </div>
    )
}