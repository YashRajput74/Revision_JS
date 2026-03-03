import { useEffect, useState } from "react"
import Cursor from "./Cursor";

export default function Canvas({ initialData }) {
    const [users, setUsers] = useState(initialData);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setUsers(prev => {
                const updated = { ...prev };
                Object.keys(prev).forEach((id) => {
                    updated[id] = {
                        ...updated[id],
                        x: updated[id].x + Math.random() * 10 - 5,
                        y: updated[id].y + Math.random() * 10 - 5,
                    }
                })
                return updated;
            })
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            background: "#f5f5f5",
            overflow: "hidden"
        }}>
            {Object.values(users).map(user => (
                <Cursor key={user.id} user={user} />
            ))}
        </div>
    )
}