import { useEffect, useState } from "react";
import { newSocket } from "./SocketSimulation";

const initialUsers = {
    yash: { cursor: 5, color: "blue" },
    kritika: { cursor: 15, color: "green" },
    abhishek: { cursor: 25, color: "purple" }
};

export default function usePresenceManager() {
    const [users, setUsers] = useState(initialUsers);

    function handleMessage(event) {

        if (event.type === "CURSOR_MOVE") {
            setUsers(prev => ({
                ...prev,
                [event.userId]: {
                    ...(prev[event.userId] || {
                        color: event.color || randomColor()
                    }),
                    cursor: event.position
                }
            }));
        }

        if (event.type === "USER_JOIN") {
            setUsers(prev => ({
                ...prev,
                [event.userId]: {
                    cursor: 0,
                    color: event.color || randomColor()
                }
            }));
        }

        if (event.type === "USER_LEAVE") {
            setUsers(prev => {
                const updated = { ...prev };
                delete updated[event.userId];
                return updated;
            });
        }
    }

    useEffect(() => {
        newSocket.subscribe(handleMessage);

        return () => {
            newSocket.unsubscribe(handleMessage);
        };
    }, []);

    return users;
}

function randomColor() {
    const colors = ["blue", "green", "red", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}