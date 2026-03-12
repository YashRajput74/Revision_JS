import React from "react";
import useQuery from "./useQuery";

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

export default function Users() {
    const { data, loading, error, refetch } = useQuery(
        ["users"],
        fetchUsers,
        { staleTime: 5000 }
    );

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error loading users</p>;

    return (
        <div>
            <h2>Users</h2>

            <button onClick={refetch}>Refetch</button>

            <ul>
                {data?.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}